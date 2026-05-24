/**
 * Concept data for AI/Web3 Concept Explorer.
 *
 * === AI 辅助生成 vs 人工修改 ===
 * AI 生成部分：概念的一句话说、生活类比、技术要点、应用场景的初稿，
 *   以及测验题目和选项。
 * 人工修改部分：验证技术准确性、调整中文表述使其更易理解、
 *   替换不准确的类比、补充遗漏的要点、调整题目难度梯度。
 *   ZK Proof 的类比从「保险箱」改为「数独」因为后者更准确传达了
 *   「证明你知道而不透露解」的本质。
 */

const concepts = [
  // ========== AI Concepts ==========
  {
    id: "rag",
    name: "RAG 检索增强生成",
    enName: "Retrieval-Augmented Generation",
    tag: "ai",
    oneLiner: "让大模型在回答前先翻资料库查资料，而不是只靠训练时记住的知识。",
    analogy: "想象你要写一篇关于量子计算的论文。如果你闭卷写，只能靠记忆，可能记错细节。RAG 的做法是：先让你去图书馆翻书找到相关章节，再根据这些书的内容来写——这样准确得多。",
    keyPoints: [
      "检索 → 增强 → 生成三个步骤流水线作业",
      "知识库可以随时更新，不需要重新训练模型",
      "有效减少「幻觉」——编造不存在的事实",
      "答案可以追溯到具体来源文档（可解释性更强）"
    ],
    useCases: [
      "企业知识库问答：上传内部文档，员工用自然语言搜索",
      "客服机器人：从产品手册中检索对应内容再回复",
      "法律/医疗辅助：检索专业文献后给出有据可查的回答"
    ],
    relatedConcepts: ["prompt-engineering", "embedding", "fine-tuning"],
    quiz: [
      {
        question: "RAG 中的 \"R\" 指的是什么?",
        options: ["Reasoning 推理", "Retrieval 检索", "Ranking 排序", "Reinforcement 强化"],
        answer: 1,
        explanation: "R = Retrieval（检索），先从知识库中找到相关文档。"
      },
      {
        question: "RAG 相比纯粹依赖模型训练记忆的优势是什么?",
        options: ["生成速度更快", "知识可以实时更新，不需要重新训练", "模型参数更多", "推理成本更低"],
        answer: 1,
        explanation: "RAG 的核心优势：知识库独立于模型，更新文档即刻生效，无需重新训练模型。"
      },
      {
        question: "以下哪个场景最适合用 RAG?",
        options: ["写一首诗", "回答「公司最新的报销政策是什么」", "翻译一段文字", "生成一张图片"],
        answer: 1,
        explanation: "企业文档问答是典型的 RAG 场景——需要基于特定知识库给出准确回答。"
      }
    ]
  },

  {
    id: "transformer",
    name: "Transformer 架构",
    enName: "Transformer Architecture",
    tag: "ai",
    oneLiner: "现代大语言模型（如 GPT）的底层神经网络架构，核心机制是「自注意力」，让模型理解词语之间的关联。",
    analogy: "读一句话「银行账户被冻结了」——你知道「冻结」和「账户」关系更紧密，和「银行」也有联系。Transformer 的注意力机制做类似的事：给每个词和其他词的关系打分，分数越高越注意。",
    keyPoints: [
      "核心创新：自注意力（Self-Attention）机制捕捉全局上下文",
      "取代了之前的 RNN/LSTM，支持并行训练，大幅提升效率",
      "由编码器（Encoder）和解码器（Decoder）组成（有些只用解码器，如 GPT）",
      "位置编码让模型知道词的顺序"
    ],
    useCases: [
      "GPT 系列模型的基础架构",
      "机器翻译（Google Translate 已全面采用）",
      "代码补全（如 GitHub Copilot 的底层模型）"
    ],
    relatedConcepts: ["embedding", "fine-tuning", "rag"],
    quiz: [
      {
        question: "Transformer 的核心机制是什么?",
        options: ["卷积（Convolution）", "自注意力（Self-Attention）", "循环连接（Recurrence）", "池化（Pooling）"],
        answer: 1,
        explanation: "Self-Attention 让模型理解每个词和句中其他所有词的关系。"
      },
      {
        question: "Transformer 相比传统 RNN 的主要优势是什么?",
        options: ["更少的参数量", "支持并行训练，效率更高", "不需要训练数据", "只在 CV 领域有效"],
        answer: 1,
        explanation: "RNN 必须顺序处理输入，Transformer 可以并行处理整个序列，训练速度大幅提升。"
      },
      {
        question: "GPT 使用了 Transformer 的哪一部分?",
        options: ["仅编码器（Encoder-only）", "仅解码器（Decoder-only）", "编码器+解码器", "都不用"],
        answer: 1,
        explanation: "GPT 是 Decoder-only 架构，专门用于生成文本。BERT 则是 Encoder-only。"
      }
    ]
  },

  {
    id: "embedding",
    name: "向量嵌入",
    enName: "Vector Embedding",
    tag: "ai",
    oneLiner: "将文字、图片等转化为一串数字（向量），语义相近的内容在数学空间中距离也近。",
    analogy: "想象一张地图：意思相近的词就像地理位置临近的城市。「猫」和「猫咪」几乎在同一个位置；「猫」和「狗」虽然不同，但比「猫」和「路由器」要近得多。向量嵌入就是给每个词在地图上分配一个坐标。",
    keyPoints: [
      "将高维稀疏的文本转换为低维稠密向量",
      "语义相似度 ≈ 向量之间的余弦距离",
      "是 RAG 检索步骤的核心技术",
      "跨模态嵌入：文字和图片可以映射到同一个向量空间"
    ],
    useCases: [
      "语义搜索：搜索「怎么跑得快」能找到「提升跑步速度的方法」",
      "以图搜图：上传一张图片找相似图片",
      "AI 推荐系统：根据用户行为的向量找相似内容"
    ],
    relatedConcepts: ["rag", "transformer"],
    quiz: [
      {
        question: "向量嵌入的「距离近」意味着什么?",
        options: ["计算速度快", "语义上相近", "参数数量少", "存储空间小"],
        answer: 1,
        explanation: "向量空间中距离越近，语义越相似。这是语义搜索的基础。"
      },
      {
        question: "以下哪对词在嵌入空间中距离最近?",
        options: ["苹果 vs 汽车", "国王 vs 女王", "跑步 vs 桌子", "快乐 vs 冰箱"],
        answer: 1,
        explanation: "「国王」和「女王」语义最接近，在向量空间中距离也最近。"
      },
      {
        question: "嵌入在 RAG 中的作用是什么?",
        options: ["生成最终回答", "将用户问题和知识库文档都转为向量，用于相似度检索", "替换语言模型", "压缩文档大小"],
        answer: 1,
        explanation: "嵌入将查询和文档都转为向量，通过向量相似度找到最相关的文档。"
      }
    ]
  },

  {
    id: "fine-tuning",
    name: "模型微调",
    enName: "Fine-Tuning",
    tag: "ai",
    oneLiner: "在预训练模型的基础上，用特定领域的数据再做少量训练，让模型在该领域表现更好。",
    analogy: "一个会做各种菜的通才厨师（预训练大模型），你给他培训三天意大利菜（微调），他就成了意大利菜专家。他没有忘记怎么做其他菜，但做意大利菜的水平明显提高了。",
    keyPoints: [
      "需要高质量标注数据（通常几百到几千条）",
      "相比从头训练，成本低几个数量级",
      "LoRA 等参数高效微调方法可以只更新少量参数",
      "过度微调可能导致「灾难性遗忘」——丢失原有能力"
    ],
    useCases: [
      "让通用模型学会特定领域的术语和规范（如法律、医疗）",
      "定制模型的回答风格（如更正式或更幽默）",
      "让模型学会特定格式输出（如 JSON schema）"
    ],
    relatedConcepts: ["rag", "prompt-engineering", "transformer"],
    quiz: [
      {
        question: "微调和 RAG 的主要区别是什么?",
        options: ["微调更快", "微调改变模型本身，RAG 不改模型只加外部知识", "RAG 需要更多 GPU", "微调不能定制风格"],
        answer: 1,
        explanation: "微调是「修改模型参数」，RAG 是「给模型查阅外部资料」。两者也可以结合使用。"
      },
      {
        question: "微调通常需要什么?",
        options: ["无需任何数据", "高质量的标注数据", "只能用人手写的数据", "必须上百万条数据"],
        answer: 1,
        explanation: "微调需要高质量标注数据，但通常几百到几千条就足够，不需要百万级别。"
      },
      {
        question: "什么是「灾难性遗忘」?",
        options: ["模型忘记如何生成文字", "微调后在原有通用能力上大幅退化", "训练数据丢失", "GPU 显存溢出"],
        answer: 1,
        explanation: "过度微调可能导致模型在新任务上变好，但在原有通用能力上表现下降。"
      }
    ]
  },

  {
    id: "prompt-engineering",
    name: "提示工程",
    enName: "Prompt Engineering",
    tag: "ai",
    oneLiner: "设计和优化向 AI 输入的提示词，以获得更准确、更有用的输出。",
    analogy: "你让一个非常聪明但不太了解背景的实习生做调研。如果你说「帮我查资料」，他可能做得很泛。如果你说「帮我找 2020-2024 年中国新能源汽车销量前三的品牌，对比它们的市场策略，用表格呈现」，他就会给你精准的结果。提示工程就是学会怎么给「实习生」写清楚的指令。",
    keyPoints: [
      "核心原则：明确、具体、提供上下文和输出格式要求",
      "常见技巧：角色设定、思维链（CoT）、少样本（Few-shot）、分步思考",
      "提示词对模型输出的质量影响巨大",
      "不同模型对同一提示词的反应可能不同，需要迭代优化"
    ],
    useCases: [
      "让 AI 扮演特定角色（如代码审查员、面试官）",
      "链式思维引导：让 AI 逐步推理而非直接给答案",
      "结构化输出：让 AI 以 JSON/表格格式返回结果"
    ],
    relatedConcepts: ["rag", "fine-tuning"],
    quiz: [
      {
        question: "什么是「思维链」（Chain of Thought）?",
        options: ["一种模型架构", "让 AI 展示逐步推理过程，提高复杂问题准确率", "一种训练方法", "一种数据格式"],
        answer: 1,
        explanation: "思维链是在提示中加入「让我们逐步思考」等内容，引导模型分步推理。"
      },
      {
        question: "以下哪个是好的提示词?",
        options: ["帮我写点东西", "用 300 字介绍区块链的核心思想，包含共识机制和去中心化两个要点，目标读者是完全不懂技术的人", "写", "你能帮我吗"],
        answer: 1,
        explanation: "好的提示词具体、有目标读者、有结构要求、有字数限制。"
      },
      {
        question: "Few-shot prompting 是什么意思?",
        options: ["少用 GPU 训练", "在提示中提供几个示例，让 AI 按示例格式回答", "快速提问", "用很少的词汇写提示"],
        answer: 1,
        explanation: "Few-shot = 给出几个（通常 2-5 个）输入-输出示例，让模型理解你期望的格式和风格。"
      }
    ]
  },

  // ========== Web3 Concepts ==========
  {
    id: "smart-contract",
    name: "智能合约",
    enName: "Smart Contract",
    tag: "web3",
    oneLiner: "一段运行在区块链上的自动执行程序，满足条件就自动触发，不需要中间人。",
    analogy: "自动贩卖机就是现实世界中的「智能合约」。你投币（满足条件），机器自动出货（执行结果）。不需要店员在中间收钱、找零、拿货。智能合约把这个逻辑搬到了区块链上：代码就是规则，执行结果不可篡改。",
    keyPoints: [
      "代码即规则：合约条款写在代码里，自动执行，无法反悔",
      "部署后不可篡改（如以太坊），升级需要通过代理模式等设计",
      "Gas 费：执行合约需要支付算力费用",
      "Solidity 是以太坊最主流的智能合约语言"
    ],
    useCases: [
      "DeFi 借贷：抵押 ETH 自动借出稳定币，无需银行审批",
      "NFT 铸造与版税：每次转售自动给创作者分账",
      "DAO 治理：投票结果自动执行提案，无需人工执行"
    ],
    relatedConcepts: ["dao", "layer-2", "tokenization"],
    quiz: [
      {
        question: "智能合约部署到以太坊后可以修改吗?",
        options: ["随时可以修改", "不能直接修改，但可以通过代理模式升级", "只有创始人能修改", "需要所有用户投票同意才能修改"],
        answer: 1,
        explanation: "智能合约代码本身不可篡改，但可以通过「代理合约 + 逻辑合约」的模式实现升级。"
      },
      {
        question: "执行智能合约需要支付什么?",
        options: ["月费订阅", "Gas 费（以太坊计算费用）", "免费", "年费"],
        answer: 1,
        explanation: "每次执行都需要支付 Gas 费，作为对网络节点计算资源的补偿。"
      },
      {
        question: "智能合约的「不可篡改」带来以下哪个问题?",
        options: ["无法升级或修复已发现的漏洞", "交易速度太慢", "无法存储数据", "不能处理转账"],
        answer: 0,
        explanation: "不可篡改意味着合约中的 bug 无法直接修复，历史上曾因地导致重大损失（如 DAO 事件）。"
      }
    ]
  },

  {
    id: "dao",
    name: "DAO 去中心化自治组织",
    enName: "Decentralized Autonomous Organization",
    tag: "web3",
    oneLiner: "一种通过智能合约和代币投票来实现集体决策的组织形式，没有 CEO，规则公开透明。",
    analogy: "想象一个「数字化的小区业主委员会」。每个业主（持币者）对小区事务有投票权，投票通过了就自动执行（比如换物业公司），不需要等某个主任签字。所有投票记录公开可查，谁也做不了手脚。",
    keyPoints: [
      "治理代币 = 投票权，通常按持有量加权",
      "提案 → 投票 → 自动执行是标准流程",
      "所有决策记录上链，公开透明",
      "挑战：投票参与率低、大户操控、法律地位不明确"
    ],
    useCases: [
      "协议治理：Uniswap 社区投票决定手续费分配",
      "投资型 DAO：一群人众筹收购 NFT 或艺术品",
      "社交 DAO：Friends With Benefits 等社区组织"
    ],
    relatedConcepts: ["smart-contract", "tokenization"],
    quiz: [
      {
        question: "DAO 的投票权通常如何分配?",
        options: ["每个人一票", "按持有治理代币的数量加权", "随机分配", "由创始团队指定"],
        answer: 1,
        explanation: "DAO 通常采用代币加权投票（1 token = 1 vote），但也存在各种变体。"
      },
      {
        question: "DAO 相比传统公司的优势是什么?",
        options: ["不需要做决策", "规则透明、自动执行、不受单一个体控制", "没有成本", "完全不需要人参与"],
        answer: 1,
        explanation: "DAO 的核心价值是透明度高、自动执行决策、抗审查和去中心化治理。"
      },
      {
        question: "DAO 面临的主要挑战不包括?",
        options: ["投票参与率低", "智能合约代码风险", "完全没有争议", "法币出入金合规问题"],
        answer: 2,
        explanation: "DAO 有大量挑战：参与率低、治理攻击、法律地位模糊、协调成本高等。"
      }
    ]
  },

  {
    id: "zk-proof",
    name: "零知识证明",
    enName: "Zero-Knowledge Proof",
    tag: "web3",
    oneLiner: "一种密码学方法：我可以向你证明我知道某个秘密，但不透露秘密本身。",
    analogy: "我给你看一个数独题，你说你解出来了。我不想让你直接看答案，但也想验证你没骗我。我可以遮住数字，只让你看到每一行、每一列、每个九宫格里的数字颜色相同——如果确实是完整解答，这些区域不会重复颜色。我验证了你的解法，却没有看到任何一个具体数字。",
    keyPoints: [
      "三个性质：完备性（真命题可证明）、可靠性（假命题无法证明）、零知识（不泄露秘密）",
      "zk-SNARK 和 zk-STARK 是两种主流实现，后者不需要可信设置",
      "在区块链上的核心应用：隐私交易和扩容（ZK Rollup）",
      "数学基础：多项式承诺、同态加密等密码学工具"
    ],
    useCases: [
      "隐私转账：证明你有足够余额但不透露余额和交易金额",
      "身份验证：证明你年满 18 岁但不透露具体出生日期",
      "ZK Rollup：用零知识证明确认一批交易有效，压缩上链数据"
    ],
    relatedConcepts: ["layer-2", "smart-contract"],
    quiz: [
      {
        question: "零知识证明「零知识」的意思是?",
        options: ["不需要任何密码学知识", "验证者可以确信证明为真，但不知道具体内容", "所有人都能看到交易详情", "不需要计算能力"],
        answer: 1,
        explanation: "零知识 = 验证者获得「命题为真」的确定性，但不获得任何关于秘密的额外信息。"
      },
      {
        question: "zk-SNARK 和 zk-STARK 的主要区别?",
        options: ["SNARK 更快，STARK 更安全", "STARK 不需要可信设置，且抗量子计算", "完全一样", "SNARK 是免费使用的"],
        answer: 1,
        explanation: "zk-STARK 的核心优势是不需要可信设置，且具有抗量子计算攻击的特性。"
      },
      {
        question: "ZK Rollup 利用零知识证明做什么?",
        options: ["生成新的代币", "证明大量交易有效，只把证明结果上链", "隐藏所有用户的地址", "替代共识机制"],
        answer: 1,
        explanation: "ZK Rollup 用零知识证明来验证一批交易的有效性，只把证明数据上链，大幅降低链上的数据量。"
      }
    ]
  },

  {
    id: "layer-2",
    name: "Layer 2 扩容",
    enName: "Layer 2 Scaling",
    tag: "web3",
    oneLiner: "在区块链主网（Layer 1）之上构建的扩展方案，处理交易更快更便宜，同时利用 L1 的安全性。",
    analogy: "想象主路（Layer 1 = 以太坊）很堵，每笔交易都很贵。Layer 2 像是建了一条高架桥：车在高架上跑得又快又便宜，但高架桥的桥墩和基础还是建在主干道上。如果高架桥出问题，主路的记录仍然是最权威的。",
    keyPoints: [
      "核心思路：把计算放到链下，只把最终结果和数据发布回 L1",
      "两大类：Optimistic Rollup（乐观假设有效）和 ZK Rollup（用证明确认有效）",
      "L2 继承 L1 的安全性，但交易费降低 10-100 倍",
      "以太坊 L2 生态：Arbitrum、Optimism、Base、zkSync 等"
    ],
    useCases: [
      "日常 DeFi 交易：在 L2 上做 Swap 手续费只需几美分",
      "链上游戏：高频小额交易在 L2 上可行",
      "社交应用：L2 让小额打赏/支付变得经济上可行"
    ],
    relatedConcepts: ["zk-proof", "smart-contract"],
    quiz: [
      {
        question: "Layer 2 和 Layer 1 的关系是什么?",
        options: ["L2 完全独立于 L1", "L2 在 L1 之上运行，把批量交易的结果发布回 L1 以确保安全", "L2 替代 L1", "L2 比 L1 更安全"],
        answer: 1,
        explanation: "L2 把大量计算放在链下，但最终数据发布回 L1，继承 L1 的安全性。"
      },
      {
        question: "Optimistic Rollup 的名称来源是什么?",
        options: ["它能优化所有交易", "它「乐观」地假设交易是有效的，只在有人质疑时才验证", "创始人很乐观", "它不需要任何证明"],
        answer: 1,
        explanation: "Optimistic Rollup 默认假设交易有效（乐观），设置挑战窗口期，期间任何人可以提交欺诈证明来推翻无效交易。"
      },
      {
        question: "使用 L2 的最大好处是什么?",
        options: ["更安全的交易", "大幅降低交易费用和提高速度", "不需要任何代币", "完全匿名"],
        answer: 1,
        explanation: "L2 的最大卖点是费用低（10-100x）和速度快，同时保持较高安全性。"
      }
    ]
  },

  {
    id: "tokenization",
    name: "代币化",
    enName: "Tokenization",
    tag: "both",
    oneLiner: "一种流程，在 AI 领域指把文本拆成最小处理单元；在 Web3 领域指将现实资产在区块链上发行代币。",
    analogy: "在 AI 中：把句子「我爱学习」切成「我」「爱」「学习」三块积木，模型一块一块地理解。在 Web3 中：把一套 1000 万的房子拆成 1000 万个 1 块钱的代币，每个人都可以买一小块。两种都是以更细粒度的方式处理某个东西。",
    keyPoints: [
      "【AI】Token 是 LLM 处理的最小文本单元，不完全等于单词或字",
      "【AI】GPT 系列用 BPE（字节对编码）做 tokenization",
      "【Web3】RWA（现实资产）代币化让房产、艺术品等可分割、可全球交易",
      "【Web3】ERC-20（同质化代币）和 ERC-721（NFT）是最常见的标准"
    ],
    useCases: [
      "【AI】GPT API 按 token 数量计费，理解 token 有助于控制成本",
      "【AI】不同模型有不同 tokenizer，中英文 token 效率差异大",
      "【Web3】房地产代币化：降低投资门槛，全球流动性",
      "【Web3】碳信用代币化：链上透明交易碳排放额度"
    ],
    relatedConcepts: ["smart-contract", "embedding"],
    quiz: [
      {
        question: "AI 中的 Token 大约等于什么?",
        options: ["一个完整的句子", "一个最小处理单元，约等于 0.75 个英文单词", "一个段落", "一个文档"],
        answer: 1,
        explanation: "1 token ≈ 0.75 个英文单词。英文中 100 tokens ≈ 75 个单词。中文一个汉字通常是 1-2 个 token。"
      },
      {
        question: "Web3 中的 ERC-20 是什么?",
        options: ["一种 NFT 标准", "同质化代币标准，每个 token 完全相同可互换", "一种支付协议", "一种钱包类型"],
        answer: 1,
        explanation: "ERC-20 是同质化代币标准，意味着每个代币一样、可互换，像美元一样。USDC、UNI 都是 ERC-20。"
      },
      {
        question: "代币化的核心价值是什么?",
        options: ["让东西更贵", "降低门槛、增加流动性、使资产可编程", "隐藏资产信息", "替代传统货币"],
        answer: 1,
        explanation: "代币化让资产的访问门槛降低、交易更便捷、可以被智能合约编程处理。"
      }
    ]
  }
];
