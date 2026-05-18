# AI × Web3 School — Cohort 0

个人学习仓库 · 学习日志 · 任务证明 · 实验记录 · 每日打卡 · Handbook 反馈 · Hackathon 准备

## 简介

**AI × Web3 School** 是一个面向 builders 的开源学习计划，由 LXDAO 与 ETHPanda 共同发起。Handbook 把 AI 与 Web3 真正交叉时会遇到的问题拆清楚：模型能力、Agent 工作流、工具调用、钱包、签名、支付、身份、权限、安全执行、治理协作和可验证记录。

本仓库是你的 **proof-of-work workspace**：记录学习过程、任务证明与实验，而非替代你亲自完成学习与平台提交。

## 重要链接

| 资源 | 链接 |
|------|------|
| AI × Web3 School 官网 | [aiweb3.school](https://aiweb3.school) |
| Learning Agent 启动 Prompt | [learning-agent.zh.txt](https://aiweb3.school/learning-agent.zh.txt) |
| Handbook（中文） | [aiweb3.school/zh/handbook](https://aiweb3.school/zh/handbook/) |
| WCB 课程 / Bootcamp | [web3career.build — AI-Web3-School](https://web3career.build/zh/programs/AI-Web3-School) |
| WCB Learning 页面 | [Learning Tab](https://web3career.build/zh/programs/AI-Web3-School#tab=learning) |
| WCB Agent API 文档 | [llms.txt](https://web3career.build/llms.txt) |

## 隐私提醒

> 本仓库默认为 **公开 (public)**。请勿提交：
>
> - 私钥、助记词、API Key、密码
> - 未公开联系方式、内部会议链接
> - 他人个人数据
>
> 链上证明建议只保留 **tx hash**；实验使用测试网地址与测试用 API Key。WCB Secret API Key 仅放在本地环境变量（如 `WCB_AGENT_SECRET_API_KEY`），不要写入本仓库。

## 目录结构

```text
ai-web3-school-cohort-0/
├── README.md                  # 本文件 — 总览与导航
├── profile.md                 # 学习者档案（背景、目标、节奏）
├── learning-plan.md           # 学习计划与里程碑
├── daily/                     # 每日打卡（YYYY-MM-DD.md）
├── tasks/                     # 任务记录与完成证明
├── experiments/               # 实验项目（每实验一子目录）
├── handbook-feedback/         # Handbook 反馈、勘误与建议
├── hackathon/                 # Hackathon 选题、方案与准备
├── submissions/               # 正式作业 / 项目交付物
└── templates/
    ├── daily-note.md          # 每日打卡模板
    └── task-note.md           # 任务记录模板
```

## 快速开始

1. 编辑 [profile.md](profile.md)，确认 AI / Web3 / 编程基础与每日可投入时间。
2. 按 [learning-plan.md](learning-plan.md) 与 [Handbook](https://aiweb3.school/zh/handbook/) 调整路径。
3. 每日：复制 `templates/daily-note.md` → `daily/YYYY-MM-DD.md`，生成打卡草稿后，到 [WCB Learning](https://web3career.build/zh/programs/AI-Web3-School#tab=learning) **手动提交**。
4. Handbook 问题写入 `handbook-feedback/`，见该目录 [README](handbook-feedback/README.md)。

## 许可

学习笔记归学习者所有；可开源分享的代码与文档请自行选择许可证。

---

> Agent 辅助生成与提醒；正式打卡与 WCB 提交以平台为准。
