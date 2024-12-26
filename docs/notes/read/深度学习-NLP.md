---
title: 深度学习-NLP
createTime: 2024/11/10 14:53:24
tags:
 - Deep Learning
permalink: /notes/read/xpzp6x2l/
---
## 自然语言和单词-分布式表示

> 自然语言处理：处理自然语言的科学
>
> 如何处理：根据含义处理（单词是含义的最小单位）

### 计数和推理对比

**内存占用**：

计数方法需要大内存（共现矩阵、进行SVD等），推理方法可增量学习（mini-batch）

**分布式表示的性质：**

计数方法：编码单词的相似性

word2vec：编码单词的相似性、理解单词之间更复杂的模式（如：类推问题）

**单词相似性的定量评价**：

计数方法与推理方法（高度依赖超参数）难分上下

### 计数与推理的关联性

相通：skip-gram和Negative Sampling的模型被证明与对整个语料库的共现矩阵（实际上会对矩阵进行一定的修改）进行特殊矩阵分解的方法具有相同的作用

### 计数和推理相融合

GloVe方法融合了基于推理的方法和基于计数的方法。该方法的思想是，将整个语料库的统计数据的信息纳入损失函数，进行mini-batch学习

## 法一：同义词词典

### 如何操作

通过对所有单词创建近义词集合，并利用各个单词的关系来定义单词之间的联系。通过此”单词网络“教会计算机单词之间的相关性

1. 同义词或近义词被归类到同一个组中

![image-20241012100115579](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012100115579.png)

2. 定义单词之间的粒度更细的关系，如：”上位-下位“，”整体-部分“

![image-20241012095955370](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012095955370.png)

### WordNet

`最著名的同义词词典`

1. 获得单词的近义词
2. 利用单词网络计算单词之间的相似度

### 缺陷

1. 难以顺应时代变化
2. 人力成本高
3. 无法表示单词的微妙差异

### 发展期望

1. 解决人力的问题【计数方法和word2vec】
2. 从人为设计词典和特征量向”端到端“转移

## 法二：计数

`从语料库中自动且高效地提取本质`

> 难以处理大规模语料库

**语料库（corpus）**：大量的用于自然语言处理研究和应用的文本数据。包含大量关于自然语言的实践知识（文章的写作方法、单词的选择方法和单词含义等）。

==注意==：自然语言处理领域中使用的语料库有时会给文本数据添加额外的信息。比如，可以给文本数据的各个单词标记词性。在这种情况下，为了方便计算机处理，语料库通常会被结构化（比如，采用树结构等数据形式）。

### 分词

`使用split函数、正则表达式等`

```py
'you say goodbye and i say hello .'
['you', 'say', 'goodbye', 'and', 'i', 'say', 'hello', '.']
```

### 单词的表示

举例（颜色的表示方法）：

1. 为不同的颜色赋予不同的名字：钴蓝（cobalt blue）或者锌红（zinc red）。

2. 将颜色表示为三维向量：（R, G, B）=（201, 23, 30）

   > 颜色的关联性（是否是相似的颜色）更容易**通过向量表示来判断和量化**

#### 1.单词和单词id对应

`单词含义由id表示`

```py
{0: 'you', 1: 'say', 2: 'goodbye', 3: 'and', 4: 'i', 5: 'hello', 6:'.'}		# 单词id-单词的字典
{'you': 0, 'say': 1, 'goodbye': 2, 'and': 3, 'i': 4, 'hello': 5, '.': 6}	# 单词-单词id的字典
```

#### 2.单词的分布式表示

`单词含义由向量表示`

> 缺陷：如果语料库的词汇量达到10万，则单词向量为维数同样达到10万，但处理10万维向量不现实
>
> 分布式假设:单词本身没有含义，单词含义由它所在的上下文（语境）形成

窗口大小（window size）：上下文大小（周围的单词由多少个）

![image-20241012112459984](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012112459984.png)

#### 共现矩阵

> 基于计数（统计）的方法：在关注某个单词的情况下，对它的周围出现了多少次什么单词进行计数，然后再汇总

举例：

- 对you进行计数

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012150510127.png" alt="image-20241012150510127" style="zoom: 67%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012150538858.png" alt="image-20241012150538858" style="zoom: 67%;" />

- 对say进行计数

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012150650481.png" alt="image-20241012150650481" style="zoom:67%;" />

- 对各个单词进行计数：共现矩阵

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012150807646.png" alt="image-20241012150807646" style="zoom:67%;" />

```py
# 直接从语料库生成共现矩阵的函数
def create_co_matrix(corpus, vocab_size, window_size=1):
    """
    用元素为0的二维数组对co_matrix初始化，
    针对语料库的每一个单词，计算它的窗口内包含的单词，
    检查窗口内的单词是否超出了语料库的左端和右端。
    corpus:单词id列表
    vocal_size:词汇个数
    window_size:窗口大小
    """
    corpus_size = len(corpus)
    co_matrix = np.zeros((vocab_size, vocab_size), dtype=np.int32)

    for idx, word_id in enumerate(corpus):
        for i in range(1, window_size + 1):
            left_idx = idx - i
            right_idx = idx + i

            if left_idx >= 0:
                left_word_id = corpus[left_idx]
                co_matrix[word_id, left_word_id] += 1

            if right_idx < corpus_size:
                right_word_id = corpus[right_idx]
                co_matrix[word_id, right_word_id] += 1

    return co_matrix
```

#### 向量相似度

`词相关性：两个向量多大程度上指向同一方向`

计算余弦相似度（向量正规化再求内积）：
$$
\text{similarity}(\boldsymbol{x},\boldsymbol{y})=\frac{\boldsymbol{x}\cdot\boldsymbol{y}}{\left\|\boldsymbol{x}\right\|\left\|\boldsymbol{y}\right\|}=\frac{x_1y_1+\cdots+x_ny_n}{\sqrt{x_1^2+\cdots+x_n^2}\sqrt{y_1^2+\cdots+y_n^2}}
$$

```py
def cos_similarity(x, y):
    nx = x / np.sqrt(np.sum(x**2))  # x的正规化
    ny = y / np.sqrt(np.sum(y**2))  # y的正规化
    return np.dot(nx, ny)
# 若除数出现0向量，则发生错误：为除数加上eps进行避免
def cos_similarity(x, y, eps=1e-8):
    nx = x / (np.sqrt(np.sum(x ** 2)) + eps)
    ny = y / (np.sqrt(np.sum(y ** 2)) + eps)
    return np.dot(nx, ny)
def most_similar(query, word_to_id, id_to_word, word_matrix, top=5):
    """
    查询指定词和其他词的余弦相似度：
    query：查询词
    word_to_id：单词到单词ID的字典
    id_to_word：单词ID到单词的字典
    word_matrix：共现矩阵
    top：显示到前几位
    
    argsort():按升序对numpy数组元素进行排序，返回值为数组的索引
    """
    # 1.取出查询词
    if query not in word_to_id:
        print ('%s is not found' % query)
        return
    print ('\n[query] ' + query)
    query_id = word_to_id[query]
    query_vec = word_matrix[query_id]

    # 2.计算余弦相似度
    vocab_size = len(id_to_word)
    similarity = np.zeros(vocab_size)
    for i in range(vocab_size):
        similarity[i] = cos_similarity(word_matrix[i], query_vec)

    # 3.基于余弦相似度，按降序输出值
    count = 0
    for i in (-1 * similarity).argsort():
        if id_to_word[i] == query:
            continue
        print (' %s: %s' % (id_to_word[i], similarity[i]))
        count += 1
        if count >= top:
            return
```

```py
import sys
sys.path.append('..')
from common.util import preprocess, create_co_matrix, most_similar

text = 'You say goodbye and I say hello.'
corpus, word_to_id, id_to_word = preprocess(text)
vocab_size = len(word_to_id)
C = create_co_matrix(corpus, vocab_size)

most_similar('you', word_to_id, id_to_word, C, top=5)
# goodbye和hello的余弦相似度也很高，这和我们的感觉存在很大的差异。
# 可能的原因：语料库太小，后面我们会用更大的语料库进行相同的实验
```

#### 点互信息

`处理常用词问题，如：the`

> 在使用PMI的情况下，与the相比，drive和car具有更强的相关性（考虑了单词单独出现的次数，因为the本身出现得多，所以PMI的得分被拉低了）
>
> PPMI矩阵的缺陷：
>
> 1. 单词向量的维数大，如：10w
> 2. 其中很多元素都是0，大多数元素并不重要：容易受噪声影响，稳健性差

**点互信息（PMI）**
$$
\mathrm{PMI}(x,y)=\log_2\frac{P(x,y)}{P(x)P(y)}
$$

- PMI：值越高，相关性越强
- P(x)：x发生的概率
- P(y)：y发生的概率
- P(x,y)：x和y同时发生的概率

**点互信息 + 共现矩阵**
$$
\mathrm{PMI}(x,y)=\log_2\frac{P(x,y)}{P(x)P(y)}=\log_2\frac{\frac{\boldsymbol{C}(x,y)}N}{\frac{\boldsymbol{C}(x)}{N}\frac{\boldsymbol{C}(y)}{N}}=\log_2\frac{\boldsymbol{C}(x,y)\cdot N}{\boldsymbol{C}(x)\boldsymbol{C}(y)}
$$

- C(x)：单词x的出现次数
- C(y)：单词y的出现次数
- C(x,y)：单词x、y的共现次数
- N：语料库的单词数量

**正的点互信息**

`当两个单词共现次数为0，log0=-∞（将单词间的相关性表示为大于等于0的实数）`
$$
\mathrm{PPMI}(x,y)=\max(0,\mathrm{PMI}(x,y))
$$

```py
def ppmi(C, verbose=False, eps=1e-8):
    """
    C：共现矩阵
    verbose：决定是否输出运行情况的标志【当处理大语料库时，设置verbose=True，可以用于确认运行情况】
    """
    M = np.zeros_like(C, dtype=np.float32)
    N = np.sum(C)
    S = np.sum(C, axis=0)
    total = C.shape[0] * C.shape[1]
    cnt = 0

    for i in range(C.shape[0]):
        for j in range(C.shape[1]):
            # 加入eps：防止出现负无穷大
            pmi = np.log2(C[i, j] * N / (S[j]*S[i]) + eps)
            M[i, j] = max(0, pmi)

            if verbose:
                cnt += 1
                if cnt % (total//100+1) == 0:
                    print ('%.1f%% done' % (100*cnt/total))
    return M
```

#### 向量降维

`“保留重要信息”的基础上减少向量维度，用新轴上的投影值表示各个数据点的值`

==注意==：选择新轴时要考虑数据的广度

![image-20241012165645683](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241012165645683.png)

稀疏矩阵（稀疏向量）：向量中大多数元素为0的矩阵（或向量）

向量降维可将稀疏矩阵转为大多数元素均不为0的密集矩阵，即单词的分布式表示

##### 奇异值分解（SVD）

`将任意矩阵分解为3个矩阵的乘积`

> 降维：使用svd之后，如果要对这个密集向量降维，比如把它降维到二维向量，取出前两个元素即可
>
> 缺陷：如果矩阵为N*N,则计算量会达到N^3^

$$
X=USV^\mathrm{T}
$$

- U/V：列向量彼此正交的正交矩阵
- S：对角矩阵（除对角线元素以外其余元素均为0），奇异值在对角线上降序排列

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013153021552.png" alt="image-20241013153021552" style="zoom:80%;" />

- U：正交矩阵。构成一些空间中的基轴（基向量），可视为“单词空间”
- S：对角矩阵。奇异值在对角线上降序排列，可将奇异值视为“对应的基轴”的重要性

**通过去除矩阵U中多余的列向量来近似原始矩阵**

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013152644182.png" alt="image-20241013152644182" style="zoom: 80%;" />

**PPMI矩阵：矩阵x的各行包含对应单词ID的单词向量，使用降维后的矩阵U`来表示**

```py
import sys
sys.path.append('..')
import numpy as np
import matplotlib.pyplot as plt
from common.util import preprocess, create_co_matrix, ppmi

