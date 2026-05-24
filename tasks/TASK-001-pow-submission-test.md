# 任务记录 — PoW 提交测试

## 基本信息

| 字段 | 内容 |
|------|------|
| 任务编号 | TASK-001 |
| 所属 Phase | Phase 0 |
| 开始日期 | 2026-05-24 |
| 完成日期 | 2026-05-24 |
| 耗时 | 1 小时 |
| 状态 | 已完成 |

## 任务描述

完成一次最小 Proof-of-Work 提交测试，确认理解 WCB 任务提交入口、证明格式和审核流程。不要求复杂产出——只需要一个测试性质的公开链接或文字说明，证明已经知道如何提交任务。

## 完成标准

- [x] 理解 WCB 任务提交流程
- [x] 生成一份可验证的 proof 产出
- [x] 记录提交入口、proof 类型、审核者需看到的信息
- [x] 无敏感信息泄露

## 产出物

| 类型 | 链接 / 路径 |
|------|-------------|
| 学习产物 Demo | `experiments/concept-explorer/`（本地运行：`python -m http.server 8080`） |
| 概念数据 | [concepts.js](../../experiments/concept-explorer/concepts.js) — 9 个 AI/Web3 概念，含解释、类比、测验 |
| 交互逻辑 | [app.js](../../experiments/concept-explorer/app.js) — 搜索、详情、测验、结果全流程 |
| 样式 | [style.css](../../experiments/concept-explorer/style.css) — 暗色响应式主题 |

## 提交说明

### 提交入口

WCB Learning 页面：https://web3career.build/zh/programs/AI-Web3-School#tab=learning
→ 找到对应任务卡片 → 点击「提交」→ 填写 proof 链接和说明。

### Proof 类型

本次使用 **GitHub repo / 本地 demo** 作为 proof。后续正式任务可根据内容使用：
- GitHub repo 链接（代码类任务）
- 公开笔记链接（学习类任务）
- 截图 / 录屏（UI 交互类任务）
- tx hash（链上交互类任务，仅保留 hash，不暴露私钥）
- 合约地址（部署类任务）

### 审核者需要看到什么信息

1. **它解决什么学习问题** — 帮助初学者通过类比和测验理解 AI/Web3 概念
2. **用户如何与它交互** — 搜索 → 点击概念 → 阅读解释 → 完成测验 → 查看得分
3. **输入示例和输出示例** — 输入「RAG」→ 输出卡片：一句话解释 + 生活类比 + 技术要点 + 3 道测验题
4. **哪部分由 AI 生成，哪部分人工修改/验证** — 概念解释和 JS 结构由 AI 辅助生成（~70%），人工验证技术准确性、修正不准确的类比、优化中文表述、修复边界条件（~30%）
5. **限制与下一步改进** — 静态数据无 AI API；概念数量有限；无持久化

## 过程记录

1. 初始化 concept-explorer 目录，AI 生成 HTML + CSS 脚手架
2. AI 辅助生成 9 个概念的初稿数据
3. 人工验证每个概念的技术准确性：
   - ZK Proof 类比从「保险箱」改为「数独验证」（更准确传达零知识证明的本质）
   - 确认 tokenization 在 AI 和 Web3 两个领域的双关语义覆盖正确
4. 手动测试所有交互路径，修复边界条件

## 学习收获

- 理解了 WCB 的 task → proof → review 提交流程
- Proof 的核心不是复杂度，而是**可验证性**——审核者需要能独立判断任务是否完成
- AI 辅助生成内容需要人工验证技术准确性，尤其是密码学概念容易类比偏差

---

> 模板来源：`templates/task-note.md`
