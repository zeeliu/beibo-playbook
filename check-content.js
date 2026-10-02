// Runs on every Vercel deploy. If public/content.js has a typo or a broken entry,
// the deploy fails and the last working version of the site stays live.
// 每次部署时运行：content.js 有错误时部署失败，线上保持上一个正常版本。
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const file = path.join(__dirname, "public", "content.js");
const src = fs.readFileSync(file, "utf8");
const sandbox = { window: {} };

try {
  vm.runInNewContext(src, sandbox, { filename: "public/content.js" });
} catch (e) {
  const where = (e.stack || "").split("\n").find(l => l.includes("content.js")) || "";
  console.error("\n✖ public/content.js has a typo: " + e.message + "\n  " + where.trim());
  console.error("  Usually a missing comma between entries, or a missing quote or bracket.\n");
  process.exit(1);
}

const P = sandbox.window.PLAYBOOK;
const problems = [];
if (!P || !Array.isArray(P.sections)) problems.push("window.PLAYBOOK.sections is missing");
else {
  const ids = new Set();
  P.sections.forEach((s, si) => {
    if (!s.id || !s.title || !Array.isArray(s.topics)) problems.push(`section #${si + 1} needs id, title and topics`);
    (s.topics || []).forEach((t, ti) => {
      const where = `${s.title} › ${t.title || "topic #" + (ti + 1)}`;
      if (!t.id || !t.title || !Array.isArray(t.items)) problems.push(`${where}: topic needs id, title and items`);
      if (ids.has(t.id)) problems.push(`${where}: topic id "${t.id}" is used twice`);
      ids.add(t.id);
      (t.items || []).forEach((it, ii) => {
        const label = `${where} › ${it.q || "entry #" + (ii + 1)}`;
        if (!it.q) problems.push(`${label}: missing "q"`);
        if (it.light && !["g", "y", "r"].includes(it.light)) problems.push(`${label}: light must be "g", "y" or "r"`);
        if (!(it.say || it.say_zh || it.tip || it.info || it.info_zh || it.copy)) problems.push(`${label}: needs say, tip, info or copy`);
        (it.img || []).forEach(m => { if (!m.src || !fs.existsSync(path.join(__dirname, "public", m.src))) problems.push(`${label}: image not found: public/${m.src}`); });
        (it.links || []).forEach(l => { if (!/^https?:/.test(l.href || "") && !fs.existsSync(path.join(__dirname, "public", l.href || ""))) problems.push(`${label}: file not found: public/${l.href}`); });
        ["en", "zh", "note", "qz"].forEach(k => { if (k in it) problems.push(`${label}: unknown field "${k}" (did you mean say / say_zh / tip / q_zh?)`); });
      });
    });
  });
}

if (problems.length) {
  console.error("\n✖ public/content.js has " + problems.length + " problem(s):");
  problems.forEach(p => console.error("  - " + p));
  console.error("");
  process.exit(1);
}
const count = P.sections.reduce((a, s) => a + s.topics.reduce((b, t) => b + t.items.length, 0), 0);
console.log(`✔ content.js OK: ${P.sections.length} sections, ${count} entries`);
