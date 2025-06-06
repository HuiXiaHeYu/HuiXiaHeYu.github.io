## 各类GPU

| 类别                    | 主要系列           | 应用场景                                       | 典型显卡           |
| ----------------------- | ------------------ | ---------------------------------------------- | ------------------ |
| 入门级数据中心显卡      | T系列              | 云推理服务、虚拟化工作站、轻量化 AI 推理任务   | T4                 |
| 消费级显卡              | RTX系列 (20/30/40) | 游戏、图形渲染、轻量级深度学习、AI 推理        | RTX 3090、RTX 4090 |
| 专业图形显卡            | L 系列             | 数据可视化、AI推理、工作站任务                 | L40、L20、L4       |
| 数据中心显卡            | A系列(原版)        | 大规模深度学习训练、推理、高性能计算（HPC)     | A100、A10、A4      |
| 高端数据中心显卡        | H系列(原版)        | 超大规模深度学习训练、推理、低精度计算 (FP8)   | H100、H200         |
| 数据中心显卡 (中国特供) | A800、H800 系列    | 针对中国市场的特供显卡，调整性能以符合出口限制 | A800、H800         |

### T系列（入门级数据中心）

设计目标：针对低功耗应用场景，适合大规模部署
主要功能：

- 低功耗设计：功耗通常低于70W，适合节能型数据中心
- 推理优化：性能足够支持轻量推理任务

典型显卡：

- T4：云推理和虚拟化工作站的主力显卡
- 适用场景：轻量推理、虚拟化桌面环境

### RTX系列（消费级）

设计目标：面向消费者，优化游戏、图形渲染，同时具备基础A!加速功能
主要功能：

- 光线追踪(RT Core)：优化图形渲染和实时光线追踪
- Tensor Core：支持轻量深度学习和推理任务

典型显卡：

- RTX3090/4090：性能强大的消费级显卡，适合游戏和中小规模深度学习

适用场景：游戏开发、轻量深度学习、图形渲染

### L系列（专业图形）

设计目标：专业图形显卡，适合AI推理、数据可视化和图形工作站任务
主要功能：

- 高显存容量：适合需要大数据吞吐的AI和可视化任务
- 能效优化：适合数据中心的高效部署

典型显卡：

- L40：面向中国市场的专业显卡，适合推理任务
- L20：性能略低的版本，适合轻量任务

适用场景：AI推理、虚拟化工作站、数据可视化

### A系列（数据中心，原版）

设计目标：专为大规模深度学习训练和推理设计，适合数据中心和高性能计算
主要功能：

- HBM2e高带宽显存：提供更高的数据吞吐能力
- Tensor Core：优化矩阵计算，适合深度学习模型的训练和推理

典型显卡：

- A100：支持大模型训练和分布式深度学习
- A10/A4：性能稍低，适合中小规模任务

适用场景：深度学习训练、高性能计算(HPC)

### H系列（数据中心，高端，原版）

设计目标：NVDA的最高性能显卡系列，面向超大规模深度学习训练和推理任务
主要功能：

- 第四代Tensor Core：支持低精度FP8和高效的分布式训练
- HBM3显存：显存带宽更高，达到2,000GB/s(H100)或更高(H200)
- NVLink和NVSwitch：实现多GPU的全互联

典型显卡：

- H100：支持GPT-3/GPT-4等超大模型训练
- H200：性能进一步提升，适合更复杂的任务

适用场景：超大规模AI模型的分布式训练、推理和HPC

### A800和H800系列（数据中心，特供）

设计目标：针对中国市场的特供版显卡，性能略低于原版以符合出口管制

主要功能：

- 降低NVLink和显存带宽：符合国际出口限制
- 保持核心计算能力：CUDA核心和Tensor Core数量保持不变

典型显卡：

- A800：面向训练和推理，性能接近A100
- H800：面向大规模深度学习任务，接近H100性能

适用场景：中国市场的大规模AI训练与推理

## 性能天梯图

![output](./GPU%E6%8C%87%E5%8D%97.assets/output.png)

## 场景推荐

| 类别         | 内容                                                         |
| ------------ | ------------------------------------------------------------ |
| **团队类型** | **个人学习 /小型科研团队**                                   |
| 需求分析     | 推理 & 微调：7B~14B；模型训练：0.2B左右； <br />并发数：1～5；数据量：GB；显存需求：35GB |
| 基础配置（   | GPU：2080 Ti(22GB)*2；CPU：12代i5；<br />内存：64GB；硬盘：2TB；价格：14,000元 |
| 进阶配置（   | GPU：3090*2；CPU：12代i7；<br />内存：64GB；硬盘：2TB；价格：25,000元 |
| **团队类型** | **中小型科研团队/初创公司**                                  |
| 需求分析     | 推理 & 微调：14B～30B；模型训练：2B左 右；<br />并发数：5～20；数据量：TB；显存需求：80GB |
| 基础配置     | GPU：2080 Ti (22GB)*4；CPU：Intel至强W3；<br />内存：64GB；硬盘：2TB；价格：30,000元 |
| 进阶配置     | GPU：3090*4；CPU：Intel至强 W5；<br />内存： 128GB；硬盘：2TB；价格：47,000元 |
| **团队类型** | **大型科研团队 /中大型公司**                                 |
| 需求分析     | 推理 & 微调：70B；模型训练：7B左右；<br />并发数：50～200；数据量：10TB；显存需求：140GB |
| 基础配置     | GPU：L20 (48GB)*4；CPU：Intel至强 6133；<br />内存：128GB；硬盘：10TB；价格：140,000元 |
| 进阶配置     | GPU：A100 (40GB)*4；CPU：Intel C621；<br />内存：128GB；硬盘：10TB；价格：180,000元 |