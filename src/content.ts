// ============================================================
// 简历内容数据层 —— 来源：李文文（产品岗-10年工作经验）2026 优化版
// 只改这里即可更新整站文字，视觉与结构无需改动。
// ============================================================

export const profile = {
  name: '李文文',
  // 网站品牌名（导航 logo 与浏览器标题）
  siteName: 'Wendy.resume',
  title: '资深产品经理 / 产品总监 · 智慧人居 · AI 产品',
  location: '深圳 · 中国',
  email: 'Sellnar@qq.com',
  wechat: 'Wendy_Lee_Oct',
  phone: '176-9108-3603',
  // 头像地址（public/avatar.jpg）
  avatarUrl: './avatar.jpg',
  // 简历 PDF 下载地址（public/resume.pdf）
  resumeUrl: './resume.pdf',
}

// Hero 数据墙
export const stats = [
  { value: '10年+', label: '产品全周期经验' },
  { value: 'PMP+NPDP', label: '国际双认证' },
  { value: '0-N', label: '战略规划到落地' },
  { value: '多端', label: 'B端/AI/ToC/ToG' },
]

// 关于我
export const about = {
  headline: '用产品思维推动 AI 与智能化价值落地',
  paragraphs: [
    '十年 B 端 / AI / 智能硬件产品经验，现任中海智慧人居高级产品经理。从 ERP 业财一体化、供应链数据中台到语音入口、垂域大模型和 IoT 控制，我长期在复杂业务、模型能力与工程落地之间做连接。擅长把“语音入口 + 大模型理解 + Agent 执行 + IoT 控制”拆成可验证的产品路径：先定义意图边界，再设计模型能力与 Agent 编排，最后用关键指标闭环验证。',
  ],
  bullets: [
    '十年 B 端 / AI / 智能硬件产品经验',
    '3 年团队管理经验，组建产品中心，规范需求、项目与迭代流程。',
    '从企业级后台到 IoT 控制的跨行业需求理解',
    '能把需求、模型、Agent 与工程交付串成闭环 有实际落地经验',
  ],
  advantages: [
    { title: '全周期产品管理', desc: '多个 B端/AI/ToC/ToG 产品从 0-N 的战略规划与全生命周期管理。' },
    { title: 'AI 产品落地', desc: '语音引擎、Agent、大模型落域等 AI 产品从方案设计到验收上线。' },
    { title: '团队与流程', desc: '1 年团队管理，组建产品部，规范需求、项目与迭代流程。' },
    { title: '跨行业理解', desc: '智能家居、人力资源、电商、AI 多行业深入认知与实战。' },
  ],
}

// 工作经历
export interface ExperienceItem {
  company: string
  title: string
  period: string
  location?: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: '深圳市法本信息技术股份有限公司',
    title: '高级产品经理',
    period: '2022.05 - 至今',
    location: '深圳',
    highlights: [
      '负责中海智慧人居及企业级后台产品的需求分析、产品方案设计与上线落地。',
      '覆盖小海智家 APP、小海助手、中控屏、运营管理后台、云端、网关及商业运营/财务网关等多端系统。',
      '参与中控屏语音助手能力建设、智能化运营后台设计、智能家居埋点方案与运营指标体系梳理。',
    ],
  },
  {
    company: '广西锦绣前程人力资源有限公司',
    title: '产品总监',
    period: '2019.03 - 2021.11',
    location: '广西',
    highlights: [
      '负责产品部沟通及协作制度建设、产品萌新培训及管理，把控项目进度与产品生命周期。',
      '建设公司人力板块产品线（锦程云 SaaS 平台、前程派招聘平台）。',
      '推动集团数字化转型升级及业财数据打通（锦绣前程 ERP 系统），实现数据资源复用及价值挖掘（DIC 数据平台）。',
    ],
  },
  {
    company: '深圳安络科技有限公司',
    title: '产品经理',
    period: '2018.03 - 2019.03',
    location: '深圳',
    highlights: [
      '负责网安产品需求收集、产品设计、研发进度沟通、客户项目交付。',
      '建设网络安全产品线：长矛漏洞扫描系统、X 盾攻防演练系统、长矛移动安全检测系统。',
      '负责客户项目（罗湖区流量监测平台）技术支持、项目对接及交付。',
    ],
  },
  {
    company: '西安美齐电子商务有限公司',
    title: '产品助理',
    period: '2016.07 - 2018.03',
    location: '西安',
    highlights: [
      '负责电商平台逻辑梳理、交互功能设计，包括产品详情页制作、需求流程梳理、需求收集、网页设计、APP 设计。',
      '负责美齐易家 app、易商 app、易生活后台、脱贫/扶贫电商平台等多个项目的产品设计。',
      '运营需求调研及需求池管理，输出产品原型并对接 UI、开发、测试，上线后持续跟踪用户反馈并优化。',
    ],
  },
]