text = 'You say goodbye and I say hello.'
corpus, word_to_id, id_to_word = preprocess(text)
vocab_size = len(id_to_word)
C = create_co_matrix(corpus, vocab_size, window_size=1)		# 创建共现矩阵
W = ppmi(C)		# 转PPMI矩阵
U, S, V = np.linalg.svd(W)	# 将稀疏矩阵转为密集矩阵：使用numpy的内置函数对PPMI矩阵进行SVD奇异值分解
# 对矩阵降维到2维并绘图
for word, word_id in word_to_id.items():
    plt.annotate(word, (U[word_id, 0], U[word_id, 1]))	# 加注释
plt.scatter(U[:,0], U[:,1], alpha=0.5)	# 绘制散点图，二维数据，只取前1维为x轴，2维为y轴
plt.show()
```

#### PTB数据集

`Penn Treebank语料库`

真正的语料库

> 在处理大数据集时，使用numpy的基础svd方法较慢，这里采用sklearn的randomized_svd()方法
>
> - randomized_svd：使用随机数的Truncated SVD，仅对奇异值较大的部分进行计算，计算速度比常规的SVD快

```py
import sys
sys.path.append('..')
import numpy as np
from common.util import most_similar, create_co_matrix, ppmi
from dataset import ptb
window_size = 2
wordvec_size = 100

corpus, word_to_id, id_to_word = ptb.load_data('train')
vocab_size = len(word_to_id)
print ('counting  co-occurrence ...')
C = create_co_matrix(corpus, vocab_size, window_size)
print ('calculating PPMI ...')
W = ppmi(C, verbose=True)

print ('calculating SVD ...')
try:
    # truncated SVD (fast!)
    from sklearn.utils.extmath import randomized_svd
    U, S, V = randomized_svd(W, n_components=wordvec_size, n_iter=5,
                            random_state=None)
except ImportError:
    # SVD (slow)
    U, S, V = np.linalg.svd(W)

word_vecs = U[:, :wordvec_size]

querys = ['you', 'year', 'car', 'toyota']
for query in querys:
    most_similar(query, word_to_id, id_to_word, word_vecs, top=5)
```

```sh
[query] you
i: 0.702039909619
we: 0.699448543998
've: 0.554828709147
do: 0.534370693098
else: 0.512044146526

[query] year
month: 0.731561990308
quarter: 0.658233992457
last: 0.622425716735
earlier: 0.607752074689
next: 0.601592506413

[query] car
luxury: 0.620933665528
auto: 0.615559874277
cars: 0.569818364381
vehicle: 0.498166879744
corsica: 0.472616831915

[query] toyota
motor: 0.738666107068
nissan: 0.677577542584
motors: 0.647163210589
honda: 0.628862370943
lexus: 0.604740429865
```

## 法三：word2vec==【未完结】==

`单词的含义由上下文决定，就像人是由关系网络组成`

> 基于推理的方法：使用语料库来学习模型，使用模型根据上下文来预测中心词/使用中心词预测上下文
>
> word2vec的两大模型：
>
> 1. CBOW
> 2. skip-gram

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013164132843.png" alt="image-20241013164132843" style="zoom:80%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013164143881.png" alt="image-20241013164143881" style="zoom:80%;" />

一个单词的one-hot编码进行一次矩阵计算：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013170205125.png" alt="image-20241013170205125" style="zoom:80%;" />

### CBOW模型

> 上下文 -> 目标词

#### 原理

**n个单词的one-hot编码进行n次矩阵计算：**

1. **输入层**：
2. fc1：全连接1（编码）（权重$W_{in}$：==行向量==表示单词的分布式表示）
3. **中间层**：各输入层经fc1计算得到值的平均
4. fc2：全连接2（解码）（权重$W_{out}$：==列向量==表示单词的分布式表示）
5. **输出层（分类）**：中间层经fc2计算得各单词得分【经过softmax后可得到概率】

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013170930428.png" alt="image-20241013170930428" style="zoom:80%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013210323981.png" alt="image-20241013210323981" style="zoom: 80%;" />

#### 实现

```py
# coding: utf-8
import sys
sys.path.append('..')
import numpy as np
from common.layers import MatMul, SoftmaxWithLoss


class SimpleCBOW:
    def __init__(self, vocab_size, hidden_size):
        V, H = vocab_size, hidden_size

        # 初始化权重[32位浮点数]
        W_in = 0.01 * np.random.randn(V, H).astype('f')
        W_out = 0.01 * np.random.randn(H, V).astype('f')

        # 生成层
        self.in_layer0 = MatMul(W_in)
        self.in_layer1 = MatMul(W_in)
        self.out_layer = MatMul(W_out)
        self.loss_layer = SoftmaxWithLoss()

        # 将所有的权重和梯度整理到列表中
        layers = [self.in_layer0, self.in_layer1, self.out_layer]
        self.params, self.grads = [], []
        for layer in layers:
            self.params += layer.params
            self.grads += layer.grads

        # 将单词的分布式表示设置为成员变量
        self.word_vecs = W_in

    def forward(self, contexts, target):
        h0 = self.in_layer0.forward(contexts[:, 0])
        h1 = self.in_layer1.forward(contexts[:, 1])
        h = (h0 + h1) * 0.5
        score = self.out_layer.forward(h)
        loss = self.loss_layer.forward(score, target)
        return loss

    def backward(self, dout=1):
        ds = self.loss_layer.backward(dout)
        da = self.out_layer.backward(ds)
        da *= 0.5
        self.in_layer1.backward(da)
        self.in_layer0.backward(da)
        return None

```

```py
# coding: utf-8
import sys
sys.path.append('..')  # 为了引入父目录的文件而进行的设定
from common.trainer import Trainer
from common.optimizer import Adam
from ch03.simple_cbow import SimpleCBOW
from common.util import preprocess, create_contexts_target, convert_one_hot


window_size = 1
hidden_size = 5
batch_size = 3
max_epoch = 1000

text = 'You say goodbye and I say hello.'
corpus, word_to_id, id_to_word = preprocess(text)

vocab_size = len(word_to_id)
contexts, target = create_contexts_target(corpus, window_size)
target = convert_one_hot(target, vocab_size)
contexts = convert_one_hot(contexts, vocab_size)

model = SimpleCBOW(vocab_size, hidden_size)
optimizer = Adam()
trainer = Trainer(model, optimizer)

trainer.fit(contexts, target, max_epoch, batch_size)
trainer.plot()
# 输出单词的分布式表示（对应的权重）
word_vecs = model.word_vecs
for word_id, word in id_to_word.items():
    print(word, word_vecs[word_id])
```

### skip-gram模型

> 目标词 -> 上下文

![image-20241015141308329](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241015141308329.png)

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241015141342971.png" alt="image-20241015141342971" style="zoom: 67%;" />

### 数据转换

- contexts：神经网络的输入
- taget：正确解标签

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013203634861.png" alt="image-20241013203634861"  /><img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241013204842184.png" alt="image-20241013204842184"  />

```py
"""
将语料库（单词ID）转化为上下文和目标词
"""
def create_contexts_target(corpus, window_size=1):
    target = corpus[window_size:-window_size]
    contexts = []

    for idx in range(window_size, len(corpus)-window_size):
        cs = []
        for t in range(-window_size, window_size + 1):
            if t == 0:
                continue
            cs.append(corpus[idx + t])
        contexts.append(cs)

    return np.array(contexts), np.array(target)
```

```py
"""
转为one-hot编码
"""
import sys
sys.path.append('..')
from common.util import preprocess, create_contexts_target, convert_one_hot

text = 'You say goodbye and I say hello.'
# 转单词id表示
corpus, word_to_id, id_to_word = preprocess(text)
# 上下文-目标词
contexts, target = create_contexts_target(corpus, window_size=1)

vocab_size = len(word_to_id)
# one-hot编码表示
target = convert_one_hot(target, vocab_size)
contexts = convert_one_hot(contexts, vocab_size)
```

### 模型概率公式解析-对比

> P(A,B)：联合概率，A、B同时发生的概率
>
> P(A|B)：后验概率，B发生时A发生的概率
>
> 负对数似然：$-log(\text{概率})$
>

#### CBOW

当$w_{t}$发生时：对应的one-hot向量元素为1，其余为0

![image-20241015140358727](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241015140358727.png)

1. 后验概率公式

$$
P(w_t|w_{t-1},w_{t+1})
$$

2. 交叉熵损失函数：

$$
L=-\sum_{k}t_{k}\log y_{k}
$$

- $y_{k}$：第k个事件发生的概率
- $t_{k}$：监督标签（one-hot向量的元素）

3. 算交叉熵损失

$$
L=-\log P(w_t|w_{t-1},w_{t+1})
$$

4. 扩展到整个语料库

$$
L=-\frac{1}{T}\sum_{t=1}^T\log P(w_t|w_{t-1},w_{t+1})
$$

#### skip-gram

1. 后验概率公式

$$
P(w_{t-1},w_{t+1}|w_t)
$$

假定上下文的单词之间没有相关性（“条件独立”）：
$$
P(w_{t-1},w_{t+1}|w_{t})=P(w_{t-1}|w_{t})\:P(w_{t+1}|w_{t})
$$

2. 算交叉熵损失

$$
\begin{aligned}\text{L}&=-\log P(w_{t-1},w_{t+1}|w_{t})\\&=-\log P(w_{t-1}|w_{t})P(w_{t+1}|w_{t})\\&=-(\log P(w_{t-1}|w_{t})+\log P(w_{t+1}|w_{t}))\end{aligned}
$$

3. 扩展到整个语料库

$$
L=-\frac{1}{T}\sum_{t=1}^{T}(\log P(w_{t-1}|w_{t})+\log P(w_{t+1}|w_{t}))
$$

#### 模型对比

**准确度**：skip-grm模型的结果更好【尤其在大语料库、低频词和类推问题】

**学习速度**：CBOW模型更快【skip-gram计算成本大：根据上下文数量计算相应个数的损失】

**可解决难度**：skip-gram更强

### word2vec-高速化

> 为什么要高速化？假设输入层的词汇量有100w个，中间层神经元有100个。将会出现计算瓶颈：
>
> 1. 输入层的one-hot表示与权重矩阵Win的乘积难算【Embedding层：每次抽一行和$W_{in}$对应相乘】
> 2. 中间层和权重矩阵Wout的乘积、Softmax层的计算难算【Negative sampling损失函数解决】

![image-20241021174508212](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241021174508212.png)

#### Embedding层

`词嵌入：从权重参数抽取单词ID对应行/列向量`

> 将输入数据的每个词转化为向量：提取词向量中指定词对应的词向量

```py
class Embedding:
    def__init__（self, W）:
        self.params = [W]
        self.grads = [np.zeros_like（W）]
        self.idx = None

    def forward（self, idx）:
        W, = self.params
        self.idx = idx		# 在idx中以数组的形式保存需要提取的行的索引（单词ID）
        out = W[idx]
        return out
#     def backward（self, dout）:
#         dW, = self.grads
#         dW[...] = 0
#         dW[self.idx] = dout		# 梯度覆盖【如果出现两个相同的单词序号，则会被覆盖两次】
#         return None
    def backward（self, dout）:
        dW, = self.grads
        dW[...] = 0
        for i, word_id in enumerate（self.idx）:
            dW[word_id] += dout[i]	# 梯度覆盖【使用累计和而不是直接覆盖】
            # 或
            # np.add.at（dW, self.idx, dout）
        return None
