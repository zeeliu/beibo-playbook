/* =====================================================================
   BEIBO SALES PLAYBOOK · ALL CONTENT LIVES IN THIS FILE
   贝博销售手册 · 所有内容都在这个文件里

   HOW TO ADD AN ENTRY / 如何新增一条
   1. Find the topic (search for its title below).
   2. Copy one whole entry, from {  to  }, and paste it after another entry.
   3. Edit the text. Keep the comma between entries.
   If you make a typo, the site will not update. The last working version
   stays live, and Vercel shows the error. 改错了网站不会更新，旧版本保持在线。

   FIELDS / 字段
   q, q_zh        question or title                       问题/标题
   light          "g" = say it                            可以直接说
                  "y" = say exactly this, no more         照原话说，不要多说
                  "r" = don't answer, ask Zee             不回答，问 Zee
   keys           extra search words, any language        额外搜索词
   say, say_zh    what David tells the client.            对客户说的话
                  This is the ONLY text with a Copy button. 只有这部分可以复制
                  Red entries without "say" automatically use the
                  "let me confirm" line.                  红灯条目没写 say 时自动用“我确认后回复”
   tip            what David should do. Never sent to the client.  给 David 的提示，不发给客户
   info, info_zh  reference notes (buyers, products, markets)    参考内容
   copy           a template David copies for himself     David 自用的模板（可复制）
   img            pictures: [{ src: "img/file.jpg", cap: "caption" }]   图片（放在 public/img/）
   links          downloads: [{ href: "files/file.pdf", label: "…" }]   下载链接（放在 public/files/）

   TEXT FORMAT / 文本格式
   Start a line with "- " for a bullet. **double stars** = bold.
   Use \n for a new line, \n\n for a new paragraph.
   ===================================================================== */