// 专业技能
export const skillGroups = [
  {
    group: '产品能力',
    items: ['需求分析', '产品战略规划', '原型设计', 'PRD 撰写', '项目管理', '数据分析', '用户研究', '全生命周期管理'],
  },
  {
    group: '工具 / AI',
    items: ['Axure', 'XMind', 'Visio', 'Project', 'Claude', 'Codex'],
  },
]

// 项目案例
export interface Project {
  name: string
  desc: string
  period: string
  role: string
  tags: string[]
  overview: string
  results: { value: string; label: string }[]
  responsibilities: string[]
  features: string[]
}

export const projects: Project[] = [
  {
    name: '中海智慧语音引擎升级项目',
    desc: '建设"语音入口 + 大模型理解 + Agent 执行 + IoT 控制"的智能语音能力，提升自然语言完成设备控制、场景创建与说明书问答的体验。',
    period: '2025.05 - 2026.08',
    role: '产品负责人 · 中海智慧人居',
    tags: ['AI 语音', 'Agent', 'IoT', '大模型'],
    overview:
      '面向中海智慧人居中控屏及小海智家生态，推动中海 Agent 平台与思必驰 DUI 平台对接，设计自定义意图转发、上下文回传、流式输出、知识库问答、设备说明书问答等产品逻辑，支撑智能家居垂域 Agent 能力落地。',
    results: [
      { value: '98.19%', label: '15.6寸 AI 引导准确率' },
      { value: '99.90%', label: '落域识别准确率' },
      { value: '18个', label: '地产项目应用' },
      { value: '10720', label: '家庭落地' },
    ],
    responsibilities: [
      '智慧语音引擎升级方案设计，覆盖 4 / 11.6 / 15.6 寸中控屏终端',
      '推动中海 Agent 平台与思必驰 DUI 平台对接',
      '输出需求规格说明书、概要/详细设计文档',
    ],
    features: [
      '远场唤醒、连续对话、声纹、离线语音',
      '智能家居技能、自定义回复',
      '设备说明书 Agent、视频播放',
      'AI 引导控制、语音创建场景',
    ],
  },
  {
    name: '中海智能家居项目',
    desc: '以小海智家 APP、小海助手、中控屏、运营管理后台、配置平台和 IoT 设备接入为核心的智能家居产品体系。',
    period: '2023.10 - 2025.05',
    role: '高级产品经理',
    tags: ['智能家居', 'IoT', 'APP', '中控屏'],
    overview:
      '支撑业主端智能设备控制、家庭场景自动化、后台配置管理、设备验收接入、运营指标分析及问题定位能力，项目已上线。建立从需求、配置、联调、验收、上线到运营分析的产品闭环。',
    results: [
      { value: '52013', label: '支撑用户数' },
      { value: '1437', label: '接入家庭' },
      { value: '7066', label: '中控终端' },
      { value: '↓39.5%', label: '用户投诉' },
    ],
    responsibilities: [
      '小海智家 APP、小海助手及中控屏相关需求设计',
      '运营管理后台与中控屏配置平台方案',
      '中控屏 ODM 相关需求设计',
      '智能化运营与 AI/语音埋点体系设计',
    ],
    features: [
      '设备控制、场景创建、家庭空间',
      '多品类设备接入与联调验收（灯光/窗帘/空调/新风/门锁/厨电）',
      '全屋体检功能（获国家级奖励）',
      'PRD/配置清单/验收报告/操作手册沉淀',
    ],
  },
  {
    name: '中海领潮-供应链管理系统',
    desc: '面向中海及中建建材家装供应管理与外部企业商品供应的供应链管理系统产品线。',
    period: '2023.03 - 2023.10',
    role: '产品经理',
    tags: ['供应链', 'B端', 'SaaS'],
    overview:
      '为建设领潮供应链管理系统产品线，提升供应效率、拓展企业销售市场，打通系统间数据交换渠道，提高履约与问题处理效率。',
    results: [
      { value: '↓80%', label: '下单时长缩短' },
      { value: '↑20%', label: '运营效率提升' },
      { value: '打通', label: '系统数据交换' },
    ],
    responsibilities: [
      '产品需求对接、原型与需求文档输出及研发进度跟进',
      '系统运营平台、供应商、采购商、商城体验优化',
      '第三方履约系统、CRM 系统验收及对接',
    ],
    features: ['运营平台', '供应商管理', '采购商管理', '系统商城'],
  },
  {
    name: '总部大厦-智慧楼宇项目',
    desc: '集团总部大厦以"低碳、智慧、健康"为总体目标的示范智慧办公空间。',
    period: '2022.11 - 2023.01',
    role: '产品（辅助项目经理）',
    tags: ['智慧楼宇', 'IoT', '低碳'],
    overview:
      '评审并落地智慧办公、智慧物业及运营设计方案，把控软件上线功能集合与进度、质量，支撑集团未来智慧办公业务。',
    results: [
      { value: '上线', label: '智慧门禁试点' },
      { value: '线上化', label: '接待流程' },
      { value: '线上化', label: '会议室/工位预约' },
      { value: '↓能耗', label: '感应系统' },
    ],
    responsibilities: [
      '上下游第三方智慧办公/物业/运营方案评审与落地',
      '项目进度跟进与汇报',
      '软件上线功能集合优化与质量把控',
    ],
    features: ['智慧门禁', '接待线上化', '会议室预约', '感应节能'],
  },
  {
    name: '商业运营管理系统',
    desc: '覆盖商办资产、集中商业、自由办公的闭环运营管理核心 ERP 系统。',
    period: '2022.05 - 2022.09',
    role: '产品经理',
    tags: ['ERP', '资产管理', '商业'],
    overview:
      '搭建从资产管理、招商管理、营运管理到财务管理的闭环运营体系，统管可租赁资产、租赁合同台账与租赁收入。',
    results: [
      { value: '上线', label: '多业态投入' },
      { value: '↑效率', label: '大厦管理' },
      { value: '透明', label: '资产数据' },
    ],
    responsibilities: [
      '商业运营管理系统版本升级优化',
      '各子公司流程及需求整理',
      '数据指标统一与共享流程标准制定',
    ],
    features: ['资产管理', '招商管理', '营运管理', '财务管理'],
  },
  {
    name: '锦绣前程 ERP 管理系统',
    desc: '集团从传统人力向数字化人力转型的业财一体化 ERP。',
    period: '2019.10 - 2021.11',
    role: '产品总监',
    tags: ['HR SaaS', '业财一体', '数字化'],
    overview:
      '解决内部数据留存差、数据孤岛、核心业务流程模糊等问题，实现业财一体化，盘活集团资源、提升数据复用率。',
    results: [
      { value: '14家', label: 'HRO 客户' },
      { value: '↓30%', label: '流转时间成本' },
      { value: '↑80%', label: 'V2.0 效率' },
      { value: '↑35%', label: '数据留存' },
    ],
    responsibilities: [
      '业财一体化目标，各部门业务流程挖掘与梳理',
      'MRD 输出、产品方案/PRD/SOP/原型/操作手册',
      '与金蝶财务系统定制化合作',
      '产品部沟通流程、项目管理流程搭建',
    ],
    features: ['业财一体', 'HRO 管理', '流程再造', '数据复用'],
  },
  {
    name: '锦程云SaaS 平台',
    desc: '集团猎头业务数字化转型的 SaaS 平台，整合人力板块产品线。',
    period: '2019.03 - 2020.10',
    role: '产品总监',
    tags: ['HR SaaS', '猎头', 'OCR'],
    overview:
      '集团猎头业务数字化转型，整合完善人力板块产品线，在高价值业务进行战略部署。',
    results: [
      { value: '↑32%', label: '猎头效率' },
      { value: '↑280%', label: '简历录入' },
      { value: '97%', label: 'OCR 识别' },
    ],
    responsibilities: [
      '市场调研、竞品分析、需求深度沟通与原型策划评审',
      'OCR 简历识别功能优化及训练数据收集',
      '产品萌新的培训与管理工作',
    ],
    features: ['OCR 简历识别', '猎头 SaaS', '多条产品线', '战略部署'],
  },
  {
    name: '平安五大数据地图门户',
    desc: '平安五大数据地图门户与 OS 数据治理产品，推动公司业务中台落地。',
    period: '2021.11 - 2022.01',
    role: '资深产品经理',
    tags: ['数据治理', '中台', '门户'],
    overview:
      '负责数据地图门户产品运营、进度把控与体验优化；整理 OS 治理工具需求，对接五大中台业务落地。',
    results: [
      { value: '87.5%', label: 'DAU 增长' },
      { value: '↑325%', label: '跨部门效率' },
      { value: '5大', label: '中台业务' },
    ],
    responsibilities: [
      '数据地图门户 2.0 升级，各部门/子公司需求挖掘',
      '数据指标统一与共享流程标准制定',
    ],
    features: ['数据地图门户', 'OS 治理工具', '中台业务落地'],
  },
]

