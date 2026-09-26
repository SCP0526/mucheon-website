/** ZH content dictionary (part 2: solutions) — facts unchanged (10/14/18, levels, notes). */
export const zhPagesA = {
  solutions: {
    title: "解决方案",
    heading: "从业务问题出发",
    description:
      "以下每项方案都对应具有公开证据等级的工程资产（B 级——需要适配；高级 AI 能力为实验性）。没有证据的能力我们不予提供。",
    problemLabel: "问题：",
    approachLabel: "做法：",
    cta: "申请评估",
    cards: [
      {
        problem: "系统之间无法互通",
        approach:
          "面向出站 HTTP 系统的集成适配器：每个外部系统一个适配器文件，包含字段映射、超时、错误翻译与审计日志。",
        level: "B 级",
        note: "需要按项目适配，并需要客户测试环境配合验证。",
      },
      {
        problem: "高风险操作需要人工把关",
        approach:
          "在关键操作前设置审批门：提案必须经人工明确批准才能执行，默认拒绝，并保留完整审计链。",
        level: "B 级",
        note: "需要按项目适配。单级审批；这是人工控制层，不是完整工作流套件。",
      },
      {
        problem: "无法证明是谁做了什么",
        approach:
          "业务动作审计：关键动作在数据库层留下可追溯记录，与应用日志分离，并提供查询接口。",
        level: "B 级",
        note: "需要按项目适配。不是监管级审计系统。",
      },
      {
        problem: "事件不断堆积却无法可靠处理",
        approach:
          "事件管道：幂等的 Webhook 接收、基于队列的处理、重试与已处理事件追踪。",
        level: "B 级",
        note: "需要按项目适配与生产加固。",
      },
      {
        problem: "需要 AI 参与——但必须在控制之下",
        approach:
          "受控 AI 集成：AI 提议的动作与其他高风险操作一样，包在同一个审批门与审计链之内。",
        level: "B 级（核心）",
        note: "审批/审计核心层为 B 级。高级 AI 推理能力仅为实验性——见能力矩阵页。",
      },
      {
        problem: "新项目要等几个月才能写真正的功能",
        approach:
          "从工程基线起步：配置、日志、探针、迁移、容器，以及第一天即可一键验证的测试入口。",
        level: "B 级",
        note: "经自动化测试与一次完整的模板复刻演练验证。",
      },
    ],
  },
} as const;