window.PLAYBOOK = {
  updated: "2026-10-01",
  owner: "Zee Liu",
  whatsapp: "12179798340",
  holding: {
    say: "Good question. Let me confirm with our engineering team and come back to you today.",
    say_zh: "好问题，我跟工程团队确认后今天回复您。"
  },

  sections: [

  /* ================================================================ */
  { id: "answers", title: "Quick answers", zh: "快速问答", topics: [

    { id: "company", title: "Company", zh: "公司", items: [
      { q: "Who are you? Tell me about Beibo", q_zh: "你们是谁？介绍一下贝博", light: "g",
        keys: "about intro company background 介绍 公司",
        say: "We're Zhengzhou Beibo Electronics. We've built grain-storage monitoring and control systems since 1997, and we're a listed company (NEEQ 834792) with 7,000+ installations across China. We don't build silos. We supply the systems inside them.",
        say_zh: "我们是郑州贝博电子，1997 年起做粮储监测与控制，新三板挂牌（834792），国内 7,000+ 套安装。我们不建仓体，做仓里的系统。" },
      { q: "Are you a listed company?", q_zh: "你们是上市公司吗？", light: "g",
        keys: "listed stock NEEQ public 上市 挂牌 新三板",
        say: "Yes. We're listed on China's NEEQ, stock code 834792.",
        say_zh: "是的，新三板挂牌，股票代码 834792。" },
      { q: "Who are your customers? References?", q_zh: "客户有哪些？有案例吗？", light: "g",
        keys: "customers references case clients 客户 案例",
        say: "In China we work with Sinograin (the national grain reserve) depots, provincial and local reserves, and companies like COFCO and Wilmar, across 15+ provinces. We're an approved supplier under Sinograin's centralized procurement.",
        say_zh: "国内客户包括中储粮直属库、省级和市县储备库，以及中粮、益海嘉里等企业，覆盖 15 个以上省份。我们是中储粮集中采购入围供应商。",
        tip: "Specific site names, contacts, photos or overseas references: ask Zee. 具体库点、联系人、照片或海外案例问 Zee。" },
      { q: "Do you have overseas installations?", q_zh: "海外有项目吗？", light: "r",
        keys: "overseas international abroad export 海外 国外 出口",
        say: "Our installed base is in China, and we're now working with partners on our first international projects. Let me get you the details.",
        say_zh: "我们的安装主要在国内，目前正在与合作伙伴推进首批海外项目，细节我确认后发您。",
        tip: "Then ask Zee before saying anything more. 之后先问 Zee，不要多说。" },
      { q: "Certifications? ISO? CE?", q_zh: "有什么认证？", light: "y",
        keys: "certificate certification ISO CE CCC ATEX IECEx UL 认证 资质",
        say: "We hold certified quality, environmental and occupational health & safety management systems, and we're a National High-Tech Enterprise.",
        say_zh: "我们有质量、环境、职业健康安全管理体系认证，是国家高新技术企业。",
        tip: "CE, ATEX, IECEx, UL, or \"is product X certified?\": never say yes. Use the holding line and ask Zee. CE/ATEX/IECEx/UL 或某产品是否有认证，绝不先说有，问 Zee。" },
      { q: "Do you have patents?", q_zh: "有专利吗？", light: "g",
        keys: "patent IP intellectual property 专利 知识产权",
        say: "Yes. We hold invention patents covering multi-point sampling, wireless sensing, phosphine tail-gas degradation and an integrated multi-parameter detection rod, plus utility models and software copyrights.",
        say_zh: "有。发明专利涵盖多点取样、无线传感、磷化氢尾气降解、多参数一体检测杆，另有实用新型和软件著作权。",
        tip: "Don't give exact counts. 不报具体数量。" }
    ]},

    { id: "fit", title: "Fit & scope", zh: "适用范围", items: [
      { q: "What do you sell?", q_zh: "你们卖什么？", light: "g",
        keys: "products solutions what do you do offer 产品 方案",
        say: "Five systems that work together: grain condition monitoring, temperature control (aeration and grain cooling), grain protection (fumigation and nitrogen controlled atmosphere), inbound/outbound management, and one platform over the whole depot. Each system is configured for your site.",
        say_zh: "五大系统协同工作：粮情监测、控温（通风与谷物冷却）、粮食保护（熏蒸与充氮气调）、出入库管理，以及统管全库的平台。每套系统按现场配置。" },
      { q: "Which storage types does it work with?", q_zh: "适用哪些仓型？", light: "g",
        keys: "silo warehouse flat steel concrete bin storage type 仓型 筒仓 平房仓 浅圆仓 立筒仓",
        say: "Flat warehouses, shallow circular silos and vertical silos, both steel and concrete. We configure the system to the structure.",
        say_zh: "平房仓、浅圆仓、立筒仓，钢板仓和混凝土仓都可以，按仓型配置。" },
      { q: "Silo bags? Small farm bins?", q_zh: "筒仓袋？小农仓？", light: "g",
        keys: "silo bag bags small farm 袋 小型 农户",
        say: "Our systems are designed for fixed silos and warehouses, typically 5,000 tonnes or more per site, so for silo bags we're honestly not the right fit.",
        say_zh: "我们的系统针对固定筒仓和平房仓，通常单库点 5,000 吨以上，筒仓袋不太适合。",
        tip: "Keep the contact and deprioritize. 保留联系，降低优先级。" },
      { q: "Which grains? Soybean? Rice?", q_zh: "适用哪些粮种？", light: "y",
        keys: "grain type wheat maize corn rice paddy soybean soy oilseed 粮种 小麦 玉米 稻谷 大豆",
        say: "Wheat, maize and paddy are our core. They're the main reserve grains in China.",
        say_zh: "核心是小麦、玉米、稻谷，也是国内储备的主要粮种。",
        tip: "Soybean, oilseeds, coffee, cocoa, pulses: use the holding line and ask Zee. 大豆、油籽、咖啡、可可、豆类问 Zee。" },
      { q: "Can you retrofit an existing silo?", q_zh: "老仓能改造吗？", light: "g",
        keys: "retrofit upgrade existing old modernize 改造 升级 老仓",
        say: "Yes. Monitoring is often the first step in an upgrade, and our internal air-circulation system uses the existing floor aeration ducts.",
        say_zh: "可以。监测通常是改造的第一步，内环流系统可以利用现有地笼。" },
      { q: "Can you work with our existing system or another brand?", q_zh: "能和现有系统或其他品牌对接吗？", light: "r",
        keys: "integrate integration PLC SCADA compatible existing system 对接 兼容",
        tip: "Ask which brand and model they have, and what they want connected. Then send it to Zee. 问清品牌、型号、要对接什么，然后交给 Zee。" }
    ]},

    { id: "monitoring", title: "Monitoring", zh: "粮情监测", items: [
      { q: "How does temperature monitoring work?", q_zh: "测温怎么工作？", light: "g",
        img: [{ src: "img/monitoring-system.jpg", cap: "How monitoring connects: cables in the grain → controller → workstation, phone, remote PC" }],
        keys: "temperature cable sensor how it works 测温 电缆 传感器 温度",
        say: "Cables with digital sensors hang through the grain. They report to a controller at each store, which sends the data to your control room and to PC, tablet or phone.",
        say_zh: "带数字传感器的测温电缆垂挂在粮堆中，接到每个仓的测控分机，再把数据传到中控室和电脑、平板、手机。" },
      { q: "Range and accuracy?", q_zh: "测量范围和精度？", light: "y",
        keys: "accuracy range precision spec specification humidity 精度 范围 误差 湿度 参数",
        say: "Temperature: −40 to 60 °C, accurate to ±0.5 °C (±0.2 °C between −30 and 50 °C). Humidity: 10–99 % RH, accurate to ±3 % RH.",
        say_zh: "温度 −40～60 ℃，误差 ±0.5 ℃（−30～50 ℃ 时 ±0.2 ℃）；湿度 10～99 %RH，误差 ±3 %RH。" },
      { q: "Do you measure grain moisture?", q_zh: "能测粮食水分吗？", light: "r",
        keys: "moisture water content 水分 含水",
        tip: "The catalog mentions a temperature & moisture cable, but the method and accuracy aren't approved. Ask Zee. 目录提到水分电缆，但方法和精度未确认，问 Zee。" },
      { q: "How many sensors per controller?", q_zh: "一台分机带多少传感器？", light: "y",
        keys: "capacity controller how many sensors collector 容量 分机 采集器",
        say: "Each controller handles up to 512 temperature sensors and 6 humidity sensors. Each collector handles 60 temperature sensors.",
        say_zh: "每台分机最多 512 个温度传感器、6 个湿度传感器；每个采集器 60 个温度传感器。" },
      { q: "Wired or wireless?", q_zh: "有线还是无线？", light: "g",
        img: [{ src: "img/controller.jpg", cap: "Monitoring controller (stainless steel)" }, { src: "img/solar-wireless-controller.jpg", cap: "Solar-powered wireless controller" }],
        keys: "wireless wired communication RS485 ethernet 4G LoRa network 通讯 无线 有线",
        say: "Both. Wired RS-485 or Ethernet, or wireless. We choose what suits the site.",
        say_zh: "都可以：有线 485、以太网或无线，按现场选。",
        tip: "Specific wireless technology (4G, LoRa…) or range: ask Zee. 具体无线制式和距离问 Zee。" },
      { q: "Are the cables durable? Food-safe?", q_zh: "电缆耐用吗？食品级吗？", light: "y",
        img: [{ src: "img/temperature-cable.jpg", cap: "Temperature cable" }],
        keys: "cable durable strength food grade safe HDPE IP68 电缆 食品级 耐用",
        say: "The cables have an HDPE sheath with a food-grade test report, IP68 protection and 300 kg tensile strength. The shallow-silo version has a replaceable core, so repairs are cheap.",
        say_zh: "电缆为 HDPE 护套，有食品级检测报告，IP68，抗拉 300 kg；浅圆仓电缆可换芯，维修成本低。" },
      { q: "Is it explosion-proof?", q_zh: "防爆吗？", light: "y",
        keys: "explosion explosive dust zone 21 ATEX hazardous 防爆 粉尘",
        say: "Yes. We have an explosion-proof controller for Zone 21 dust atmospheres, the cables have explosion-proof test reports, and the collector is tested to work in 2,000 ml/m³ phosphine.",
        say_zh: "有。防爆分机适用于 21 区粉尘环境，测温电缆有防爆检测报告，采集器可在 2000 ml/m³ 磷化氢中正常运行。",
        tip: "If they ask about ATEX or IECEx: use the holding line. Our certificates are Chinese, not EU. 问 ATEX/IECEx 时用确认话术，我们的是国内认证。" },
      { q: "Do you detect insects?", q_zh: "能测虫吗？", light: "g",
        keys: "insects pest bugs weevil trap infestation 害虫 虫 诱捕",
        say: "Yes. Pest traps and a sampling system detect insects early, together with gas, temperature and humidity.",
        say_zh: "能。诱捕器加取样系统可以早期发现害虫，同时监测气体和温湿度。",
        tip: "Don't promise \"AI pest identification\" until Zee confirms it's live. AI 识虫在确认前不承诺。" },
      { q: "Which gases do you measure?", q_zh: "测哪些气体？", light: "y",
        keys: "gas CO2 carbon dioxide phosphine PH3 oxygen O2 磷化氢 二氧化碳 氧气 气体",
        say: "Phosphine 0–2,000 ppm (±3 % F.S.), oxygen 0–30 % (±1 % vol.), and CO₂ 0–50,000 ppm (±5 % F.S.).",
        say_zh: "磷化氢 0–2000 ppm（±3 % F.S.），氧气 0–30 %（±1 %），二氧化碳 0–50000 ppm（±5 % F.S.）。" },
      { q: "What does the inspection robot do?", q_zh: "巡检机器人能做什么？", light: "g",
        keys: "robot inspection surface 机器人 巡检",
        say: "It moves across the grain surface, measuring temperature, detecting gas, taking samples and streaming video, so your staff don't have to enter the bin.",
        say_zh: "它在粮面行走，测温、检测气体、取样、视频监控，人员不必进仓。" }
    ]},

    { id: "cooling", title: "Aeration & cooling", zh: "通风与控温", items: [
      { q: "What is aeration control?", q_zh: "智能通风是什么？", light: "g",
        keys: "aeration ventilation fan airflow 通风 风机",
        say: "It automates aeration. Weather sensing coordinates the fans, motorized windows, dampers and rain caps, so the system aerates when outside conditions are right.",
        say_zh: "让通风自动化：根据气象数据联动风机、电动窗、风阀和防雨帽，在外部条件合适时通风。" },
      { q: "What about rain and condensation?", q_zh: "下雨怎么办？结露？", light: "g",
        keys: "rain snow condensation rain cap weather 防雨 结露 下雨",
        say: "Electric rain caps close automatically in rain or snow, and they're insulated to prevent condensation at the vent.",
        say_zh: "电动防雨帽雨雪天自动关闭，保温设计防止通风口结露。" },
      { q: "It's hot here. Can you cool the grain?", q_zh: "天气热能降温吗？", light: "g",
        keys: "cooling hot tropical chiller refrigeration temperature 冷却 降温 空调 炎热",
        say: "Yes, two ways. Our internal air-circulation system moves cool air from the bottom of the grain to the top of the store without letting outside air in. Where that isn't enough, dedicated grain-cooling units actively cool the grain.",
        say_zh: "可以，两种方式：内环流把粮堆底部的冷空气循环到仓内上部，不与外界空气接触；不够时用谷物冷却机主动降温。",
        tip: "Cooling capacity, power use, running cost: ask Zee. 制冷量、功耗、运行成本问 Zee。" }
    ]},

    { id: "fumigation", title: "Fumigation & CA", zh: "熏蒸与气调", items: [
      { q: "How is your fumigation different?", q_zh: "你们的熏蒸有什么不同？", light: "g",
        img: [{ src: "img/fumigation-system.jpg", cap: "Recirculation fumigation in a silo and a flat warehouse" }],
        keys: "fumigation phosphine recirculation fumigant 熏蒸 环流",
        say: "Our recirculation fumigation moves the fumigant through the whole grain mass in a loop, so it reaches everywhere evenly. The system includes a fumigant generator, a timer controller, gas detection and a phosphine degradation unit, for both flat warehouses and silos.",
        say_zh: "环流熏蒸让药剂在粮堆中循环流动、分布均匀。系统包括发生器、定时控制、气体检测和磷化氢降解装置，平房仓和筒仓都适用。",
        tip: "Don't say \"UV residue decomposition\" until Zee confirms the term. 紫外残留分解先不说。" },
      { q: "Can we avoid chemicals?", q_zh: "能不用药吗？", light: "g",
        keys: "chemical free nitrogen controlled atmosphere CA organic residue 氮气 气调 无药",
        say: "Yes. Nitrogen controlled-atmosphere storage manages the air inside the store using a control cabinet and a mobile nitrogen generator.",
        say_zh: "可以，用充氮气调：气调控制柜加移动式制氮机组调节仓内气体环境。",
        tip: "Say \"controlled atmosphere\", never \"MA\". Nitrogen purity, output or kill time: ask Zee. 说 controlled atmosphere，不说 MA；氮气纯度、产量、杀虫时间问 Zee。" }
    ]},

    { id: "platform", title: "Platform & software", zh: "平台与软件", items: [
      { q: "What does the platform do?", q_zh: "平台能做什么？", light: "g",
        keys: "platform software dashboard system 平台 软件",
        say: "It gives you one view of the whole depot: grain condition per silo, equipment status, inbound/outbound records, messages and staff, on desktop and mobile. Features are configured per project.",
        say_zh: "一个界面看全库：每仓粮情、设备状态、出入库记录、消息与人员，电脑和手机都能用，功能按项目配置。" },
      { q: "Is it in English? Other languages?", q_zh: "有英文吗？其他语言？", light: "y",
        keys: "English language French Portuguese Arabic translation 英文 语言",
        say: "Yes, we have English interface views.",
        say_zh: "有英文界面。",
        tip: "Whether the live software is fully in English, French, Portuguese or Arabic: ask Zee. 正式软件是否完整支持英/法/葡/阿语问 Zee。" },
      { q: "Cloud or on-site server? Data security?", q_zh: "云端还是本地？数据安全？", light: "r",
        keys: "cloud server hosting data security internet offline 云 服务器 数据安全",
        tip: "Ask Zee. 问 Zee。" },
      { q: "Can I check it from my phone?", q_zh: "手机能远程看吗？", light: "g",
        keys: "remote mobile phone app 远程 手机",
        say: "Yes, you can access it remotely from a PC, tablet or phone.",
        say_zh: "可以，电脑、平板、手机都能远程访问。" }
    ]},

    { id: "safety", title: "Safety", zh: "安全", items: [
      { q: "Is it safe for workers entering bins?", q_zh: "人员进仓安全吗？", light: "g",
        keys: "safety worker entry access confined space gas 安全 进仓 门禁",
        say: "Our smart access control checks who enters (face, fingerprint or password), monitors oxygen and phosphine at the door with alarms, and counts people in and out. The inspection robot also reduces the need to go in at all.",
        say_zh: "智能查粮门禁验证身份（人脸/指纹/密码），在门口监测氧气和磷化氢并报警，统计进出人数；巡检机器人还能减少进仓需求。" },
      { q: "How do people get into a shallow silo?", q_zh: "浅圆仓怎么进人？", light: "g",
        keys: "manhole platform lift entry 人孔 升降平台",
        say: "With an electric manhole and lifting platform made of 304 stainless steel. It's airtight and protects against anyone getting trapped.",
        say_zh: "用电动人孔加升降平台，304 不锈钢，气密，防止人员被困。" }
    ]},

    { id: "commercial", title: "Commercial", zh: "商务", items: [
      { q: "How much does it cost?", q_zh: "多少钱？", light: "r",
        keys: "price cost quote quotation how much budget 价格 报价 多少钱",
        say: "Every system is configured to the site, so the price depends on your storage type, size and the modules you need. If you share those details, our team will prepare a proposal for you.",
        say_zh: "每套系统按现场配置，价格取决于仓型、规模和所需模块。您提供这些信息后，我们团队为您出方案。",
        tip: "Collect: storage type, number and size of stores, grain, location, modules of interest. Send to Zee. Never give a number. 收集仓型、数量规模、粮种、地点、感兴趣的模块交给 Zee，绝不报数字。" },
      { q: "What's the lead time?", q_zh: "交期多久？", light: "r",
        keys: "lead time delivery when shipping 交期 发货 多久",
        tip: "Ask Zee. 问 Zee。" },
      { q: "Payment terms? Incoterms? CIF?", q_zh: "付款方式？贸易条款？", light: "r",
        keys: "payment terms LC TT deposit incoterms CIF FOB EXW 付款 信用证 定金",
        tip: "Ask Zee. Never agree to any terms in chat. 问 Zee，绝不在聊天里答应任何条款。" },
      { q: "Can I be your agent or distributor?", q_zh: "能做你们的代理吗？", light: "y",
        keys: "agent distributor partner dealer exclusive reseller 代理 经销 独家",
        say: "We're building our partner network and looking for partners who can install and support systems locally. Could you tell me about your company, your current customers and your technical team?",
        say_zh: "我们正在建立合作伙伴网络，希望找能在当地安装和服务的伙伴。能介绍一下贵公司、现有客户和技术团队吗？",
        tip: "Never promise exclusivity or commission. 绝不承诺独家或佣金。" },
      { q: "Can I get a catalog?", q_zh: "能发目录吗？", light: "g",
        keys: "catalog catalogue brochure PDF 目录 宣传册",
        say: "Of course. Here's our 2026 product catalog.",
        say_zh: "当然，这是我们的 2026 产品目录。",
        tip: "Download the catalog below and attach it in WhatsApp or email. 下载目录后在 WhatsApp 或邮件里发送。",
        links: [{ href: "files/Beibo_Product_Catalog_2026.pdf", label: "Download catalog (PDF, 11 MB)" }] },
      { q: "Samples, demo or a pilot?", q_zh: "有样品、演示或试点吗？", light: "r",
        keys: "sample demo trial pilot test 样品 演示 试点",
        tip: "Ask Zee. A pilot site is a big decision. 问 Zee，试点是重大决定。" }
    ]},

    { id: "service", title: "Service & install", zh: "服务与安装", items: [
      { q: "Who installs it?", q_zh: "谁来安装？", light: "r",
        keys: "install installation engineer on site technician 安装 工程师",
        say: "Installation is planned per project, usually together with a local partner. Who did the electrical work on your site?",
        say_zh: "安装按项目规划，通常与当地伙伴合作。您现场的电气是谁做的？",
        tip: "Then ask Zee. 然后问 Zee。" },
      { q: "Warranty? Spare parts? After-sales?", q_zh: "保修？备件？售后？", light: "r",
        keys: "warranty guarantee spare parts support after sales maintenance repair 保修 备件 售后 维护",
        tip: "Ask Zee. 问 Zee。" },
      { q: "Do you provide training?", q_zh: "有培训吗？", light: "r",
        keys: "training manual 培训 说明书",
        tip: "Ask Zee. 问 Zee。" }
    ]},

    { id: "competitors", title: "Competitors", zh: "竞争对手", items: [
      { q: "How are you different from Kepler Weber, Bühler, Sukup, Cimbria?", q_zh: "和他们比有什么不同？", light: "g",
        keys: "competitor Kepler Weber Buhler Sukup Cimbria AGI compare difference 竞争 对比 区别",
        say: "They're excellent silo and handling suppliers. We specialize in what happens inside storage: monitoring, protection and control. Our systems run at 7,000+ installations in China's grain-reserve network, and we can work alongside your silo supplier.",
        say_zh: "他们是很好的仓体和输送设备商。我们专注仓内的监测、保护和控制，在中国粮食储备体系有 7,000+ 套应用，可以和您的仓体供应商配合。",
        tip: "Never criticize a competitor. 不贬低竞争对手。" }
    ]},

    { id: "objections", title: "Objections", zh: "异议", items: [
      { q: "\"We already check it by hand.\"", q_zh: "“我们人工检查就行。”", light: "g",
        keys: "manual by hand don't need not necessary 人工 不需要",
        say: "Manual checks only see a few points at a few moments. Hot spots start deep in the grain and grow between checks, and continuous monitoring catches them before you lose grain. Have you had any losses in the last couple of years?",
        say_zh: "人工检查只能看到少数点、少数时刻。发热点从粮堆深处开始，在两次检查之间扩大，连续监测能在损失发生前发现。近两年有过损失吗？" },
      { q: "\"Chinese products aren't reliable.\"", q_zh: "“中国产品不可靠。”", light: "g",
        keys: "quality reliable Chinese trust China 质量 可靠 信任",
        say: "China holds one of the largest strategic grain reserves in the world, and our systems protect it at 7,000+ installations. We've specialized in this since 1997, and we're a publicly listed company.",
        say_zh: "中国有世界上规模最大的战略粮食储备之一，我们的系统在其中 7,000+ 个点位运行。我们 1997 年起专注这一领域，是挂牌公司。" },
      { q: "\"Too expensive.\"", q_zh: "“太贵了。”", light: "g",
        keys: "expensive cheaper budget cost too much 贵 便宜 预算",
        say: "It helps to compare it with the value of the grain you store. Losing even 1 % of a 10,000-tonne store is 100 tonnes of grain. We can also start with monitoring only and add modules later.",
        say_zh: "可以和您存储的粮食价值比较一下：1 万吨的仓损失 1% 就是 100 吨。也可以先只上监测，以后再加模块。",
        tip: "Then pass it to Zee for pricing options. 然后交给 Zee 出方案。" },
      { q: "\"You have no local support.\"", q_zh: "“你们在当地没有服务。”", light: "g",
        keys: "local support service presence office 本地 服务",
        say: "That's exactly why we work with local partners for installation and service. Do you have an electrical or automation contractor you trust?",
        say_zh: "所以我们和当地伙伴合作安装和服务。您有信任的电气或自动化承包商吗？" },
      { q: "\"We already have a system.\"", q_zh: "“我们已经有系统了。”", light: "g",
        keys: "already have existing system 已经有",
        say: "Which one, and how is it working for you? Many sites add gas, pest or aeration control on top of basic temperature monitoring.",
        say_zh: "是哪一家？用得怎么样？很多库点在基础测温上再加气体、虫害或智能通风。" }
    ]}
  ]},

  /* ================================================================ */
  { id: "buyers", title: "Buyers", zh: "客户类型", topics: [

    { id: "buyer-types", title: "Buyer types", zh: "按类型", items: [
      { q: "National / state reserve agency", q_zh: "国家/国有储备机构",
        keys: "government reserve NCPB NFRA OAIC ministry state 政府 储备",
        info: "*Examples: Kenya NCPB, Tanzania NFRA, Algeria OAIC, Nigeria strategic silos*\n- **They care about:** food security, losses, staff safety, audit trail, political visibility\n- **Lead with:** our Sinograin and national-reserve track record, monitoring, access control\n- **Ask:** Which sites are being built or upgraded? Is there a tender? Who is the EPC?\n- **Watch out:** slow and tender-driven, with intermediaries wanting a cut. Go through a local partner or the EPC. Never promise anything about a tender.",
        info_zh: "- **关注：** 粮食安全、损耗、人员安全、可追溯、政治关注\n- **先讲：** 中储粮背景、监测、门禁\n- **问：** 哪些库点在建或改造？有招标吗？EPC 是谁？\n- **注意：** 周期长、靠招标、中间人多；走当地伙伴或 EPC，不对招标做任何承诺" },
      { q: "Co-op / commercial grain handler", q_zh: "合作社/商业粮储企业",
        keys: "cooperative co-op elevator private commercial Brazil 合作社 商业",
        info: "*Examples: Brazilian co-ops, US elevators, private storage operators*\n- **They care about:** grain quality (which sets the price), losses, labor, ROI\n- **Lead with:** monitoring + aeration control, and the loss-prevention math\n- **Ask:** How many sites, how big? New build or modernization? Who's your silo or automation supplier?\n- **Watch out:** they'll compare us with local suppliers on service, so raise local support early.",
        info_zh: "- **关注：** 品质即价格、损耗、人工、回报\n- **先讲：** 监测 + 智能通风，算损耗账\n- **问：** 几个库点多大？新建还是改造？仓体或自动化供应商是谁？\n- **注意：** 会拿本地供应商比服务，早问本地支持" },
      { q: "Flour miller / grain importer", q_zh: "面粉厂/粮食进口商",
        keys: "miller mill importer port flour 面粉厂 进口",
        info: "*Examples: large millers with port silos*\n- **They care about:** incoming grain quality, fast turnover, fumigation compliance\n- **Lead with:** monitoring, gas detection, recirculation fumigation, inbound/outbound\n- **Ask:** How much raw grain do you hold before milling, and for how long?\n- **Watch out:** if they store only flour or processed product, they're not a fit.",
        info_zh: "- **关注：** 进粮品质、周转、熏蒸合规\n- **先讲：** 监测、气体检测、环流熏蒸、出入库\n- **问：** 磨粉前存多少原粮、存多久？\n- **注意：** 只存面粉或成品的不适配" },
      { q: "EPC / silo builder / integrator", q_zh: "总包/建仓商/集成商",
        keys: "EPC contractor builder integrator automation 总包 集成",
        info: "*Examples: Chinese EPCs building reserves in Africa, local automation firms*\n- **They care about:** a reliable subsystem that's easy to integrate, margin, on-time delivery\n- **Lead with:** \"You build the silo, we supply the brain inside it.\"\n- **Ask:** Which projects are coming up? Who specifies monitoring today?\n- **Watch out:** integration questions come fast and most of them are red. Bring Zee in early.",
        info_zh: "- **关注：** 可靠易集成的子系统、利润、按时交付\n- **先讲：** 他们建仓体，我们做仓里的“脑子”\n- **问：** 有哪些项目？现在监测由谁指定？\n- **注意：** 集成技术问题多，大多是红灯，尽早拉 Zee 进来" },
      { q: "Agent / distributor", q_zh: "代理/经销商",
        keys: "agent distributor dealer reseller exclusive 代理 经销",
        info: "- **They care about:** margin, exclusivity, a product they can actually sell and support\n- **Lead with:** our product range and 7,000+ installations, then ask about *their* customers and technical team\n- **Ask:** Which grain-storage customers do you already serve? Do you have installers?\n- **Watch out:** claims of \"exclusive government access\" with no named site or budget. Never promise exclusivity or commission.",
        info_zh: "- **关注：** 利润、独家、能卖能服务的产品\n- **先讲：** 产品线和 7,000+ 安装；问他们的客户和技术团队\n- **问：** 已服务哪些粮储客户？有安装人员吗？\n- **注意：** 声称有政府关系但说不出具体项目；绝不承诺独家或佣金" }
    ]},

    { id: "qualify", title: "Is the lead worth it?", zh: "线索值不值得跟", items: [
      { q: "The 5 checks", q_zh: "五项检查",
        keys: "qualify qualification lead score gate worth 资格 判断",
        info: "Mark each ✅ / ❌ / ❓ in your call notes. Pursue the lead only if all five pass.\n- **Raw grain:** wheat, maize, paddy, barley, sorghum. Not flour, milled rice or feed. Soy/oilseeds: ask Zee.\n- **≥5,000 t of fixed storage at one site:** a fixed silo or flat warehouse. Not silo bags, small bins, or only a national total.\n- **Something happening now:** a new build, expansion, upgrade or tender. Not \"maybe someday\".\n- **Real buyer route:** a named owner, co-op, operator or EPC. Not just a ministry name.\n- **Payment looks possible:** a clear payer and currency, and no integrity red flags.",
        info_zh: "记录中每项标 ✅ / ❌ / ❓，五项都过才跟。\n- **原粮：** 小麦、玉米、稻谷等；只有面粉、大米、饲料不算；大豆/油籽问 Zee\n- **单库点 ≥5,000 吨固定仓：** 筒仓袋、小农仓、只有全国总量不算\n- **当前有进展：** 新建、扩建、改造、招标\n- **决策路径清楚：** 能说出业主、合作社、运营方或 EPC\n- **付款可行：** 付款方和币种清楚，无廉洁风险" },
      { q: "Red flags", q_zh: "警示信号", light: "r",
        keys: "red flag warning bribe commission gift scam kickback 回扣 风险 警示",
        info: "- Wants a price before saying anything about the site → send the catalog, ask about the site, don't quote\n- \"Agent\" with exclusive government access but no named site or budget → log it and tell Zee\n- Anyone asking for commissions, gifts or side payments → **stop and tell Zee immediately**\n- Silo bags only, or very small storage → thank them, keep the contact, deprioritize",
        info_zh: "- 不谈现场先要价格 → 发目录、问现场、不报价\n- 自称有政府独家关系但说不出项目和预算 → 记录并告诉 Zee\n- 索要回扣、礼品或私下付款 → **立即停止并告诉 Zee**\n- 只有筒仓袋或规模太小 → 感谢、保留联系、降低优先级" }
    ]},

    { id: "discovery", title: "Discovery questions", zh: "需求挖掘问题", items: [
      { q: "About the site", q_zh: "关于库点",
        keys: "discovery questions ask site 问题 库点",
        info: "- What grain do you store, and how much at this site?\n- What kind of storage is it: steel silos, concrete silos, flat warehouses? How many, how big?\n- Is this a new build, an expansion, or an upgrade?\n- How long does grain usually stay in storage?\n- What's the climate like across the year?",
        info_zh: "- 存什么粮？这个库点存多少？\n- 什么仓型？几个？多大？\n- 新建、扩建还是改造？\n- 粮食一般存多久？\n- 当地全年气候如何？" },
      { q: "About the pain", q_zh: "关于痛点",
        keys: "discovery pain problem loss 痛点 损失",
        info: "- How do you check grain temperature and condition today?\n- In the last year or two, have you lost grain to heating, moisture or insects? Roughly how much?\n- How do you decide when to run the fans?\n- How do you fumigate, and are you happy with the results and the safety?\n- Who has to enter the bins, and how often?\n- What happens if a problem is found at night or on a weekend?",
        info_zh: "- 现在怎么检查粮温和粮情？\n- 近一两年有没有因发热、受潮、生虫造成损失？大约多少？\n- 什么时候开风机，怎么决定？\n- 现在怎么熏蒸？效果和安全满意吗？\n- 谁需要进仓？多频繁？\n- 夜间或周末发现问题怎么处理？" },
      { q: "About the existing system and the decision", q_zh: "关于现有系统与决策",
        keys: "discovery decision budget tender timeline existing 决策 预算 招标",
        info: "- Do you have a monitoring or control system now? Which brand?\n- Who built the silos, and who did the electrical and automation work?\n- Who else is involved in choosing a system?\n- Is there a budget or financing? Is it a tender?\n- What's your timeline for design, purchase and installation?\n- Who would install and maintain it locally?",
        info_zh: "- 现在有监测或控制系统吗？什么品牌？\n- 仓是谁建的？电气和自动化谁做的？\n- 还有谁参与选型？\n- 有预算或融资吗？是招标吗？\n- 设计、采购、安装的时间表？\n- 当地谁来安装和维护？" }
    ]}
  ]},

  /* ================================================================ */
  { id: "products", title: "Products", zh: "产品", topics: [

    { id: "systems", title: "Five systems", zh: "五大系统", items: [
      { q: "Grain Condition Monitoring", q_zh: "粮情监测",
        img: [{ src: "img/monitoring-system.jpg", cap: "System overview" }, { src: "img/controller.jpg", cap: "Controller" }, { src: "img/temperature-cable.jpg", cap: "Temperature cable" }, { src: "img/solar-wireless-controller.jpg", cap: "Solar wireless controller" }],
        keys: "monitoring temperature humidity cable pest gas robot 粮情 测温",
        info: "**Solves:** problems found too late.\n**Lead line:** \"Know storage conditions at every point.\"\n- Temperature/humidity cables, controllers, collectors, wireless in-bin monitors\n- Pest traps and a sampling selector; PH₃ / O₂ / CO₂ gas detection\n- Grain-surface inspection robot",
        info_zh: "**解决：** 问题发现太晚\n- 测温电缆、测控分机、采集器、无线测温\n- 害虫诱捕、取样；磷化氢/氧气/二氧化碳检测\n- 粮面巡检机器人" },
      { q: "Temperature Control", q_zh: "控温",
        keys: "aeration cooling fan window damper rain cap internal loop 通风 冷却 内环流",
        info: "**Solves:** warm grain, and aeration that's manual or badly timed.\n**Lead line:** \"Automate the air path. Cool grain when the weather can't.\"\n- Aeration control: fans, motorized windows, dampers, electric rain caps, roof remote units\n- Internal air circulation (uses existing floor ducts)\n- Grain-cooling units",
        info_zh: "**解决：** 粮温高、通风靠人工\n- 智能通风：风机、电动窗、风阀、电动防雨帽\n- 内环流控温（利用现有地笼）\n- 谷物冷却机" },
      { q: "Grain Protection", q_zh: "粮食保护",
        img: [{ src: "img/fumigation-system.jpg", cap: "Recirculation fumigation in a silo and a flat warehouse" }],
        keys: "fumigation controlled atmosphere nitrogen 熏蒸 气调 氮气",
        info: "**Solves:** uneven fumigation and chemical exposure.\n**Lead line:** \"Protect grain evenly, with or without chemicals.\"\n- Recirculation fumigation: generator, timer controller, detection, phosphine degradation unit\n- Nitrogen controlled atmosphere: control cabinet + mobile nitrogen generator",
        info_zh: "**解决：** 熏蒸不均、接触药剂\n- 环流熏蒸：发生器、定时控制、检测、磷化氢降解\n- 充氮气调：控制柜 + 移动式制氮机组" },
      { q: "Inbound & Outbound", q_zh: "出入库",
        keys: "inbound outbound truck weighing sampling records 出入库 称重",
        info: "**Solves:** no reliable record of loads.\n**Lead line:** \"Make every load visible.\"\n- Vehicle entry, weighing, grain sampling, related records",
        info_zh: "**解决：** 进出无可靠记录\n- 车辆进出、称重、扦样、记录" },
      { q: "Storage Platform", q_zh: "智能仓储管控平台",
        keys: "platform software dashboard 平台",
        info: "**Solves:** data scattered across systems or on paper.\n**Lead line:** \"One platform for the entire depot.\"\n- Depot overview, per-silo view, equipment status, records, staff; desktop and mobile",
        info_zh: "**解决：** 数据分散\n- 全库总览、单仓视图、设备状态、记录、人员；电脑和手机" },
      { q: "Safety & site equipment", q_zh: "安全与辅助设备",
        keys: "access control cabinet manhole platform airtight door 门禁 控制柜 人孔 气密门",
        info: "- Smart access control: face, fingerprint or password; O₂/PH₃ alarms; headcount\n- Integrated control cabinet: one control layer for all subsystems\n- Electric manhole & lifting platform for shallow silos\n- Airtight doors that can be opened by hand during a power failure",
        info_zh: "- 智能查粮门禁\n- 综合控制柜\n- 电动人孔及升降平台\n- 气密闭门（停电可手动开启）" }
    ]},

    { id: "lead-with", title: "What to lead with", zh: "先讲什么", items: [
      { q: "Match the situation to the product", q_zh: "按情况选产品",
        keys: "lead pitch recommend which product start 推荐 先讲",
        info: "- **Default:** Monitoring. It's the easiest entry point and fits both new builds and retrofits.\n- **Hot or humid climate:** Monitoring + aeration control + cooling\n- **Insect or fumigation complaints:** Pest & gas detection + recirculation fumigation or nitrogen CA\n- **Safety incidents or concerns:** Access control + inspection robot\n- **Large multi-site operator:** Platform first, then modules per site\n- **Storage fit:** ✅ flat warehouse · ✅ shallow silo · ✅ vertical silo · ❌ silo bags · ❌ small farm bins",
        info_zh: "- **默认：** 先讲监测\n- **热带/潮湿：** 监测 + 智能通风 + 冷却\n- **虫害或熏蒸问题：** 虫气检测 + 环流熏蒸或气调\n- **安全顾虑：** 门禁 + 巡检机器人\n- **多库点运营方：** 先讲平台" }
    ]},

    { id: "words", title: "Words to use", zh: "用词", items: [
      { q: "Say this, not that", q_zh: "该说与不该说",
        keys: "terminology words wording translation 用词 翻译",
        info: "- Say **grain cooling**, not \"air conditioning\"\n- Say **aeration control**, not just \"ventilation\"\n- Say **controlled atmosphere**, never \"MA\"\n- Say **installations**, not \"installation points\"\n- Say **grain condition monitoring**, not \"grain situation\"",
        info_zh: "- 谷物冷却 → grain cooling（不说 air conditioning）\n- 智能通风 → aeration control\n- 气调 → controlled atmosphere（不说 MA）\n- 粮情监测 → grain condition monitoring" }
    ]},

    { id: "not-offered", title: "Not offered overseas yet", zh: "海外暂不主推", items: [
      { q: "Made in China, not offered overseas yet", q_zh: "国内有、海外暂不主推",
        keys: "quantity 3D security CCTV tobacco archive 数量 安防 档案",
        info: "Grain quantity monitoring (3D), security/CCTV, and warehouse temperature/humidity for tobacco and archives. If a client asks, log the request and tell Zee.",
        info_zh: "粮食数量监测、智能安防、库房温湿度测控（烟草/档案）。客户问到就记录并告诉 Zee。" }
    ]}
  ]},

  /* ================================================================ */
  { id: "company", title: "Company", zh: "公司", topics: [

    { id: "pitch", title: "30-second pitch", zh: "30 秒介绍", items: [
      { q: "Elevator pitch", q_zh: "电梯演讲", light: "g",
        keys: "pitch intro elevator introduction 介绍",
        say: "Beibo has built grain-storage monitoring and control systems since 1997. Our systems run at more than 7,000 installations across China's grain-reserve network, and we're a publicly listed company. We don't build the silo. We supply the intelligence inside it: monitoring, pest and gas detection, aeration and cooling, fumigation, and one platform for the whole depot. Every system is configured for your site.",
        say_zh: "贝博从 1997 年开始做粮仓的监测与控制系统，在中国粮食储备体系里有 7,000 多套安装，是挂牌公司。我们不建仓体，做仓里的“大脑”：粮情监测、虫气检测、通风与控温、熏蒸，以及管理整个库区的平台。每套系统都按您的现场配置。" }
    ]},

    { id: "claims", title: "Can say / can't say", zh: "能说 / 暂不能说", items: [
      { q: "Approved claims", q_zh: "可以说", light: "g",
        keys: "claims facts approved 事实",
        info: "- Grain-storage expertise since 1997; incorporated 2003\n- NEEQ-listed, stock code 834792\n- 7,000+ installations across China\n- Customers across 15+ provinces\n- National High-Tech Enterprise; Software Enterprise\n- Approved supplier under Sinograin centralized procurement (7 product categories)\n- Supplier to COFCO\n- Quality, environmental and OHS management system certificates\n- Scale names in China: Sinograin, COFCO, Wilmar, Famsun, Aisino, Inspur, Supcon. Use them to show scale, not as overseas endorsements.",
        info_zh: "- 1997 年起专注粮储，2003 年成立\n- 新三板 834792\n- 国内 7,000+ 套安装\n- 客户覆盖 15+ 省\n- 高新技术企业、软件企业\n- 中储粮七大产品入围\n- 中粮供货单位\n- 三体系认证" },
      { q: "Not yet: don't say", q_zh: "暂不能说", light: "r",
        keys: "claims unverified verify 未确认",
        info: "- Founded from the Zhengzhou Grain College lab\n- Co-author / contributor to the national standard\n- Exact patent or software-copyright counts\n- Any product-level certification (CE, ATEX, CCC on a specific product)\n- AI pest identification or AI diagnostics being live\n- Any overseas installation or reference",
        info_zh: "- 源自郑州粮食学院实验室\n- 国标起草/参与\n- 专利软著具体数量\n- 具体产品认证\n- AI 识虫/AI 诊断已上线\n- 任何海外项目或案例" }
    ]},

    { id: "contact", title: "Contact block", zh: "联系方式", items: [
      { q: "Contact details to share", q_zh: "对外联系方式", light: "g",
        keys: "contact email whatsapp website alibaba 联系",
        say: "Zhengzhou Beibo Electronics Co., Ltd.\nbeibo.com · Alibaba: zzbeibo.en.alibaba.com\nOverseas Business Development: Zee Liu\nWhatsApp +1 217 979 8340 · zeeliu@beibo.com" }
    ]}
  ]},

  /* ================================================================ */
  { id: "markets", title: "Markets", zh: "市场", topics: [

    { id: "priority", title: "Priority markets", zh: "优先市场", items: [
      { q: "Brazil · Priority 1", q_zh: "巴西 · 优先级 1",
        keys: "Brazil Brasil Portuguese co-op 巴西",
        info: "**Talk to:** co-ops, commercial grain handlers, local automation/silo partners.\nStorage finance is active. Local suppliers are strong (e.g. Kepler Weber), so position Beibo as the monitoring/control layer. Portuguese-speaking.",
        info_zh: "合作社、商业粮储、本地自动化伙伴；有仓储融资；本地供应商强，主打监测控制层；葡语。" },
      { q: "Algeria · Priority 1", q_zh: "阿尔及利亚 · 优先级 1",
        keys: "Algeria OAIC French Arabic 阿尔及利亚",
        info: "**Talk to:** the OAIC programme, via a local EPC or legal partner.\n350 local storage centres of 5,000 t each are being built. Tender-driven and slow. French/Arabic.",
        info_zh: "经当地 EPC 或法律伙伴对接 OAIC；在建 350 个 5000 吨库点；招标、周期长；法语/阿语。" },
      { q: "Nigeria · Priority 2", q_zh: "尼日利亚 · 优先级 2",
        keys: "Nigeria concession miller CO2 尼日利亚",
        info: "**Talk to:** silo concessionaires, private millers and importers.\nNational policy names CO₂ sensors in silo bins. High payment and FX risk, so every deal goes through Zee.",
        info_zh: "筒仓特许运营方、私营面粉厂和进口商；政策点名 CO₂ 传感器；付款外汇风险高，一律经 Zee。" },
      { q: "Kenya · Priority 2", q_zh: "肯尼亚 · 优先级 2",
        keys: "Kenya NCPB Nairobi 肯尼亚",
        info: "**Talk to:** NCPB (met at Nairobi 2026), farmer-community leaders, private storage owners.\nNCPB relies on manual monitoring today. Much private storage can't be found online, so relationships matter.",
        info_zh: "NCPB（2026 内罗毕展结识）、农户社区负责人、私人仓主；NCPB 目前靠人工；很多私人仓网上查不到，靠人脉。" },
      { q: "India · Priority 3", q_zh: "印度 · 优先级 3",
        keys: "India FCI PPP Adani 印度",
        info: "**Talk to:** PPP operators and integrators, not FCI directly. The market is huge but locally controlled.",
        info_zh: "PPP 运营方和集成商，不直接找 FCI；体量大但本地把控。" },
      { q: "Tanzania · Priority 3", q_zh: "坦桑尼亚 · 优先级 3",
        keys: "Tanzania NFRA 坦桑尼亚",
        info: "**Talk to:** NFRA via a local partner. Smaller public projects, with Chinese EPCs already present.",
        info_zh: "经当地伙伴对接 NFRA；规模较小，公共项目，已有中国 EPC。" },
      { q: "USA, Europe, Türkiye · Later", q_zh: "美、欧、土 · 后期",
        keys: "USA America Europe Turkey Türkiye 美国 欧洲 土耳其",
        info: "Distributors and technology partners only. Mature markets with strong incumbents.",
        info_zh: "只通过经销商或技术伙伴；成熟市场，竞争强。" },
      { q: "Argentina · Avoid", q_zh: "阿根廷 · 不做", light: "r",
        keys: "Argentina silo bag 阿根廷",
        info: "Most grain is stored in silo bags, which isn't a fit for our systems.",
        info_zh: "主要用筒仓袋，不适配。" }
    ]},

    { id: "channels", title: "Channels", zh: "渠道", items: [
      { q: "Channels that work", q_zh: "有效渠道",
        keys: "channel partner EPC Aohua chamber expo delegation 渠道 奥华 商会 展会",
        info: "- **Chinese EPCs and silo builders already working abroad:** \"they build the silo, we supply the brain\"\n- **Henan Aohua (河南奥华), grain-processing lines:** a bundle opportunity in Africa and SE Asia. Someone else at Beibo owns this relationship, so check with Zee before contacting them.\n- **Provincial trade delegations and chambers of commerce:** the Henan Dept. of Commerce subsidizes overseas expos\n- **Pre-booked meetings at expos** beat walk-ins\n- Expo list: 海外市场/贝博出海展会清单2026.xlsx",
        info_zh: "- 已在海外建仓的中国 EPC\n- 河南奥华：加工线可打包；有专人负责，联系前先问 Zee\n- 省商务厅/商会组团，有展会补贴\n- 展会提前约见比现场等客有效" }
    ]}
  ]},

  /* ================================================================ */
  { id: "toolkit", title: "Toolkit", zh: "工具", topics: [

    { id: "followups", title: "Follow-up messages", zh: "跟进消息", items: [
      { q: "After first contact (WhatsApp)", q_zh: "首次接触后",
        keys: "follow up message template whatsapp first 跟进 模板",
        say: "Hi [Name], this is David from Beibo. Thanks for your time today. As promised, here's our 2026 catalog. To suggest the right setup for your [silos/warehouses], could you share the grain type, the number and size of your stores, and whether this is a new build or an upgrade?",
        tip: "Replace the [brackets] before sending. 发送前替换 [方括号]。" },
      { q: "After an expo", q_zh: "展会后",
        keys: "follow up expo exhibition fair 展会",
        say: "Hi [Name], great meeting you at [expo] in [city]. You mentioned [their problem]. That's exactly what our monitoring systems handle at 7,000+ installations in China. Attached is our catalog. Would a short call next week work to look at your site?",
        tip: "Replace the [brackets] before sending. 发送前替换 [方括号]。" },
      { q: "When you owe an answer", q_zh: "欠客户答案时",
        keys: "follow up confirm owe answer later 确认",
        say: "Hi [Name], thanks for your question about [topic]. I'm confirming the details with our engineering team and will come back to you by [day].",
        tip: "Replace the [brackets] before sending. 发送前替换 [方括号]。" },
      { q: "No reply after 7 days", q_zh: "7 天未回复",
        keys: "follow up no reply chase 未回复 催",
        say: "Hi [Name], just following up on our conversation about [site/project]. Is [project] still moving forward this year? Happy to help whenever the timing is right.",
        tip: "Replace the [brackets] before sending. 发送前替换 [方括号]。" },
      { q: "Handing over to Zee", q_zh: "转交 Zee",
        keys: "handover introduce Zee 转交 介绍",
        say: "Hi [Name], I'd like to introduce Zee Liu, who leads our overseas business. Zee will prepare the proposal for your [project] and can answer the technical details.",
        tip: "Replace the [brackets] before sending. 发送前替换 [方括号]。" }
    ]},

    { id: "downloads", title: "Downloads", zh: "下载", items: [
      { q: "Product catalog 2026 (English)", q_zh: "2026 英文产品目录",
        keys: "catalog catalogue brochure PDF download 目录 宣传册 下载",
        info: "The file to send clients. Attach it in WhatsApp or email.",
        info_zh: "发给客户的目录文件，在 WhatsApp 或邮件里发送。",
        links: [{ href: "files/Beibo_Product_Catalog_2026.pdf", label: "Download catalog (PDF, 11 MB)" }] },
      { q: "Product pictures", q_zh: "产品图片",
        keys: "image picture photo render diagram 图片 照片 渲染图",
        info: "Tap a picture to open it full size, then save it or send it.",
        info_zh: "点击图片查看大图，可保存或发送。",
        img: [{ src: "img/monitoring-system.jpg", cap: "Monitoring system" }, { src: "img/fumigation-system.jpg", cap: "Recirculation fumigation" }, { src: "img/controller.jpg", cap: "Controller" }, { src: "img/temperature-cable.jpg", cap: "Temperature cable" }, { src: "img/solar-wireless-controller.jpg", cap: "Solar wireless controller" }] }
    ]},

    { id: "notes", title: "Call notes", zh: "沟通记录", items: [
      { q: "Call notes template", q_zh: "沟通记录模板",
        keys: "notes template log record call 记录 模板",
        tip: "Copy, fill in within 24 h, and send to Zee. 复制后 24 小时内填好发给 Zee。",
        copy: "Date:\nChannel: WhatsApp / email / call / expo\nContact: name, title, company, country, WhatsApp, email\nBuyer type: reserve / co-op / miller / EPC / agent / other\n\nGrain:\nStorage type & number/size:\nNew build or upgrade:\nExisting system & brand:\nLocation & climate:\n\nPain (their words):\nModules of interest:\n\n5 checks (✅ ❌ ❓): raw grain / ≥5,000 t fixed / happening now / buyer route / payment\n\nWho decides:\nBudget / tender:\nTimeline:\n\nQuestions I couldn't answer:\nNext step (what, who, by when):" }
    ]},

    { id: "update", title: "How to update", zh: "如何更新", items: [
      { q: "Adding or changing content", q_zh: "新增或修改内容",
        keys: "update edit add change github 更新 修改",
        info: "- All content is in **public/content.js**. The layout is in index.html, which you never need to touch.\n- **Add an entry:** in content.js, copy one entry from { to }, paste it after another, and edit the text.\n- **On GitHub:** open public/content.js → ✏️ pencil → edit → *Commit changes*. The site updates in about a minute.\n- **Made a typo?** The site won't update and the last working version stays live. Vercel shows the error message.\n- **Only Zee** turns a red answer green or yellow.\n- A client asked something that isn't here? Use the **Ask Zee** button. Zee adds the answer afterwards.",
        info_zh: "- 所有内容在 **public/content.js**，index.html 不用动\n- **新增：** 复制一条（从 { 到 }），粘贴后修改\n- **在 GitHub 上：** 打开 public/content.js → ✏️ → 修改 → Commit changes，约一分钟后更新\n- **改错了？** 网站不会更新，旧版本保持在线，Vercel 会显示错误\n- 只有 Zee 能把红灯改成绿灯/黄灯\n- 遇到查不到的问题用 **Ask Zee** 按钮" }
    ]}
  ]}

  ]
};
