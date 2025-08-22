---
title: 深度学习-CV
createTime: 2024/11/10 14:53:24
tags:
 - Deep Learning
permalink: /notes/read/mub1jy9h/
---
端到端机器学习（end to end machine learning）：从原始数据（输入）中获得目标结果（输出）

[ConvNetJS demo: Classify toy 2D data (stanford.edu)](https://cs.stanford.edu/people/karpathy/convnetjs/demo/classify2d.html)

## 感知机

`感知机接收多个输入信号，输出一个信号`

> 1. 机器学习中人和机器的作用？
>
> 机器的任务：决定合适的参数值
>
> 人的任务：思考感知机的构造（模型），并把训练数据交给计算机
>
> 2. 理论上用感知机制作计算机？
>
> 分阶段地制作所需的零件（模块），即先实现与门和或门，然后实现半加器和全加器，接着实现算数逻辑单元(ALU)，然后实现CPU。

### 公式介绍

- 阈值（$\theta$）：输入信号被送往神经元时，被分别乘以固定的权重（$w_{1}x_{1}\text{、}w_{2}x_{2}$），当总和超过阈值时输出1。
- 权重（$w$）：越大，对应该权重的信号的重要性越高。

$$
y=\left\{\begin{array}{ll}0&(w_1x_1+w_2x_2\leqslant\theta)\\1&(w_1x_1+w_2x_2>\theta)\end{array}\right.
$$
改进：将$\theta$转换为$-b$

- 权重（$w$）：控制输入信号的重要性
- 偏置（$b$）：调整神经元被激活的容易程度

$$
y=\left\{\begin{array}{ll}0&(b+w_1x_1+w_2x_2\leqslant0)\\1&(b+w_1x_1+w_2x_2>0)\end{array}\right.
$$

### 逻辑电路与感知机

#### 单层感知机-与或非

`又称朴素感知机`

- 与门（AND gate）：仅在两个输入均为1时输出1，其他时候则输出0
  参数举例：$(w_{1},w_{2},\theta)=(0.5,0.5,0.8)$
  真值表如下：

    | $x_{1}$ | $x_{2}$ | $y$  |
    | ------- | ------- | ---- |
    | 0       | 0       | 0    |
    | 1       | 0       | 0    |
    | 0       | 1       | 0    |
    | 1       | 1       | 1    |

- 与非门（NAND gate）：仅当$x_{1}$和$x_{2}$同为1时输出0，其他时候输出1
  参数举例：$(w_{1},w_{2},\theta)=(-0.5,-0.5,-0.7)$

    | $x_{1}$ | $x_{2}$ | $y$  |
    | ------- | ------- | ---- |
    | 0       | 0       | 1    |
    | 1       | 0       | 1    |
    | 0       | 1       | 1    |
    | 1       | 1       | 0    |

- 或门（OR gate）：只要有一个输入信号是1，输出就为1

    | $x_{1}$ | $x_{2}$ | $y$  |
    | ------- | ------- | ---- |
    | 0       | 0       | 0    |
    | 1       | 0       | 1    |
    | 0       | 1       | 1    |
    | 1       | 1       | 1    |

#### 多层感知机-异或

`神经网络的初级阶段`

- 异或门（也叫异或逻辑电路）：仅当$x_{1}$或$x_{2}$中的一方为1时，才会输出1

    | $x_{1}$ | $x_{2}$ | $y$  |
    | ------- | ------- | ---- |
    | 0       | 0       | 0    |
    | 1       | 0       | 1    |
    | 0       | 1       | 1    |
    | 1       | 1       | 0    |


使用双层感知机实现异或门：

| $x_{1}$ | $x_{2}$ | $s_{1}$ | $s_{2}$ | $y$  |
| ------- | ------- | ------- | ------- | ---- |
| 0       | 0       | 1       | 0       | 0    |
| 1       | 0       | 1       | 1       | 1    |
| 0       | 1       | 1       | 1       | 1    |
| 1       | 1       | 0       | 1       | 0    |

![image-20240911094250880](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240911094250880.png)

## 全连接的推理

`优势：自动从数据中学习到合适的权重参数`

![image-20240911094848754](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240911094848754.png)

### 感知机 -> 全连接（NN）

感知机函数拆分为算法和激活函数：
$$
a=b+w_1x_1+w_2x_2
$$

$$
y=h(a)
$$

- 单层感知机（朴素感知机）使用阶跃函数作为激活函数
- 多层感知机使用平滑的激活函数，如sigmoid函数

### ==激活函数==

`使神经网络加入非线性特点`

> 问：激活函数为什么必须使用非线性函数？
>
> 答：线性函数无法发挥叠加层的优势，如$y(x)=h(h(h(x)))=c^3x$

#### 恒等函数

$$
y=x
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1726145086461-6.png" style="zoom:67%;" />

#### 阶跃函数

`> 阈值的元素被转换为True；`
`<= 阈值的元素被转换为False。`

![output](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output.png)

#### Sigmoid

`关于(0,0.5)对称的S型曲线`

> 优点：取值范围（0~1）、简单、容易理解
>
> 缺点：
>
> - 容易饱和和终止梯度传递（“死神经元”）
> - sigmoid函数的输出没有0中心化

$$
f(x)=\frac1{1+e^{(-x)}}\\f'(x)=f(x)(1-f(x))
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733974112968-3.png" style="zoom: 67%;" />

#### Tanh

关于原点(0,0)对称的双S型曲线函数

> 优点：取值范围（-1~1）、易理解、0中心化
>
> 缺点：容易饱和和终止梯度传递（“死神经元”）

$$
\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}\\f'(x)=1-f^2(x)
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733973734772-1.png" style="zoom: 67%;" />

#### ReLU

> 优点：
>
> - 相对于Sigmoid和Tanh，提升收敛速度
> - 梯度求解公式简单，不会产生梯度消失和梯度爆炸
>
> 缺点：
>
> - 没有边界，可以使用变种ReLU：min(max(0, x), 6)
> - 比较脆弱，比较容易陷入出现“死神经元”的情况
>   - 解决方案：较小的学习率

$$
f(x)=\left\{\begin{array}{ll}x&(x>0)\\0&(x\leqslant0)\end{array}\right.\\f'(x)=\begin{cases}1,x>0\\0,x\leq0\end{cases}
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733974167140-5.png" style="zoom:67%;" />

#### Leaky ReLU

Leaky ReLU 是 ReLU 的变体，允许负值输入以一个小的斜率通过
$$
\text{Leaky ReLU}(x) = 
\begin{cases} 
x, & \text{if } x \geq 0 \\
\alpha x, & \text{if } x < 0
\end{cases}
$$

-  $\alpha$ 是一个很小的常数，比如 0.01

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733974699422-11.png" style="zoom:67%;" />

#### ELU

ELU 对负值输入的处理更平滑


$$
\text{ELU}(x) = 
\begin{cases} 
x, & \text{if } x > 0 \\
\alpha (\exp(x) - 1), & \text{if } x \leq 0
\end{cases}
$$

- $\alpha$ 是一个可以调整的超参数，通常为1

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733974722617-13.png" style="zoom:67%;" />

#### Maxout

$$
\text{Maxout}(x) = \max(w_1 x + b_1, w_2 x + b_2)
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733974744705-15.png" style="zoom:67%;" />

#### Softmax

`使用指数，扩大差距`

> 优势：
>
> 1. 元素间大小关系不变（指数函数单调递增）
> 2. 数值转化为概率（实际分类问题只需要求最高数值，所以输出层的softmax会被省略）
> 3. 输出总和为1【归一化】

$$
y_k=\frac{e^{a_k}}{\sum_{i=1}^n e^{a_i}}
$$

解决指数的溢出问题？指数减去常数C（输入信号的最大值）
$$
\begin{aligned}y_{k}=\frac{e^{a_{k}}}{\sum_{i=1}^{n}e^{a_{i}}}&=\frac{\mathrm{C}e^{a_{k}}}{\mathrm{C}\sum_{i=1}^{n}e^{a_{i}}}\\&=\frac{e^{(a_{k}+\log C)}}{\sum_{i=1}^{n}e^{(a_{i}+\log C)}}\\&=\frac{e^{(a_{k}+\mathrm{C}^{\prime})}}{\sum_{i=1}^{n}e^{(a_{i}+\mathrm{C}^{\prime})}}\end{aligned}
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/output-1733974217849-7.png" style="zoom:67%;" />

### 神经网络图

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240912203525963.png" alt="image-20240912203525963" style="zoom:67%;" />

参数解析：

- 右上角的（1）：表示权重和神经元的层号
- 右下角：后一层神经元到索引号、前一层的索引号
- 为什么偏置右下角的索引号只有一个？前一层的偏置神经元（神经元“1”）只有一个

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240913080442865.png" alt="image-20240913080442865" style="zoom:67%;" />

### 前向传播

`测试过程中神经网络的推理过程`

数组形状变化图：

![image-20240915170218952](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240915170218952.png)

## 全连接的学习

`从训练数据中，以损失函数为基准，找出使损失函数值最小的权重参数`

为了找出尽可能小的损失函数的值，本章介绍函数斜率的梯度法

### 历代求解问题方法

举例（识别数字5）【白色框为人为介入】：

![image-20240915173143225](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240915173143225.png)

- `人为设计算法`
- `计算机视觉一般方法`：提取特征量（SIFT、SURF和HOG等），使用特征量将图像数据转换为向量，对向量使用机器学习中的SVM、KNN等分类器进行学习
- `深度学习方法`：机器自己提取特征自己学习

### ==损失函数==

> 损失函数的作用：
>
> 1. 寻找最优权重参数
> 2. 当前神经网络对监督数据在多大程度上不拟合

#### 均方误差

`mean squared error`
$$
E=\frac{1}{2}\sum_{k}(y_{k}-t_{k})^{2}
$$

- $y_{k}$：预测值
- $t_{k}$：真实值
- $k$：数据的维数

#### 交叉熵误差

`cross entropy error，常用于分类问题`

$$
CrossEntropy=\sum_{i=1}^Cy_i\cdot\log(p_i)
$$

- $y_i$：这张图片的类别概率是否有效（one-hot编码），有效为1，无效为0
- $p_i$：第 i 个类别的概率

$$
E=-(y_t\log y+(1-y_t)\log(1-y))
$$



#### 如何求平均损失？

`通过正规化求平均损失函数`
$$
E=\frac{1}{n}\sum_n(\text{损失函数})
$$

### 梯度

`损失函数的导数`

> 机器学习的最终目标：获取泛化能力
>
> 1. 使用训练数据（监督数据）进行学习，提升泛化能力
> 2. 使用测试数据评价泛化能力
>
> 欠拟合和过拟合：
>
> - 欠拟合：模型复杂度过低、特征量过少，无法在训练集获得足够低的误差
>
> - 过拟合：模型复杂度高，训练集表现好，测试集表现差
>
> 过拟合症状：
>
> 1. 损失：训练集正常下降，测试集下降突然增加再下降

#### 数值微分

`利用微小的差分求导数的过程`

> 为什么不使用公式法直接求导？
>
> 无法满足所有求导，函数复杂则难直接求导

- 前向差分

$$
\frac{\mathrm{d}f(x)}{\mathrm{d}x}=\lim_{h\to0}\frac{f(x+h)-f(x)}h
$$

- 中心差分

$$
\frac{\mathrm{d}f(x)}{\mathrm{d}x}=\lim_{h\to0}\frac{f(x+h)-f(x-h)}{2h}
$$

求偏导：
$$
f(x_0,x_1)=x_0^2+x_1^2
$$
<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240917104359888.png" alt="image-20240917104359888" style="zoom:67%;" />

#### 了解梯度

> 为什么使用梯度来更新参数？
>
> 损失函数为凹函数，存在极小值（极点）和最小值，通过求导的方法可以求得使损失函数值最小的参数

$f(x_0,x_1)=x_0^2+x_1^2$的梯度图：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/Figure_1.png" style="zoom:67%;" />

解析：损失函数为凹函数，为了损失函数变小（即收敛），通过向箭头指向位置更新参数x0和x1（即损失函数的导数趋于0的位置）。

#### 梯度法

`损失函数的参数从当前位置沿着导数小于0的方向前进一段距离，再次求导数，再次前进，逐渐减小损失值，最终求得最小值/极小值的过程`

> 名词解释：
>
> - 梯度下降法：寻找最小值的梯度法
>
> - 梯度上升法：寻找最大值的梯度法
>
>
> ==为了求最值/极值，使用哪个梯度法并不重要（切换损失函数前的符号即可切换方法），最终都会走向收敛==

梯度法公式：
$$
x_{0}=x_{0}-\eta\frac{\partial f}{\partial x_{0}}\\x_{1}=x_{1}-\eta\frac{\partial f}{\partial x_{1}}
$$

- $\eta$：学习率（决定在一次学习中，应该学习多少，多大程度上更新参数）
  ==学习率过大：发散成一个很大的值；==
  ==学习率过小：基本上没怎么更新就结束==
  ==一般会一边改变学习率的值，一边确认学习是否正确进行了==

### 随机梯度下降（SGD）

> Mini-Batch SGD为SGD的变体，每次使用一个小批量（mini-batch）样本计算梯度并更新参数

通过样本随机抽取，实现随机梯度下降，多次随机近似于总体分布。--大数定理

###  如何通过梯度更新权重参数

`损失函数的导数就是梯度，以梯度为指引，更新参数的值`

- 导数值 < 0 时：可以使权重参数向正方向改变来减少损失函数的值
- 导数值 > 0 时：可以使权重参数向负方向改变来减少损失函数的值
- 导数值 = 0 时：无论权重参数向哪个方向变化，损失函数都不会改变，此时该权重参数的更新会停在此处

为什么不使用识别精度作为指标？精度是一个数字，微调对权重参数影响不大，绝大多数地方的导数都会变为0，进而导致参数无法更新

### 误差反向传播

`数值微分速度太慢，误差反向传播法可以极大的提升计算速度`

#### 计算图是什么？

`计算图将计算过程用图形表示出来`

> 计算图的优点：
>
> 1. 通过反向传播高效计算导数
> 2. 局部计算（通过局部计算使各个节点致力于简单的计算，从而简化问题）
> 3. 中间计算结果被保存并共享利于高效计算多个导数

计算图举例：太郎在超市买了2个苹果、3个橘子。其中，苹果每个100日元，橘子每个150日元。消费税是10%，请计算支付金额？

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918092122566.png" alt="image-20240918092122566" style="zoom: 80%;" />

- 正向传播：从左向右进行计算
- 反向传播：从右向左进行计算

#### 链式法则

公式：
$$
\left\{ 
\begin{aligned}
z &= t^2 \\
t &= x + y
\end{aligned}
\right.
$$
求导：
$$
\frac{\partial z}{\partial x}=\frac{\partial z}{\partial t}\frac{\partial t}{\partial x}=2t·1=2(x+y)
$$
反向传播计算图：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918143651688.png" alt="image-20240918143651688" style="zoom:67%;" />

`加法的反向传播`：将上游的值传给下游，并不需要正向传播的输入信号

`乘法的反向传播`：需要正向传播时的输入信号值。因此，实现乘法节点的反向传播时，要保存正向传播的输入信号

苹果和橘子问题反向传播计算图：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918151307894.png" alt="image-20240918151307894" style="zoom:67%;" />



#### 反向传播计算图

==反向传播的计算顺序==：将节点的输入信号乘以节点的局部倒数（偏导数），然后再传递给下一个节点

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918140438143.png" alt="image-20240918140438143" style="zoom:67%;" />

#### 线性层的反向传播

> 仿射变换：在几何中包括一次线性变换和一次平移，即加权和运算、加偏置运算

单数据Affine层计算图：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918204945600.png" alt="image-20240918204945600" style="zoom:67%;" />

批版本Affine层计算图：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918210329672.png" alt="image-20240918210329672" style="zoom:67%;" />

偏置在正向传播中使用广播机制加到$x*w$中

反向传播中各个数据的反向传播值要汇总为偏置的元素

#### 激活函数层的反向传播

`函数、计算图、导数`

##### ReLU

$$
y=\begin{cases}x&(x>0)\\0&(x\leqslant0)\end{cases}
$$

![image-20240918203311829](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918203311829.png)
$$
\frac{\partial y}{\partial x}=\begin{cases}1&(x>0)\\0&(x\leqslant0)\end{cases}
$$

##### Sigmoid

$$
y=\frac{1}{1+\exp(-x)}
$$

![image-20240918203204507](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240918203204507.png)
$$
\frac{\partial y}{\partial x}=\frac{\partial L}{\partial y}y(1-y)
$$

## 训练技巧

### 数据预处理基础

`消除数据差异`

#### 去均值（中心化/零均值化）

输入数据的各个维度中心化到0

- 中心化后的数据均值为0

$$
X_i-\mu
$$

#### 标准化

减均值，除以标准差。数据变换为标准正态分布：$(\mu, \sigma)=(0, 1)$

- $x-\micro$：去均值。将数据以原点为中心进行对称
- $\frac{}{\sigma}$：除以标准差，使得各个维度矩阵范围尽量相同

$$
\frac{X_i-\mu}\sigma
$$

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241212101040615.png" alt="image-20241212101040615" style="zoom: 67%;" />

#### PCA/白化

- PCA降维：将去均值后的数据投影到主成分，去掉特征和特征之间的相关性
- 白化：PCA的基础上，对转换后的数据每个特征轴上的幅度进行标准化

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241212102143881.png" alt="image-20241212102143881" style="zoom: 50%;" />

### 数据预处理--归一化

#### 基础归一化

`数据转换到0-1之间`

##### Min-Max归一化

$$
\frac{X_i-X_{min}}{X_{max}-X_{min}}
$$

##### 单位方差归一化

`使数据的尺度统一，使得不同特征在同一尺度上进行比较`
$$
\frac{}{\sigma}
$$



#### 深度学习归一化方法

##### Batch Normalization

> **(N, C, H, W)，在通道C上计算均值和标准差**[:, 0, :, :]->[:, 1, :, :]->[:, 2, :, :]->[:, 3, :, :]->
>
> - 原始分布：卷积后数据可能偏向某一区域（如均值较大、方差较小）
> - 归一化：分布被调整为均值为0、方差为1的标准正态分布
> - 缩放和平移：通过调整 $\gamma$ 和 $\beta$ 调整分布，稳定数据分布
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

32\*32\*8=1024，1024\*10=10240，10240\*2=20480【乘以2是因为有一对参数 $\gamma\text{、}\beta$ 】

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

##### Layer Normalization

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

##### Instance Normalization Layer

> **(N, C, H, W)，在每个样本的每个通道(N, C)上计算均值和标准差**[0, 0, :, :]->[0, 1, :, :]->[1, 0, :, :]->[1, 1, :, :]->

$$
y_{tijk}=\frac{x_{tijk}-\mu_{ti}}{\sqrt{\sigma_{ti}^{2}+\epsilon}},\quad\mu_{ti}=\frac{1}{HW}\sum_{l=1}^{W}\sum_{m=1}^{H}x_{tilm},\quad\sigma_{ti}^{2}=\frac{1}{HW}\sum_{l=1}^{W}\sum_{m=1}^{H}(x_{tilm}-mu_{ti})^{2}
$$

**总结**

优点：

- 适用于图像风格化，依赖于每个图像实例
- 不受样本批次大小的影响，保证每个feature map的独立性



##### Group Normalization Layer

> **(N, C, H, W)，在每个样本的每组通道C/G上计算均值和标准差**[:, group0, :, :]->[:, group1, :, :]->[:, group2, :, :]->[:, group3, :, :]->
>
> GN = LN + IN

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201631836.png" alt="image-20241213201631836" style="zoom:50%;" />

**总结**

优点：

- 针对于BN在小batchsize效果差的问题

##### 归一化效果对比

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201749628.png" alt="image-20241213201749628" style="zoom:67%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241213201715303.png" alt="image-20241213201715303" style="zoom:67%;" />

##### Switchable Normalization Layer

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

##### Weight Standardization

> 对权重W做归一化

**总结**

- 有点效果



### 权重参数的初始化

`权重初始值设为小随机数，并且各层的激活值分布会有差异化，从而顺利学习`

`问`：权重初始值设为0可以吗？

`答`：会导致，激活函数的导数趋于0，权重被相同更新【权重归一化】，不利于学习

#### Xavier初始值-sigmoid、tanh

前一层的节点数为n，初始值使用标准差为$\frac{1}{\sqrt{n}}$的高斯分布
$$
W\sim U{\left[-\sqrt{\frac6{n_j+n_{j+1}}},\sqrt{\frac6{n_j+n_{j+1}}}\right]}
$$
![image-20240920133056982](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240920133056982.png)

使用tanh函数代替sigmoid函数，会改善歪斜的问题（关于原点对称）

#### He初始值-relu

前一层的节点数为n，初始值使用标准差为$\frac{2}{\sqrt{n}}$的高斯分布

![image-20240920133638006](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240920133638006.png)

### ==优化器==

> 优化的目标是寻找一组模型参数，使得模型在所有训练数据上平均损失最小。
>
> 对于参数的迭代更新 $w_{t+1}= w_{t}-\eta g_t$ ，基本都是基于历史的梯度或者学习率进行一个调整。
>
> 1. 梯度修正 $g_t$
> 2. 学习率 $\eta$ 调整
>
> https://www.cnblogs.com/dangui/p/14675148.html

#### SGD

`随机梯度下降法（stochastic gradient descent/SGD）：使用参数的梯度，沿梯度方向更新参数，并重复步骤，从而逐渐靠近最优参数`

> 用单个训练样本的损失来近似平均损失，即每次随机采样一个样本来估计当前梯度，对模型参数进行一次更新

$$
w_{t+1}=w_t-\eta\nabla_w L(w_t;x_i,y_i)\\
w_{t+1}=w_t-\eta g_t
$$

- $g_t=\nabla_w L(w_t;x_i,y_i)$：在$(x_i,y_i)$上损失函数$L$相对于模型参数$w$的梯度
- $\eta$：学习率

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240920084024400.png" alt="image-20240920084024400" style="zoom: 67%;" />

优点：训练速度快，内存开销小。

缺点：SGD每步接受的信息有限，对梯度的估计准确性低，造成目标函数的收敛不稳定伴有震荡甚至出现不收敛。随机性大，并不保证全局最优化。

```python
opt = optim.SGD(net.parameters(), lr=0.01）
```

#### SGD+Momentum

`根据历史梯度更新方向稳定当前轮次梯度更新方向`

> 考虑了带衰减系数的前一步，加速SGD，抑制震荡

$$
m_{t}=\beta_{1}m_{t-1}+\eta\nabla L(\theta_{t})\\
\theta_{t+1}=\theta_{t}-m_{t}
$$

- $\beta$：动量衰减系数
- 优点：比SGD收敛更快，目标函数的收敛更稳定，减少在鞍点等的震荡。
- 缺点：保持惯性，缺乏适应性。梯度方向不变的维度上速度变快，梯度方向有所改变的维度上的更新速度变慢 。

```py
opt = optim.SGD(net.parameters(), lr=0.01, momentum=0.03）
```

#### NAG

在SGD+Momentum上增加“提前量”设计，在计算梯度时做了调整，用θt−β1mt−1θt−β1mt−1来近似当作参数下一步会变成的值，计算未来可能位置处的梯度而非当前位置的梯度。
$$
m_{t}=\beta_{1}m_{t-1}+\eta\nabla L(\theta_{t}-\beta_{1}m_{t-1})\\
\theta_{t+1}=\theta_{t}-m_{t}
$$

- 优点：改进Momentum方法，防止按照惯性走的太快，会衡量一下梯度做出修正

```py
opt = optim.SGD(net.parameters(), lr=0.01, momentum=0.03, nesterov=0.02)
```

#### AdaGrad

> 自适应地确定参数的学习速度，对更新频率低的参数做较大的更新，对更新频率高的参数做较小的更新。
>
> 采用“历史梯度平方和”来衡量不同参数的梯度的稀疏性，取值越小表明越稀疏。

$$
\theta_{t+1,i}=\theta_{t,i}-\frac\eta{\sqrt{\sum_{k=0}^tg_{k,i}^2}+\epsilon}g_{t,i}
$$

- 优点：减少学习率的手动调整，更适用于稀疏数据，提高SGD的鲁棒性。
- 缺点：分母会不断累积，学习率衰减越来越快。

#### RMSProp

> 为了解决 AdaGrad 学习率急剧下降
>
> 是 Geoff Hinton 提出的一种自适应学习率方法。结合了Momentum的惯性原则，加上AdaGrad对错误方向的阻力。但是缺少了Momentum的一部分，因此后面Adam补上这个想法。

$$
v_{t}=\beta_{1}v_{t-1}+(1-\beta_{1})g_{t}^{2}\\\theta_{t+1}=\theta_{t}-\frac{\eta}{\sqrt{v_{t}+\epsilon}}g_{t}
$$

- 优点：解决 AdaGrad 学习率急剧下降

#### AdaDelta

> 为了解决 AdaGrad 学习率急剧下降
>
> 针对AdaGrad改进：因为AdaGrad采用所有历史梯度平方和的平方根做分母，分母随时间单调递增，产生的自适应学习速率随时间衰减的速度过于激进 。AdaDelta 采用指数衰减平均的计算方法，用过去梯度平方的衰减平均值代替他们的求和。 这个分母相当于梯度的均方根 root mean squared (RMS)，在数据统计分析中，将所有值平方求和，求其均值，再开平方，就得到均方根值。

$$
\begin{aligned}&\theta_{t+1}=\theta_{t}-\frac{RMS[\Delta\theta]_{t-1}}{RMS[g]_{t}}g_{t}\\&E[g^{2}]_{t}=\gamma E[g^{2}]_{t-1}+(1-\gamma)g_{t}^{2}\\&E[\Delta\theta^{2}]_{t}=\gamma E[\Delta\theta^{2}]_{t-1}+(1-\gamma)\Delta\theta_{t}^{2}\end{aligned}
$$

- 优点：不需要提取设定学习速率，使用指数衰减平均计算，防止学习速率衰减过快

#### Adam

> 结合Momentum和AdaGrad的优点，即考虑**过去梯度的平方**的指数衰减平均值，也保持**过去梯度**的指数衰减平均值。还包含了偏置修正，修正从0初始化的一阶矩和二阶矩的估计

$$
m_{t}=\beta_{1}m_{t-1}+(1-\beta_{1})g_{t}\\
v_{t}=\beta_{2}v_{t-1}+(1-\beta_{2})g_{t}^{2}\\
\hat{m}_{t}=\frac{m_{t}}{1-\beta_{1}^{t}} \quad \hat{v}_{t}=\frac{v_{t}}{1-\beta_{2}^{t}}\\
\theta_{t+1}=\theta_{t}-\frac{\eta}{\sqrt{\hat{v}_{t}+\epsilon}}\hat{m}_{t}
$$

- 优点：为不同参数产生自适应的学习速率。

#### AdaMax

> Adamax优化器来自于Adam的[论文](https://arxiv.org/pdf/1412.6980.pdf)的Section7，该方法是基于无穷范数的Adam方法的变体，对梯度平方的处理由指数衰减平均改为指数衰减求最大值。在Adam中，单个权重的更新规则是将其梯度与当前和过去梯度的 $L^2$ 范数（标量）成反比例缩放。作者又将基于 $L^2$ 范数的更新规则泛化到基于 $L^p$ 范数的更新规则中。

$$
\begin{aligned}v_{t}&=\beta_{2}^{p}v_{t-1}+(1-\beta_{2}^{p})|g_{t}|^{p}\\&=(1-\beta_{2}^{p})\sum_{i}^{t}\beta_{2}^{p(t-i)}\cdot\left|g_{i}\right|^{p}\end{aligned}
$$

虽然这样的变体会因为 $p$ 的值较大而在数值上变得不稳定，但是在特例中，令$p\to\infty$会得出一个极其稳定和简单的算法。
$$
\begin{aligned}u_{t}&=\lim_{p\to\infty}(v_t)^{1/p}\\&=\max(\beta_2\cdot u_{t-1},|g_t|)\end{aligned}
$$
由于 $u_t$ 依赖于max操作，所以AdaMax不像在Adam中 $m_t$ 和 $v_t$ 的偏差趋向于0，所以不需要计算 $u_t$ 的偏差校正（$u_0=0$）
$$
m_{t}=\beta_{1}m_{t-1}+(1-\beta_{1})g_{t}\\
u_{t}=\max(\beta_{2}u_{t-1},|g_{t}|)\\
\theta_{t+1}=\theta_{t}-\frac{\eta}{u_{t}}m_{t}
$$


#### AdamW

在Ilya Loshchilov & Frank Hutter 的论文[Decoupled weight decay regularization](https://arxiv.org/pdf/1711.05101.pdf)中，把Adam中的**权重衰减**和**基于损失的梯度更新**解耦（AdamW）。发现在Adam这种自适应学习率算法中L2正则化不像在SGD中有效：

1. L2正则化和Weight Decay并不等价，只有在标准的SGD下可以把两者等价。特别当与自适应梯度相结合时，L2正则化导致具有较大历史参数或梯度幅度的权重比使用权重衰减时更小。
2. 使用Adam优化带L2正则的损失并不有效。如果引入L2正则化项，在计算梯度的时候会加上正则项求梯度的结果。正常的权重衰减是对所有的权重都采用相同的系数进行更新，本身比较大的一些权重对应的梯度也会比较大，惩罚也越大。但由于Adam计算步骤中减去项会有除以梯度平方的累积，使得梯度大的减去项偏小，从而具有大梯度的权重不会像解耦权重衰减那样得到正则化。 这导致自适应梯度算法的L2和解耦权重衰减正则化的不等价。

而在常见的深度学习库中只提供了L2正则，并没有提供权重衰减的实现。这可能就是导致Adam跑出来的很多效果相对SGD with Momentum有偏差的一个原因。大部分的模型都会有L2 regularization约束项，因此很有可能出现Adam的最终效果没有SGD的好。目前bert训练采用的优化方法就是AdamW，对除了layernorm，bias项之外的模型参数做weight decay。

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/1630237-20210418233700398-876409822.png" alt="img" style="zoom:67%;" />

Adam的weight decay发生在紫字部分，所以由于 $g^2$ 作分母，会使得大的梯度得不到足够力度的正则化；而AdamW把weight decay放在了绿字部分，所以能有效的正则化。

### 防过拟合

> 过拟合的原因：
>
> - 模型拥有大量参数、表现力强
> - 训练数据少
>
> 防止过拟合方法：
>
> 1. 批归一化
> 2. 添加正则化(Regularization)惩罚项：L1、L2两种方式
> 3. Dropout：随即删除神经元

#### batch normalization（批归一化）

`调整激活函数的值的分布使其拥有适当的广度`

以进行学习时的mini-batch为单位，按mini-batch进行正规化（进行使数据分布的均值为0、方差为1的正规化）

batch norm的优点：

- 使学习快速进行（增大学习率）
- 不那么依赖初始值
- 抑制过拟合（降低Dropout等的必要性）

![image-20240920135741507](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240920135741507.png)

步骤：

1. 将mini-batch的输入数据转换为均值为0、方差为1的数据（减小数据分布的偏向）

$$
\begin{aligned}&\mu_{B}\leftarrow\frac{1}{m}\sum_{i=1}^{m}x_{i}\\&\sigma_{B}^{2}\leftarrow\frac{1}{m}\sum_{i=1}^{m}(x_{i}-\mu_{B})^{2}\\&\hat{x}_{i}\leftarrow\frac{x_{i}-\mu_{B}}{\sqrt{\sigma_{B}^{2}+\varepsilon}}\end{aligned}
$$

2. 对正规化后的数据进行缩放和平移变换（一开始$\gamma$=1,$\beta$=0，再通过学习调整到合适的值）

$$
y_i\leftarrow\gamma\hat{x}_i+\beta
$$

![image-20240920144952611](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240920144952611.png)

#### 正则化惩罚

`对大的权重进行惩罚来抑制过拟合`

> 权值衰减

**举例：**

为损失函数加上权重的$L_{2}$范数->抑制权重变大

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240926131809749.png" alt="image-20240926131809749" style="zoom:50%;" />

如：$\frac{1}{2}\lambda W^{2}$


- $\lambda$：控制正则化强度的超参数。（越大，对大的权重施加的惩罚越重）
- $\frac{1}{2}$：将$\frac{1}{2}\lambda W^{2}$的求导结果变为$\lambda W$

**权值衰减方法：**

1. 为损失函数加上$\frac{1}{2}\lambda W^{2}$
2. 求权重梯度中，为之前的误差反向传播法的结果加上正则化项的导数$\lambda W$

#### Dropout

`随机删除神经元`

> 适用于复杂的网络模型（只使用权值衰减难以应对时）
>
> 类似于集成学习（多个模型单独学习，推理时取多个模型的输出的平均值）
>
> - 学习时：随机删除神经元->每一次 都让不同的模型进行学习
> - 推理时：对神经元的输出乘以删除比例->取得模型的平均值

![image-20240924144742889](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240924144742889.png)

### 学习率衰减

1. fixed固定策略：学习率始终是一个固定值
2. step均匀分步策略：如果设置为step,则还需要设置一个stepsize，返回，其中iter表示当前的迭代次数。floor(9.9)=9，其功能是“下取整”

$$
\huge{\mathrm{lr}_0\cdot\gamma^{floor({\frac {iter}{{stepsize}}})}}
$$

3. 分步策略：iter为当前迭代次数，gamma为小于1的值

$$
\huge{base\_lr*gamma^{iter}}
$$

4. multistep多分步或不均匀分步策略：刚开始训练网络时学习率一般设置较高，这样 loss 和 accuracy 下降很快，一般前200000次两者下降较快，后面可能就需要我们使用较小的学习率了。step策略由于过于平均，而 loss 和 accuracy 的下降率在整个训练过程中又是一个不平均的过程，因此有时不是很合适。fixed手工调节起来又很麻烦，这时multistep可能就会派上用场了。multistep还需要设置一个stepvalue。这个参数和step很相似，step是均匀等间隔变化，而multistep则是根据stepvalue值变化。

5. poly指数下降策略：学习率进行指数下降

$$
\huge{base\_Ir*(1-iter/max\_iter)^{power}}
$$

### 高效寻找超参数

> 各层的神经元数量、batch大小、参数更新时的学习率或权值衰减等

#### 什么是验证数据？

- 训练数据：参数（权重和偏置）的学习
- 验证数据：`超参数的性能评估`
- 测试数据：确认泛化能力

例：对于minist数据集，为了获得验证数据，可以从训练数据中事先分割20%作为验证数据

#### 优化超参数

`观察可以使学习顺利进行的超参数范围来缩小值的范围。在缩小的范围重复相同的操作。在某个阶段选择一个最终的超参数的值`

**优化方法**：

1. 设定超参数范围【大致指定即可，如10^(-3)^~10^(3)^【也表述为：用对数尺度（log scale）指定】
2. 从设定的超参数范围随机采样
3. 使用采样到的超参数的值进行学习，通过验证数据评估经度（epoch设置要小：因为搞一次很浪费时间）
4. 重复2-3（100次等），根据经度结果缩小超参数范围

## 卷积神经网络

`提取局部特征->特征融合（合并）`

> 近的像素相关性强，较远的像素相关性比较弱，所以只需要对局部进行感知，之后再更高层次对局部信息进行综合得到全局信息 --局部感知

### 卷积与全连接的劣势

全连接的劣势：

1. 没有保留图片的空间结构
2. 参数巨大

CNN的劣势：

1. 更多考虑局部特征更少的全局【不如transformer有全局观】

### 核心思想

> 训练参数减少

- 局部连接【每一层和前一层的局部连接】
- 权重共享【每个输入数据块与同一个卷积核内积】

### 卷积层

`全连接层将输入转化为一维数据，无法利用形状相关的信息。`

- 局部感知：在进行计算的时候，将图片划分为一个个的区域进行计算/考虑
- 参数共享机制：假设每个神经元连接数据窗的权重是固定的
- 滑动窗口重叠：降低窗口与窗口之间的边缘不平滑的特性

==备注== ：一组固定的权重和窗口内数据做矩阵内积后求和的过程叫做卷积

#### 如何运算

`图像处理的卷积核运算（也称卷积核）`

**权重**

1. 各个位置输入数据的元素与卷积核的元素==对应位置相乘再求和==（乘积累加运算）
2. 重复进行直到做完

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925204151500.png" alt="image-20240925204151500" style="zoom:67%;" />

**偏置**

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925204523849.png" alt="image-20240925204523849" style="zoom:80%;" />

计算方法（一个卷积核）：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241212111213408.png" alt="image-20241212111213408" style="zoom: 45%;" />

计算方法（多个卷积核）：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/111.gif" alt="111" style="zoom:67%;" />

#### 卷积核设置

> 每个kernal都是提取某一类特征，实际上是通过反向传播不断更新达到的

##### 卷积核大小(kernel_size)

`越小越好，尽量少的损失细节`

- 3x3
- 5x5

##### 卷积核个数(out_channels)

`越多越好，尽量多的提取细节`

> 使用多个小卷积核得到的效果 > 使用一个大卷积核？
>
> 1. relu使用变多：多个非线性函数
> 2. 减少计算数量：1\*7^2^ = 49, 3\*3^2^ = 27
>
> > 假设输入大小都是$h*w*c$，并且都使用c个卷积核（得到c个特征图），可以计算其各自所需参数：
> > $$
> > 1*7*7\text{卷积核所需参数}=C×(7×7×C)=49C^2\\
> > 3*3*3\text{卷积核所需参数}=3C×(3×3×C)=27C^2
> > $$
> > 很明显，堆叠小的卷积核所需的参数更少一些，并且卷积过程越多，特征提取也会越细致，加入的非线性变换也随着增多，还不会增大权重参数个数，这也是VGG网络的基本出发点，用小的卷积核来完成体特征提取操作

|          | 通道数  | 高度          | 长度         | 表示规模  |
| -------- | ------- | ------------- | ------------ | --------- |
| 输入数据 | channel | height        | width        | (C,H,W)   |
| 卷积核   | channel | filter height | filter width | (C,FH,FW) |

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925211339492.png" alt="image-20240925211339492" style="zoom: 80%;" />

- FN：卷积核数量

##### 步幅(stride)

`应用卷积核的位置间隔，逐渐步幅的卷积`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925210316134.png" alt="image-20240925210316134" style="zoom: 50%;" />

##### 填充(padding)

`输入数据周围填充固定数据（如：0），避免损失细节`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925205042409.png" alt="image-20240925205042409" style="zoom: 50%;" />

##### 特征图分辨率计算公式

> 如果希望卷积后特征图分辨率大小跟原来一样，需要设置`填充大小=(卷积核大小-1)/2 if 步长=1`

$$
output_{size}=\frac{input_{size}-kernel_{size}+stride_{size}+2\times padding_{size}}{stride_{size}}
$$
$$
244=\frac{224-{\bold{3}}+{\bold{1}}+2\times {\bold{1}}}{{\bold{1}}}
$$

$$
244=\frac{224-{\bold{5}}+{\bold{1}}+2\times {\bold{2}}}{{\bold{1}}}
$$



##### 通道数

`通道方向有多个特征图时，按通道进行输入数据和卷积核的卷积核运算，将结果相加得到输出`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925210101774.png" alt="image-20240925210101774" style="zoom:67%;" />

#### 卷积次数

> 卷积次数要多层，多次卷积后，特征图单像素的感受野逐渐增大，观察视野从局部到全局

#### 感受野

`输出特征图上某个元素受输入图像上影响的区域`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/5f42b016089be4a9f705afd88ab822ea.png" alt="img" style="zoom: 67%;" />

#### 批处理

`各层间的传递数据保存为4维数据（batch_num,channel,height,width）`

![image-20240925211607463](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925211607463.png)

### 池化层

`使用数据压缩，在减小计算量的同时防止过拟合`

> - Max池化：计算目标区域的最大值
> - Average池化：计算目标区域的平均值（不常用）
>
> 一般来讲，池化的窗口大小会和步幅设定为相同值

池化层特征：

1. 不学习的参数【只是从目标区域取最大值（或平均值），不存在要学习的参数】
2. 通道数不发生变化【按照通道减小数据】
3. 对微小的位置变化具有健壮性【平移不变性、旋转不变性、尺度不变性】
    <img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925213812074.png" alt="image-20240925213812074" style="zoom: 33%;" />

池化过程：

![image-20240925215841772](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240925215841772.png)

### 卷积核变化可视化

> 卷积核在做什么？观察边缘（颜色变化的分界线）和斑块（局部的块状区域）
>
> 随着层次加深，提取的信息越来越抽象，神经元从简单的形状向“高级”信息变化

卷积层权重示意图：

![image-20240926093615857](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240926093615857.png)

卷积层权重示意图：

![image-20240926093806417](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240926093806417.png)

### 特征图可视化

卷积+激活+卷积2+激活2：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241215151742176.png" alt="image-20241215151742176" style="zoom:67%;" /><img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241226152330722.png" alt="image-20241226152330722" style="zoom:67%;" /><img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241226152409925.png" alt="image-20241226152409925" style="zoom:67%;" /><img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241226152419491.png" alt="image-20241226152419491" style="zoom:67%;" />

池化后：

> 经过池化，可以明显的发现局部信息提亮了

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241226152430411.png" alt="image-20241226152430411" style="zoom:67%;" />

经过多个卷积层的feature map：

> 可以看出，难以解释

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241215152246267.png" alt="image-20241215152246267" style="zoom:67%;" />

### 经典卷积网络

> 问：为什么卷积几次才池化一次？
>
> 答案：需要累积特征

#### LeNet

`最早用于数字识别的CNN`

图为LeNet-5：

![image-20240926094851231](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20240926094851231.png)

1. 激活函数：sigmoid
2. 池化层：subsampling

当前流行的CNN：

1. 激活函数：ReLU（-1~1更大的范围）
2. 池化层：Max池化（增强特征）

#### AlexNet

`2012年ILSVRC比赛冠军，远超第二名的CNN，比LeNet更深，用多层小卷积叠加来替换单个的大卷积`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/dbcbcc632ea823bc331e7fae8d2790ff-1727403602440-3.png" alt="dbcbcc632ea823bc331e7fae8d2790ff" style="zoom:80%;" />

1. 激活函数：ReLU
2. 池化：Max池化
3. 使用局部正规化层【LRN（Local Response Normalization）】
4. 使用Dropout

#### ZF Net

`2013年ILSVRC比赛冠军`

#### Vgg

> 做完池化之后特征减少，马上使用卷积补特征

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/1233445.png" style="zoom: 50%;" />

#### Resnet

`残差神经网络：模型训练过程至少不比原来差`

网络层数越多误差越大？？？

![img](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/v2-dcf5688dad675cbe8fb8be243af5e1fd_r.jpg)

解决方案：将前某层的结果做恒等映射到当前层

![img](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/v2-252e6d9979a2a91c2d3033b9b73eb69f_720w.webp)

## 函数分类

`机器学习问题：回归问题、分类问题`

感知机：

- 单层感知机（朴素感知机）使用阶跃函数作为激活函数
- 多层感知机使用平滑的激活函数，如sigmoid函数

回归问题：

|          | 隐藏层            | 输出层   |
| -------- | ----------------- | -------- |
| 激活函数 | sigmoid、恒等函数 | 恒等函数 |
| 损失函数 |                   | 均方误差 |

分类问题：

|          | 隐藏层                       | 输出层  |
| -------- | ---------------------------- | ------- |
| 激活函数 | sigmoid(二元)、softmax(多元) | softmax |
| 损失函数 |                              | 交叉熵  |

## 训练流程

1. 采样一个batch数据
2. 前向计算loss
3. 反向计算grad（一个batch上所有样本的梯度和）
4. 利用梯度更新权重参数

## 附录

### latex符号

| 符号      | latex   | 含义                 |
| --------- | ------- | -------------------- |
| $\oplus$  | \oplus  | 矩阵加               |
| $\ominus$ | \ominus | 矩阵减               |
| $\otimes$ | \otimes | 矩阵乘法             |
| $\odot$   | \odot   | 点积【对应元素相乘】 |

## 自编码器

`自编码器作为一种深度学习领域无监督的算法，本质上是一种数据压缩算法，和生成对抗网络一样，属于生成算法的一种`

自编码器(AutoEncoder, AE)就是一种利用反向传播使得输出值等于输入值的神经网络，它将输入压缩成潜在特征/高阶特征，然后将这种表征重构输出。

潜在特征：

- 数据相关性
- 数据有损性
- 自动学习性

自编码器的两部分：编码器(Encode)和解码器(Decoder)

- 编码器将输入压缩为潜在空间特征
- 解码器将潜在空间特征重构输出

> 自编码的核心价值是于提取潜在的高阶空间特征信息。主要应用：1.数据去噪2.可视化降维

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241227162657036.png" alt="image-20241227162657036" style="zoom:67%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241227174512590.png" alt="image-20241227174512590" style="zoom:67%;" />

  

### VAE变分自编码器

1. 编码器：输入图像转换为高阶特征：均值、方差。[可定义正态分布]
2. 通过正态分布随机采样

```py
np.random.normal((0.5, 5.0), (0.6, 0.8), (10, 2))	# 举例: 第一维为(0.5, 5.0)的正态分布随机数，。。
```

3. 解码器：将采样点映射回原始输入图像

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241227181350841.png" alt="image-20241227181350841" style="zoom:67%;" />

## 生成对抗网络

`深度学习模型，近年来复杂分布上无监督学习最具前景的方法之一`

> 生成式对抗网络的优化是一个二元极小极大博弈（minimax two-player game）问题，目的是使生成模型的输出在输入给判别模型时，判别模型很难判断是真实数据还是虚假数据

生成模型(Generative Model)和判别模型(Discriminative Model)的互相博弈学习产生相当好的输出

- 生成模型：捕获数据分布，目的是将判别模型的错误概率最大化
  - 给一系列猫的图片，生成一张新的猫咪（不在数据集里）
- 判别模型：估计样本来自训练数据的概率
  - 给定一张图，判断这张图里的动物是猫还是狗

**训练阶段**：

第一阶段：训练鉴别器/判别器，冻结生成器（只进行前向传播，不进行反向传播）

第二阶段：训练生成器，冻结鉴别器/判别器

**应用场景**：

- 图像生成，超分辨率
- 图像恢复
- 语义分割
- 文字生成
- 数据增强
- 聊天机器人
- 信息检索，排序

**举例**：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241227213226162.png" alt="image-20241227213226162" style="zoom:67%;" />

**数学证明**：

当G固定时，D会有唯一的最优解

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-CV.assets/image-20241227215106659.png" alt="image-20241227215106659" style="zoom:67%;" />