// 产品思考（流程）
export const thinking = {
  headline: '我的产品思考',
  sub: '更像一个懂业务、懂体验、也愿意靠近工程现场的产品经理。',
  steps: [
    { no: '01', title: '机会识别', desc: '从业务机会、用户抱怨与新技术能力里识别值得验证的问题。', tags: ['机会假设', '用户痛点', '业务目标'] },
    { no: '02', title: '需求澄清', desc: '把模糊想法拆成角色、场景、任务和优先级，判断是不是必须做。', tags: ['角色分层', '任务链路', '价值排序'] },
    { no: '03', title: '场景建模', desc: '建立信息架构、状态流、权限边界和关键路径，让复杂业务可被理解。', tags: ['信息架构', '流程状态', '权限边界'] },
    { no: '04', title: '原型验证', desc: '用高保真原型和真实任务测试体验成本，提前暴露理解与信任问题。', tags: ['交互原型', '可用性测试', '体验降噪'] },
    { no: '05', title: '工程实现', desc: '用 AI 编程工具快速做 Demo 与接口验证，让方案经过真实系统检验。', tags: ['Codex 验证', '接口联调', '可运行 Demo'] },
    { no: '06', title: '迭代增长', desc: '上线后用数据、反馈和运营动作继续修正产品结构与增长路径。', tags: ['数据复盘', '体验优化', '增长实验'] },
  ],
  values: [
    { icon: 'target', title: '核心目标', desc: '把模糊想法变成可验证、可落地、可增长的产品。' },
    { icon: 'user', title: '用户价值', desc: '解决真实问题' },
    { icon: 'chart', title: '业务价值', desc: '创造可持续价值' },
    { icon: 'cpu', title: '技术价值', desc: '提升效率与体验' },
    { icon: 'trend', title: '长期价值', desc: '构建增长飞轮' },
  ],
}