```

#### Negative sampling

`负采样`

> 使用Negative sampling代替Softmax，无论词汇量有多大，豆科野使计算量保持较低或恒定
>
> 负抽样的目的是为了最终输出的上下文单词（正样本），在采样过程中应该保留下来并更新，同时也需要采集部分负样本（非上下文单词）。
> 通过负采样，在更新隐层到输出层的权重时，只需更负采样的单词，而不用更新[词汇表](https://zhida.zhihu.com/search?content_id=135718851&content_type=Article&match_order=1&q=词汇表&zhida_source=entity)所有单词，**节省计算量**。



降低计算量：多分类（1\*正样本、n\*负样本）->二分类（正样本、负样本）



hard-negative：

选择负样本时增加游戏难度（负样本和正样本比较接近）









## simple RNN

> `单纯的前馈网络无法充分学习时序数据的性质（模式）`
>
> 两类递归神经网络：
>
> - 结构递归：处理树结构（Recursive Neural Network）
> - 时间递归：循环神经网络（Recurrent Neural Networ）[RNN]
>
> 
>
> LSTN中加入了门单元（那些信息需要记忆，那些不需要，按比例记忆）
>
> 输入数据举例【64个句子，每个句子100个词，每个词300维向量】：
>
> batch_size：64
>
> 长度[max-length]：100个词
>
> 词向量：300维
>
> 
>
> RNN：3层
>
> 隐层：128维
>
> 分类：2分类

### 前言：概率和语言模型

#### 概率视角下的word2vec

由上下文推中心词

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241022093206746.png" alt="image-20241022093206746"  /><img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241022093218131.png" alt="image-20241022093218131" style="zoom:80%;" />

1. 概率公式：

- $P(w_{t}|w_{t-1},w_{t+1})$
- $P(w_{t}|w_{t-2},w_{t-1})$

2. 交叉熵误差：

$$
L=-\log P(w_t|w_{t-2},w_{t-1})
$$

作为副产品获得了单词含义的分布式表示

#### 条件语言模型

语言模型输出单词序列发生的概率（一个句子多大程度上是自然的单词序列）

语言模型的应用

1. 生成多个句子作为候选
2. 根据概率分布生成新的句子

使用数学式表示语言模型：

$P(w_{1},...,w_{m})$：联合概率，多个事件一起发生的概率

使用后验概率分解：
$$
P(\underbrace{w_{1},\cdots,w_{m-1}}_{A},w_{m})=P(A,w_{m})=P(w_{m}\:|\:A)P(A)
$$

$$
P(A)=P(\underbrace{w_{1},\cdots,w_{m-2}}_{A^{\prime}},w_{m-1})=P(A^{\prime},w_{m-1})=P(w_{m-1}\:|A^{\prime})P(A^{\prime})
$$

$$
\begin{aligned}P(w_{1},\cdots,w_{m})&=P(w_{m}\mid w_{1},\cdots,w_{m-1})P(w_{m-1}\mid w_{1},\cdots,w_{m-2})\\&\cdots P(w_{3}\mid w_{1},w_{2})P(w_{2}\mid w_{1})P(w_{1})\\&=\prod_{t=1}^{m}P(w_{t}\mid w_{1},\cdots,w_{t-1})\end{aligned}
$$

最后的后验概率是以目标词左侧的全部单词为上下文（条件）时的概率

![image-20241022125632330](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241022125632330.png)

#### 将CBOW模型用作语言模型

> 马尔可夫链（条件概率）：未来的状态仅依存于当前状态。
>
> N阶马尔可夫链：某个事件的概率仅取决于前N个事件
>
> 2阶马尔可夫链：下一个单词仅取决于前2个单词的模型

$$
P(w_1,\cdots,w_m)=\prod_{t=1}^mP(w_t\:|\:w_1,\cdots,w_{t-1})\approx\prod_{t=1}^mP(w_t\:|\:w_{t-2},w_{t-1})
$$

缺陷：

1. 无记忆（即便是使用左侧10个单词作为上下文的CBOW模型，其上下文更左侧的单词的信息也会被忽略）
2. 无顺序（忽视上下文中单词顺序，（you，say）和（say，you）被作为相同的内容进行处理）



使用拼接的方式解决无序的问题（但并不理想，权重参数数量依旧是与上下文大小成比例地增加）：

![image-20241022131756224](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241022131756224.png)



### RNN

`拥有一个环路：使数据不断循环，一边记住过去的数据，一边更新到最新的数据`

> **时刻**：时序数据的索引，如：第“t”个单词、第“t”个RNN层

#### 网络结构

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030091755523.png" alt="image-20241030091755523" style="zoom:150%;" />
$$
h_t=\tanh(h_{t-1}W_h+x_tW_x+b)
$$

- $x_{t}$：每一个时刻的输入
- $h_{t}$：每一个隐层的输出，总单词预测的数值
- $o_{t}$：每一个时刻的输出，总单词预测的概率表示
- 所有单元的参数共享【$wx\text{、}wh\text{、}b$】

#### 时序反向传播（BPTT）

`Backpropagation Through Time`

> 随时序数据的时间跨度增大，BPTT消耗的内存比例增大，反向传播的梯度也会变得不稳定。提出Truncated BPTT

![image-20241022214136898](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241022214136898.png)

##### 截断的时序反向传播（TBPTT）

`Truncated BPTT`

> 序列网络过长造成问题：1.计算量过大2.梯度消失
>
> 解决：截断组成多个小型网络（块），以块为单位分别进行误差反向传播
>
> ==注意==：只有反向传播被截断，正向传播之间是有关联的，连接依然被维持

![image-20241022215111320](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241022215111320.png)

####  TBPTT-minibatch

不同于fc或cnn的minibatch，RNN-bptt的minibatch是将序列数据分批，**每次喂进去一批，每批按照tbptt截断为多个分别进行训练，然后喂进去下一批**。

假如：数据长度是为1000的时序数据，将网络以时间长度为10为单位进行截断，将总批次设置为2进行学习

#### 实现

![image-20241029150213144](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029150213144.png)

```py
class RNN:
    def __init__(self,Wx,Wh,b):
        self.params = [Wx,Wh,b] # 定义权重参数
        self.grads = [np.zeros_like(Wx),np.zeros_like(Wh),np.zeros_like(b)]
        self.cache = None   # 中间数据初始化
    
    def forward(self,x,h_prev):     # h_prev：本RNN层的输入；h_next：本RNN层的输出
        Wx,Wh,b = self.params
        
        t = np.dot(h_prev,Wh)+np.dot(x,Wx)+b
        h_next = np.tanh(t)

        self.cache = (x,h_prev,h_next)
        return h_next
    
    def bachward(self,dh_next):
        Wx,Wh,b = self.params
        x,h_prev,h_next = self.cache
        
        dt = dh_next*(1-h_next**2)  # tanh函数的导数
        
        db = np.sum(dt,axis=0)

        dWh = np.dot(h_prev.T,dt)
        dh_prev = np.dot(dt,Wh.T)
        
        dWx = np.dot(x.T,dt)
        dx = np.dot(dt,Wx.T)

        self.grads[0][...] = dWx
        self.grads[1][...] = dWh
        self.grads[2][...] = db
        return dx,dh_prev
```

### Time RNN层

`Time RNN层中有多个RNN层`

> - Time RNN层：一次处理T步的层
> - RNN层：Time RNN层中的单步处理的层

![image-20241027210054493](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241027210054493.png)

- 将$(x_{0}, x_{1},···, x_{T-1})$捆绑为$x_{s}$作为输入
- 将$(h_{0}, h_{1},···,h_{T-1})$捆绑为$h_{s}$作为输出

Time RNN的反向传播：

![image-20241029164252330](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029164252330.png)

每一小块的反向传播：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029164319313.png" alt="image-20241029164319313" style="zoom:80%;" />

```py
import numpy as np
class TimeRNN:
    def __init__(self,Wx,Wh,b,stateful=False):
        """
        h：Time RNN层的隐藏状态
        stateful：指定是否保存上一时刻的隐藏状态
        stateful为True：Time RNN层“有状态”（维持隐藏状态）
            无论时序数据多长，Time RNN层的正向传播都可以不中断地进行
        stateful为False：Time RNN层“无状态”：
            每次调用Time RNN层的forward（），第一个RNN层的隐藏状态都会被初始化为零矩阵（所有元素均为0的矩阵）​。
        """
        self.params = [Wx,Wh,b]
        self.grads = [np.zeros_like(Wx),np.zeros_like(Wh),np.zeros_like(b)]
        self.layers = None  # 保存rnn层

        self.h,self.dh = None,None
        self.stateful = stateful

    def set_state(self,h):  # 设定隐藏状态
        self.h = h

    def reset_state(self):  # 重设隐藏状态
        self.h = None

    def forward(self,xs):
        # xs：T个时序数据
        # 如果批大小是N，输入向量的维数是D，则xs：(N,T,D)
        Wx,Wh,b = self.params
        N,T,D = xs.shape
        D,H = Wx.shape

        self.layers = []
        hs = np.empty((N,T,H),dtype='f')    # 为隐藏状态h准备一个容器
        if not self.stateful or self.h is None:
            self.h = np.zeros((N,H),dtype='f')
        for t in range(T):
            layer = RNN(*self.params)   # 将每个RNN添加到layer
            self.h = layer.forward(xs[:,t,:],self.h)
            hs[:,t,:] = self.h  # 隐藏状态添加到hs
            self.layers.append(layer)
        return hs
    def backward(self, dhs):
        Wx, Wh, b = self.params
        N, T, H = dhs.shape
        D, H = Wx.shape

        dxs = np.empty((N, T, D), dtype='f')    # 传给下游的梯度
        dh = 0
        grads = [0, 0, 0]
        for t in reversed(range(T)):
            layer = self.layers[t]
            dx, dh = layer.backward(dhs[:, t, :] + dh) # 求和后的梯度
            dxs[:, t, :] = dx

            for i, grad in enumerate(layer.grads):  # 求各个RNN层权重梯度的和
                grads[i] += grad

        for i, grad in enumerate(grads):    # 覆盖成员变量self.grads
            self.grads[i][...] = grad
        self.dh = dh

        return dxs
```

### RNNLM

`使用Time embedding、Time Affine等来实现整体处理时序数据的层`

#### 原理

![image-20241029212029417](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029212029417.png)

![image-20241029212616006](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029212616006.png)

**Time层：**

![image-20241029213115402](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029213115402.png)

- Time Affine层：准备T个Affine层分别处理各个时刻的数据即可
- Time Embedding层：准备T个Embedding层，由各个Embedding层处理各个时刻的数据。
- Time Softmax with Loss：

![image-20241029212931561](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241029212931561.png)

损失计算：T个Softmax with Loss层各自算出损失，然后将它们加在一起取平均：
$$
L=\frac{1}{T}(L_0+L_1+\cdots+L_{T-1})
$$
**评价RNN**

> 困惑度（perplexity）、分叉度：评价语言模型的预测性能的指标，下一个可以选择的选项的数量。概率的倒数，最小值为1.0
>
> > 好的预测模型的分叉度是1.25，这意味着下一个要出现的单词的候选个数可以控制在1个左右。而在差的模型中，下一个单词的候选个数有5个
> >
> > 信息论领域，困惑度也称为“平均分叉度”。这可以解释为，数据量为1时的分叉度是数据量为N时的分叉度的平均值
> >
> > 困惑度越小，分叉度越小，表明模型越好

多个输入数据计算困惑度：
$$
L=-\frac{1}{N}\sum_{n}\sum_{k}t_{nk}\log y_{nk}
$$

$$
\text{困惑都}=e^L
$$

- 数据量：N
- $t_{nk}$：第n个数据的第k个值
  - $t_n$：one-hot向量的正确解标签
- $y_{nk}$：概率分布（神经网络中的softmax的输出）
- $L$：神经网络的损失

#### 实现

> 标准差：表示数据分散程度的指标
>
> 在语言模型的相关研究中，经常使用`0.01 * np.random.uniform（...）`这样的经过缩放的均匀分布

```py
import sys
sys.path.append('..')
import numpy as np
from common.time_layers import *

class SimpleRnnlm:
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn

        # 初始化权重
        embed_W = (rn(V, D) / 100).astype('f')
            # 使用Xavier初始值，在上一层节点数为n的情况下，使用标准差为1/sqrt(n)的分布作为Xaxier初始值
        rnn_Wx = (rn(D, H) / np.sqrt(D)).astype('f')
        rnn_Wh = (rn(H, H) / np.sqrt(H)).astype('f')
        rnn_b = np.zeros(H).astype('f')
        affine_W = (rn(H, V) / np.sqrt(H)).astype('f')
        affine_b = np.zeros(V).astype('f')

        # 生成层
        self.layers = [
            TimeEmbedding(embed_W),
            TimeRNN(rnn_Wx, rnn_Wh, rnn_b, stateful=True),
            TimeAffine(affine_W, affine_b)
        ]
        self.loss_layer = TimeSoftmaxWithLoss()
        self.rnn_layer = self.layers[1]

        # 将所有的权重和梯度整理到列表中
        self.params, self.grads = [], []
        for layer in self.layers:
            self.params += layer.params
            self.grads += layer.grads

    def reset_state(self):
        self.rnn_layer.reset_state()
        
    def forward(self, xs, ts):
        for layer in self.layers:
            xs = layer.forward(xs)
        loss = self.loss_layer.forward(xs, ts)
        return loss

    def backward(self, dout=1):
        dout = self.loss_layer.backward(dout)
        for layer in reversed(self.layers):
            dout = layer.backward(dout)
        return dout
