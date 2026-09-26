/** ZH content dictionary (part 1) — faithful translation of content-en-core. Facts unchanged. */
export const zhCore = {
  nav: {
    solutions: "解决方案",
    capabilities: "能力矩阵",
    evidence: "证据",
    howWeWork: "工作方式",
    projectEntry: "项目入口",
    company: "公司",
    requestAssessment: "申请评估",
    openMenu: "打开导航菜单",
    menuTitle: "MUCHEON",
    mobileNav: "移动端导航",
  },
  switcher: { en: "EN", zh: "中文", label: "语言" },
  footer: {
    description:
      "MUCHEON（木醇）— AI 工程合作伙伴。我们通过系统集成、自动化与可信 AI 解决复杂业务问题——每一步都有人的控制。",
    evidenceNote: "所有能力声明均遵循我们公开发布的证据矩阵。",
    solutionsTitle: "解决方案",
    companyTitle: "公司",
    legalTitle: "法律",
    solutions: ["解决方案", "能力矩阵", "工作方式", "项目入口", "案例"],
    company: ["关于我们", "联系我们"],
    legal: ["隐私政策", "使用条款", "信任"],
    bottom: "MUCHEON（木醇）— AI 工程合作伙伴。",
    bottomNote: "所有动效均遵循 prefers-reduced-motion。",
  },
  meta: {
    home: {
      title: "MUCHEON — AI 工程合作伙伴",
      description:
        "企业系统集成、业务审计与审批流、事件自动化、带人工监督的受控 AI——声明以公开证据为边界。",
    },
  },
  home: {
    eyebrow: "AI 工程 · 数字化转型合作伙伴",
    h1: "我们构建智能系统",
    sub: "我们通过系统集成、自动化与可信 AI 解决复杂业务问题——每一步都有人的控制。",
    story: [
      {
        label: "1 · 问题",
        text: "系统之间互不相通、关键动作无法追溯、AI 无人真正放心。",
      },
      {
        label: "2 · 我们的方式",
        text: "集成、自动化与受控 AI——围绕人工审批与完整审计留痕设计每一步。",
      },
      {
        label: "3 · 证据",
        text: "每项能力都有自动化测试背书，并公开其已知限制——欢迎亲自查验这些演示。",
      },
    ],
    trust: {
      title: "证据，而非形容词",
      description:
        "本站的每一项能力声明都对应一个经过测试的工程演示，并附有公开的已知限制。我们会告诉你：什么是已验证的、什么需要适配、什么尚不存在。",
      items: [
        "每项交付能力都有自动化测试背书",
        "每条声明都同时公开已知限制",
        "诚实的范围界定——没有证据的能力我们会拒绝",
      ],
      cta: "查看证据",
    },
  },
} as const;