// AI 工具箱
export const toolbox = [
  { group: '策略与需求', desc: '行业研究、竞品分析、MRD、需求优先级判断。', items: ['行业研究', '竞品分析', 'MRD', '需求优先级'] },
  { group: '原型与体验', desc: '信息架构、页面文案、交互状态与高保真推演。', items: ['Axure', 'XMind', 'Visio', '高保真原型'] },
  { group: '研发验证', desc: '把想法快速变成可点击 Demo，验证接口与流程。', items: ['Claude', 'Codex', '接口联调', 'Vite'] },
  { group: '交付协作', desc: 'PRD、评审材料、项目节奏与跨团队同步。', items: ['PRD', '操作手册', '项目制管理', '飞书'] },
]

// 联系我
export const contact = {
  headline: '一起把产品从想法推进到可用体验',
  sub: '欢迎咨询 / 产品共创 / 原型设计 / AI 落地 / 研发协作',
  points: [
    { title: '全周期', desc: '从 0-N 战略规划到上线落地' },
    { title: '双认证', desc: 'PMP + NPDP 专业背书' },
    { title: '跨行业', desc: '智能家居/人力/电商/AI' },
  ],
}

// 导航
export const nav = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'experience', label: '工作经历' },
  { id: 'skills', label: '专业技能' },
  { id: 'projects', label: '项目案例' },
  { id: 'thinking', label: '产品思考' },
  { id: 'toolbox', label: 'AI 工具箱' },
  { id: 'contact', label: '联系我' },
]