```

```py
import sys
sys.path.append('..')
import matplotlib.pyplot as plt
import numpy as np
from common.optimizer import SGD
from dataset import ptb
from simple_rnnlm import SimpleRnnlm

"""
使用pbt数据集
"""
# 设定超参数
batch_size = 10
wordvec_size = 100
hidden_size = 100
time_size = 5  # Truncated BPTT的时间跨度大小
lr = 0.1
max_epoch = 100

# 读入训练数据（缩小了数据集）
corpus, word_to_id, id_to_word = ptb.load_data('train')
corpus_size = 1000
corpus = corpus[:corpus_size]
vocab_size = int(max(corpus) + 1)

xs = corpus[:-1]  # 输入
ts = corpus[1:]  # 输出（监督标签）
data_size = len(xs)
print('corpus size: %d, vocabulary size: %d' % (corpus_size, vocab_size))

# 学习用的参数
max_iters = data_size // (batch_size * time_size)
time_idx = 0
total_loss = 0
loss_count = 0
ppl_list = []

# 生成模型
model = SimpleRnnlm(vocab_size, wordvec_size, hidden_size)
optimizer = SGD(lr)

# 计算读入mini-batch的各笔样本数据的开始位置
jump = (corpus_size - 1) // batch_size
offsets = [i * jump for i in range(batch_size)]     # 各个元素存放了读入数据的开始位置（偏移量）

for epoch in range(max_epoch):
    for iter in range(max_iters):
        # 获取mini-batch
        # 当读入语料库的位置超过语料库大小时，为了回到语料库的开头处，将当前位置除以语料库大小后的余数作为索引使用
        batch_x = np.empty((batch_size, time_size), dtype='i')
        batch_t = np.empty((batch_size, time_size), dtype='i')
        for t in range(time_size):
            for i, offset in enumerate(offsets):
                batch_x[i, t] = xs[(offset + time_idx) % data_size]
                batch_t[i, t] = ts[(offset + time_idx) % data_size]
            time_idx += 1

        # 计算梯度，更新参数
        loss = model.forward(batch_x, batch_t)
        model.backward()
        optimizer.update(model.params, model.grads)
        total_loss += loss
        loss_count += 1

    # 各个epoch的困惑度评价
    ppl = np.exp(total_loss / loss_count)
    print('| epoch %d | perplexity %.2f'
          % (epoch+1, ppl))
    ppl_list.append(float(ppl))
    total_loss, loss_count = 0, 0
```

## Gated RNN

> LSTM和GRU中增加了一种名为“门”的结构。基于这个门，可以学习到时序数据的长期依赖关系
>
> Gate：门，阻止或释放水流。门的开合程度也是自动从数据学到的

### 前言：simple RNN的梯度问题

#### 梯度消失和梯度爆炸

> RNN层的梯度若在中途变弱（甚至没有包含任何信息），则权重参数将不会被更新（无法学习长期的依赖关系）【梯度消失/梯度爆炸】

![image-20241030092340604](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030092340604.png)

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030092734083.png" alt="image-20241030092734083" style="zoom:80%;" />

1. tanh层梯度消失

   > 当$y=tanh(x)$时，导数为$\frac{dy}{dx}=1-y^2$
   >
   > 从tanh的导数可以看出当它的值小于1.0，值越小越小。如果经过tanh函数T次，则梯度也会减小T次
   >
   > RNN层的激活函数一般使用tanh函数，但是如果改为ReLU函数，则有希望抑制梯度消失的问题（当ReLU的输入为x时，它的输出是max（0, x））。这是因为，在ReLU的情况下，当x大于0时，反向传播将上游的梯度原样传递到下游，梯度不会“退化”。实际上，题为“ Improving performance of recurrent neural network with relu nonlinearity”的论文[29]就使用ReLU实现了性能改善

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030092852185.png" alt="image-20241030092852185" style="zoom:80%;" />

2. matmul层出现梯度爆炸/梯度消失

   > 梯度爆炸/消失的原因？矩阵Wh被反复乘了T次。
   >
   > - 如果Wh是标量，则问题将很简单：当Wh大于1时，梯度呈指数级增加；当Wh小于1时，梯度呈指数级减小
   > - 如果Wh是矩阵，矩阵的奇异值将成为指标（矩阵的奇异值表示数据的离散程度）。最大值大于1，可预测梯度很有可能会呈指数级增加；最大值小于1，则可以判断梯度会呈指数级减小

![image-20241030093547648](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030093547648.png)

```py
import numpy as np
import matplotlib.pyplot as plt

N = 2  # mini-batch的大小
H = 3  # 隐藏状态向量的维数
T = 20  # 时序数据的长度

dh = np.ones((N, H))    # 初始化dh
np.random.seed(3)  # 为了复现，固定随机数种子

# Wh = np.random.randn(H, H)    # 梯度爆炸
Wh = np.random.randn(H, H)*0.5  # 梯度消失

norm_list = []
for t in range(T):  # 根据反向传播中matmul节点的数量更新dh相应次数，并将各步的dh的大小（范数）添加到norm_list中
    dh = np.dot(dh, Wh.T)
    norm = np.sqrt(np.sum(dh**2)) / N   # dh的大小是mini-batch（N笔）中的平均“L2范数”​（L2范数对所有元素的平方和求平方根）
    norm_list.append(norm)
plt.plot(norm_list)
```

#### 梯度裁剪-防止梯度爆炸

> - 神经网络用到的所有参数的梯度：$\hat{\boldsymbol{g}}$
> - 阈值：threshold
>
> 如果梯度的L2范数$||\hat{\boldsymbol{g}}||$大于等于梯度，就修正梯度

$$
\mathrm{if}\quad\|\hat{\boldsymbol{g}}\|\geqslant threshold:\\\hat{\boldsymbol{g}}=\frac{threshold}{\|\hat{\boldsymbol{g}}\|}\hat{\boldsymbol{g}}
$$

```py
import numpy as np

dW1 = np.random.rand(3, 3) * 10
dW2 = np.random.rand(3, 3) * 10
grads = [dW1, dW2]
max_norm = 5.0

def clip_grads(grads, max_norm):
    total_norm = 0
    for grad in grads:
        total_norm += np.sum(grad ** 2)
    total_norm = np.sqrt(total_norm)

    rate = max_norm / (total_norm + 1e-6)
    if rate < 1:
        for grad in grads:
            grad *= rate

clip_grads(grads, max_norm)
```

### LSTM

`Long Short-Term Memory：长时间维持短期记忆`

> `记忆单元能够保存（学习）长期的依赖关系`
>
> 解决RNN梯度消失的问题，可以使用LSTM、GRU等Gated RNN应对。
>
> 加入了记忆单元c：仅在LSTM层内部接收和传递数据
>
> 计算：
>
> - $c_t$基于3个输入$c_{t-1}$、$h_{t-1}$和$x_t$
> - 隐藏状态$h_t$：基于更新后的$c_t$来计算
> - $h_t=tanh(c_t)$，表示对$c_t$的各个元素应用tanh函数

**封装simple RNN的一个RNN单元为tanh：**

![image-20241030101852391](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030101852391.png)

**演化：**

![image-20241030102031868](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030102031868.png)

#### 1.输出门[o]

> 为什么叫输出门？此门管理下一个隐藏状态$h_t$的输出
>
> 对tanh施加门：针对tanh（ct）的各个元素，调整它们作为下一时刻的隐藏状态的重要程度

![image-20241030104753563](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030104753563.png)
$$
\boldsymbol{o}=\sigma(\boldsymbol{x}_tW_x^{(\mathrm{o})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_h^{(\mathrm{o})}+\boldsymbol{b}^{(\mathrm{o})})
$$

- 上标o：表示输出们
- $\sigma$：表示sigmoid函数【区间：0.0-1.0，表示数据流出的比例】

$$
h_t=\boldsymbol{o}\odot\tanh(\boldsymbol{c}_t)
$$

- $\odot$：点积（按元素相乘）
- tanh函数【区间：-1.0-1.0，表示某种被编码的“信息”的强弱程度】

#### 2.遗忘门[f]

`只有放下包袱，才能轻装上路`

> 遗忘门：忘记不必要记忆的门

![image-20241030105402585](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030105402585.png)
$$
\boldsymbol{f}=\sigma(x_tW_x^{(\mathrm{f})}+h_{t-1}W_h^{(\mathrm{f})}+b^{(\mathrm{f})})
$$

- 上标f：表示遗忘门
- $\sigma$：表示sigmoid函数【区间：0.0-1.0，表示数据流出的比例】

$$
c_{t}=\boldsymbol{f}\odot c_{t-1}
$$

- $\odot$：点积（按元素相乘）

#### 3.记忆单元[g]

> 不能只忘记不记忆新信息

![image-20241030110902254](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030110902254.png)
$$
\boldsymbol{g}=\tanh(\boldsymbol{x}_t\boldsymbol{W}_x^{(\mathrm{g})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_h^{(\mathrm{g})}+\boldsymbol{b}^{(\mathrm{g})})
$$

- g：表示记忆门
- $\boldsymbol{g}$：通过tanh函数和...向记忆单元添加的新信息

#### 4.输入门-记忆单元2[i]

> 加权新信息

![image-20241030111723075](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030111723075.png)
$$
\boldsymbol{i}=\sigma(\boldsymbol{x}_t\boldsymbol{W}_x^{(\mathrm{i})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_h^{(\mathrm{i})}+\boldsymbol{b}^{(\mathrm{i})})
$$

- i：表示输入门
- $\boldsymbol{i}$：通过$\boldsymbol{i}$添加加权后的新信息

#### 无梯度爆炸/消失

> - simple RNN为什么发生梯度问题？相同的权重矩阵重复多次矩阵乘积
> - 当前LSTM为什么不发生梯度问题？此刻进行的不是矩阵乘积运算，而是点积（每次基于不同的门值对应元素相乘）
>
> "x"节点的计算由遗忘门控制（每次输出不同的门值）：
>
> > 遗忘门认为“应该忘记”的记忆单元的元素，其梯度会变小
> >
> > 遗忘门认为“不能忘记”的元素，其梯度在向过去的方向流动时不会退化
>
> 因此，可以期待记忆单元的梯度（应该长期记住的信息）能在不发生梯度消失的情况下传播

记忆单元c的反向传播：

![image-20241030112921132](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241030112921132.png)

#### 计算简化

计算公式：
$$
\begin{aligned}&\boldsymbol{f}=\sigma(\boldsymbol{x}_{t}\boldsymbol{W}_{x}^{(\mathrm{f})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_{h}^{(\mathrm{f})}+\boldsymbol{b}^{(\mathrm{f})})\\&\boldsymbol{g}=\mathrm{tanh}(\boldsymbol{x}_{t}\boldsymbol{W}_{x}^{(\mathrm{g})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_{h}^{(\mathrm{g})}+\boldsymbol{b}^{(\mathrm{g})})\\&\boldsymbol{i}=\sigma(\boldsymbol{x}_{t}\boldsymbol{W}_{x}^{(\mathrm{i})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_{h}^{(\mathrm{i})}+\boldsymbol{b}^{(\mathrm{i})})\\&\boldsymbol{o}=\sigma(\boldsymbol{x}_{t}\boldsymbol{W}_{x}^{(\mathrm{o})}+\boldsymbol{h}_{t-1}\boldsymbol{W}_{h}^{(\mathrm{o})}+\boldsymbol{b}^{(\mathrm{o})})\end{aligned}
$$

$$
c_t=f\odot c_{t-1}+\boldsymbol{g}\odot i
$$

$$
h_t=o\odot\tanh(\boldsymbol{c}_t)
$$

将上面的四个公式进行计算简化：
$$
x_{t}\left[W_{x}^{(\mathrm{f})}\:W_{x}^{(\mathrm{g})}\:W_{x}^{(\mathrm{i})}\:W_{x}^{(\mathrm{o})}\:\right]+\:h_{t-1}\:\left[W_{h}^{(\mathrm{f})}\:W_{h}^{(\mathrm{g})}\:W_{h}^{(\mathrm{i})}\:W_{h}^{(\mathrm{o})}\right]\:+\:\left[\:b^{(\mathrm{f})}\:b^{(\mathrm{g})}\:b^{(\mathrm{i})}\:b^{(\mathrm{o})}\:\right]=\boldsymbol{A}=\boldsymbol{f},\boldsymbol{g},\boldsymbol{i},\boldsymbol{o}
$$
使用slice节点进行分割：

![image-20241103143419509](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103143419509.png)

**反向传播：**

![image-20241103145912539](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103145912539.png)



```py
class LSTM:
    def __init__(self,Wx,Wh,b):
        self.params = [Wx,Wh,b]
        self.grads = [np.zeros_like(Wx),np.zeros_like(Wh),np.zeros_like(b)]
        self.cache = None   # 保存正向传播的中间结果(以供反向传播使用)
    
    def forward(self, x, h_prev, c_prev):
        """
        h_prev:上一时刻的隐藏状态
        c_prev:上一时刻的记忆单元
        """
        Wx, Wh, b = self.params
        N, H = h_prev.shape

        A = np.dot(x, Wx) + np.dot(h_prev, Wh) + b

        # 使用slice节点分割矩阵
        f = A[:, :H]
        g = A[:, H:2*H]
        i = A[:, 2*H:3*H]
        o = A[:, 3*H:]

        f = sigmoid(f)
        g = np.tanh(g)
        i = sigmoid(i)
        o = sigmoid(o)

        c_next = f * c_prev + g * i
        h_next = o * np.tanh(c_next)

        self.cache = (x, h_prev, c_prev, i, f, g, o, c_next)
        return h_next, c_next
    
    def backward(self, dh_next, dc_next):
        Wx, Wh, b = self.params
        x, h_prev, c_prev, i, f, g, o, c_next = self.cache

        tanh_c_next = np.tanh(c_next)

        ds = dc_next + (dh_next * o) * (1 - tanh_c_next ** 2)

        dc_prev = ds * f

        di = ds * g
        df = ds * c_prev
        do = dh_next * tanh_c_next
        dg = ds * i

        di *= i * (1 - i)
        df *= f * (1 - f)
        do *= o * (1 - o)
        dg *= (1 - g ** 2)

        dA = np.hstack((df, dg, di, do))

        dWh = np.dot(h_prev.T, dA)
        dWx = np.dot(x.T, dA)
        db = dA.sum(axis=0)

        self.grads[0][...] = dWx
        self.grads[1][...] = dWh
        self.grads[2][...] = db

        dx = np.dot(dA, Wx.T)
        dh_prev = np.dot(dA, Wh.T)

        return dx, dh_prev, dc_prev
