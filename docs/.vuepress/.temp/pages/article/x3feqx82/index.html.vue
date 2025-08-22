<template><div><h2 id="视觉模型" tabindex="-1"><a class="header-anchor" href="#视觉模型"><span>视觉模型</span></a></h2>
<h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h3>
<h4 id="任务" tabindex="-1"><a class="header-anchor" href="#任务"><span>任务</span></a></h4>
<ul>
<li>
<p>图像分类：识别出图中出现的物体类别是什么，其功能主要是用于判断是什么？</p>
<ul>
<li>VGG</li>
<li>GoogleNet</li>
<li>ResNet</li>
</ul>
</li>
<li>
<p>图像定位：不仅仅需要识别出是什么物体（即分类）同时需要预测物体的位置信息，也就是单个目标在哪里？是什么？</p>
<ul>
<li>RCNN</li>
<li>Fast RCNN</li>
<li>Faster RCNN</li>
</ul>
</li>
<li>
<p>目标检测：多目标的定位，即在一个图片中定位多个目标物体，包括分类和定位，也就是多个目标分别在哪里？分别属于那个类别？</p>
<ul>
<li>RCNN</li>
<li>Fast RNN</li>
<li>Faster RCNN</li>
<li>SSD</li>
<li>YOLO</li>
</ul>
</li>
</ul>
<img src="@source/blog/模型.assets/image-20250405172047846.png" alt="image-20250405172047846" style="zoom:80%;" />
<h4 id="模型架构" tabindex="-1"><a class="header-anchor" href="#模型架构"><span>模型架构</span></a></h4>
<ul>
<li>二阶段：R-CNN、Fast R-CNN、Faster-R-CNN、SPP-Net、R-FCN</li>
<li>一阶段：YOLO、SSD、FPN</li>
</ul>
<p>图像分割与目标检测：Cascade R-CNN</p>
<h3 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍"><span>参数介绍</span></a></h3>
<h4 id="iou" tabindex="-1"><a class="header-anchor" href="#iou"><span>IOU</span></a></h4>
<p><code v-pre>两个边界框(bounding box)的重叠度</code></p>
<img src="@source/blog/模型.assets/image-20250405175924671.png" alt="image-20250405175924671" style="zoom:50%;" />
$$
IOU=\frac{A\cap B}{A\cup B}=\frac{S_{_{A,B}}}{S_{_A}+S_{_B}-S_{_{A,B}}}
$$
<h4 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>MAP</span></a></h4>
<p><strong>精度和召回率</strong></p>
<table>
<thead>
<tr>
<th></th>
<th>正例（实际）</th>
<th>负例（实际）</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>正例（预测）</strong></td>
<td>TP</td>
<td>FP</td>
</tr>
<tr>
<td><strong>负例（预测）</strong></td>
<td>FN</td>
<td>TN</td>
</tr>
</tbody>
</table>
<img src="@source/blog/模型.assets/image-20250405180027125.png" alt="image-20250405180027125" style="zoom:67%;" />
<p>精度/查准率：</p>
<p><code v-pre>预测为正例的样本中实际为正例的比例</code></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>c</mi><mi>i</mi><mi>s</mi><mi>i</mi><mi>o</mi><mi>n</mi><mo>=</mo><mfrac><mrow><mi>T</mi><mi>P</mi></mrow><mrow><mi>T</mi><mi>P</mi><mo>+</mo><mi>F</mi><mi>P</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">precision = \frac{TP}{TP+FP}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">p</span><span class="mord mathnormal">rec</span><span class="mord mathnormal">i</span><span class="mord mathnormal">s</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1297em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">FP</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p>召回率/查全率：</p>
<p><code v-pre>实际为正例的样本中被正确预测的比例</code></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>r</mi><mi>e</mi><mi>c</mi><mi>a</mi><mi>l</mi><mi>l</mi><mo>=</mo><mfrac><mrow><mi>T</mi><mi>P</mi></mrow><mrow><mi>T</mi><mi>P</mi><mo>+</mo><mi>F</mi><mi>N</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">recall = \frac{TP}{TP+FN}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">rec</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">ll</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1297em;vertical-align:-0.7693em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">FN</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">TP</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.7693em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<p><strong>mAP</strong></p>
<ol>
<li>划定不同阈值计算不同的精度/召回率
<ul>
<li>计算在不同阈值的情况下，Predicision和Recall的值。
<ul>
<li>阈值0.9：无视所有小于0.9的predict，那么此时TP=1,FP=0,precision=1，所有标签数目为3，那么recall=1/3</li>
<li>阈值0.8：无视所有小于0.8的predict，那么此时TP=1,FP=1,precision=1/2，所有标签数目为3，那么recall=1/3</li>
<li>阈值0.7：无视所有小于0.7的predict，那么此时TP=2,FP=1,precision=2/3，所有标签数目为3，那么recall=2/3</li>
</ul>
</li>
</ul>
</li>
<li>根据精度/召回率，绘制RP曲线，计算<strong>AP</strong>值
<ul>
<li>在每个”峰值点”往左画一条直线，和上一个“峰值点”的垂直线像交，这样和坐标轴框出来的面积就是AP值。</li>
</ul>
</li>
</ol>
<img src="@source/blog/模型.assets/image-20250405190809088.png" alt="image-20250405190809088" style="zoom:67%;" />
<ol start="3">
<li>mAP：对多个类别的检测情况评估</li>
</ol>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>m</mi><mi>A</mi><mi>P</mi><mo>=</mo><mfrac><mrow><mo>∑</mo><mi>A</mi><mi>P</mi></mrow><mrow><mi>N</mi><mo stretchy="false">(</mo><mi>c</mi><mi>l</mi><mi>a</mi><mi>s</mi><mi>s</mi><mi>e</mi><mi>s</mi><mo stretchy="false">)</mo></mrow></mfrac></mrow><annotation encoding="application/x-tex">mAP=\frac{\sum AP}{N(classes)}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mopen">(</span><span class="mord mathnormal">c</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">a</span><span class="mord mathnormal">sses</span><span class="mclose">)</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p>
<h4 id="overfeat" tabindex="-1"><a class="header-anchor" href="#overfeat"><span>overfeat</span></a></h4>
<blockquote>
<p>时间：2013年</p>
<p>特点：采用了一种基于 <strong>滑动窗口</strong> 和 <strong>全卷积神经网络（FCN）</strong> 的方法来实现目标的分类和定位</p>
</blockquote>
<img src="@source/blog/模型.assets/82e1d2d67195c77b6b755473adc2d542.png" alt="img" style="zoom:50%;" />
<h5 id="流程" tabindex="-1"><a class="header-anchor" href="#流程"><span>流程</span></a></h5>
<ol>
<li>通过FCN全卷积网络提取特征
<ul>
<li>首先定义若干个大小窗口（K个）</li>
<li>K中每个窗口都要滑动图片，每个窗口都需要滑动M次</li>
<li>得到K x M个特征图</li>
</ul>
</li>
<li>对每个位置的特征图进行目标分类和定位</li>
<li>输出每个窗口的类别得分和边框坐标</li>
</ol>
<h4 id="nms" tabindex="-1"><a class="header-anchor" href="#nms"><span>NMS</span></a></h4>
<blockquote>
<p><strong>去除冗余的候选框</strong>，只保留最具代表性的框，提升检测的准确性</p>
</blockquote>
<ol>
<li>标准 NMS
<ul>
<li>经典的 NMS 计算方法，直接移除冗余框</li>
<li>对于每个框，按得分降序排列，对所有其他框计算 IOU，并移除重叠框</li>
</ul>
</li>
<li>Soft NMS
<ul>
<li>Soft NMS 不直接去除重叠的框，而是<strong>平滑</strong>它们的得分。具体来说，随着重叠度增加，框的得分会逐渐衰减（通过一个衰减因子）</li>
<li>避免移除可能是正确框的高 IOU 框，尤其是在物体边缘的框</li>
</ul>
</li>
</ol>
<h3 id="two-stage" tabindex="-1"><a class="header-anchor" href="#two-stage"><span>Two-Stage</span></a></h3>
<h4 id="rcnn-region-based-cnn" tabindex="-1"><a class="header-anchor" href="#rcnn-region-based-cnn"><span>RCNN（Region-based CNN）</span></a></h4>
<img src="@source/blog/模型.assets/image-20250405203801765.png" alt="image-20250405203801765" style="zoom:67%;" />
<h5 id="流程-1" tabindex="-1"><a class="header-anchor" href="#流程-1"><span>流程</span></a></h5>
<ol>
<li>生成候选区域：基于颜色、纹理等低级特征合并超像素</li>
<li>统一候选区域：将每个候选区域缩放至固定尺寸</li>
<li>提取特征：使用预训练的CNN（如AlexNet）提特征</li>
<li>分类与回归：使用SVM分类/线性回归修正边界框</li>
</ol>
<h4 id="sppnet" tabindex="-1"><a class="header-anchor" href="#sppnet"><span>SPPNet</span></a></h4>
<img src="@source/blog/模型.assets/image-20250405204318004.png" alt="image-20250405204318004" style="zoom:67%;" />
<h5 id="流程-2" tabindex="-1"><a class="header-anchor" href="#流程-2"><span>流程</span></a></h5>
<ol>
<li>整图输入CNN生成特征图。</li>
<li>候选区域通过坐标映射到特征图对应位置。</li>
<li>使用SPP层（如4级金字塔：1x1、2x2、3x3、6x6）池化</li>
<li>分类与回归：使用SVM分类/线性回归修正边界框</li>
</ol>
<h4 id="fast-rcnn" tabindex="-1"><a class="header-anchor" href="#fast-rcnn"><span>Fast RCNN</span></a></h4>
<img src="@source/blog/模型.assets/image-20250405212622317.png" alt="image-20250405212622317" style="zoom:67%;" />
<h5 id="流程-3" tabindex="-1"><a class="header-anchor" href="#流程-3"><span>流程</span></a></h5>
<ol>
<li>整图输入CNN生成特征图</li>
<li>用<strong>Selective Search（选择性搜索算法</strong>）生成候选框(ROIs)</li>
<li>RoI Pooling将不同尺寸候选框(ROIs)映射到特征图并池化为统一特征图大小</li>
<li>两个全连接层分别输出分类结果和边界框偏移量</li>
<li>多任务损失训练分类与回归网络</li>
</ol>
<h4 id="faster-rcnn" tabindex="-1"><a class="header-anchor" href="#faster-rcnn"><span><mark>Faster RCNN</mark></span></a></h4>
<img src="@source/blog/模型.assets/image-20250406141359665.png" alt="image-20250406141359665" style="zoom:67%;" />
<img src="@source/blog/模型.assets/image-20250406141705239.png" alt="image-20250406141705239" style="zoom: 150%;" />
<h5 id="流程-4" tabindex="-1"><a class="header-anchor" href="#流程-4"><span>流程</span></a></h5>
<ol>
<li>整图输入CNN生成特征图。</li>
<li><strong>RPN</strong>生成候选框并过滤（NMS去除低质量候选框 + 高精度低召回率 = 量少质优~300个）</li>
<li>RoI Pooling将候选框映射到特征图并池化</li>
<li>两个全连接层分别输出分类结果和边界框偏移量</li>
<li>多任务损失训练分类与回归网络</li>
</ol>
<h4 id="对比总结" tabindex="-1"><a class="header-anchor" href="#对比总结"><span>对比总结</span></a></h4>
<img src="@source/blog/模型.assets/image-20250406144031898.png" alt="image-20250406144031898" style="zoom:67%;" />
<img src="@source/blog/模型.assets/image-20250406144052203.png" alt="image-20250406144052203" style="zoom:67%;" />
<img src="@source/blog/模型.assets/image-20250406144124733.png" alt="image-20250406144124733" style="zoom:67%;" />
<p><strong>R-CNN网络演进：</strong></p>
<img src="@source/blog/模型.assets/image-20250406144412151.png" alt="image-20250406144412151" style="zoom:80%;" />
<h4 id="rfcn" tabindex="-1"><a class="header-anchor" href="#rfcn"><span>RFCN</span></a></h4>
<h3 id="one-stage" tabindex="-1"><a class="header-anchor" href="#one-stage"><span>One-Stage</span></a></h3>
<h4 id="ssd" tabindex="-1"><a class="header-anchor" href="#ssd"><span><mark>SSD</mark></span></a></h4>
<img src="@source/blog/模型.assets/image-20250406162020930.png" alt="image-20250406162020930" style="zoom:67%;" />
<h5 id="流程-5" tabindex="-1"><a class="header-anchor" href="#流程-5"><span>流程</span></a></h5>
<ol>
<li>整图输入基础网络（如VGG）生成多尺度特征图。</li>
<li>每个特征图位置预测K个Anchor的类别和坐标偏移。</li>
<li>通过NMS筛选最终检测框。</li>
</ol>
<h4 id="yolov1" tabindex="-1"><a class="header-anchor" href="#yolov1"><span>YOLOv1</span></a></h4>
<p><code v-pre>输入图片：448*448*3</code></p>
<figure><img src="@source/blog/模型.assets/a29c47bca5ec4f359b54fc6d313879be.png" alt="a29c47bca5ec4f359b54fc6d313879be" tabindex="0" loading="lazy"><figcaption>a29c47bca5ec4f359b54fc6d313879be</figcaption></figure>
<p>每个小框预测位置信息（<code v-pre>x, y, w, h, c</code>）+  类别概率信息<code v-pre>C</code></p>
<ul>
<li>x：coordinate of bbox center inside cell([0;1] wrt grid cell size)</li>
<li>y：coordinate of bbox center inside cell([0;1] wrt grid cell size)</li>
<li>w：bbox width ([0;1] wrt image)</li>
<li>h：bbox width ([0;1] wrt image)</li>
<li>c：bbox confidence ~ P(obj in bbox1)</li>
<li>C：C个不同类别概率信息</li>
</ul>
<h4 id="yolov2" tabindex="-1"><a class="header-anchor" href="#yolov2"><span>YOLOv2</span></a></h4>
<h4 id="yolov3" tabindex="-1"><a class="header-anchor" href="#yolov3"><span>YOLOv3</span></a></h4>
<h4 id="yolov4" tabindex="-1"><a class="header-anchor" href="#yolov4"><span>YOLOv4</span></a></h4>
<h4 id="yolov5" tabindex="-1"><a class="header-anchor" href="#yolov5"><span>YOLOv5</span></a></h4>
<figure><img src="@source/blog/模型.assets/image-20250413193305078.png" alt="image-20250413193305078" tabindex="0" loading="lazy"><figcaption>image-20250413193305078</figcaption></figure>
<figure><img src="@source/blog/模型.assets/image-20250413190728754.png" alt="image-20250413190728754" tabindex="0" loading="lazy"><figcaption>image-20250413190728754</figcaption></figure>
<figure><img src="@source/blog/模型.assets/image-20250413190742275.png" alt="image-20250413190742275" tabindex="0" loading="lazy"><figcaption>image-20250413190742275</figcaption></figure>
<h4 id="yolov6" tabindex="-1"><a class="header-anchor" href="#yolov6"><span>YOLOv6</span></a></h4>
<h4 id="yolov7" tabindex="-1"><a class="header-anchor" href="#yolov7"><span>YOLOv7</span></a></h4>
<h4 id="yolov8" tabindex="-1"><a class="header-anchor" href="#yolov8"><span>YOLOv8</span></a></h4>
<h4 id="yolov12" tabindex="-1"><a class="header-anchor" href="#yolov12"><span>YOLOv12</span></a></h4>
<h2 id="大模型与多模态" tabindex="-1"><a class="header-anchor" href="#大模型与多模态"><span>大模型与多模态</span></a></h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h3>
<p><code v-pre>基本Pipeline：问题明确-&gt;数据获取-&gt;数据清理-&gt;数据探索-&gt;数据准备-&gt;训练模型-&gt;微调模型-&gt;结果应用-&gt;监控迭代</code></p>
<h4 id="整体视角" tabindex="-1"><a class="header-anchor" href="#整体视角"><span>整体视角</span></a></h4>
<ul>
<li>数据决定算法的上线，模型只是去逼近这个上线</li>
<li>算法工程师的基础能力：数据采集、评估、传输、预处理、标注、分析、挖掘、特征融合等</li>
</ul>
<h4 id="llm构建流程" tabindex="-1"><a class="header-anchor" href="#llm构建流程"><span>LLM构建流程</span></a></h4>
<table>
<thead>
<tr>
<th></th>
<th>预训练</th>
<th>有监督微调</th>
<th>奖励建模</th>
<th>强化学习</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据集合</td>
<td>原始数据<br />[<mark>数千亿</mark>单词：图书、百科、网页等]</td>
<td>标注用户指令<br />[<mark>数万</mark>用户指令和对应的答案]</td>
<td>标注对比对<br />[<mark>数万量级</mark>标注对比对]</td>
<td>用户指令<br />[<mark>十万量级</mark>用户指令]</td>
</tr>
<tr>
<td>算法</td>
<td>语言模型训练</td>
<td>语言模型训练</td>
<td>二分类模型</td>
<td>强化学习方法</td>
</tr>
<tr>
<td>模型</td>
<td>基础模型</td>
<td>SFT模型</td>
<td>RM模型</td>
<td>RL模型</td>
</tr>
<tr>
<td>资源需求</td>
<td>1000+GPU[月]</td>
<td>1-100GPU[天]</td>
<td>1-100GPU[天]</td>
<td>1-100GPU[天]</td>
</tr>
</tbody>
</table>
<p><strong>有监督微调：</strong></p>
<p><code v-pre>指令微调(Instruction Tuning)利用少量高质量数据集合，包含用户输入的提示词(Prompt)和对应的理想输出结果。用户输入包括问题、闲聊对话、任务指令等多种形式和任务</code></p>
<ul>
<li>如何微调？利用高质量有监督数据，使用与训练阶段相同的语言模型训练算法，在基础语言模型基础上再训练，得到有监督微调模型(SFT模型)</li>
<li>微调后的效果：具备初步指令理解能力和上下文理解能力，能够完成开放领域问题、阅读理解、翻译、生成代码等能力，也具备一定对未知任务的泛化能力</li>
</ul>
<p><strong>下游任务微调：</strong></p>
<p><code v-pre>DownstreamTaskFine-tuning</code></p>
<p>目的：在通用语义表示基础上，根据下游任务的特性进行适配</p>
<p>注意：容易使得模型遗忘预训练阶段学习到的通用语义知识表示，损失模型的通用性和泛化能力，造成灾难性遗忘(CatastrophicForgetting)问题，因此通常采用混合预训练任务损失和下游微调损失的方法来缓解</p>
<p><strong>奖励建模：</strong></p>
<p><code v-pre>Reward Modeling</code></p>
<p>目的：构建一个文本质量对比模型，对于同一个提示词，SFT模型给出的多个不同输出结果的质量进行排序</p>
<p>注意：RM模型的准确率对于强化学习阶段的效果有至关重要的影响，因此需要大规模训练数据</p>
<p><strong>强化学习：</strong></p>
<p><code v-pre>Reinforcement Learning</code></p>
<p>流程：根据数十万用户给出的提示词，利用在前一阶段训练的RM模型，给出CFT模型对用户提示词补全结果的质量评估，并与语言模型建模目标综合得到更好效果</p>
<p>该阶段使得基础模型的熵降低，会减少模型输出的多样性</p>
<ol>
<li>从数据集中sample一个prompt</li>
<li>语言模型(policy)生成输出</li>
<li>使用奖励模型(Environment)计算得分<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">r\theta(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>(Reward)由<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>r</mi><mi>θ</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">r\theta(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal" style="margin-right:0.02778em;">θ</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>使用PPO-ptx算法优化语言模型</li>
</ol>
<img src="@source/blog/模型.assets/image-20250418215738655.png" alt="image-20250418215738655" style="zoom: 80%;" />
<h4 id="llm参数" tabindex="-1"><a class="header-anchor" href="#llm参数"><span>LLM参数</span></a></h4>
<h5 id="采样系数top-k" tabindex="-1"><a class="header-anchor" href="#采样系数top-k"><span>采样系数Top-k</span></a></h5>
<p><code v-pre>如何预测下一个词</code></p>
<blockquote>
<p>在某一解码时间步，固定选取前k个概率对应的词作为候选，并按照概率进行采样</p>
<p>采样并不代表每次都会选概率最大的，只是概率越大被选中的几率越大</p>
</blockquote>
<img src="@source/blog/模型.assets/image-20250419143534028.png" alt="image-20250419143534028" style="zoom: 67%;" />
<p><strong>top-k值对解码效果影响：</strong></p>
<ul>
<li>k值变大：选择范围变大，输出更加多样化但精确度也会降低</li>
<li>k值变小：输出更加确定但缺乏多样性</li>
</ul>
<p><strong>缺点：</strong></p>
<ul>
<li>不会更具词的概率分布动态调整k值</li>
</ul>
<h5 id="采样系数top-p" tabindex="-1"><a class="header-anchor" href="#采样系数top-p"><span>采样系数Top-p</span></a></h5>
<blockquote>
<p>解决了Top-k采样中只能固定选取前k个词的问题</p>
<p>在某一解码时间步，动态选取概率之和大于p的最小集合作为候选，并按照概率进行采样</p>
</blockquote>
<img src="@source/blog/模型.assets/image-20250419143557550.png" alt="image-20250419143557550" style="zoom:67%;" />
<p><strong>给定p值时，候选词列表的大小主要由概率分布决定：</strong></p>
<ul>
<li>如果模型对下一个词比较确定，则候选词列表会比较小</li>
<li>反之，概率分布会相对均匀(对下一个词不确定)，此时候选列表会相对大一些</li>
</ul>
<p><strong>实际应用：</strong></p>
<ul>
<li>将<code v-pre>Top-k</code>和<code v-pre>Top-p</code>方法进行结合，先应用<code v-pre>Top-k</code>，然后应用<code v-pre>Top-p</code></li>
</ul>
<h5 id="温度系数temperature" tabindex="-1"><a class="header-anchor" href="#温度系数temperature"><span>温度系数Temperature</span></a></h5>
<p><code v-pre>控制了softmax输出分布，Temperature=1时退化为标准softmax函数</code></p>
<figure><img src="@source/blog/模型.assets/image-20250419144841787.png" alt="image-20250419144841787" tabindex="0" loading="lazy"><figcaption>image-20250419144841787</figcaption></figure>
<p><strong>Temperature对输出结果的影响：</strong></p>
<ul>
<li>当Temperature较低时(如0.1/0.2)：模型倾向于选择概率较高的单词，生成的文本较为连贯和准确，但可能显得过于保守，缺乏创造性和多样性</li>
<li>当Temperature较高时(如0.8/1.0)：模型倾向于选择概率较低的单词，生成的文本较为多样和创造，但可能牺牲了一定的连贯性和准确性</li>
</ul>
<p><strong>应用技巧：</strong></p>
<ul>
<li>LLM中普遍取值一般为0.2~1.0</li>
<li>对于多样性要求较高的任务(例如对话、文本生成)可适当提高温度系数</li>
</ul>
<h4 id="预训练模型分类" tabindex="-1"><a class="header-anchor" href="#预训练模型分类"><span>预训练模型分类</span></a></h4>
<h5 id="nlu类" tabindex="-1"><a class="header-anchor" href="#nlu类"><span>NLU类</span></a></h5>
<p><code v-pre>自然语言理解</code></p>
<ul>
<li>以<code v-pre>BERT</code>为代表的自编码预训练模型，NLU任务：分配、抽取等</li>
<li>如何训练？借助特定的预训练任务进行学习，如：掩码语言模型(MLM)、下一个句子预测(NSP)等</li>
<li>双向语言模型，同时建模上文和下文信息</li>
<li>代表模型：RoBERTa、ALBERT、ELECTRA、DeBERTa等</li>
<li>NLU任务特点：输出范围确定、评价方法相对明确</li>
</ul>
<h5 id="nlg类" tabindex="-1"><a class="header-anchor" href="#nlg类"><span>NLG类</span></a></h5>
<p><code v-pre>自然语言生成</code></p>
<ul>
<li>以<code v-pre>GPT</code>为代表的自回归预训练模型，NLG任务：文本生成、生成式摘要、对话等</li>
<li>如何训练？使用Causal LM训练(N-gram语言模型的自然延申)，无需设计复杂的预训练任务</li>
<li>单向语言模型，部分模型采用双向编码器和单向编码器结构</li>
<li>代表模型：GPT系列(Decoder-only)、T5和BART(Encoder-Decoder)等</li>
<li>NLG任务特点：输出自由度搞、评价方法较难、更具有创造性</li>
</ul>
<h4 id="模型的涌现能力" tabindex="-1"><a class="header-anchor" href="#模型的涌现能力"><span>模型的涌现能力</span></a></h4>
<p><code v-pre>《Emergent Abilities of Large Language Models》</code></p>
<h5 id="基于模型放大" tabindex="-1"><a class="header-anchor" href="#基于模型放大"><span>基于模型放大</span></a></h5>
<ul>
<li>TruthfulQA：当模型放大至280B，其效果会突然高于随机20%</li>
<li>Multi-task language understanding：当训练计算量达到70B-280B后效果将远远超过随机</li>
<li>Word in Context：当PaLM被缩放至540B时，高于随机的效果出现</li>
</ul>
<p>根据文章：<code v-pre>Scaling Laws</code> for Neural Language Models</p>
<img src="@source/blog/模型.assets/image-20250418213352077.png" alt="image-20250418213352077" style="zoom:67%;" />
<h5 id="基于样例提示" tabindex="-1"><a class="header-anchor" href="#基于样例提示"><span>基于样例提示</span></a></h5>
<p>通过 few-shot prompting来执行任务的能力也是一种涌现现象</p>
<h3 id="transformer" tabindex="-1"><a class="header-anchor" href="#transformer"><span>transformer</span></a></h3>
<figure><img src="@source/blog/模型.assets/3319e3d6922a2e7f2499a3130d3b5925.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>
<ul>
<li>BERT（Bidirectional Encoder Representations from Transformers）：双向语言理解模型，仅使用 编码器，用于理解整个句子的上下文，适合分类、问答等理解类任务。</li>
<li>GPT（Generative Pre-trained Transformer）：自回归语言模型，仅使用 解码器，其设计目的是生成下一个词，适合用于生成式任务，如文本生成、对话等。</li>
</ul>
<h3 id="多模态" tabindex="-1"><a class="header-anchor" href="#多模态"><span>多模态</span></a></h3>
<h4 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构"><span>基本结构</span></a></h4>
<h5 id="vit" tabindex="-1"><a class="header-anchor" href="#vit"><span>vit</span></a></h5>
<img src="@source/blog/模型.assets/image-20250504143710226.png" alt="image-20250504143710226" style="zoom:67%;" />
<h5 id="yolos" tabindex="-1"><a class="header-anchor" href="#yolos"><span>yolos</span></a></h5>
<img src="@source/blog/模型.assets/image-20250504143729206.png" alt="image-20250504143729206" style="zoom: 80%;" />
<h4 id="图文匹配" tabindex="-1"><a class="header-anchor" href="#图文匹配"><span>图文匹配</span></a></h4>
<h5 id="clip" tabindex="-1"><a class="header-anchor" href="#clip"><span>clip</span></a></h5>
<img src="@source/blog/模型.assets/image-20250504143559792.png" alt="image-20250504143559792" style="zoom:67%;" />
<img src="@source/blog/模型.assets/image-20250504150014695.png" alt="image-20250504150014695" style="zoom:80%;" />
<figure><img src="@source/blog/模型.assets/image-20250504150103155.png" alt="image-20250504150103155" tabindex="0" loading="lazy"><figcaption>image-20250504150103155</figcaption></figure>
<h5 id="bridge-tower" tabindex="-1"><a class="header-anchor" href="#bridge-tower"><span>bridge tower</span></a></h5>
<img src="@source/blog/模型.assets/image-20250504160101916.png" alt="image-20250504160101916" style="zoom:80%;" />
<img src="@source/blog/模型.assets/image-20250504160137868.png" alt="image-20250504160137868" style="zoom: 67%;" />
<h5 id="gpt4原理" tabindex="-1"><a class="header-anchor" href="#gpt4原理"><span>gpt4原理</span></a></h5>
<img src="@source/blog/模型.assets/image-20250504160229505.png" alt="image-20250504160229505" style="zoom:67%;" />
<h4 id="文生图-图生文" tabindex="-1"><a class="header-anchor" href="#文生图-图生文"><span>文生图/图生文</span></a></h4>
<h5 id="dall-·-e" tabindex="-1"><a class="header-anchor" href="#dall-·-e"><span>DALL · E</span></a></h5>
<img src="@source/blog/模型.assets/image-20250504154828197.png" alt="image-20250504154828197" style="zoom:80%;" />
<img src="@source/blog/模型.assets/image-20250504154919514.png" alt="image-20250504154919514" style="zoom:80%;" />
<h4 id="扩散模型" tabindex="-1"><a class="header-anchor" href="#扩散模型"><span>扩散模型</span></a></h4>
<h2 id="模型微调" tabindex="-1"><a class="header-anchor" href="#模型微调"><span>模型微调</span></a></h2>
<p><code v-pre>处理不当，很可能造成模型原始能力的灾难性以往、即回导致模型原始能力丢失，对于复杂模型更是如此</code></p>
<h3 id="微调概念" tabindex="-1"><a class="header-anchor" href="#微调概念"><span>微调概念</span></a></h3>
<h4 id="全量微调" tabindex="-1"><a class="header-anchor" href="#全量微调"><span>全量微调</span></a></h4>
<ul>
<li>对所有参数进行微调</li>
<li>对算力和显存要求高</li>
<li>效果最佳</li>
</ul>
<h4 id="局部微调" tabindex="-1"><a class="header-anchor" href="#局部微调"><span>局部微调</span></a></h4>
<blockquote>
<p>重要调整输入输出层效果明显，而非中间层</p>
</blockquote>
<ul>
<li>只调整某些<strong>某部分参数</strong>，例如输入层，输出层或某些特殊层</li>
<li>对算力和显存要求一般</li>
<li>一定是有效的</li>
</ul>
<h4 id="增量微调" tabindex="-1"><a class="header-anchor" href="#增量微调"><span>增量微调</span></a></h4>
<blockquote>
<p>前/后增量：</p>
<ol>
<li>改变任务（如：2-&gt;8分类），选择后增</li>
<li>模型是一个提取特征的过程，后增效果好</li>
</ol>
</blockquote>
<ul>
<li>通过<strong>新增参数</strong>的方式进行微调，新的知识存储在新的参数中。</li>
<li>对显存和算力要求低</li>
<li>效果不如全量微调</li>
</ul>
<h3 id="微调方式" tabindex="-1"><a class="header-anchor" href="#微调方式"><span>微调方式</span></a></h3>
<h4 id="lora-low-rank-adaption" tabindex="-1"><a class="header-anchor" href="#lora-low-rank-adaption"><span>LoRA（Low-Rank Adaption）</span></a></h4>
<p>通过引入低秩矩阵来减少微调时的参数量。在预训练的模型中，LoRA通过添加两个小矩阵A和B来近似原始的大矩阵<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="normal">Δ</mi><mi>W</mi></mrow><annotation encoding="application/x-tex">\Delta W</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span></span></span></span>，从而减少需要更新的参数数量。</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>W</mi><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><mi>B</mi><mi>A</mi></mrow><annotation encoding="application/x-tex">W_0+\Delta W=W_0+BA
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord">Δ</span><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">W</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1389em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mord mathnormal">A</span></span></span></span></span></p>
<ul>
<li>A和B的秩远小于原始矩阵的秩，从而大大减少了需要更新的参数数量</li>
</ul>
<figure><img src="@source/blog/模型.assets/image-20250616215925193.png" alt="image-20250616215925193" tabindex="0" loading="lazy"><figcaption>image-20250616215925193</figcaption></figure>
<ul>
<li>训练时：输入分别与原始权重和两个低秩矩阵进行计算，共同的到最终结果，优化则仅优化A和B</li>
<li>训练完成后，可以将两个低秩矩阵与原始模型中的权重进行合并，合并后的模型与原始模型无异</li>
</ul>
<h4 id="qlora" tabindex="-1"><a class="header-anchor" href="#qlora"><span>QLoRA</span></a></h4>
<p><code v-pre>Quantized Low-Rank Adaption，在LoRA的基础上加入量化技术，减少权重表示的位数，从而降低显存和计算需求</code></p>
<ul>
<li>量化：将模型权重量化为低精度（如INT4），减少内存占用，并提高推理和训练速度</li>
</ul>
<h3 id="微调工具" tabindex="-1"><a class="header-anchor" href="#微调工具"><span>微调工具</span></a></h3>
<h4 id="llama-factory" tabindex="-1"><a class="header-anchor" href="#llama-factory"><span>Llama-Factory</span></a></h4>
<h4 id="xtuner" tabindex="-1"><a class="header-anchor" href="#xtuner"><span>Xtuner</span></a></h4>
<h3 id="性能评估-evalscope" tabindex="-1"><a class="header-anchor" href="#性能评估-evalscope"><span>性能评估：EvalScope</span></a></h3>
<p>https://evalscope.readthedocs.io/zh-cn/latest/best_practice/qwen3.html#id7</p>
<h2 id="模型部署" tabindex="-1"><a class="header-anchor" href="#模型部署"><span>模型部署</span></a></h2>
<h3 id="ollama" tabindex="-1"><a class="header-anchor" href="#ollama"><span>Ollama</span></a></h3>
<blockquote>
<ul>
<li>针对个人用户</li>
<li>必须是gguf格式的模型【GGUF格式一般是量化后的】</li>
</ul>
</blockquote>
<h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4>
<p><strong>一键安装</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://ollama.com/install.sh</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sh</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/systemd/system/ollama.service</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> allow</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 11434/tcp</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> daemon-reload</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x26;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ollama</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ollama.service</strong></p>
<p><code v-pre>使用显卡进行推理</code></p>
<div class="language-toml line-numbers-mode" data-highlighter="shiki" data-ext="toml" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-toml"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Unit</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Description</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">O</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">llama Service</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">After</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">n</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">etwork-online.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Service</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">ExecStart</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">usr/local/bin/ollama serve</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">User</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">o</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">llama</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Group</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">o</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">llama</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Restart</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">lways</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">RestartSec</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">PATH=/mnt/big_disk_0/spa/.cargo/bin:/mnt/big_disk_0/spa/miniconda3/bin:/mnt/big_disk_0/spa/miniconda3/condabin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/mnt/big_disk_0/spa/.local/bin:/mnt/big_disk_0/spa/bin</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">OLLAMA_HOST=0.0.0.0:11434</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Environment</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">CUDA_VISIBLE_DEVICES=1,0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Install</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">WantedBy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic">efault.target</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ollama</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> serve</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ollama</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 模型:参数B</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="vllm" tabindex="-1"><a class="header-anchor" href="#vllm"><span>Vllm</span></a></h3>
<blockquote>
<ul>
<li>企业专用</li>
<li>一次只支持部署一个模型</li>
</ul>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">vllm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> serve</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /mnt/big_disk/big_disk_3/spa/Code/Study/llm/XiaomiMiMo/MiMo-7B-RL</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">	--trust_remote_code</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">    --tensor-parallel-size</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">    --served-model-name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> MiMo-7B-RL</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lmdeploy" tabindex="-1"><a class="header-anchor" href="#lmdeploy"><span>LMDeploy</span></a></h3>
<blockquote>
<ul>
<li>显存优化比vllm好点</li>
<li>只支持列表内模型</li>
</ul>
</blockquote>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">lmdeploy</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> serve</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> api_server</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> internlm/internlm2_5-7b-chat</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记"><span>笔记</span></a></h2>
<h3 id="如何解决高并发" tabindex="-1"><a class="header-anchor" href="#如何解决高并发"><span>如何解决高并发？</span></a></h3>
<blockquote>
<p>CPU串行运算能力强（计算频率高，核心数少）</p>
<p>GPU并行运算能力强（计算频率低，核心数多(CUDA数量)）</p>
</blockquote>
<p>AI模型运行在gpu，天然支持高并发，类似于批次训练原理。</p>
</div></template>


