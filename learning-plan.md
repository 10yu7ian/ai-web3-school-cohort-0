# 学习计划与里程碑

> 对齐 [AI × Web3 School Handbook](https://aiweb3.school/zh/handbook/) 四层地图：**AI 基础 → Web3 基础 → AI × Web3 Bridge → 前沿探索**。  
> 起始日期：**2026-05-18** | 建议周期：**约 12–24 周**（按 profile 中每日投入调整）

---

## 如何使用本计划

| 路径 | 适用 | 说明 |
|------|------|------|
| 最小路径 | 时间紧 / 先跑通 | 每模块只完成 Handbook 核心概念 + 1 个小练习 |
| 推荐路径 | 默认 | 概念 + 实验 + 写回 `tasks/` 或 `experiments/` |
| 挑战路径 | 有基础 / 冲 Hackathon | 每模块做一个可演示原型 |

每日在 `daily/YYYY-MM-DD.md` 勾选当日路径；模块完成在 `tasks/` 留证明。

---

## Phase 0：仓库与环境（第 1 周）

| # | 任务 | 预计 | 状态 |
|---|------|------|------|
| 0.1 | 通读 Handbook 首页与阅读方式 | 1h | [ ] |
| 0.2 | 完善 profile.md，与 Agent 确认画像 | 0.5h | [ ] |
| 0.3 | GitHub 账号 + `gh auth login`（或网页创建 repo） | 1h | [ ] |
| 0.4 | 开发环境：Node / Python / Git / 编辑器 | 2h | [ ] |
| 0.5 | 钱包（MetaMask / Rabby）+ 测试网代币 | 1h | [ ] |
| 0.6 | 完成首日打卡并链到 WCB | 0.5h | [ ] |

**里程碑**：public 学习仓库已 push；完成第一次 `daily/` 打卡草稿。

---

## Phase 1：AI 基础（Handbook — AI 基础）

> 先建立模型与应用系统的共同语言。按 Handbook 侧边栏顺序，缺哪块补哪块。

| # | 主题方向 | 产出建议 | 状态 |
|---|----------|----------|------|
| 1.1 | 模型与上下文 | `handbook-feedback/` 或 `tasks/` 概念笔记 | [ ] |
| 1.2 | Prompt / 工具调用入门 | 一个小脚本或 Prompt 模板 | [ ] |
| 1.3 | Agent 工作流直觉 | 画出「人 in the loop」步骤图 | [ ] |

**里程碑**：能用自己的话解释「模型 → 工具 → 执行」边界。

---

## Phase 2：Web3 基础（Handbook — Web3 基础）

| # | 主题方向 | 产出建议 | 状态 |
|---|----------|----------|------|
| 2.1 | 账户、交易、Gas | 测试网一笔转账 + tx hash 记入 daily | [ ] |
| 2.2 | 合约与权限直觉 | 阅读 + 标注不懂的概念到 feedback | [ ] |
| 2.3 | 前端 / 钱包交互 | `experiments/wallet-connect/` 等小实验 | [ ] |

**里程碑**：测试网完成一次链上交互（仅记录 hash，不暴露敏感信息）。

---

## Phase 3：AI × Web3 Bridge（核心交叉）

按 Handbook Bridge 章节推进（建议顺序可交错）：

| # | Handbook 章节 | 链接 | 状态 |
|---|---------------|------|------|
| 3.1 | Chain-aware Context | [chain-aware-context](https://aiweb3.school/zh/handbook/bridge/chain-aware-context/) | [ ] |
| 3.2 | Web3 Tool Use | [web3-tool-use](https://aiweb3.school/zh/handbook/bridge/web3-tool-use/) | [ ] |
| 3.3 | Agent Workflow | [agent-workflow](https://aiweb3.school/zh/handbook/bridge/agent-workflow/) | [ ] |
| 3.4 | Agent Wallet | [agent-wallet](https://aiweb3.school/zh/handbook/bridge/agent-wallet/) | [ ] |
| 3.5 | Machine Payment | [machine-payment](https://aiweb3.school/zh/handbook/bridge/machine-payment/) | [ ] |
| 3.6 | Settlement & Escrow | [settlement-and-escrow](https://aiweb3.school/zh/handbook/bridge/settlement-and-escrow/) | [ ] |
| 3.7 | Agent Identity | [agent-identity](https://aiweb3.school/zh/handbook/bridge/agent-identity/) | [ ] |
| 3.8 | Agent Trust & Reputation | [agent-trust-and-reputation](https://aiweb3.school/zh/handbook/bridge/agent-trust-and-reputation/) | [ ] |
| 3.9 | Verifiable AI | [verifiable-ai](https://aiweb3.school/zh/handbook/bridge/verifiable-ai/) | [ ] |
| 3.10 | AI Security | [ai-security](https://aiweb3.school/zh/handbook/bridge/ai-security/) | [ ] |
| 3.11 | AI Privacy | [ai-privacy](https://aiweb3.school/zh/handbook/bridge/ai-privacy/) | [ ] |
| 3.12 | Governance AI | [governance-ai](https://aiweb3.school/zh/handbook/bridge/governance-ai/) | [ ] |

**里程碑**：完成 1 个 Bridge 主题实验（记入 `experiments/`）。

---

## Phase 4：前沿探索（Tracks）与 Hackathon

| Track | 链接 | 是否主攻 |
|-------|------|----------|
| 智能体商业 | [agentic-commerce](https://aiweb3.school/zh/handbook/tracks/agentic-commerce/) | [ ] |
| 钱包与权限 | [wallet-permission](https://aiweb3.school/zh/handbook/tracks/wallet-permission/) | [ ] |
| AI 安全 | [ai-security track](https://aiweb3.school/zh/handbook/tracks/ai-security/) | [ ] |
| 治理 | [governance](https://aiweb3.school/zh/handbook/tracks/governance/) | [ ] |
| 开发工具 | [dev-tooling](https://aiweb3.school/zh/handbook/tracks/dev-tooling/) | [ ] |
| 开放赛道 | [open-track](https://aiweb3.school/zh/handbook/tracks/open-track/) | [ ] |

| # | 任务 | 状态 |
|---|------|------|
| 4.1 | 在 `hackathon/` 写选题与 MVP 范围 | [ ] |
| 4.2 | MVP 开发 → `experiments/` 或独立 repo | [ ] |
| 4.3 | 交付物归档到 `submissions/` | [ ] |

**里程碑**：至少 1 次 Hackathon / 项目展示；README 可链到 demo。

---

## WCB 与打卡节奏

- **每日**：打开 [WCB Learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning) 确认当日任务与打卡入口。
- **打卡**：Agent 生成草稿 → 你手动在 WCB 提交 → 把提交链接写回 `daily/YYYY-MM-DD.md`。
- **提醒**：早上 / 晚上 / 未设置（在 profile.md 填写）。

---

## 进度追踪

| Phase | 开始 | 完成 | 完成度 |
|-------|------|------|--------|
| Phase 0 | 2026-05-18 | — | 进行中 |
| Phase 1 | — | — | 0% |
| Phase 2 | — | — | 0% |
| Phase 3 | — | — | 0% |
| Phase 4 | — | — | 0% |

---

> 轻量优先：先让今天能行动，再按周回顾迭代本文件。