```

### Time LSTM

`整体处理T个时序数据的层，由T个LSTM层构成`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103150906488.png" alt="image-20241103150906488" style="zoom:67%;" />

RNN使用Truncated BPTT进行学习，适当的长度截断反向传播的连接，但需要维持正向传播的数据流

将隐藏状态h和记忆单元c保存在成员变量中，在调用下一个forward（）函数时，就可以继承上一时刻的隐藏状态（和记忆单元）。

仍通过参数stateful指定是否维持状态

```py
class TimeLSTM:
    def __init__(self, Wx, Wh, b, stateful=False):
        self.params = [Wx, Wh, b]
        self.grads = [np.zeros_like(Wx), np.zeros_like(Wh), np.zeros_like(b)]
        self.layers = None

        self.h, self.c = None, None
        self.dh = None
        self.stateful = stateful

    def forward(self, xs):
        Wx, Wh, b = self.params
        N, T, D = xs.shape
        H = Wh.shape[0]

        self.layers = []
        hs = np.empty((N, T, H), dtype='f')

        if not self.stateful or self.h is None:
            self.h = np.zeros((N, H), dtype='f')
        if not self.stateful or self.c is None:
            self.c = np.zeros((N, H), dtype='f')

        for t in range(T):
            layer = LSTM(*self.params)
            self.h, self.c = layer.forward(xs[:, t, :], self.h, self.c)
            hs[:, t, :] = self.h

            self.layers.append(layer)

        return hs

    def backward(self, dhs):
        Wx, Wh, b = self.params
        N, T, H = dhs.shape
        D = Wx.shape[0]

        dxs = np.empty((N, T, D), dtype='f')
        dh, dc = 0, 0

        grads = [0, 0, 0]
        for t in reversed(range(T)):
            layer = self.layers[t]
            dx, dh, dc = layer.backward(dhs[:, t, :] + dh, dc)
            dxs[:, t, :] = dx
            for i, grad in enumerate(layer.grads):
                grads[i] += grad

        for i, grad in enumerate(grads):
            self.grads[i][...] = grad
        self.dh = dh
        return dxs

    def set_state(self, h, c=None):
        self.h, self.c = h, c

    def reset_state(self):
        self.h, self.c = None, None
```

### LSTMLM

> 除了将RNN改为LSTM，其他大致相同

#### 网络结构

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103153722872.png" alt="image-20241103153722872" style="zoom:67%;" />


```py
# coding: utf-8
import sys
sys.path.append('..')
from common.time_layers import *
from common.base_model import BaseModel


class Rnnlm(BaseModel):
    def __init__(self, vocab_size=10000, wordvec_size=100, hidden_size=100):
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn

        # 初始化权重
        embed_W = (rn(V, D) / 100).astype('f')
        lstm_Wx = (rn(D, 4 * H) / np.sqrt(D)).astype('f')
        lstm_Wh = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b = np.zeros(4 * H).astype('f')
        affine_W = (rn(H, V) / np.sqrt(H)).astype('f')
        affine_b = np.zeros(V).astype('f')

        # 生成层
        self.layers = [
            TimeEmbedding(embed_W),
            TimeLSTM(lstm_Wx, lstm_Wh, lstm_b, stateful=True),
            TimeAffine(affine_W, affine_b)
        ]
        self.loss_layer = TimeSoftmaxWithLoss()
        self.lstm_layer = self.layers[1]

        # 将所有的权重和梯度整理到列表中
        self.params, self.grads = [], []
        for layer in self.layers:
            self.params += layer.params
            self.grads += layer.grads

    def predict(self, xs):
        for layer in self.layers:
            xs = layer.forward(xs)
        return xs

    def forward(self, xs, ts):
        score = self.predict(xs)
        loss = self.loss_layer.forward(score, ts)
        return loss

    def backward(self, dout=1):
        dout = self.loss_layer.backward(dout)
        for layer in reversed(self.layers):
            dout = layer.backward(dout)
        return dout

    def reset_state(self):
        self.lstm_layer.reset_state()
```

```py
        import sys
        sys.path.append('..')
        from common.optimizer import SGD
        from common.trainer import RnnlmTrainer
        from common.util import eval_perplexity
        from dataset import ptb
        from rnnlm import Rnnlm

        # 设定超参数
        batch_size = 20
        wordvec_size = 100
        hidden_size = 100 # RNN的隐藏状态向量的元素个数
        time_size = 35 # RNN的展开大小
        lr = 20.0
        max_epoch = 4
        max_grad = 0.25

        # 读入训练数据
        corpus, word_to_id, id_to_word = ptb.load_data('train')
        corpus_test, _, _ = ptb.load_data('test')
        vocab_size = len(word_to_id)
        xs = corpus[:-1]
        ts = corpus[1:]

        # 生成模型
        model = Rnnlm(vocab_size, wordvec_size, hidden_size)
        optimizer = SGD(lr)
        trainer = RnnlmTrainer(model, optimizer)

        # 1.应用梯度裁剪进行学习，并每20次迭代评价一次
        trainer.fit(xs, ts, max_epoch, batch_size, time_size, max_grad,
                    eval_interval=20)
        trainer.plot(ylim=(0, 500))

        # 2.基于测试数据进行评价。【需要先重置模型的状态（LSTM的隐藏状态和记忆单元）】
        model.reset_state()
        ppl_test = eval_perplexity(model, corpus_test)
        print ('test perplexity: ', ppl_test)

        # 3.保存参数到外部文件
        model.save_params()
```

#### 改进-提高精度

##### 多层化

`通过加深LSTM层（叠加多个LSTM层）来提高精度`

> - 如何确定层数？层数为超参数，所以需要根据要解决的问题的复杂程度、能给到的训练数据的规模来确定
>   - 如果待解决的问题很难，又能准备大量的训练数据，就可以通过加深LSTM层来提高精度

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103160104015.png" alt="image-20241103160104015" style="zoom:67%;" />

##### Dropout

> 抑制过拟合：
>
> 1. 是增加训练数据；
> 2. 是降低模型的复杂度
> 3. 增加正则化惩罚项
>
> 插入Dropout的方向？
>
> - 沿垂直方向插入
> - 沿时序方向插入：模型学习时，随着时间的推移，信息会渐渐丢失（Dropout产生的噪声会随时间成比例地积累）
>   - 变分dropout：同一层的Dropout共用mask，mask被“固定”（信息的损失方式也被“固定”，避免常规Dropout发生的指数级信息损失）

##### 权重共享

==没看懂？？？==

Embedding层和Affine层的权重共享，降低学习计算量

共享权重可以减少需要学习的参数数量，从而促进学习。另外，参数数量减少，还能收获抑制过拟合的好处

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103163315677.png" alt="image-20241103163315677" style="zoom:67%;" />

#### 实现


```py
# coding: utf-8
import sys
sys.path.append('..')
from common.time_layers import *
from common.np import *  # import numpy as np
from common.base_model import BaseModel


class BetterRnnlm(BaseModel):
    '''
     利用2个LSTM层并在各层使用Dropout的模型
     基于[1]提出的模型，利用weight tying[2][3]

     [1] Recurrent Neural Network Regularization (https://arxiv.org/abs/1409.2329)
     [2] Using the Output Embedding to Improve Language Models (https://arxiv.org/abs/1608.05859)
     [3] Tying Word Vectors and Word Classifiers (https://arxiv.org/pdf/1611.01462.pdf)
    '''
    def __init__(self, vocab_size=10000, wordvec_size=650,
                 hidden_size=650, dropout_ratio=0.5):
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn

        embed_W = (rn(V, D) / 100).astype('f')
        lstm_Wx1 = (rn(D, 4 * H) / np.sqrt(D)).astype('f')
        lstm_Wh1 = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b1 = np.zeros(4 * H).astype('f')
        lstm_Wx2 = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_Wh2 = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b2 = np.zeros(4 * H).astype('f')
        affine_b = np.zeros(V).astype('f')

        self.layers = [
            TimeEmbedding(embed_W),
            TimeDropout(dropout_ratio),
            TimeLSTM(lstm_Wx1, lstm_Wh1, lstm_b1, stateful=True),
            TimeDropout(dropout_ratio),
            TimeLSTM(lstm_Wx2, lstm_Wh2, lstm_b2, stateful=True),
            TimeDropout(dropout_ratio),
            TimeAffine(embed_W.T, affine_b)  # weight tying!!
        ]
        self.loss_layer = TimeSoftmaxWithLoss()
        self.lstm_layers = [self.layers[2], self.layers[4]]
        self.drop_layers = [self.layers[1], self.layers[3], self.layers[5]]

        self.params, self.grads = [], []
        for layer in self.layers:
            self.params += layer.params
            self.grads += layer.grads

    def predict(self, xs, train_flg=False):
        for layer in self.drop_layers:
            layer.train_flg = train_flg

        for layer in self.layers:
            xs = layer.forward(xs)
        return xs

    def forward(self, xs, ts, train_flg=True):
        score = self.predict(xs, train_flg)
        loss = self.loss_layer.forward(score, ts)
        return loss

    def backward(self, dout=1):
        dout = self.loss_layer.backward(dout)
        for layer in reversed(self.layers):
            dout = layer.backward(dout)
        return dout

    def reset_state(self):
        for layer in self.lstm_layers:
            layer.reset_state()
