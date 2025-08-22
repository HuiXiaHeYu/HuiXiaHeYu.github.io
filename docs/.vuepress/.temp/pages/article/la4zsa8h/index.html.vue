<template><div><h2 id="监督方式" tabindex="-1"><a class="header-anchor" href="#监督方式"><span>监督方式</span></a></h2>
<h3 id="监督学习-supervised-learning" tabindex="-1"><a class="header-anchor" href="#监督学习-supervised-learning"><span><strong>监督学习（Supervised Learning）</strong></span></a></h3>
<blockquote>
<p>训练数据是由**输入（特征）<strong>和</strong>输出（标签）**对组成的</p>
<p>训练目标：模型能够准确地预测未知数据的标签</p>
</blockquote>
<ul>
<li><strong>特点</strong>：
<ul>
<li><strong>标签数据</strong>：每个训练样本都有一个明确的标签或目标输出，模型通过这些标签来指导学习过程。</li>
<li><strong>目标</strong>：通过输入数据和相应标签之间的关系，模型学到如何对新数据进行预测或分类。</li>
<li><strong>数据要求</strong>：需要大量<strong>已标注的数据</strong>，以便模型能够正确地从数据中学习并作出准确的预测。</li>
</ul>
</li>
<li><strong>应用场景</strong>：
<ul>
<li><strong>分类问题</strong>：例如图像分类、垃圾邮件检测等。</li>
<li><strong>回归问题</strong>：例如房价预测、股票市场预测等。</li>
</ul>
</li>
</ul>
<h3 id="弱监督-weakly-supervised" tabindex="-1"><a class="header-anchor" href="#弱监督-weakly-supervised"><span>弱监督（Weakly Supervised）</span></a></h3>
<blockquote>
<p>模型的训练依赖于<code v-pre>部分或不完整</code>的标注数据（不要求对每个样本提供完整的标签或标注）</p>
<p>侧重于：<strong>不精确的标签</strong></p>
</blockquote>
<ul>
<li><strong>特点</strong>：
<ul>
<li>可能只有部分标签可用，例如只有图像的类别标签而没有位置标签（如边界框）。</li>
<li>可以通过<strong>伪标签</strong>、<strong>不精确标签</strong>或<strong>部分标签</strong>来训练模型。</li>
<li>常见的应用场景包括<strong>弱标注数据</strong>（例如仅提供图像级标签而非像素级标签）、<strong>分类任务</strong>或<strong>对象检测</strong>中的弱标签（如只知道物体类别，但不知道物体的具体位置）。</li>
</ul>
</li>
<li><strong>举例</strong>：在图像分类任务中，可能只有图像的分类标签，而没有图像中具体物体的位置信息，模型通过弱监督学习识别图像中的类别。</li>
</ul>
<h3 id="半监督-semi-supervised" tabindex="-1"><a class="header-anchor" href="#半监督-semi-supervised"><span>半监督（Semi-supervised）</span></a></h3>
<blockquote>
<p>训练过程中同时使用<code v-pre>少量标注数据和大量未标注数据</code></p>
<p>侧重于：<strong>如何利用大量未标注数据进行训练</strong></p>
</blockquote>
<ul>
<li><strong>特点</strong>：
<ul>
<li>半监督学习的核心思想是通过利用大量未标注数据来提高模型的泛化能力，而标注数据较少的情况下，依然能够学习到有效的特征。</li>
<li>适用于标注数据获取成本高昂的场景。</li>
<li>在标注数据稀缺时，半监督学习通过对未标注数据进行推断，帮助模型“填补”更多的学习信息。</li>
</ul>
</li>
<li><strong>举例</strong>：假设我们只有少数标注样本（如10个带标签的图片），而大量的图片没有标签。半监督学习方法将利用这些未标注数据来帮助学习更准确的模型。例如，使用<strong>伪标签</strong>来训练模型，或通过<strong>一致性正则化</strong>方法，确保模型对于未标注数据的预测是一致的</li>
</ul>
<h3 id="无监督-unsupervised" tabindex="-1"><a class="header-anchor" href="#无监督-unsupervised"><span>无监督（Unsupervised）</span></a></h3>
<blockquote>
<p>训练过程中<code v-pre>没有任何标签信息</code>，模型只能从数据中学习其固有的结构或模式</p>
</blockquote>
<ul>
<li><strong>特点</strong>：
<ul>
<li>无监督学习的目标是从未标注的数据中发现潜在的结构或关系。</li>
<li>常见任务：<strong>聚类</strong>（将数据分成不同组），<strong>降维</strong>（例如PCA、t-SNE）以及<strong>生成模型</strong>（如生成对抗网络GAN）。</li>
<li>模型没有明确的目标标签来指导学习，而是通过数据的分布、相似性、差异性等来寻找规律。</li>
</ul>
</li>
</ul>
<h2 id="集成学习" tabindex="-1"><a class="header-anchor" href="#集成学习"><span>集成学习</span></a></h2>
<p><code v-pre>结合多个模型的预测结果，来提高模型的整体性能和准确性</code></p>
<blockquote>
<p>将多个“弱学习器”（性能不太强的模型）组合成一个“强学习器”（性能更强的模型），从而减少偏差、方差，并提高模型的稳健性</p>
</blockquote>
<p>基本方法：</p>
<ol>
<li><strong>投票法（Voting）</strong>：将多个分类器的预测结果进行“投票”，选出最常见的预测结果作为最终预测。常见的投票方法有：
<ul>
<li><strong>多数投票（Majority Voting）</strong>：每个分类器投票，最终选出最多分类器支持的类。</li>
<li><strong>加权投票（Weighted Voting）</strong>：根据每个分类器的表现给予不同的权重，最终根据加权后的投票结果决定预测类别。</li>
</ul>
</li>
<li><strong>袋装法（Bagging，Bootstrap Aggregating）</strong>：通过自助采样（bootstrap sampling）从训练数据集中随机选择多个子集，训练多个模型（通常是相同类型的模型），然后将这些模型的预测结果进行平均（回归问题）或投票（分类问题）。**随机森林（Random Forest）**就是一种典型的袋装法应用。</li>
<li><strong>提升法（Boosting）</strong>：通过逐步训练多个弱分类器，每次训练时都给之前分类错误的样本更高的权重，目的是让后续模型关注之前模型错误分类的样本。最终的预测结果是各个模型的加权和。常见的提升方法有<strong>AdaBoost</strong>、<strong>Gradient Boosting</strong>和<strong>XGBoost</strong>。</li>
<li><strong>堆叠法（Stacking）</strong>：将多个不同类型的模型（如决策树、支持向量机、神经网络等）训练在同一数据集上，然后使用一个“元模型”（meta-model）来对这些模型的预测结果进行学习，最终做出决策。</li>
</ol>
<h2 id="对比学习" tabindex="-1"><a class="header-anchor" href="#对比学习"><span>对比学习</span></a></h2>
<p><code v-pre>比较不同样本之间的相似性，拉近相似样本在特征空间中的距离，拉远不相似样本的距离</code></p>
<p>步骤：</p>
<ol>
<li>
<p><strong>生成样本对</strong>：根据任务的需要，生成一组正样本对和负样本对</p>
<ul>
<li>在图像任务中，正样本对可以是同一图像的不同增强版本，负样本对可以是来自不同图像的样本。</li>
</ul>
</li>
<li>
<p><strong>定义相似度度量</strong>：使用某种相似度度量来衡量样本对之间的相似性。常见的度量方法包括欧几里得距离、余弦相似度等。</p>
</li>
<li>
<p><strong>训练模型</strong>：通过优化损失函数，学习到的特征使得正样本对的相似度尽可能高，负样本对的相似度尽可能低。最常见的损失函数是 <strong>对比损失（Contrastive Loss）</strong> 或 <strong>信息量最大化（InfoNCE）损失</strong>。</p>
</li>
</ol>
<p>应用：</p>
<ul>
<li>自监督学习</li>
<li>图像检索</li>
<li>表示学习</li>
</ul>
</div></template>


