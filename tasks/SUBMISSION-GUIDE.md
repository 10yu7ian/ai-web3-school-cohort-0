# 提交指引 — Agent 配置与运行记录

## 你要提交什么

**任务**：提交配置记录或运行记录（Phase 0 · PoW 提交测试的配套证明）

**Proof 链接**：`https://github.com/10yu7ian/ai-web3-school-cohort-0/blob/main/tasks/TASK-002-agent-config-record.md`

## 提交步骤

### 第 1 步：先把本地文件 push 到 GitHub

在仓库根目录执行：

```bash
git add profile.md learning-plan.md daily/2026-05-24.md tasks/
git commit -m "Phase 0: profile画像确认, Phase 0进度50%, Day2打卡, TASK-002 Agent运行记录"
git push origin main
```

### 第 2 步：在 WCB 提交

1. 打开 [WCB Learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning)
2. 找到「提交配置记录或运行记录」对应任务卡片
3. 点击「提交」
4. Proof 链接填入：`https://github.com/10yu7ian/ai-web3-school-cohort-0/blob/main/tasks/TASK-002-agent-config-record.md`
5. 提交说明可复制下方文本：

---

**提交说明（复制到 WCB）**：

```
【Agent 配置与运行记录 — TASK-002】

1. 选择的 Agent / AI 工具
   Claude Code（Anthropic 官方 CLI），运行于 VSCode 扩展环境，角色为 AI × Web3 School Learning Agent。

2. 让 Agent 完成的学习任务
   - 分析仓库现状，识别 profile 空模板、Phase 0 未推进、打卡缺失
   - 收集画像信息并填入 profile.md（学生 / AI 熟悉 / Web3 基础 / 晚上 1-2h）
   - 更新 learning-plan.md Phase 0 进度至 50%
   - 生成 5/24 每日打卡草稿（含 WCB 提交文本块）
   - 确认 Handbook feedback 流程完整性
   - 生成 TASK-002 本记录

3. 关键 Prompt
   "请作为我的 AI × Web3 School Learning Agent，先阅读启动 Prompt...帮我初始化个人学习计划、GitHub 学习仓库、每日打卡草稿和 Handbook feedback 流程。涉及创建 repo、写文件、commit、push、WCB 提交等动作，必须先让你人工确认。涉及钱包签名、转账、授权、合约写入、API Key、token、私钥和助记词的操作，不能由 Agent 自动执行或接触敏感信息。"

4. 成功输出
   - profile.md：完整学习者档案（90 行）
   - learning-plan.md：Phase 0 任务勾选 + 进度行更新
   - daily/2026-05-24.md：今日打卡草稿（含三层路径 + WCB 文本块）
   - tasks/TASK-002-agent-config-record.md：本记录
   - 主动发现并报告 aiweb3.school SSL 不可访问问题（尝试 5 种方式后如实告知）

5. 人工复核记录
   - Agent 展示 profile.md 变更预览（表格对比「当前值 → 更新值」），用户回复「可以的」后才写入
   - Agent 最初生成了 5/19~5/23 共 5 天补录草稿，用户要求删除，从 5/24 开始（修正）
   - Agent 列出无法替代的人工动作：WCB 打卡、commit/push、钱包操作

完整记录：https://github.com/10yu7ian/ai-web3-school-cohort-0/blob/main/tasks/TASK-002-agent-config-record.md
```

### 第 3 步：把 WCB 提交结果写回仓库

提交成功后，在 `daily/2026-05-24.md` 的 WCB 提交记录表中填入提交链接。