```

```py
import sys
sys.path.append（'..'）
from common import config
# 在用GPU运行时，请打开下面的注释（需要cupy）
# ==============================================
# config.GPU = True
# ==============================================
from common.optimizer import SGD
from common.trainer import RnnlmTrainer
from common.util import eval_perplexity
from dataset import ptb
from better rnnlm import BetterRnnlm

# 设定超参数
batch_size = 20
wordvec_size = 650
hidden_size = 650
time_size = 35
lr = 20.0
max_epoch = 40
max_grad = 0.25
dropout = 0.5

# 读入训练数据
corpus, word_to_id, id_to_word = ptb.load_data（'train'）
corpus_val, _, _ = ptb.load_data（'val'）
corpus_test, _, _ = ptb.load_data（'test'）

vocab_size = len（word_to_id）
xs = corpus[:-1]
ts = corpus[1:]

model = BetterRnnlm（vocab_size, wordvec_size, hidden_size, dropout）
optimizer = SGD（lr）
trainer = RnnlmTrainer（model, optimizer）
best_ppl = float（'inf'）
for epoch in range（max_epoch）:
    trainer.fit（xs, ts, max_epoch=1, batch_size=batch_size,
    time_size=time_size, max_grad=max_grad）

    model.reset_state（）
    ppl = eval_perplexity（model, corpus_val）
    print （'valid perplexity: ', ppl）

    if best_ppl > ppl:
        best_ppl = ppl
        model.save_params（）
        else :
            lr /= 4.0
            optimizer.lr = lr
            model.reset_state（）
            print （'-' * 50）
```

### 双向LSTM

> 拼接/求和/取平均两个LSTM层（从左到右和从右到左）各个时刻的隐藏状态$h$作为最后的隐藏状态向量
>
> > 例：如果原文是“A B C D”，就改为“D C B A”。通过输入改变了顺序的输入语句，另一个LSTM层从右向左处理输入语句。之后，只需要拼接这两个LSTM层的输出，就可以创建双向LSTM层

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106164955080.png" alt="image-20241106164955080" style="zoom:67%;" />

## 基于RNN生成文本

`语言模型的应用：机器翻译、语音识别和文本生成`

### 前言：使用语言模型生成文本

生成下一个单词的方法？

1. 选择概率最高的单词：选择的是概率最高的单词，所以结果能唯一确定
2. 根据概率分布选择：概率高的单词容易被选到，概率低的单词难以被选到

**循环**：将生成的单词say输入语言模型，获得单词的概率分布，然后再根据这个概率分布采样下一个出现的的单词（直到出现\<eos>这一结尾记号）

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241103213759792.png" alt="image-20241103213759792" style="zoom:80%;" />

```py
import sys
sys.path.append('..')
import numpy as np
from common.functions import softmax
from ch06.rnnlm import Rnnlm
from ch06.better_rnnlm import BetterRnnlm

class RnnlmGen (Rnnlm): # 继承Rnnlm类
    def generate(self, start_id, skip_ids=None, sample_size=100):
        """
        start_id：第一个单词ID
        skip_ids：不被采样的单词ID列表(如：[12,20])
            此参数用于排除PTB数据集中的<unk>、N等被预处理过的单词
        sample_size：要采样的单词数量
        """
        word_ids = [start_id]
        x = start_id
        while len(word_ids) < sample_size:
            x = np.array(x).reshape(1, 1)

            score = self.predict(x) # mini-batch处理，并输出各个单词的得分
            p = softmax(score.flatten())    # 对得分正规化，得到概率分布
            sampled = np.random.choice(len(p), size=1, p=p) # 根据概率分布p采样下一个单词

            if (skip_ids is None) or (sampled not in skip_ids):
                x = sampled
                word_ids.append(int(x))

        return word_ids
```

```py
import sys
sys.path.append('..')
from dataset import ptb

corpus, word_to_id, id_to_word = ptb.load_data('train')
vocab_size = len(word_to_id)
corpus_size = len(corpus)

model = RnnlmGen()
# model.load_params('../ch06/Rnnlm.pkl')

# 设定start单词和skip单词
start_word = 'you'
start_id = word_to_id[start_word]
skip_words = ['N', '<unk>', '$']
skip_ids = [word_to_id[w] for w in skip_words]

# 生成文本
word_ids = model.generate(start_id, skip_ids)

txt = ' '.join([id_to_word[i] for i in word_ids])
txt = txt.replace(' <eos>', '.\n')
print (txt)
```

```py
# coding: utf-8
import sys
sys.path.append('..')
from common.np import *
from rnnlm_gen import BetterRnnlmGen
from dataset import ptb


corpus, word_to_id, id_to_word = ptb.load_data('train')
vocab_size = len(word_to_id)
corpus_size = len(corpus)


model = BetterRnnlmGen()
model.load_params('../ch06/BetterRnnlm.pkl')

# 设定start字符和skip字符
start_word = 'you'
start_id = word_to_id[start_word]
skip_words = ['N', '<unk>', '$']
skip_ids = [word_to_id[w] for w in skip_words]
# 文本生成
word_ids = model.generate(start_id, skip_ids)
txt = ' '.join([id_to_word[i] for i in word_ids])
txt = txt.replace(' <eos>', '.\n')

print(txt)


model.reset_state()

start_words = 'the meaning of life is'
start_ids = [word_to_id[w] for w in start_words.split(' ')]

for x in start_ids[:-1]:
    x = np.array(x).reshape(1, 1)
    model.predict(x)

word_ids = model.generate(start_ids[-1], skip_ids)
word_ids = start_ids[:-1] + word_ids
txt = ' '.join([id_to_word[i] for i in word_ids])
txt = txt.replace(' <eos>', '.\n')
print('-' * 50)
print(txt)
```

### seq2seq

`Encoder-Decoder，由两个LSTM构成`

> 时序数据分类：文本数据、音频数据、视频数据等
>
> 时序数据的转换：
>
> - 机器翻译
> - 语音识别
> - 聊天机器人
> - 源代码转换为机器语言的编译器等。。

#### 网络结构

`编码器编码的信息（h）浓缩了翻译所必需的信息；解码器基于这个浓缩的信息生成目标文本`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241104093040428.png" alt="image-20241104093040428" style="zoom: 80%;" />

- 编码器：将时序数据转换为隐藏状态h【将任意长度的文本转换为一个固定长度的向量】
- 解码器：接收向量h作为上一个隐藏状态（在一般LSTM中接收”0向量“）
- \<eos>：分隔符，指示解码器的”开始/结束“，在其他也有以\<go>、\<start>、\_

#### 数据集

toy problem：为了评价机器学习而创建的简单问题

分隔符“_”（下划线）：此分隔符作为通知解码器开始生成文本的信号使用



在基于mini-batch学习可变长度的时序数据时，最简单的方法是使用填充（padding）

填充：在多余位置插入无效字符（这里是空白字符），从而使所有输入数据的长度对齐

为追求严谨

1. 使用填充时需要向seq2seq添加一些填充专用的处理。比如，在解码器中输入填充时，不应计算其损失（这可以通过向Softmax with Loss层添加mask功能来解决
2. 在编码器中输入填充时，LSTM层应按原样输出上一时刻的输入。这样一来，LSTM层就可以像不存在填充一样对输入数据进行编码

训练数据分类：

训练集：训练权重参数

验证集：调整超参数

测试集：评价模型能力

#### Encoder

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241104214850927.png" alt="image-20241104214850927" style="zoom:80%;" />

- 向上丢弃输出的隐藏状态$h$
- 向右输出隐藏状态$h$和记忆单元$c$（记忆单元$c$只给自身使用，不传给下一个时序层）

##### Time Encoder

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241104215127740.png" alt="image-20241104215127740" style="zoom: 50%;" />

##### 实现

```python
class Encoder:
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        """
        vocab_size：词汇量,相当于字符的种类(共13种字符:0~9、+、_、空白字符)
        wordvec_size：字符向量的维数
        hidden_size：LSTM层的隐藏状态的维数
        """
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn
        embed_W = (rn(V, D) / 100).astype('f')
        lstm_Wx = (rn(D, 4 * H) / np.sqrt(D)).astype('f')
        lstm_Wh = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b = np.zeros(4 * H).astype('f')
        self.embed = TimeEmbedding(embed_W)
        self.lstm = TimeLSTM(lstm_Wx, lstm_Wh, lstm_b, stateful=False)
        # 处理多个短时序数据问题，不保持Time LSTM层的状态，所以设定stateful=False
        # 之前是为了处理长时序数据的问题而设置的stateful=true
        self.params = self.embed.params + self.lstm.params
        self.grads = self.embed.grads + self.lstm.grads
        self.hs = None
        
    def forward(self, xs):
        xs = self.embed.forward(xs)
        hs = self.lstm.forward(xs)
        self.hs = hs
        # 取Time LSTM层的最后一个时刻的隐藏状态作为编码器的forward()方法的输出
        return hs[:, -1, :]

    def backward(self, dh):
        # 生成元素为0的张量dhs，再将dh存放到这个dhs中的对应位置
            # dh：从解码器传过来，LSTM层的最后一个隐藏状态的梯度
        dhs = np.zeros_like(self.hs)
        dhs[:, -1, :] = dh

        dout = self.lstm.backward(dhs)
        dout = self.embed.backward(dout)
        return dout
```

#### Decoder

`接收Encoder类输出的h，输出目标字符串`

> 按概率生成：softmax
>
> 确定性生成：argmax

数学运算求确定值：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105125130639.png" alt="image-20241105125130639" style="zoom: 50%;" />

反向传播求损失：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105123648200.png" alt="image-20241105123648200" style="zoom: 50%;" />

##### Time Decoder

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105125342294.png" alt="image-20241105125342294" style="zoom: 33%;" />

##### 实现

```py
class Decoder:
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn

        embed_W = (rn(V, D) / 100).astype('f')
        lstm_Wx = (rn(D, 4 * H) / np.sqrt(D)).astype('f')
        lstm_Wh = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b = np.zeros(4 * H).astype('f')
        affine_W = (rn(H, V) / np.sqrt(H)).astype('f')
        affine_b = np.zeros(V).astype('f')

        self.embed = TimeEmbedding(embed_W)
        # 设置Time LSTM层的stateful=True（不重新设置隐藏状态）：
            # 1.保持从编码层传来的隐藏状态h
            # 2.正向传播
        self.lstm = TimeLSTM(lstm_Wx, lstm_Wh, lstm_b, stateful=True)
        self.affine = TimeAffine(affine_W, affine_b)

        self.params, self.grads = [], []
        for layer in (self.embed, self.lstm, self.affine):
            self.params += layer.params
            self.grads += layer.grads

    def forward(self, xs, h):
        """
        学习时使用
        """
        self.lstm.set_state(h)

        out = self.embed.forward(xs)
        out = self.lstm.forward(out)
        score = self.affine.forward(out)
        return score

    def backward(self, dscore):
        # 从softmax接收梯度dscore后按顺序传播梯度
        dout = self.affine.backward(dscore)
        dout = self.lstm.backward(dout)
        dout = self.embed.backward(dout)
        # 取出时间方向上的梯度dh，将其作为Decoder类的backward()的输出
            # Time LSTM层将时间方向上的梯度保存的成员变量dh中
        dh = self.lstm.dh
        return dh
    
    def generate(self, h, start_id, sample_size):
        """
        生成文本
            h：从编码器接收的隐藏状态h
            start_id：最开始输入的字符ID
            sample_size：生成的字符数量
        """
        sampled = []
        sample_id = start_id
        self.lstm.set_state(h)
        for _ in range(sample_size):
            x = np.array(sample_id).reshape((1, 1))
            out = self.embed.forward(x)
            out = self.lstm.forward(out)
            score = self.affine.forward(out)

            sample_id = np.argmax(score.flatten())
            sampled.append(int(sample_id))

        return sampled
