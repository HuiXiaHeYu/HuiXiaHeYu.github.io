## 数据预处理方式

### 去均值（中心化/零均值化）

输入数据的各个维度中心化到0

### 标准化（归一化）

输入数据的各个维度的幅度标准化到同样范围

### PCA/白化

- PCA降维：去掉特征和特征之间的相关性

- 白化是在PCA的基础上，对转换后的

  数据每个特征轴上的幅度进行标准化

## 归一化

### Batch Normalization

> **(N, C, H, W)，在通道C上计算均值和标准差**[:, 0, :, :]->[:, 1, :, :]->[:, 2, :, :]->[:, 3, :, :]->
>
> 对每一批的每一个维度(在CNN中为channel)进行批归一化
>
> 放置位置：卷积之后，激活函数之前
>
> 注：实际推理过程中使用的 $\gamma$ 和 $\beta$ 来自于训练得到

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213164206788.png" alt="image-20241213164206788" style="zoom:67%;" />

1. 求每个训练批次数据的均值
2. 求每个训练批次数据的方差
3. 使用均值和方差对该批次数据标准化，得到0-1分布
4. 尺度变换和偏移：使用标准化之后的 $x$ 乘以 $\gamma$ 调整数值大小，再加上 $\beta$ 增加偏移后得到输出值 $y$ 。【(训练参数)$\gamma$：尺度因子；$\beta$：平移因子】
5. 由于标准化后的 $x$ 基本会被限制在正态分布下，会使得网络的表达能力下降，为了解决这个问题，引入两个模型参数 $\gamma$ 、$\beta$ 进行平移变化

实际使用时可能采用类似momentum动量法中使用的滑动平均来进行计算测试时候的均值和方差
$$
\begin{aligned}&E[x]=E_{B}[\mu_{B}]\\&Var[x]=\frac{m}{m-1}E_{B}\Big[\sigma_{B}^{2}\Big]\quad y=\frac{\gamma}{\sqrt{Var[x]+\varepsilon}}x+\left(\beta-\frac{\gamma E(x)}{\sqrt{Var[x]+\varepsilon}}\right)\end{aligned}
$$
**举例**

假设现在batch_size=8，feature map大小为32*32，feature map数量为10。传统BN参数量：<u>20480</u>，CNN中BN的参数量：<u>20</u>

解：

(8, 10, 32, 32)

32\*32\*8=1024，1024\*10=10240，10240\*2=20480【乘以2是因为有一对参数 $\gamma、\beta$ 】

**总结**

优点：

- 适用于CNN
- 允许使用饱和性激活函数<eg:sigmoid、tanh等>。-->不容易饱和
- 学习率可以设置大点-->加速
- 对模型初始化方式和模型参数取值不敏感-->网络稳定
- 一定的正则化效果，类似Dropout、L1、L2等

缺点：

- 若网络层数深-->训练速度慢
- ==注意：依赖于批次进行训练，所以 batch_size >= 16==

### Layer Normalization

> **(N, C, H, W)，在样本N上计算均值和标准差**[0, :, :, :]->[1, :, :, :]->[2, :, :, :]->[3, :, :, :]->
>
> 在Layer Normalization中，同层神经元输入具有相同的均值和方差，不同层神经元输入具有不同的均值和方差
>
> 在Batch Normalization中，同批样本具有相同的均值和方差，同层的不同神经元输入的是不同的均值和方差

$$
\mu^l=\frac1H\sum_{i=1}^Ha_i^l\quad\sigma^l=\sqrt{\frac1H\sum_{i=1}^H\left(a_i^l-\mu^l\right)^2}
$$

同样的计算完均值和标准差之后进行线性回归来缩放+偏移

**总结**

优点：

- 适用于RNN
- 不受样本批次大小的影响

### Instance Normalization Layer

> **(N, C, H, W)，在每个样本的每个通道(N, C)上计算均值和标准差**[0, 0, :, :]->[0, 1, :, :]->[1, 0, :, :]->[1, 1, :, :]->

$$
y_{tijk}=\frac{x_{tijk}-\mu_{ti}}{\sqrt{\sigma_{ti}^{2}+\epsilon}},\quad\mu_{ti}=\frac{1}{HW}\sum_{l=1}^{W}\sum_{m=1}^{H}x_{tilm},\quad\sigma_{ti}^{2}=\frac{1}{HW}\sum_{l=1}^{W}\sum_{m=1}^{H}(x_{tilm}-mu_{ti})^{2}
$$

**总结**

优点：

- 适用于图像风格化，依赖于每个图像实例
- 不受样本批次大小的影响，保证每个feature map的独立性



### Group Normalization Layer

> **(N, C, H, W)，在每个样本的每组通道C/G上计算均值和标准差**[:, group0, :, :]->[:, group1, :, :]->[:, group2, :, :]->[:, group3, :, :]->
>
> GN = LN + IN

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201631836.png" alt="image-20241213201631836" style="zoom:50%;" />

**总结**

优点：

- 针对于BN在小batchsize效果差的问题

### 归一化效果对比

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201749628.png" alt="image-20241213201749628" style="zoom:67%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201715303.png" alt="image-20241213201715303" style="zoom:67%;" />

### Switchable Normalization Layer

> 前三者的结合，提出自适配归一化方法，自动为神经网络中每个归一化曾确定合适的归一化操作
>
> SN = BN + IN + LN

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201228993.png" alt="image-20241213201228993" style="zoom:67%;" />
$$
\hat{h}_{ncij}=\gamma\frac{h_{ncij}-\Sigma_{k\in\Omega}w_k\mu_k}{\sqrt{\Sigma_{k\in\Omega}w_k^{\prime}\sigma_k^2+\epsilon}}+\beta,
$$

$$
\mu_{\mathrm{in}}\:=\quad\frac{1}{HW}\sum_{i,j}^{H,W}h_{ncij},\quad\sigma_{\mathrm{in}}^{2}=\frac{1}{HW}\sum_{i,j}^{H,W}(h_{ncij}-\mu_{\mathrm{in}})^{2},
$$

$$
\mu_{\mathrm{ln}}\:=\quad\frac{1}{C}\sum_{c=1}^{C}\mu_{\mathrm{in}},\quad\sigma_{\mathrm{ln}}^{2}=\frac{1}{C}\sum_{c=1}^{C}(\sigma_{\mathrm{in}}^{2}+\mu_{\mathrm{in}}^{2})-\mu_{\mathrm{ln}}^{2},
$$

$$
\mu_{\mathrm{bn}}\:=\quad\frac{1}{N}\sum_{n=1}^{N}\mu_{\mathrm{in}},\quad\sigma_{\mathrm{bn}}^{2}=\frac{1}{N}\sum_{n=1}^{N}(\sigma_{\mathrm{in}}^{2}+\mu_{\mathrm{in}}^{2})-\mu_{\mathrm{bn}}^{2},
$$

**总结**

优点：

- 专为业务驱动，自适配归一化-->业务耦合性低

缺点：

- 公式相对复杂，难以优化

### Weight Standardization

> 对权重W做归一化

**总结**

- 有点效果