```

#### 实现

```py
class Seq2seq (BaseModel):
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        V, D, H = vocab_size, wordvec_size, hidden_size
        self.encoder = Encoder(V, D, H)
        self.decoder = Decoder(V, D, H)
        self.softmax = TimeSoftmaxWithLoss()

        self.params = self.encoder.params + self.decoder.params
        self.grads = self.encoder.grads + self.decoder.grads

    def forward(self, xs, ts):
        decoder_xs, decoder_ts = ts[:, :-1], ts[:, 1:]

        h = self.encoder.forward(xs)
        score = self.decoder.forward(decoder_xs, h)
        loss = self.softmax.forward(score, decoder_ts)
        return loss

    def backward(self, dout=1):
        dout = self.softmax.backward(dout)
        dh = self.decoder.backward(dout)
        dout = self.encoder.backward(dh)
        return dout

    def generate(self, xs, start_id, sample_size):
        h = self.encoder.forward(xs)
        sampled = self.decoder.generate(h, start_id, sample_size)
        return sampled
```

#### 评价

**以正确率作为评价指标（每个epoch正确回答的比例）**：

```py
# coding: utf-8
import sys
sys.path.append('..')
import numpy as np
import matplotlib.pyplot as plt
from dataset import sequence
from common.optimizer import Adam
from common.trainer import Trainer
from common.util import eval_seq2seq
from seq2seq import Seq2seq
from peeky_seq2seq import PeekySeq2seq


# 读入数据集
(x_train, t_train), (x_test, t_test) = sequence.load_data('addition.txt')
char_to_id, id_to_char = sequence.get_vocab()

# 设定超参数
vocab_size = len(char_to_id)
wordvec_size = 16
hidden_size = 128
batch_size = 128
max_epoch = 25
max_grad = 5.0

# 生成模型/优化器/训练器
model = Seq2seq(vocab_size, wordvec_size, hidden_size)
optimizer = Adam()
trainer = Trainer(model, optimizer)

acc_list = []
for epoch in range(max_epoch):
    trainer.fit(x_train, t_train, max_epoch=1,
                batch_size=batch_size, max_grad=max_grad)

    correct_num = 0
    for i in range(len(x_test)):
        question, correct = x_test[[i]], t_test[[i]]
        verbose = i < 10
        correct_num += eval_seq2seq(model, question, correct,
                                    id_to_char, verbose, is_reverse)

    acc = float(correct_num) / len(x_test)
    acc_list.append(acc)
    print('val acc %.3f%%' % (acc * 100))
```

**测量正确率**：

```py
def eval_seq2seq(model, question, correct, id_to_char,
                 verbos=False, is_reverse=False):
    """
    向模型输入问题，生成字符串，并判断它是否与答案相符：
    	如果模型给出的答案正确，则返回1；
    	如果错误，则返回0.
    	
    params：
    	model：模型
    	question：问题（字符ID数组）
    	correct：正确解（字符ID列表）
    	id_to_char：字符ID和字符映射的字典
    	verbose：是否在终端显示结果
    	is_reverse：是否反转输入语句
    """
    correct = correct.flatten()
    # 开头的分隔符
    start_id = correct[0]
    correct = correct[1:]
    guess = model.generate(question, start_id, len(correct))

    # 转换为字符串
    question = ''.join([id_to_char[int(c)] for c in question.flatten()])
    correct = ''.join([id_to_char[int(c)] for c in correct])
    guess = ''.join([id_to_char[int(c)] for c in guess])

    if verbos:
        if is_reverse:
            question = question[::-1]

        colors = {'ok': '\033[92m', 'fail': '\033[91m', 'close': '\033[0m'}
        print('Q', question)
        print('T', correct)

        is_windows = os.name == 'nt'

        if correct == guess:
            mark = colors['ok'] + '☑' + colors['close']
            if is_windows:
                mark = 'O'
            print(mark + ' ' + guess)
        else:
            mark = colors['fail'] + '☒' + colors['close']
            if is_windows:
                mark = 'X'
            print(mark + ' ' + guess)
        print('---')

    return 1 if guess == correct else 0
```

### seq2seq-改进

> 借助反转输入语句的Reverse和共享编码器信息的Peeky，我们获得了令人满意的结果！

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105133338356.png" alt="image-20241105133338356" style="zoom: 50%;" />

#### 反转输入信息（reverse）

`反转输入数据的顺序`

在许多情况下，使用这个技巧后，学习进展得更快，最终的精度也有提高

为什么反转数据后，学习进展变快，精度提高了呢？虽然理论上不是很清楚，但是直观上可以认为，反转数据后梯度的传播可以更平滑。

![image-20241105132319986](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105132319986.png)

#### 共享编码器信息-==精度++==

`重要的信息不是一个人专有，而是多人共享`

> - 将编码器输出的隐藏状态h分配给解码器的其他层
>
> 因为使用Peeky后，网络的权重参数会额外地增加，计算量也会增加，所以这里的实验结果必须考虑到相应地增加的“负担”

![image-20241105132348977](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105132348977.png)

#### 实现

```py
# coding: utf-8
import sys
sys.path.append('..')
from common.time_layers import *
from seq2seq import Seq2seq, Encoder

class PeekyDecoder:
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn

        embed_W = (rn(V, D) / 100).astype('f')
        lstm_Wx = (rn(H + D, 4 * H) / np.sqrt(H + D)).astype('f')
        lstm_Wh = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b = np.zeros(4 * H).astype('f')
        affine_W = (rn(H + H, V) / np.sqrt(H + H)).astype('f')
        affine_b = np.zeros(V).astype('f')

        self.embed = TimeEmbedding(embed_W)
        self.lstm = TimeLSTM(lstm_Wx, lstm_Wh, lstm_b, stateful=True)
        self.affine = TimeAffine(affine_W, affine_b)

        self.params, self.grads = [], []
        for layer in (self.embed, self.lstm, self.affine):
            self.params += layer.params
            self.grads += layer.grads
        self.cache = None

    def forward(self, xs, h):
        N, T = xs.shape
        N, H = h.shape

        self.lstm.set_state(h)

        out = self.embed.forward(xs)

        # 1.hs：根据时序大小复制相应份数的h
        hs = np.repeat(h, T, axis=0).reshape(N, T, H)
        # 2.将hs和Embedding层的输出拼接
        out = np.concatenate((hs, out), axis=2)
        # 3.输入到LSTM层
        out = self.lstm.forward(out)
        # 同理
        out = np.concatenate((hs, out), axis=2)
        score = self.affine.forward(out)

        self.cache = H
        return score

    def backward(self, dscore):
        H = self.cache

        dout = self.affine.backward(dscore)
        dout, dhs0 = dout[:, :, H:], dout[:, :, :H]
        dout = self.lstm.backward(dout)
        dembed, dhs1 = dout[:, :, H:], dout[:, :, :H]
        self.embed.backward(dembed)

        dhs = dhs0 + dhs1
        dh = self.lstm.dh + np.sum(dhs, axis=1)
        return dh

    def generate(self, h, start_id, sample_size):
        sampled = []
        char_id = start_id
        self.lstm.set_state(h)

        H = h.shape[1]
        peeky_h = h.reshape(1, 1, H)
        for _ in range(sample_size):
            x = np.array([char_id]).reshape((1, 1))
            out = self.embed.forward(x)

            out = np.concatenate((peeky_h, out), axis=2)
            out = self.lstm.forward(out)
            out = np.concatenate((peeky_h, out), axis=2)
            score = self.affine.forward(out)

            char_id = np.argmax(score.flatten())
            sampled.append(char_id)

        return sampled
```

PeekySeq2seq类：

```py
class PeekySeq2seq(Seq2seq):
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        V, D, H = vocab_size, wordvec_size, hidden_size
        self.encoder = Encoder(V, D, H)
        self.decoder = PeekyDecoder(V, D, H)
        self.softmax = TimeSoftmaxWithLoss()

        self.params = self.encoder.params + self.decoder.params
        self.grads = self.encoder.grads + self.decoder.grads
```

### seq2seq应用

`seq2seq用于处理成对的时序数据的问题`

- 机器翻译：将“一种语言的文本”转换为“另一种语言的文本”
- 自动摘要：将“一个长文本”转换为“短摘要”·
- 问答系统：将“问题”转换为“答案”
- 邮件自动回复：将“接收到的邮件文本”转换为“回复文本”
- 聊天机器人（ai客服）
- 算法学习（如代码生成）
  - RNN的扩展——NTM（Neural Turing Machine，神经图灵机）模型。届时计算机（图灵机）将学习内存的读写顺序，重现算法
- 图像转文本描述（解释图像）

## Attention-==精度+++==

`attention mechanism（注意力机制）：近年来深度学习领域最重要的技术之一`

### 前言：seq2seq存在的问题

编码器输出的隐藏状态$h$为固定长度的向量，无法完美表现语义信息（$h$向量长度固定有可能信息溢出）

#### 编码器改进

`编码器输出的长度应根据输入文本长度相应改变`

> 如何改进？将各个时刻的隐藏状态$h$记录到$hs$中（$hs$数量与单词数量相同）

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241105142859544.png" alt="image-20241105142859544" style="zoom: 50%;" />

==扩展：==

- 在许多深度学习框架中，在初始化RNN层（或者LSTM层、GRU层等）时，可以选择是返回“全部时刻的隐藏状态向量”，还是返回“最后时刻的隐藏状态向量”
- 考虑整体的平衡性，最好均衡地含有单词“猫”周围的信息。在这种情况下，从两个方向处理时序数据的双向RNN（或者双向LSTM）比较有效。我们后面再介绍双向RNN，这里先继续使用单向LSTM

#### 解码器改进

>  如何改进？**Attention机制**：仅关注必要的信息，并根据该信息进行时序转换

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106151811921.png" alt="image-20241106151811921" style="zoom:60%;" />

##### 计算-单词权重a

> 向量内积：两个向量多个程度上指向同一方向

1. 相似度：各单词隐藏状态$hs$和全局最终隐藏状态$h$的向量内积
2. 使用softmax进行归一化

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106160440772.png" alt="image-20241106160440772" style="zoom:40%;" />



##### 计算-注意力c

> 各个单词权重$a$和隐藏状态$hs$的加权和

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106132040545.png" alt="image-20241106132040545" style="zoom: 40%;" />

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106155446121.png" alt="image-20241106155446121" style="zoom: 55%;" />

例：“吾輩”对应的权重为0.8。这意味着上下文向量c中含有很多“吾輩”向量的成分，可以说这个加权和计算基本代替了“选择”向量的操作。假设“吾輩”对应的权重是1，其他单词对应的权重是0，那么这就相当于“选择”了“吾輩”向量

##### 拼起来计算-多头注意力c

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106145552692.png" alt="image-20241106145552692" style="zoom: 50%;" />

封装为attention类

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106153056791.png" alt="image-20241106153056791" style="zoom: 33%;" />



```py
class AttentionWeight:
    def __init__(self):
        self.params, self.grads = [], []
        self.softmax = Softmax()
        self.cache = None

    def forward(self, hs, h):
        N, T, H = hs.shape
		# =======通过hr和hs内积计算权重a============
        hr = h.reshape(N, 1, H).repeat(T, axis=1)
        t = hs * hr
        s = np.sum(t, axis=2)
        a = self.softmax.forward(s)
		# =======================================
        self.cache = (hs, hr)
        return a

    def backward(self, da):
        hs, hr = self.cache
        N, T, H = hs.shape

        ds = self.softmax.backward(da)
        dt = ds.reshape(N, T, 1).repeat(H, axis=2)
        dhs = dt * hr
        dhr = dt * hs
        dh = np.sum(dhr, axis=1)

        return dhs, dh
```

```py
class Attention:
    def __init__(self):
        self.params, self.grads = [], []
        self.attention_weight_layer = AttentionWeight()
        self.weight_sum_layer = WeightSum()
        self.attention_weight = None

    def forward(self, hs, h):
        a = self.attention_weight_layer.forward(hs, h)
        out = self.weight_sum_layer.forward(hs, a)
        self.attention_weight = a
        return out

    def backward(self, dout):
        dhs0, da = self.weight_sum_layer.backward(dout)
        dhs1, dh = self.attention_weight_layer.backward(da)
        dhs = dhs0 + dhs1
        return dhs, dh
```

#### Time Attention

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106153511960.png" alt="image-20241106153511960" style="zoom: 67%;" />

```py
class TimeAttention:
    def __init__(self):
        self.params, self.grads = [], []
        self.layers = None
        self.attention_weights = None

    def forward(self, hs_enc, hs_dec):
        N, T, H = hs_dec.shape
        out = np.empty_like(hs_dec)
        self.layers = []
        self.attention_weights = []

        for t in range(T):
            layer = Attention()
            out[:, t, :] = layer.forward(hs_enc, hs_dec[:,t,:])
            self.layers.append(layer)
            self.attention_weights.append(layer.attention_weight)

        return out

    def backward(self, dout):
        N, T, H = dout.shape
        dhs_enc = 0
        dhs_dec = np.empty_like(dout)

        for t in range(T):
            layer = self.layers[t]
            dhs, dh = layer.backward(dout[:, t, :])
            dhs_enc += dhs
            dhs_dec[:,t,:] = dh

        return dhs_enc, dhs_dec
```

### Attention-seq2seq

#### Attention-Encoder

> 与seq2seq相比较【forward()方法中】：
>
> - Encoder类返回LSTM层的最后的隐藏状态向量
> - AttentionEncoder类则返回所有的隐藏状态向量

```py
import sys
sys.path.append('..')
from common.time layers import *
from ch07.seq2seq import Encoder, Seq2seq
from ch08.attention layer import TimeAttention

class AttentionEncoder (Encoder):
    def forward(self, xs):
        xs = self.embed.forward(xs)
        hs = self.lstm.forward(xs)
        return hs

    def backward(self, dhs):
        dout = self.lstm.backward(dhs)
        dout = self.embed.backward(dout)
        return dout
```

#### Attention-Decoder

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106161751708.png" alt="image-20241106161751708" style="zoom:50%;" />

```py
class AttentionDecoder:
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        V, D, H = vocab_size, wordvec_size, hidden_size
        rn = np.random.randn

        embed_W = (rn(V, D) / 100).astype('f')
        lstm_Wx = (rn(D, 4 * H) / np.sqrt(D)).astype('f')
        lstm_Wh = (rn(H, 4 * H) / np.sqrt(H)).astype('f')
        lstm_b = np.zeros(4 * H).astype('f')
        affine_W = (rn(2*H, V) / np.sqrt(2*H)).astype('f')
        affine_b = np.zeros(V).astype('f')

        self.embed = TimeEmbedding(embed_W)
        self.lstm = TimeLSTM(lstm_Wx, lstm_Wh, lstm_b, stateful=True)
        self.attention = TimeAttention()
        self.affine = TimeAffine(affine_W, affine_b)
        layers = [self.embed, self.lstm, self.attention, self.affine]

        self.params, self.grads = [], []
        for layer in layers:
            self.params += layer.params
            self.grads += layer.grads

    def forward(self, xs, enc_hs):
        h = enc_hs[:,-1]
        self.lstm.set_state(h)

        out = self.embed.forward(xs)
        dec_hs = self.lstm.forward(out)
        c = self.attention.forward(enc_hs, dec_hs)
        out = np.concatenate((c, dec_hs), axis=2)   # 拼接Time Attention层和LSTM层的输出
        score = self.affine.forward(out)

        return score

    def backward(self, dscore):
        dout = self.affine.backward(dscore)
        N, T, H2 = dout.shape
        H = H2 // 2

        dc, ddec_hs0 = dout[:,:,:H], dout[:,:,H:]
        denc_hs, ddec_hs1 = self.attention.backward(dc)
        ddec_hs = ddec_hs0 + ddec_hs1
        dout = self.lstm.backward(ddec_hs)
        dh = self.lstm.dh
        denc_hs[:, -1] += dh
        self.embed.backward(dout)

        return denc_hs
    
    # 生成新单词序列（字符序列）
    def generate(self, enc_hs, start_id, sample_size):
        sampled = []
        sample_id = start_id
        h = enc_hs[:, -1]
        self.lstm.set_state(h)

        for _ in range(sample_size):
            x = np.array([sample_id]).reshape((1, 1))

            out = self.embed.forward(x)
            dec_hs = self.lstm.forward(out)
            c = self.attention.forward(enc_hs, dec_hs)
            out = np.concatenate((c, dec_hs), axis=2)
            score = self.affine.forward(out)

            sample_id = np.argmax(score.flatten())
            sampled.append(sample_id)

        return sampled
```

#### Attention-seq2seq类

```py
class AttentionSeq2seq(Seq2seq):
    def __init__(self, vocab_size, wordvec_size, hidden_size):
        args = vocab_size, wordvec_size, hidden_size
        self.encoder = AttentionEncoder(*args)
        self.decoder = AttentionDecoder(*args)
        self.softmax = TimeSoftmaxWithLoss()

        self.params = self.encoder.params + self.decoder.params
        self.grads = self.encoder.grads + self.decoder.grads
```

### 效果评价

> ==扩展==：WMT是一个有名的翻译数据集。这个数据集中提供了英语和法语（或者英语和德语）的平行学习数据。WMT数据集在许多研究中都被作为基准使用，经常用于评价seq2seq的性能，不过它的数据量很大（超过20 GB），使用起来不是很方便

研究“日期格式转换”问题（本质上属于人为创造的问题，数据量有限），来确认带Attention的seq2seq的效果

Attention如何确定有没有正确地关注各自的对应元素？

1. 问题略微复杂（如果尝试将这些转换规则人为全部写出来，那将非常费力）
2. 输入（问句）和输出（回答）存在明显的对应关系

```py
import sys
sys.path.append('..')
import numpy as np
from dataset import sequence
from common.optimizer import Adam
from common.trainer import Trainer
from common.util import eval_seq2seq
from attention seq2seq import AttentionSeq2seq
from ch07.seq2seq import Seq2seq
from ch07.peeky seq2seq import PeekySeq2seq

# 读入数据
(x_train, t_train), (x_test, t_test) = sequence.load_data('date.txt')
char_to_id, id_to_char = sequence.get_vocab()

# 反转输入语句
x_train, x_test = x_train[:, ::-1], x_test[:, ::-1]

# 设定超参数
vocab_size = len(char_to_id)
wordvec_size = 16
hidden_size = 256
batch_size = 128
max_epoch = 10
max_grad = 5.0

model = AttentionSeq2seq(vocab_size, wordvec_size, hidden_size)
optimizer = Adam()
trainer = Trainer(model, optimizer)

acc_list = []
for epoch in range(max_epoch):
    trainer.fit(x_train, t_train, max_epoch=1,
                batch_size=batch_size, max_grad=max_grad)
	# 在学习的同时，每个epoch使用测试数据计算正确率
    correct_num = 0
    for i in range(len(x_test)):
        question, correct = x_test[[i]], t_test[[i]]
        verbose = i < 10
        correct_num += eval_seq2seq(model, question, correct,
                                    id_to_char, verbose, is_reverse=True)

    acc = float(correct_num) / len(x_test)
    acc_list.append(acc)
    print ('val acc %.3f%%' % (acc * 100))

model.save_params()
```

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106163806394.png" alt="image-20241106163806394" style="zoom:67%;" />

精度图：

`就最终精度来看，Attention和Peeky取得了差不多的结果。但随着时序数据变长、变复杂，除了学习速度之外， Attention在精度上也会变得更有优势`

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106163829755.png" alt="image-20241106163829755" style="zoom:50%;" />

### 可视化

`Attention赋予了模型“人类可以理解的结构和意义”`

> **可视化的目的**：在进行时序转换时，实际观察Attention在注意哪个元素
>
> **如何绘制输入语句和输出语句的各个单词的对应关系的二维地图？**Time Attention层中的成员变量attention_weights保存了各个时刻的Attention权重

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106164401820.png" alt="image-20241106164401820" style="zoom:67%;" />

- 1983和26的对应关系
- 08月和AUGUST的对应关系

### Attention结构变化

#### Attention结构变种

> Attention层的输出（上下文向量）被连接到了下一时刻的LSTM层的输入处。通过这种结构，LSTM层得以使用上下文向量的信息
>
> 最终：Affine层使用了上下文向量
>
> 对比：
>
> - 精度差异：无明显精度差异
> - 复杂度：解码器数据自下而上流动，前者模块化更简单

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106165612556.png" alt="image-20241106165612556" style="zoom:50%;" /><img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106165625528.png" alt="image-20241106165625528" style="zoom:50%;" />

#### Attention结构加深

> 加深的目的：为了带Attention的seq2seq具有更强的表现力
>
> 加深提高复杂度的同时避免泛化性能下降：Dropout、权重共享、==残差连接==等技术
>
> 如何加深：除了当前方法外，还可以
>
> 1. 多个Attention层
> 2. 将Attention的输出输入给下一个时刻的LSTM层

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106170211255.png" alt="image-20241106170211255" style="zoom:67%;" />

- 将解码器LSTM层的隐藏状态输入Attention层
- 将上下文向量（Attention层的输出）传给解码器的多个层（LSTM层和Affine层）。

### 残差网络

`skip connection或residual connection或shortcut`

> 如何深度方向上的梯度消失？残差连接

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106170734789.png" alt="image-20241106170734789" style="zoom:50%;" />

请注意这个加法（确切地说，是对应元素的加法）非常重要。因为加法在反向传播时“按原样”传播梯度，所以残差连接中的梯度可以不受任何影响地传播到前一个层。这样一来，即便加深了层，梯度也能正常传播，而不会发生梯度消失（或者梯度爆炸），学习可以顺利进行

### Attention的应用

#### GNMT

`已经成为使用了seq2seq的机器翻译的统称`

>  提高学习速度：多GPU分布式学习

![image-20241106212218237](./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106212218237.png)

- 编码器、解码器、Attention
- 改进：LSTM多层化、双向LSTM（仅编码器的第1层）、残差连接等。。
- 加速推理的量化、低频词处理

#### Transformer

> 在RNN无法并行处理问题：RNN需要基于上一个时刻的计算结果逐步进行计算，因此（基本）不可能在时间方向上并行计算RNN
>
> 去除RNN来实现并行计算：
>
> 1. Transformer模型
> 2. 卷积层代替RNN

##### Self-Attention

Attention对比Self-Attention：

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106215604317.png" alt="image-20241106215604317" style="zoom: 67%;" />

- Time Attention：两个输入中输入的是不同的时序数据
- Self-Attention：两个输入中输入的是同一个时序数据（求得一个时序数据内各个元素之间的对应关系）

##### 网络结构（简化的transformer）

`使用Attention代替RNN（LSTM）`

> 真正的transformer还包含：
>
> - 残差网络、层归一化
> - 多个Attention（并行）
> - 编码时序数据的位置信息（Positional Encoding，位置编码）等。。
>
> 使用transformer的好处：
>
> 1. 控制计算量
> 2. 减少学习时间
> 3. 提高精度

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241106215815656.png" alt="image-20241106215815656" style="zoom: 70%;" />

- Time Attention：self-Attention
- Feed Forward：前馈神经网络（时间方向上独立的网络）
- N_x：灰色背景包围的元素被堆叠的N次

##### 精度展示

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241107090303603.png" alt="image-20241107090303603" style="zoom:50%;" />

### NTM

`Attention用来读写内存，后被改名为DNC （Differentiable Neural Computers，可微分神经计算机）`

> - 当选择操作不能微分就利用权重代替

<img src="./%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0-NLP.assets/image-20241107090549083.png" alt="image-20241107090549083" style="zoom:50%;" />

- `编码器`将必要的信息写入内存；`解码器`从内存中读取必要的信息
- Write Head层：接收LSTM层各个时刻的隐藏状态，将必要的信息写入内存
  Read Head层：从内存中读取重要信息，并传递给下一个时刻的LSTM层
- LSTM层是控制器，执行NTM的主要处理
- 基于内容的Attention：从内存中找到某个向量（查询向量）的相似向量
- 基于位置的Attention：从上一个时刻关注的内存地址（内存的各个位置的权重）前后移动
