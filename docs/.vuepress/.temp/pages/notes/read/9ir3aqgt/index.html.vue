<template><div><h2 id="_1-计网概述" tabindex="-1"><a class="header-anchor" href="#_1-计网概述"><span>1.计网概述</span></a></h2>
<h3 id="isp、ixp、pud" tabindex="-1"><a class="header-anchor" href="#isp、ixp、pud"><span>ISP、IXP、PUD</span></a></h3>
<img src="@source/notes/read/计算机网络.assets/o6PeUTkAHX9cFR4.jpg" alt="微信图片_20240321210729" style="zoom: 30%;" />
<h4 id="isp" tabindex="-1"><a class="header-anchor" href="#isp"><span>ISP</span></a></h4>
<p>即互联网提供商。分为：主干ISP、地区ISP、本地ISP</p>
<h4 id="ixp" tabindex="-1"><a class="header-anchor" href="#ixp"><span>IXP</span></a></h4>
<p>即互联网交换点。</p>
<p>作用：允许两个网络直接相连并交换分组，而不需要再通过第三个网络来转发分组。</p>
<h4 id="pud" tabindex="-1"><a class="header-anchor" href="#pud"><span>PUD</span></a></h4>
<p><code v-pre>对等层次之间传递的数据单位</code></p>
<p>物理层的 PDU是数据位（bit）
数据链路层的 PDU是数据帧（frame）
网络层的PDU是数据包（packet）
传输层的 PDU是数据段（segment）
其他更高层次的PDU是数据（data）。</p>
<h3 id="_1-3-互联网的组成" tabindex="-1"><a class="header-anchor" href="#_1-3-互联网的组成"><span>1.3  互联网的组成</span></a></h3>
<h4 id="边缘部分" tabindex="-1"><a class="header-anchor" href="#边缘部分"><span>边缘部分</span></a></h4>
<p><code v-pre>所有连接在互联网上的主机组成。（用户直接使用）</code></p>
<ul>
<li>
<p>cs（客户-服务器方式）</p>
</li>
<li>
<p>p2p（对等连接方式）：对等连接中的每一个主机既是客户又同时是服务器</p>
</li>
</ul>
<h4 id="核心部分" tabindex="-1"><a class="header-anchor" href="#核心部分"><span>核心部分</span></a></h4>
<p><code v-pre>大量网络和连接这些网络的路由器组成。（为边缘部分提供服务，提供连通性和交换）</code></p>
<h5 id="电路交换" tabindex="-1"><a class="header-anchor" href="#电路交换"><span>电路交换</span></a></h5>
<p><code v-pre>整个报文的比特流连续地从源点直达终点</code></p>
<ul>
<li>建立连接-通话-释放资源</li>
</ul>
<h5 id="报文交换" tabindex="-1"><a class="header-anchor" href="#报文交换"><span>报文交换</span></a></h5>
<p><code v-pre>整个报文先传送到相邻结点，全部存储下来后查找转发表，转发到下一个结点</code><mark>存储-转发</mark></p>
<h5 id="分组交换" tabindex="-1"><a class="header-anchor" href="#分组交换"><span>分组交换</span></a></h5>
<p><code v-pre>单个分组传送到相邻结点，存储下来后查找转发表，转发到下一个结点</code><mark>存储-转发</mark></p>
<ul>
<li>
<p><strong>发送内容</strong>：‘首部+分组’进行转发</p>
</li>
<li>
<p>优点：高效、灵活、迅速、可靠</p>
</li>
<li>
<p>缺点：时延、开销</p>
</li>
</ul>
<h3 id="_1-5-2-计网的分类" tabindex="-1"><a class="header-anchor" href="#_1-5-2-计网的分类"><span>1.5.2 计网的分类</span></a></h3>
<h4 id="作用范围" tabindex="-1"><a class="header-anchor" href="#作用范围"><span>作用范围：</span></a></h4>
<ol>
<li>广域网（WAN）</li>
<li>城域网（MAN）</li>
<li>局域网（LAN）</li>
<li>个人区域网（PAN）、无线个人区域网（WPAN）</li>
</ol>
<h4 id="网络使用者" tabindex="-1"><a class="header-anchor" href="#网络使用者"><span>网络使用者：</span></a></h4>
<ol>
<li>公用网：缴纳费用的人都可以使用这类网络</li>
<li>专用网：满足本单位的特殊业务工作的需要而建造的网络，这种网络不向本单位以外的人提供服务。如：军队、铁路、银行、电力等系统网络</li>
</ol>
<h4 id="把用户接入互联网的网络" tabindex="-1"><a class="header-anchor" href="#把用户接入互联网的网络"><span>把用户接入互联网的网络</span></a></h4>
<ol>
<li>接入网（AN）</li>
</ol>
<h3 id="_1-6-计网的性能" tabindex="-1"><a class="header-anchor" href="#_1-6-计网的性能"><span>1.6 计网的性能</span></a></h3>
<p><code v-pre>略：非性能特征</code></p>
<h4 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标"><span>性能指标：</span></a></h4>
<h5 id="速率" tabindex="-1"><a class="header-anchor" href="#速率"><span>速率</span></a></h5>
<p><code v-pre>数据的传送速率</code></p>
<p>转换单位：</p>
<p>1B=8b</p>
<p>kb=10^3b，M，G，T，P，E，Z，Y</p>
<h5 id="带宽" tabindex="-1"><a class="header-anchor" href="#带宽"><span>带宽</span></a></h5>
<ul>
<li>
<p>频域</p>
<p><code v-pre>某个信号具有的频带宽度，信号的带宽指该信号所包含的各种不同频率成分所占据的频率范围</code>
单位：Hz</p>
</li>
<li>
<p>时域
<code v-pre>单位时间内网络中的某信道所能通过的‘最高数据率’</code></p>
<p>单位：bit/s</p>
</li>
</ul>
<h5 id="吞吐量" tabindex="-1"><a class="header-anchor" href="#吞吐量"><span>吞吐量</span></a></h5>
<p><code v-pre>表示在单位时间内通过某个网络（或信道、接口）的实际的数据量</code></p>
<h5 id="时延" tabindex="-1"><a class="header-anchor" href="#时延"><span>时延</span></a></h5>
<p>总时延 = 发送时延 + 传播时延 + 处理时延 + 排队时延</p>
<p>电路交换多个建立时延</p>
<p>分组交换多个转发时延（路由器在分组接收完全才能转发，转发时延按照一个分组来算）</p>
<h6 id="发送时延" tabindex="-1"><a class="header-anchor" href="#发送时延"><span>发送时延</span></a></h6>
<p><code v-pre>主机或路由器发送数据帧所需要的时间</code></p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>发送时延</mtext><mo>=</mo><mfrac><mrow><mtext>数据帧长度</mtext><mo stretchy="false">(</mo><mi>b</mi><mi>i</mi><mi>t</mi><mo stretchy="false">)</mo><mtext>【分组长度】</mtext></mrow><mrow><mtext>发送速率</mtext><mo stretchy="false">(</mo><mi>b</mi><mi>i</mi><mi>t</mi><mi mathvariant="normal">/</mi><mi>s</mi><mo stretchy="false">)</mo><mtext>【信道带宽】</mtext></mrow></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge\text{发送时延}=\frac{\text{数据帧长度}(bit)\text{【分组长度】}}{\text{发送速率}(bit/s)\text{【信道带宽】}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:3.1585em;vertical-align:-1.0755em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">发送时延</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0043em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">发送速率</span></span><span class="mopen mtight" style="color:Red;">(</span><span class="mord mathnormal mtight" style="color:Red;">bi</span><span class="mord mathnormal mtight" style="color:Red;">t</span><span class="mord mtight" style="color:Red;">/</span><span class="mord mathnormal mtight" style="color:Red;">s</span><span class="mclose mtight" style="color:Red;">)</span><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">【信道带宽】</span></span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.9236em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">数据帧长度</span></span><span class="mopen mtight" style="color:Red;">(</span><span class="mord mathnormal mtight" style="color:Red;">bi</span><span class="mord mathnormal mtight" style="color:Red;">t</span><span class="mclose mtight" style="color:Red;">)</span><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">【分组长度】</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.5186em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></p>
<h6 id="传播时延" tabindex="-1"><a class="header-anchor" href="#传播时延"><span>传播时延</span></a></h6>
<p><code v-pre>电磁波在信道中传播一定的距离需要花费的时间</code></p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>传播时延</mtext><mo>=</mo><mfrac><mtext>信道长度（m）</mtext><mtext>电磁波在信道上的传输速率（m/s)</mtext></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge\text{传播时延}=\frac{\text{信道长度（m）}}{\text{电磁波在信道上的传输速率（m/s)}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.8767em;vertical-align:-1.0755em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">传播时延</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8684em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">电磁波在信道上的传输速率（</span><span class="mord mtight" style="color:Red;">m/s)</span></span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">信道长度（</span><span class="mord mtight" style="color:Red;">m</span><span class="mord cjk_fallback mtight" style="color:Red;">）</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.5186em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></p>
<h6 id="处理时延" tabindex="-1"><a class="header-anchor" href="#处理时延"><span>处理时延</span></a></h6>
<h6 id="排队时延" tabindex="-1"><a class="header-anchor" href="#排队时延"><span>排队时延</span></a></h6>
<h5 id="时延带宽积" tabindex="-1"><a class="header-anchor" href="#时延带宽积"><span>时延带宽积</span></a></h5>
<p>${\color{Red}\huge\text{时延带宽积}=\text{传播时延}\times\text{带宽}} $</p>
<h5 id="往返时间rtt" tabindex="-1"><a class="header-anchor" href="#往返时间rtt"><span>往返时间RTT</span></a></h5>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>发送时间</mtext><mo>=</mo><mfrac><mtext>数据长度</mtext><mtext>发送速率</mtext></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge\text{发送时间}=\frac{\text{数据长度}}{\text{发送速率}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.5167em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">发送时间</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8684em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">发送速率</span></span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">数据长度</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>有效数据率</mtext><mo>=</mo><mfrac><mtext>数据长度</mtext><mrow><mtext>发送时间</mtext><mo>+</mo><mi>R</mi><mi>T</mi><mi>T</mi></mrow></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge\text{有效数据率}=\frac{\text{数据长度}}{\text{发送时间}+RTT}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.6367em;vertical-align:-0.8355em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">有效数据率</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8684em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">发送时间</span></span><span class="mbin mtight" style="color:Red;">+</span><span class="mord mathnormal mtight" style="margin-right:0.13889em;color:Red;">RTT</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">数据长度</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4029em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></p>
<h5 id="利用率" tabindex="-1"><a class="header-anchor" href="#利用率"><span>利用率</span></a></h5>
<ul>
<li>
<p>信道利用率：某信道有百分之几的时间是被利用的（有数据通过）</p>
</li>
<li>
<p>网络利用率：全忘了信道利用率的加权平均值 lxtex</p>
</li>
</ul>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mi>D</mi><mo>=</mo><mfrac><msub><mi>D</mi><mi>o</mi></msub><mrow><mn>1</mn><mo>−</mo><mi>U</mi></mrow></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge D=\frac{D_{o}}{1-U}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.6785em;vertical-align:-0.8355em;"></span><span class="mord"><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.02778em;color:Red;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8886em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">1</span><span class="mbin mtight" style="color:Red;">−</span><span class="mord mathnormal mtight" style="margin-right:0.10903em;color:Red;">U</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.8541em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.02778em;color:Red;">D</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2088em;"><span style="top:-3.05em;margin-left:-0.0278em;margin-right:0.0347em;"><span class="pstrut" style="height:3.2em;"></span><span class="sizing reset-size8 size7 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">o</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4029em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></p>
<p>解释：</p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>D</mi></mrow><annotation encoding="application/x-tex">D</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span></span></span></span>:网络当前的时延</p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>D</mi><mi>o</mi></msub></mrow><annotation encoding="application/x-tex">D_{o}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">o</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>:网络空闲时的时延</p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>U</mi></mrow><annotation encoding="application/x-tex">U</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">U</span></span></span></span>:利用率</p>
<img src="https://s2.loli.net/2024/03/25/BLTnpSw6cKrAbgC.jpg" alt="微信图片编辑_20240321221506" style="zoom:67%;" />
<h3 id="_1-7-计网体系结构" tabindex="-1"><a class="header-anchor" href="#_1-7-计网体系结构"><span>1.7 <mark>计网体系结构</mark></span></a></h3>
<h4 id="图1-8" tabindex="-1"><a class="header-anchor" href="#图1-8"><span>图1-8</span></a></h4>
<figure><img src="https://s2.loli.net/2024/03/25/W2wKaL649HgEelQ.jpg" alt="微信图片编辑_20240321221650" tabindex="0" loading="lazy"><figcaption>微信图片编辑_20240321221650</figcaption></figure>
<h4 id="osi-iso七层模型" tabindex="-1"><a class="header-anchor" href="#osi-iso七层模型"><span>OSI/ISO七层模型</span></a></h4>
<ol>
<li>物理层：解决使用何种信号来传输比特的问题</li>
<li>数据链路层：解决分组在一个网络（或一段链路）上传输的问题【点到点】</li>
<li>网络层：解决分组在多个网络上传输（路由）的问题，提供主机间的逻辑通信</li>
<li>运输层：解决进程之间基于网络通信的问题。【端到端】</li>
<li>会话层：解决进程之间进行会话问题</li>
<li>表示层：解决通信双方交换信息的表示问题，数据字符集的转换、格式化、文本压缩、数据加密和解密</li>
<li>应用层：解决通过应用进程的交互来实现特定网络应用的问题</li>
</ol>
<h4 id="tcp-ip四层模型【常用模型】" tabindex="-1"><a class="header-anchor" href="#tcp-ip四层模型【常用模型】"><span>TCP/IP四层模型【常用模型】</span></a></h4>
<p><code v-pre>将物理层和数据链路层合并为网络接口层；会话层、表示层、应用层划分为应用层</code></p>
<h2 id="_2-物理层-透明的传输比特流" tabindex="-1"><a class="header-anchor" href="#_2-物理层-透明的传输比特流"><span>2.物理层（透明的传输比特流）</span></a></h2>
<h3 id="_2-1和2-2基础知识" tabindex="-1"><a class="header-anchor" href="#_2-1和2-2基础知识"><span>2.1和2.2基础知识</span></a></h3>
<h4 id="物理层基本概念" tabindex="-1"><a class="header-anchor" href="#物理层基本概念"><span>物理层基本概念</span></a></h4>
<p>特性（“械气功程”）：</p>
<ol>
<li><strong>机械特性</strong>：指明接口的尺寸、引脚数目等</li>
<li><strong>电气特性</strong>：指明电压的高低、电压范围</li>
<li><strong>功能特性</strong>：规定接口各信号线的功能（电压的意义）</li>
<li><strong>规程特性</strong>：指明信号线的工作顺序和时序（事件发生的顺序）</li>
</ol>
<h4 id="数据通信基础知识" tabindex="-1"><a class="header-anchor" href="#数据通信基础知识"><span>数据通信基础知识</span></a></h4>
<h5 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释"><span>名词解释</span></a></h5>
<p>通信的目的：传送消息，如语音、文字、图像、视频等都是消息</p>
<p>数据：运送消息的实体</p>
<p>信号：数据的电气或电磁表现</p>
<h5 id="信道" tabindex="-1"><a class="header-anchor" href="#信道"><span>信道</span></a></h5>
<h6 id="信道划分" tabindex="-1"><a class="header-anchor" href="#信道划分"><span>信道划分</span></a></h6>
<ol>
<li>单工通信【一条信道】：即单向通信，只能有一个方向的通信而没有反方向的交互</li>
<li>半双工通信【两条信道】：即双向交替通信，通信的双方都可以发送消息，但不能双方同时发送或接收。一方发送另一方接收，过一会再反过来</li>
<li>全双工通信【两条信道】：即双向同时通信，通信的双方可以同时发送或接收消息</li>
</ol>
<h5 id="调制" tabindex="-1"><a class="header-anchor" href="#调制"><span>调制</span></a></h5>
<h6 id="信号分类" tabindex="-1"><a class="header-anchor" href="#信号分类"><span>信号分类：</span></a></h6>
<p><code v-pre>来自信源的信号称为基带信号（基本频带信号），包含以下两种</code></p>
<ul>
<li>模拟信号（连续信号）：代表消息的参数的取值是连续的。应用：电话线</li>
<li>数字信号（离散信号）：代表消息的参数的取值是离散的。应用：网线。在使用时域的波形表示数字信号时，代表不同离散数值的基本波形就被称为码元</li>
</ul>
<h6 id="两类调制方法" tabindex="-1"><a class="header-anchor" href="#两类调制方法"><span>两类调制方法</span></a></h6>
<ul>
<li>编码（基带调制、低通调制）：对基带信号的波形进行变换（使得与信道特性适应）。<strong>数字信号转数字信号</strong>【曼彻斯特和差分曼彻斯特】</li>
<li>带通调制：使用载波调制，使得基带信号的频率转到更高的频段，转为<strong>带通信号</strong>。<strong>数字信号转模拟信号</strong></li>
</ul>
<h6 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式"><span>编码方式</span></a></h6>
<ol>
<li>不归零编码：正电平为1，负电平为0</li>
<li>归零编码：正脉冲为1，负脉冲为0</li>
<li>曼彻斯特编码：位周期<strong>中心</strong>（向下）跳变为1，向上为0</li>
<li>差分曼彻斯特编码：位周期<strong>边界</strong>没有跳变为1，跳变为0</li>
</ol>
<h6 id="带通调制" tabindex="-1"><a class="header-anchor" href="#带通调制"><span>带通调制</span></a></h6>
<ul>
<li>调幅（AM）：有载波输出为1，无载波输出为0</li>
<li>调频（FM）：载波的频率分为0和1（自定义）</li>
<li>调相（PM）：载波的初始相位0°为0，载波的初始相位180°为1</li>
</ul>
<p>为了更好的信息传输速率，必须使用更复杂的多元制的振幅相位融合调制：正交振幅调制QAM</p>
<h5 id="信道的极限容量" tabindex="-1"><a class="header-anchor" href="#信道的极限容量"><span>信道的极限容量</span></a></h5>
<h6 id="信道通过的频率范围" tabindex="-1"><a class="header-anchor" href="#信道通过的频率范围"><span>信道通过的频率范围</span></a></h6>
<p><code v-pre>丰富的高频分量使得信号中的高频分量传输时受到衰减，信号波形失去了码元之间的清晰界限，造成码间串扰。</code>
<code v-pre>在任何信道中，码元的传输速率是有上限的，传输速率超过此上限，就会出现严重的码间串扰的问题，使接收端对码元的识别不可能</code></p>
<ul>
<li><mark>奈氏准则</mark>：给出假定的理想条件下，为了避免码间串扰，码元的传输速率的上限值</li>
<li><strong>奈氏准则中的最高码元传输速率也称为调制速度</strong></li>
<li>理想**低通信道（通低频阻高频）**的最高码元传输速率：2W Band</li>
<li>理想**带通信道（允许特定频率范围）**的最高码元传输速率：  W Band</li>
<li>理想<strong>低通信道</strong>下的极限数据传输速率：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mn>2</mn><mi>W</mi><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>V</mi></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge 2W \log_2 V}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.9155em;vertical-align:-0.4753em;"></span><span class="mord"><span class="mord sizing reset-size6 size10" style="color:Red;">2</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.13889em;color:Red;">W</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop sizing reset-size6 size10" style="color:Red;"><span class="mop" style="color:Red;"><span style="color:Red;">l</span><span style="color:Red;">o</span><span style="margin-right:0.01389em;color:Red;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2183em;"><span style="top:-3.2108em;margin-right:0.0241em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2292em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.22222em;color:Red;">V</span></span></span></span></span></li>
<li>理想<strong>带通信道</strong>下的极限数据传输速率：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mi>W</mi><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mi>V</mi></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge W \log_2 V}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.9155em;vertical-align:-0.4753em;"></span><span class="mord"><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.13889em;color:Red;">W</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop sizing reset-size6 size10" style="color:Red;"><span class="mop" style="color:Red;"><span style="color:Red;">l</span><span style="color:Red;">o</span><span style="margin-right:0.01389em;color:Red;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2183em;"><span style="top:-3.2108em;margin-right:0.0241em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2292em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.22222em;color:Red;">V</span></span></span></span></span></li>
<li>V：xx级 / 一共xx种状态</li>
<li>W：信道带宽（Hz）</li>
<li>Band：波特（码元/s）</li>
</ul>
<p>####### 信噪比</p>
<p><code v-pre>信号的平均功率和噪声的平均功率之比，记为S/N，单位：分贝（dB）</code></p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>信噪比</mtext><mo stretchy="false">(</mo><mi>d</mi><mi>B</mi><mo stretchy="false">)</mo><mo>=</mo><mn>10</mn><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>10</mn></msub><mrow><mo fence="true">(</mo><mfrac><mi>S</mi><mi>N</mi></mfrac><mo fence="true" mathcolor="Red">)</mo></mrow><mo stretchy="false">(</mo><mi>d</mi><mi>B</mi><mo stretchy="false">)</mo></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge \text{信噪比}(dB)=10\log_{10}\left(\frac{S}{N}\right)(dB)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7224em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">信噪比</span></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">d</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.05017em;color:Red;">B</span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">10</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop sizing reset-size6 size10" style="color:Red;"><span class="mop" style="color:Red;"><span style="color:Red;">l</span><span style="color:Red;">o</span><span style="margin-right:0.01389em;color:Red;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2183em;"><span style="top:-3.2108em;margin-right:0.0241em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">10</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2292em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner sizing reset-size6 size10" style="color:Red;"><span class="mopen sizing reset-size10 size6 delimcenter" style="color:Red;top:-0.2685em;"><span class="delimsizing size3" style="color:Red;"><span style="color:Red;">(</span></span></span><span class="mord" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8684em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.10903em;color:Red;">N</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.05764em;color:Red;">S</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mclose sizing reset-size10 size6 delimcenter" style="color:Red;top:-0.2685em;"><span class="delimsizing size3" style="color:Red;"><span style="color:Red;">)</span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">d</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.05017em;color:Red;">B</span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span></span></span></span></span></p>
<ul>
<li><mark>香农公式</mark>：信道的带宽或信道中的信噪比越大，信息的极限传输速率就越高。</li>
<li>W：信道带宽（Hz）</li>
<li>S：信道内所传信号的平均功率</li>
<li>N：信道内部的高斯噪声功率</li>
<li>S/N：信噪比</li>
<li>利用香农公式来计算信道的极限信息传输速率C：</li>
</ul>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>信道的极限信息传输速率</mtext><mi>C</mi><mo>=</mo><mi>W</mi><msub><mrow><mi>log</mi><mo>⁡</mo></mrow><mn>2</mn></msub><mrow><mo fence="true">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>S</mi><mi>N</mi></mfrac><mo fence="true" mathcolor="Red">)</mo></mrow></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge \text{信道的极限信息传输速率}C = W \log_2\left(1+\frac{S}{N}\right)}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.7224em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">信道的极限信息传输速率</span></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.07153em;color:Red;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.13889em;color:Red;">W</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop sizing reset-size6 size10" style="color:Red;"><span class="mop" style="color:Red;"><span style="color:Red;">l</span><span style="color:Red;">o</span><span style="margin-right:0.01389em;color:Red;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2183em;"><span style="top:-3.2108em;margin-right:0.0241em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2292em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner sizing reset-size6 size10" style="color:Red;"><span class="mopen sizing reset-size10 size6 delimcenter" style="color:Red;top:-0.2685em;"><span class="delimsizing size3" style="color:Red;"><span style="color:Red;">(</span></span></span><span class="mord" style="color:Red;">1</span><span class="mspace" style="color:Red;margin-right:0.2222em;"></span><span class="mbin" style="color:Red;">+</span><span class="mspace" style="color:Red;margin-right:0.2222em;"></span><span class="mord" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8684em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.10903em;color:Red;">N</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.05764em;color:Red;">S</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mclose sizing reset-size10 size6 delimcenter" style="color:Red;top:-0.2685em;"><span class="delimsizing size3" style="color:Red;"><span style="color:Red;">)</span></span></span></span></span></span></span></span></p>
<h3 id="_2-3-物理层下的传输媒体【了解即可】" tabindex="-1"><a class="header-anchor" href="#_2-3-物理层下的传输媒体【了解即可】"><span>2.3 物理层下的传输媒体【了解即可】</span></a></h3>
<h4 id="导引型传输媒体" tabindex="-1"><a class="header-anchor" href="#导引型传输媒体"><span>导引型传输媒体</span></a></h4>
<h5 id="双绞线-双扭线" tabindex="-1"><a class="header-anchor" href="#双绞线-双扭线"><span>双绞线（双扭线）</span></a></h5>
<p>无屏蔽双绞线（UTP）加上金属丝编织的屏蔽层，成为屏蔽双绞线（STP）</p>
<figure><img src="https://s2.loli.net/2024/03/25/dp1bwOktq6CRzAx.png" alt="微信图片_20240322013108" tabindex="0" loading="lazy"><figcaption>微信图片_20240322013108</figcaption></figure>
<h5 id="同轴电缆" tabindex="-1"><a class="header-anchor" href="#同轴电缆"><span>同轴电缆</span></a></h5>
<p>外导体屏蔽层使得同轴电缆有更好的抗干扰特性</p>
<p>同轴电缆类型：</p>
<ul>
<li>基带同轴电缆（50Ω）：数字传输，过去用于局域网</li>
<li>宽带同轴电缆（75Ω）：模拟传输，目前用于有线电视</li>
</ul>
<img src="https://s2.loli.net/2024/03/25/JXzKViPoY32txTI.jpg" alt="微信图片_20240322013514"  />
<h5 id="光纤" tabindex="-1"><a class="header-anchor" href="#光纤"><span>光纤</span></a></h5>
<table>
<thead>
<tr>
<th>发送端（光源）</th>
<th>光缆</th>
<th>接收端（光检测器）</th>
</tr>
</thead>
<tbody>
<tr>
<td>发光二极管（多模光纤） / 半导体激光器（单模光纤）</td>
<td>光纤</td>
<td>光电二极管（多模光纤） / 激光检波器（单模光纤）</td>
</tr>
<tr>
<td>在电脉冲的作用下产出光脉冲</td>
<td>传输原理：<br />光的<strong>全反射</strong></td>
<td>检测到光脉冲时还原为电脉冲</td>
</tr>
</tbody>
</table>
<h4 id="抗干扰能力" tabindex="-1"><a class="header-anchor" href="#抗干扰能力"><span>抗干扰能力</span></a></h4>
<p>光纤 &gt; 同轴电缆 &gt; 双绞线</p>
<h4 id="非导引型传输媒体" tabindex="-1"><a class="header-anchor" href="#非导引型传输媒体"><span>非导引型传输媒体</span></a></h4>
<p>略：无线电波（波长），卫星通信（传播时延长）</p>
<h3 id="_2-4-复用" tabindex="-1"><a class="header-anchor" href="#_2-4-复用"><span>2.4 复用</span></a></h3>
<p>复用器-分用器</p>
<h4 id="频分和时分" tabindex="-1"><a class="header-anchor" href="#频分和时分"><span>频分和时分</span></a></h4>
<h5 id="频分复用-fdm" tabindex="-1"><a class="header-anchor" href="#频分复用-fdm"><span>频分复用（FDM）</span></a></h5>
<table>
<thead>
<tr>
<th>时间</th>
<th>频带宽度</th>
</tr>
</thead>
<tbody>
<tr>
<td>相同</td>
<td>不同</td>
</tr>
</tbody>
</table>
<h5 id="时分复用-tdm" tabindex="-1"><a class="header-anchor" href="#时分复用-tdm"><span>时分复用（TDM）</span></a></h5>
<p><code v-pre>同步时分复用</code></p>
<table>
<thead>
<tr>
<th>时间</th>
<th>频带宽度</th>
</tr>
</thead>
<tbody>
<tr>
<td>不同</td>
<td>相同</td>
</tr>
</tbody>
</table>
<h6 id="统计时分复用-stdm" tabindex="-1"><a class="header-anchor" href="#统计时分复用-stdm"><span>统计时分复用（STDM）</span></a></h6>
<p><code v-pre>异步时分复用</code>
<code v-pre>改进的时分复用，提高信道利用率。集中器（智能复用器）常使用</code></p>
<h4 id="波分复用-wdm" tabindex="-1"><a class="header-anchor" href="#波分复用-wdm"><span>波分复用（WDM）</span></a></h4>
<p><code v-pre>光的频分复用</code></p>
<p>光复用器-光分用器</p>
<h4 id="码分复用-cdm" tabindex="-1"><a class="header-anchor" href="#码分复用-cdm"><span>码分复用（CDM）</span></a></h4>
<p><code v-pre>码分多址（CDMA），码型不同，抗干扰能力强</code></p>
<table>
<thead>
<tr>
<th>时间</th>
<th>频带宽度</th>
</tr>
</thead>
<tbody>
<tr>
<td>相同</td>
<td>相同</td>
</tr>
</tbody>
</table>
<p>每一个比特时间在划分为m个短的间隔，称为码片(chip）</p>
<p><img src="https://s2.loli.net/2024/03/25/EbkXcCgwzmxOR4v.png" alt="image-20240322042142879" loading="lazy"><img src="https://s2.loli.net/2024/03/25/nC2xJD7pNTELAaj.png" alt="image-20240322042202902" loading="lazy"><img src="https://s2.loli.net/2024/03/25/NsdqY8eBM2nmKrT.png" alt="image-20240322042218906" loading="lazy"><img src="https://s2.loli.net/2024/03/25/dGaKxJSbnV6gcPp.png" alt="image-20240322042237249" loading="lazy"></p>
<h2 id="_3-数据链路层-封装成帧、透明传输、差错检测" tabindex="-1"><a class="header-anchor" href="#_3-数据链路层-封装成帧、透明传输、差错检测"><span>3.数据链路层（封装成帧、透明传输、差错检测）</span></a></h2>
<p><code v-pre>向上次提供不可靠传输服务（有线链路误码率低）和可靠传输服务（无线链路易受干扰，误码率高）</code></p>
<h3 id="点对点" tabindex="-1"><a class="header-anchor" href="#点对点"><span>点对点：</span></a></h3>
<h4 id="点对点信道" tabindex="-1"><a class="header-anchor" href="#点对点信道"><span>点对点信道</span></a></h4>
<h5 id="数据链路和帧" tabindex="-1"><a class="header-anchor" href="#数据链路和帧"><span>数据链路和帧</span></a></h5>
<ul>
<li>
<p>帧：数据链路层的协议数据单元</p>
</li>
<li>
<p>链路：从一个结点到相邻结点的一段物理线路（有线或无线）</p>
</li>
<li>
<p>数据链路：链路加上软件硬件（如：网络适配器）</p>
</li>
</ul>
<h5 id="封装成帧" tabindex="-1"><a class="header-anchor" href="#封装成帧"><span>封装成帧</span></a></h5>
<p><code v-pre>数据前后加上首部和尾部</code></p>
<p>首部和尾部的作用：</p>
<ol>
<li>帧定界</li>
<li>帧首部、帧尾部含有控制信息</li>
<li>如：帧尾部含有检错码</li>
</ol>
<h5 id="透明传输" tabindex="-1"><a class="header-anchor" href="#透明传输"><span>透明传输</span></a></h5>
<p>使用控制字符（字节填充/字符填充）：</p>
<ol>
<li>SOH为帧首部定界符</li>
<li>EOT为帧尾部定界符</li>
<li>ESC转义出现在数据中的控制字符或转义自身</li>
</ol>
<h5 id="差错检测" tabindex="-1"><a class="header-anchor" href="#差错检测"><span>差错检测</span></a></h5>
<h6 id="检错编码-奇偶校验码" tabindex="-1"><a class="header-anchor" href="#检错编码-奇偶校验码"><span>检错编码-奇偶校验码</span></a></h6>
<p>帧 = 数据 + 奇偶校验位</p>
<p>####### 如何生成奇偶校验位？</p>
<p>奇校验：添加一位奇偶校验位，使整个数据中&quot;1&quot;的个数为奇数
偶校验：添加一位奇偶校验位，使整个数据中&quot;1&quot;的个数为偶数</p>
<p>####### 如何校验？</p>
<ul>
<li>若有奇数个位误码，则可检错除误码</li>
<li>若有偶数个位误码，则不能检错除误码【缺陷】</li>
</ul>
<h6 id="检错编码-循环冗余码crc可出计算题" tabindex="-1"><a class="header-anchor" href="#检错编码-循环冗余码crc可出计算题"><span>检错编码-循环冗余码CRC<mark>可出计算题</mark></span></a></h6>
<p><code v-pre>也可以作为纠错编码</code></p>
<p>帧 = 数据 + n位冗余码（帧检测序列，FCS）</p>
<p>运行过程：</p>
<ol>
<li>收发双方事先商定多项式G(x)（最高位/最低位都是1）</li>
<li>发送方：根据G(x)计算出冗余码后拼接到原数据发送</li>
<li>接收方：用同样的多项式除收到的帧，如果无余数则无错</li>
</ol>
<p>####### 如何生成冗余码，冗余多项式R（x）？</p>
<p>原数据 + G(x)的阶数个0，被G(x)模二除所得余数即冗余码</p>
<p>如果阶数大于冗余码位数，则在冗余码前补0直到阶数=位数，即为冗余多项式R（x）</p>
<p>模二除：同为0，异为1</p>
<p>####### 如何校验？</p>
<p>接收方：用同样的多项式除收到的帧，如果无余数则无错</p>
<h6 id="纠错编码-海明码" tabindex="-1"><a class="header-anchor" href="#纠错编码-海明码"><span>纠错编码-海明码</span></a></h6>
<p><code v-pre>略，大概率不考</code></p>
<h4 id="可靠传输方法" tabindex="-1"><a class="header-anchor" href="#可靠传输方法"><span>可靠传输方法</span></a></h4>
<h5 id="停止等待协议" tabindex="-1"><a class="header-anchor" href="#停止等待协议"><span>停止等待协议</span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/jmbYytEdCINVPrT.png" alt="image-20240324022113353" tabindex="0" loading="lazy"><figcaption>image-20240324022113353</figcaption></figure>
<ul>
<li>
<p>１.停止等待协议</p>
<ul>
<li>
<p>每发送完一个分组就停止发送，等待对方的确认，在收到确认后再发送下一个分组</p>
</li>
<li>
<p>自动重传请求ARQ，即重传的请求是自动进行的，接收方不需要请求发送方重传某个出错的分组</p>
</li>
</ul>
</li>
<li>
<p>２.连续ARQ协议</p>
<ul>
<li>发送窗口，累积确认（对按序达到的最后一个分组发送确认）</li>
</ul>
</li>
</ul>
<h5 id="回退n帧协议" tabindex="-1"><a class="header-anchor" href="#回退n帧协议"><span>回退N帧协议</span></a></h5>
<h5 id="选择重传协议" tabindex="-1"><a class="header-anchor" href="#选择重传协议"><span>选择重传协议</span></a></h5>
<h4 id="点对点协议-ppp" tabindex="-1"><a class="header-anchor" href="#点对点协议-ppp"><span>点对点协议（PPP）</span></a></h4>
<h5 id="组成部分" tabindex="-1"><a class="header-anchor" href="#组成部分"><span>组成部分</span></a></h5>
<ul>
<li>
<p>当传输字节：异步链路；当传输比特：同步链路</p>
</li>
<li>
<p>链路控制协议LCP：建立、配置和测试数据链路连接</p>
</li>
<li>
<p>网络控制协议NCP；其中每个协议支持不同的网络层协议，如IP、OSI的网络层、DECnet等</p>
</li>
</ul>
<h5 id="帧格式" tabindex="-1"><a class="header-anchor" href="#帧格式"><span>帧格式</span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/jSQqJ4AlpLoMm7i.png" alt="帧格式" tabindex="0" loading="lazy"><figcaption>帧格式</figcaption></figure>
<h6 id="首部" tabindex="-1"><a class="header-anchor" href="#首部"><span>首部</span></a></h6>
<ol>
<li>标志字段F（Flag）：０x7E，表示一个帧的开始</li>
</ol>
<p><strong>注意</strong>：连续两帧之间只需要用一个标志字段</p>
<ol start="2">
<li>地址字段A：0xFF【没啥意义】</li>
<li>控制字段C：0x03【没啥意义】</li>
</ol>
<h6 id="两字节的协议字段" tabindex="-1"><a class="header-anchor" href="#两字节的协议字段"><span>两字节的协议字段</span></a></h6>
<p><code v-pre>代表ppp帧的信息部分内容</code></p>
<ul>
<li>
<p>值为0x0021：IP数据报</p>
</li>
<li>
<p>值为xC021：链路控制协议LCP</p>
</li>
<li>
<p>值为0x8021：网络层的控制数据</p>
</li>
</ul>
<h6 id="尾部" tabindex="-1"><a class="header-anchor" href="#尾部"><span>尾部</span></a></h6>
<ul>
<li>
<p>第一个字节是使用CRC的帧检测序列FCS</p>
</li>
<li>
<p>标志字段F表示一个帧的结束</p>
</li>
</ul>
<h5 id="透明传输-1" tabindex="-1"><a class="header-anchor" href="#透明传输-1"><span>透明传输</span></a></h5>
<ol>
<li>
<p>字节填充--PPP使用<strong>异步传输</strong></p>
</li>
<li>
<p>零比特填充——PPP使用<strong>同步传输</strong></p>
<ul>
<li>发送端：只要发现有5各连续的1就插入一个0</li>
<li>接收端：检查标志字段F确定边界后，将五个连续的1后的一个0删除</li>
</ul>
</li>
</ol>
<h5 id="ppp协议的工作状态" tabindex="-1"><a class="header-anchor" href="#ppp协议的工作状态"><span>PPP协议的工作状态</span></a></h5>
<p><code v-pre>链路静止——建立物理层——链路建立——PC发出LCP——NCP发配IP地址——链路打开，网络层建立</code></p>
<h3 id="广播信道" tabindex="-1"><a class="header-anchor" href="#广播信道"><span>广播信道</span></a></h3>
<h5 id="局域网的数据链路层" tabindex="-1"><a class="header-anchor" href="#局域网的数据链路层"><span>局域网的数据链路层</span></a></h5>
<ul>
<li>
<p>逻辑链路控制LLC子层：与传输媒体无关</p>
</li>
<li>
<p><mark>媒体接入控制MAC子层</mark>：各种传输媒体和MAC子层的局域网对LLC子层来说是透明的</p>
</li>
</ul>
<h5 id="csma-cd原理" tabindex="-1"><a class="header-anchor" href="#csma-cd原理"><span>CSMA/CD原理</span></a></h5>
<p><code v-pre>多点接入-载波监听-碰撞检测</code>
<code v-pre>以太网采用CSMA／CD协议</code></p>
<p>CSMA/CD协议使用半双工【因为碰撞检测，不能同时发送或接收】</p>
<h6 id="名词解释-1" tabindex="-1"><a class="header-anchor" href="#名词解释-1"><span>名词解释</span></a></h6>
<ul>
<li>
<p>多点接入：多个主机连接在一条总线上，竞争使用总线</p>
</li>
<li>
<p>载波监听（先听后说）：发送帧前先检测总线。
若总线空闲96比特时间，则立即发送
若总线忙，则持续检测总线直到总线空闲96比特时间后再重新发送</p>
</li>
<li>
<p>碰撞检测（边听边说）：边发送边检测碰撞，若检测到碰撞，则立即停止发送，退避一段随机时间后再重新发送（一旦冲突，立即停说；等待时机，重新再说）</p>
</li>
</ul>
<h6 id="使用此协议的最小、最大帧长" tabindex="-1"><a class="header-anchor" href="#使用此协议的最小、最大帧长"><span>使用此协议的最小、最大帧长</span></a></h6>
<p><code v-pre>确保了主机在帧发送完成之前是否遭遇了碰撞，然后执行措施</code></p>
<p>${\color{Red}\huge\text{最小帧长}=\text{争用期}\times\text{信道带宽（数据发送速率）} $</p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>最大帧长（以太网v2的mac帧最大长度）</mtext><mo>=</mo><mn>1518</mn><mtext>字节</mtext></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge\text{最大帧长（以太网v2的mac帧最大长度）}=1518\text{字节}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4172em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">最大帧长（以太网</span><span class="mord" style="color:Red;">v2</span><span class="mord cjk_fallback" style="color:Red;">的</span><span class="mord" style="color:Red;">mac</span><span class="mord cjk_fallback" style="color:Red;">帧最大长度）</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">1518</span><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">字节</span></span></span></span></span></span></p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>最大帧长（插入VLAN标记的802.1Q帧）</mtext><mo>=</mo><mn>1522</mn><mtext>字节</mtext></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge\text{最大帧长（插入VLAN标记的802.1Q帧）}=1522\text{字节}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.8205em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">最大帧长（插入</span><span class="mord" style="color:Red;">VLAN</span><span class="mord cjk_fallback" style="color:Red;">标记的</span><span class="mord" style="color:Red;">802.1Q</span><span class="mord cjk_fallback" style="color:Red;">帧）</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">1522</span><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">字节</span></span></span></span></span></span></p>
<h6 id="截断二进制指数退避算法" tabindex="-1"><a class="header-anchor" href="#截断二进制指数退避算法"><span>截断二进制指数退避算法</span></a></h6>
<p>${\color{Red}\huge\text{随机退避时间}=\text{争用期}2τ \times\text{随机数}r} $</p>
<p>注意：r为从离散的整数集合{0,1，…，(2^k-1)}中随机取出一个，k=Min[重传次数，10]</p>
<h6 id="以太网的信道利用率" tabindex="-1"><a class="header-anchor" href="#以太网的信道利用率"><span>以太网的信道利用率</span></a></h6>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><msub><mi>S</mi><mtext>max</mtext></msub><mo stretchy="false">(</mo><mtext>向上</mtext><mo stretchy="false">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>a</mi><mtext>向下</mtext></mrow></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge S_{\text{max}}(\text{向上}) = \frac{1}{1 + a\text{向下}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.5807em;vertical-align:-0.8355em;"></span><span class="mord"><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mord mathnormal" style="margin-right:0.05764em;color:Red;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1489em;"><span style="top:-3.29em;margin-left:-0.0576em;margin-right:0.0241em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord text mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">max</span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">向上</span></span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8414em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">1</span><span class="mbin mtight" style="color:Red;">+</span><span class="mord mathnormal mtight" style="color:Red;">a</span><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">向下</span></span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mtight" style="color:Red;">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4029em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span>参数a的值尽量小，以提高信道利用率</p>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mi>a</mi><mtext>向下</mtext><mo>=</mo><mfrac><mi>τ</mi><mrow><msub><mi>T</mi><mi>O</mi></msub><mtext>向上</mtext></mrow></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge a\text{向下} = \frac{τ }{T_O\text{向上}}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4762em;vertical-align:-1.039em;"></span><span class="mord"><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">a</span><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">向下</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.13889em;color:Red;">T</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.9754em;margin-left:-0.1389em;margin-right:0.0347em;"><span class="pstrut" style="height:3.2em;"></span><span class="sizing reset-size8 size7 mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.02778em;color:Red;">O</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2246em;"><span></span></span></span></span></span></span><span class="mord text mtight" style="color:Red;"><span class="mord cjk_fallback mtight" style="color:Red;">向上</span></span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="margin-right:0.1132em;color:Red;">τ</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.501em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span>以太网端到端的距离收到限制；以太网帧的长度应尽量长些</p>
<h5 id="csma-ca原理" tabindex="-1"><a class="header-anchor" href="#csma-ca原理"><span>CSMA/CA原理</span></a></h5>
<p><code v-pre>多点接入-载波监听-碰撞避免</code>
<code v-pre>无线局域网采用CSMA／CA协议</code></p>
<ul>
<li>使用停止-等待协议</li>
<li>为了尽可能地避免各种可能的碰撞，当要发送帧的站点检测到信道从忙态转为空闲时，都要执行退避算法。</li>
<li>所有的主机在完成发送后，必须再等待一段帧间间隔时间才能发送下一帧。帧间间隔的长短取决于该站要发送的帧的优先级。</li>
<li>无线局域网的MAC帧首部的持续期字段，填入本帧结束后还要占用信道的时间，其他站点通过该字段可实现虚拟载波监听。</li>
<li>允许要发送数据的站点对信道的预约，即在发送数据帧之前先发送请求发送RTS帧。在收到响应允许发送CTS帧后，就可发送数据帧。</li>
</ul>
<h5 id="mac地址" tabindex="-1"><a class="header-anchor" href="#mac地址"><span><mark>MAC地址</mark></span></a></h5>
<h6 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h6>
<ol>
<li>媒体接入控制，硬件地址，又叫物理地址，实际上是适配器地址或适配器标识符。</li>
<li>严格来说：MAC地址是对网络上各接口的唯一标识，而不是对网络上各设备的唯一标识</li>
</ol>
<h6 id="格式和表示" tabindex="-1"><a class="header-anchor" href="#格式和表示"><span>格式和表示</span></a></h6>
<figure><img src="https://s2.loli.net/2024/03/25/ywUHhPmqnMbER1B.png" alt="image-20240324125822969" tabindex="0" loading="lazy"><figcaption>image-20240324125822969</figcaption></figure>
<figure><img src="https://s2.loli.net/2024/03/25/fb4pWKiPxGeAqvC.png" alt="image-20240324125846557" tabindex="0" loading="lazy"><figcaption>image-20240324125846557</figcaption></figure>
<h5 id="扩展的以太网" tabindex="-1"><a class="header-anchor" href="#扩展的以太网"><span>扩展的以太网</span></a></h5>
<p>物理层扩展：中继器（放大器）、集线器（多端口的中继器）</p>
<p>数据链路层扩展：转发器、网桥、交换机（隔离冲突域）</p>
<ul>
<li>
<p>根据MAC帧的目的地址对收到的帧进行转发或过滤。</p>
</li>
<li>
<p>当网桥收到一个帧的时候，并不是向所有的接口转发这个帧，而是检查此帧的目的MAC地址，然后再确定将该帧转发到哪一个接口，或者是把他丢弃</p>
</li>
<li>
<p>交换机：多端口的网桥（自学功能）</p>
</li>
</ul>
<p>附：</p>
<p>网络层扩展：路由器（隔离广播域和冲突域）</p>
<p>网络层以上：网关（连接两根不兼容的系统需要在高层进行协议的转换）</p>
<h2 id="_4-网络层-路由选择、分组转发" tabindex="-1"><a class="header-anchor" href="#_4-网络层-路由选择、分组转发"><span>4.网络层（路由选择、分组转发）</span></a></h2>
<p><code v-pre>网络层向上只提供简单灵活的、无连接的、尽最大努力交付的数据报服务</code></p>
<figure><img src="https://s2.loli.net/2024/03/25/lwILWY3DeRyKOqk.gif" alt="协议" tabindex="0" loading="lazy"><figcaption>协议</figcaption></figure>
<h3 id="ip" tabindex="-1"><a class="header-anchor" href="#ip"><span><mark>IP</mark></span></a></h3>
<p><code v-pre>给每个连接在因特网上的主机（适配器）分配一个在全世界范围是唯一的32位的标识符。</code>
<code v-pre>由CANN分配</code></p>
<h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1"><span>介绍</span></a></h4>
<p>由<strong>首部</strong>和<strong>数据</strong>两部分组成</p>
<figure><img src="https://s2.loli.net/2024/03/25/2Jt7od3wVBQypur.png" alt="ip数据包" tabindex="0" loading="lazy"><figcaption>ip数据包</figcaption></figure>
<h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h4>
<ol>
<li>网络编号：标识因特网上的网络</li>
<li>主机编号：标识同意网络上不同主机（或路由器）</li>
</ol>
<h4 id="与mac地址对比" tabindex="-1"><a class="header-anchor" href="#与mac地址对比"><span><mark>与mac地址对比</mark></span></a></h4>
<h5 id="是否接入互联网" tabindex="-1"><a class="header-anchor" href="#是否接入互联网"><span>是否接入互联网</span></a></h5>
<ul>
<li>如果只是一个不接入因特网的网络，则只是用mac地址</li>
<li>如果接入因特网，则ip地址和mac地址都要使用</li>
</ul>
<h5 id="数据转发过程中ip与mac变化情况" tabindex="-1"><a class="header-anchor" href="#数据转发过程中ip与mac变化情况"><span>数据转发过程中ip与mac变化情况</span></a></h5>
<ul>
<li>源ip地址和目的ip地址保持不变</li>
<li>源maca地址和目的mac地址逐个链路改变</li>
</ul>
<p>２.分组转发</p>
<p>１.从数据报的首部提取出目的主机的IP地址D，得出目的网络地址为N</p>
<p>２.若网络N与此路由器直接相连，则把数据报直接交付目的主机D；否则是间接交付，执行３</p>
<p>３.若路由表中有目的地址为D的特定主机路由，则把数据报传送给路由表中所指明的下一跳路由；否则执行４</p>
<p>４.若路由表有到达网络N的路由，则把数据报传送给路由表指明的下一跳路由器；否则执行５</p>
<p>５.若路由表中有一个默认路由，则把数据报传送给路由表中所指明的默认路由器；否则执行６</p>
<p>６.报告转发分组出错</p>
<h3 id="ip地址编制" tabindex="-1"><a class="header-anchor" href="#ip地址编制"><span>IP地址编制</span></a></h3>
<p><code v-pre>每一类地址都由网络号和主机号组成，主机号中全0表示网络地址，全1表示广播地址</code></p>
<figure><img src="https://s2.loli.net/2024/03/25/PhIuQ8xwAgVSGdH.jpg" alt="IP地址编制" tabindex="0" loading="lazy"><figcaption>IP地址编制</figcaption></figure>
<h4 id="分类的ip地址" tabindex="-1"><a class="header-anchor" href="#分类的ip地址"><span>分类的IP地址</span></a></h4>
<figure><img src="@source/notes/read/计算机网络.assets/image-20240326141056762.png" alt="image-20240326141056762" tabindex="0" loading="lazy"><figcaption>image-20240326141056762</figcaption></figure>
<p>只有A、B、C类地址可分配给各主机或路由器的各接口</p>
<p><strong>网络号分类</strong></p>
<ul>
<li>A：0-127</li>
<li>B：128-191</li>
<li>C：192-223</li>
</ul>
<p><strong>网络号不指派</strong></p>
<ol>
<li>“全0”最小网络号【不指派】</li>
<li>“全1”最大网络号【作为本地回环测试使用，不指派】</li>
</ol>
<p><strong>主机号不指派</strong></p>
<ol>
<li>主机号“全0”：网络地址，【网段号（Net_id）不能分配给主机或路由器的各接口】</li>
<li>主机号“全1”：广播地址，【不能分配给主机或路由器的各接口】</li>
</ol>
<p>两级ip地址缺陷：</p>
<ul>
<li>
<p>１.IP地址空间的利用率有时很低</p>
</li>
<li>
<p>２.给每一个物理网络分配一个网络号会使路由表变得太大因而使网络性能变坏</p>
</li>
<li>
<p>３.两级的IP地址不够灵活</p>
</li>
</ul>
<h4 id="划分子网" tabindex="-1"><a class="header-anchor" href="#划分子网"><span><mark>划分子网</mark></span></a></h4>
<p><code v-pre>单位对外表现为没有划分子网的网络</code></p>
<p>划分子网的方法是从主机号借用若干个位作为子网号</p>
<ol>
<li>子网掩码用来创建子网数量：</li>
</ol>
<ul>
<li>2^x-2（去掉全0和全1）个，其中x是子网掩码借用的主机位数。如：192.168.10.32/28，
我们知道C类ip的默认子网掩码为：255.255.255.0，而由上文的CIDR知识，我们了解到这个ip的实际子网掩码是：255.255.255.240。原本最后一个字节应该是0（00000000），现在却是240（11110000）。故其借用了主机位4位来充当网络位。</li>
</ul>
<ol start="2">
<li>每个子网包含主机数量：</li>
</ol>
<ul>
<li>2^y-2（去掉全0和全1（网络地址和广播地址））台，其中y是没被借用的主机位的位数。
-2是因为，主机位全为0的部分是这个子网的网段号（Net_id），全为1的部分是这个网段的广播地址。</li>
</ul>
<ol start="3">
<li>求目标网段号：
<ul>
<li>利用主机IP地址与子网掩码相与</li>
</ul>
</li>
</ol>
<h4 id="构成超网" tabindex="-1"><a class="header-anchor" href="#构成超网"><span><mark>构成超网</mark></span></a></h4>
<ul>
<li>
<p>１.CIDR（无分类域间路由选择）的主要特点</p>
<ul>
<li>
<p>斜线后面的数字（/28）表示网络地址中从左往右连续的位中有多少位是网络地址，而剩下的位是主机地址</p>
</li>
<li>
<p>2.CIDR把网络前缀相同的连续的IP地址组成一个“CIDR地址块”，只要知道CIDR地址块的任何一个地址，就可以知道这个地址块的起始地址和最大地址，以及地址块中的地址数</p>
</li>
</ul>
</li>
<li>
<p>２.地址掩码</p>
<ul>
<li>一连串的１和０组成，１的个数就是网络前缀长度，在斜线记法中，斜线后面的数字就是地址掩码中１的个数</li>
</ul>
</li>
<li>
<p>３.构成超网</p>
<ul>
<li>由于一个CIDR地址块中含有很多地址，所以在路由表中就利用CIDR地址块来查找目标网络，这种地址的聚合常称为路由聚合，也成为构成超网</li>
</ul>
</li>
</ul>
<h3 id="地址解析协议-arp" tabindex="-1"><a class="header-anchor" href="#地址解析协议-arp"><span>地址解析协议：ARP</span></a></h3>
<p><code v-pre>ARP:解决同一个局域网上的主机或路由器的IP地址和硬件地址的映射问题</code></p>
<p><code v-pre>ARP请求分组是多播，ARP响应分组是单播</code></p>
<p><code v-pre>作用范围：逐段链路或逐个网络使用</code></p>
<h4 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h4>
<p>1.网络层使用IP地址，但实际网络链路传送帧使用的还是mac地址
2.IP地址和硬件地址之间由于格式不同所以不存在简单的映射关系</p>
<h4 id="运行过程" tabindex="-1"><a class="header-anchor" href="#运行过程"><span>运行过程</span></a></h4>
<ol>
<li>
<p>源主机：在自己的ARP高速缓存表中查找目的主机的IP地址所对应的MAC地址
若找到了，则可以封装MAC帧进行发送
若找不到，则发送ARP请求</p>
</li>
<li>
<p>目的主机：收到ARP请求后，将源主机的IP地址与MAC地址记录到自己的ARP高速缓存表中，然后给源主机发送ARP响应（封装在单播MAC帧中）。
ARP响应：目的主机IP地址、目的主机MAC地址</p>
</li>
<li>
<p>源主机：收到ARP响应后，将目的主机的IP地址与MAC地址记录到自己的ARP高速缓存表中，然后就可以封装之前想发送的MAC帧并发送给目的主机</p>
</li>
</ol>
<h4 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h4>
<ul>
<li>除ARP请求和响应外，ARP还有其他类型的报文（例如用于检查IP地址冲突的“无故ARP、免费ARP(Gratuitous ARP)”)</li>
<li>ARP没有安全验证机制，存在ARP欺骗（攻击）问题。</li>
</ul>
<h3 id="ip解析协议-rarp" tabindex="-1"><a class="header-anchor" href="#ip解析协议-rarp"><span>IP解析协议：RARP</span></a></h3>
<p><code v-pre>RARP:与ARP相反，解决同一个局域网上的主机或路由器的硬件地址和IP地址的映射问题</code></p>
<h3 id="网络控制报文协议-icmp" tabindex="-1"><a class="header-anchor" href="#网络控制报文协议-icmp"><span>网络控制报文协议：ICMP</span></a></h3>
<p><code v-pre>提供差错报告和查询报文，以提高IP数据交付成功的机会，被封装在IP数据报中发送</code></p>
<h4 id="种类" tabindex="-1"><a class="header-anchor" href="#种类"><span>种类</span></a></h4>
<h5 id="差错报告报文" tabindex="-1"><a class="header-anchor" href="#差错报告报文"><span>差错报告报文</span></a></h5>
<p><code v-pre>向源点发送</code></p>
<ul>
<li>
<p>终点不可达
当路由器或主机不能交付数据包时，发送此报文
类型：目的网络不可达、目的主机不可达、目的协议不可达、目的端口不可达、目的网络未知、目的主机未知等13种错误</p>
</li>
<li>
<p>源点抑制
当路由器或主机因拥塞而丢弃数据报时，发送此报文，使源点知道应当把数据报的发送速率放慢。</p>
</li>
<li>
<p>时间超过</p>
<ol>
<li>当路由器收到一个目的IP地址不是自己的IP数据报，会将其生存时间TTL字段的值减1
若TTL不为0，则将该IP数据报转发出去
若TTL为0，除丢弃该P数据报外，还发送此报文</li>
<li>当终点在预先规定的时间内不能收到一个数据报的全部数据报片时，就把已收到的数据报片都丢弃，也会向源点发送时间超过报文。</li>
</ol>
</li>
<li>
<p>4.参数问题
根据首部的检验和字段发现IP数据报首部误码，发送此报文</p>
</li>
<li>
<p>5.改变路由
发送此报文给主机，让主机明白发送给更便捷的路由</p>
</li>
</ul>
<h5 id="icmp询问报文" tabindex="-1"><a class="header-anchor" href="#icmp询问报文"><span>ICMP询问报文</span></a></h5>
<ul>
<li>回送请求和回答报文
询问目的站是否可达，询问-回答</li>
<li>时间戳请求和回答报文
请求目的站回答以时间戳形式当前日期和时间（以1900.1.1开始计时）</li>
</ul>
<h5 id="不发送icmp的情况" tabindex="-1"><a class="header-anchor" href="#不发送icmp的情况"><span>不发送ICMP的情况：</span></a></h5>
<ol>
<li>ICMP差错报告报文出现差错时</li>
<li>第一个分片的数据报片的所有后续数据报片</li>
<li>具有多播地址的数据报</li>
<li>具有特殊地址（如12</li>
<li>7.0.0.0或0.0.0.0）的数据报</li>
</ol>
<h3 id="组播管理协议-igmp" tabindex="-1"><a class="header-anchor" href="#组播管理协议-igmp"><span>组播管理协议：IGMP</span></a></h3>
<p><code v-pre>在IP网络上进行组播管理，允许单个源将数据发送到多个目的地，而不是点对点的单播或广播方式</code></p>
<h3 id="路由选择协议" tabindex="-1"><a class="header-anchor" href="#路由选择协议"><span>路由选择协议</span></a></h3>
<h4 id="内部网关协议-igp" tabindex="-1"><a class="header-anchor" href="#内部网关协议-igp"><span>内部网关协议（IGP）</span></a></h4>
<h5 id="内部网关协议-rip" tabindex="-1"><a class="header-anchor" href="#内部网关协议-rip"><span>内部网关协议：RIP</span></a></h5>
<p><code v-pre>分布式、基于距离向量</code>
<code v-pre>最佳路径衡量标准：路由跳数最少</code>
<code v-pre>要求自治系统AS内的每个路由器维护自己到AS每一个网络的距离（距离向量）</code></p>
<h6 id="怎么算" tabindex="-1"><a class="header-anchor" href="#怎么算"><span>怎么算</span></a></h6>
<ul>
<li>当前到直连网络的距离：１</li>
<li>当前到非直连网络的距离：所经过的路由器加１</li>
</ul>
<p><strong>注意</strong>：RIP只允许一条路径最多只能包含５个路由器，因此距离等于16时相当于不可达</p>
<h6 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h6>
<ol>
<li>仅和相邻的路由器交换信息</li>
<li>路由器交换的信息是当前路由器所知道的全部信息，即自己现在的路由表路由表中的信息为：到某个网络的距离、应经过的下一跳地址</li>
<li>按固定的时间间隔交换路由信息</li>
</ol>
<h6 id="距离向量算法" tabindex="-1"><a class="header-anchor" href="#距离向量算法"><span>距离向量算法</span></a></h6>
<ol>
<li>
<p>修改发来的路由表：对地址为X的路由器发过来的路由表，先修改此路由表中的所有项目：把“下一跳”字段中的地址改为X，并把所有”距离”字段都加1。</p>
</li>
<li>
<p>将修改过的路由表与原路由表的目的网络进行对比：</p>
<ul>
<li>
<p>若修改过的路由表中有，原路由表没有，则添加到原路由表中。</p>
</li>
<li>
<p>若修改过的路由表和原路由表都有</p>
<ol>
<li>
<p>在S的路由表中，若下一跳地址是x则直接用X路由表中这条项目替换S路由表中的项目。</p>
</li>
<li>
<p>在S的路由表中，若下一跳地址不是x，表项目中的距离d小于S路由表中更新表，则把此相邻路由器记为不可达路由器，距离设置为16。</p>
</li>
</ol>
</li>
</ul>
</li>
</ol>
<p><strong>优点</strong>：</p>
<ol>
<li>实现简单，开销小</li>
<li>限制了网络的规模，使能使用的最大距离为15</li>
</ol>
<p><strong>缺点</strong>：</p>
<ol>
<li>当出现网络故障时，要经过比较长的时间才能将此信息传送到所有的路由器中</li>
<li>随着网络规模的扩大，开销也增大</li>
</ol>
<h5 id="开放最短路径优先协议-ospf" tabindex="-1"><a class="header-anchor" href="#开放最短路径优先协议-ospf"><span>开放最短路径优先协议：OSPF</span></a></h5>
<p><code v-pre>分布式、基于链路状态、开放、不限制网络规模</code></p>
<h6 id="使用ospf的每个路由器" tabindex="-1"><a class="header-anchor" href="#使用ospf的每个路由器"><span>使用OSPF的每个路由器：</span></a></h6>
<ol>
<li>产生链路状态通告LSA：直连网络的链路状态信息、邻居路由器的链路状态信息</li>
<li>LSA被封装在链路状态更新分组LSU，用洪泛法发送</li>
<li>有链路状态数据库LSDB（存储LSA）进行最短路径优先SPF计算，构建自己的到其他路由器的最短路径（路由表）</li>
</ol>
<h6 id="ospf的五种分组类型" tabindex="-1"><a class="header-anchor" href="#ospf的五种分组类型"><span>OSPF的五种分组类型</span></a></h6>
<ol>
<li>问候分组（Hello）</li>
<li>数据库描述分组（Database Description）</li>
<li>链路状态请求分组（Link State Request）</li>
<li>链路状态更新分组（Link State Update）</li>
</ol>
<h6 id="邻居关系的建立" tabindex="-1"><a class="header-anchor" href="#邻居关系的建立"><span>邻居关系的建立</span></a></h6>
<ol>
<li>指定路由器DR和备用指定路由器BDR</li>
<li>非DR/BDR只与DR/BDR建立邻居关系</li>
<li>非DR/BDR只与DR/BDR交换信息</li>
</ol>
<h6 id="更大规模" tabindex="-1"><a class="header-anchor" href="#更大规模"><span>更大规模</span></a></h6>
<p>方法：划分若干更小范围：区域（Area）</p>
<p>优点：把用洪泛法交换链路状态信息的范围局限于每一个区域而不是整个自治系统（减少整个网络的通信量）</p>
<h4 id="外部网关协议-egp-【非重点】" tabindex="-1"><a class="header-anchor" href="#外部网关协议-egp-【非重点】"><span>外部网关协议（EGP）【非重点】</span></a></h4>
<p><code v-pre>若源主机和目的主机不在一个自治系统中，当数据报传到一个自治系统的边界时，可利用BGP，将路由选择信息传递到另一个自治系统中</code></p>
<h5 id="bgp" tabindex="-1"><a class="header-anchor" href="#bgp"><span>BGP</span></a></h5>
<ul>
<li>
<p>采用路径向量路由选择协议</p>
</li>
<li>
<p>主要特点：</p>
<ul>
<li>
<p>１.自治系统AS之间的路由选择必须考虑有关策略</p>
</li>
<li>
<p>２.BGP只能力求寻找一条能够到达目的网络较好的路由，而非要寻找一条最佳路由</p>
</li>
</ul>
</li>
</ul>
<h3 id="路由表的功能" tabindex="-1"><a class="header-anchor" href="#路由表的功能"><span><mark>路由表的功能</mark></span></a></h3>
<p>来自chat8：</p>
<ol>
<li><strong>路径选择</strong>：路由表用于确定数据包从源到目的地的最佳路径。它根据预先配置的路由协议或静态路由表中的路由条目，选择将数据包转发到目标地址的最佳路径。</li>
<li><strong>路由转发</strong>：路由表中的路由信息用于指导数据包在网络中的传输。当路由器收到一个数据包时，它会查找路由表，并根据目标地址的最佳路径将数据包转发到下一个路由器或目标设备。</li>
<li><strong>网络分割和聚合</strong>：路由表可以将网络地址空间划分为更小的子网，并将这些子网的路由信息聚合在一起。这有助于减少路由表的大小，提高路由器的性能，并简化网络管理。</li>
<li><strong>动态路由更新</strong>：许多路由协议（如OSPF、BGP等）支持动态路由更新，路由表会定期接收和更新路由信息，以反映网络拓扑的变化。这样可以确保路由表中的路由信息始终是最新的和最优的。</li>
<li><strong>故障转移</strong>：路由表中的备用路径信息可以用于故障转移。当主路径不可用时，路由器可以根据备用路径信息重新计算路由，并将数据包发送到备用路径上，以确保数据的传输和网络的连通性。</li>
</ol>
<h3 id="ipv6和ipv4" tabindex="-1"><a class="header-anchor" href="#ipv6和ipv4"><span>ipv6和ipv4</span></a></h3>
<h4 id="ipv6图" tabindex="-1"><a class="header-anchor" href="#ipv6图"><span>ipv6图</span></a></h4>
<figure><img src="https://s2.loli.net/2024/03/25/iu48AeK5lb9gRwM.png" alt="image-20240324180107773" tabindex="0" loading="lazy"><figcaption>image-20240324180107773</figcaption></figure>
<h4 id="与ipv4相比-ipv6对首部中的某些字段进行了如下的更改" tabindex="-1"><a class="header-anchor" href="#与ipv4相比-ipv6对首部中的某些字段进行了如下的更改"><span>与ipv4相比，ipv6对首部中的某些字段进行了如下的更改：</span></a></h4>
<ol>
<li>取消了首部长度字段，因为它的首部长度是固定的(40字节)。</li>
<li>取消了服务类型字段，因为优先级和流标号字段实现了服务类型字段的功能。</li>
<li>取消了总长度字段，改用有效载荷长度字段。</li>
<li>取消了标识、标志和片偏移字段，因为这些功能已包含在分片扩展首部中。</li>
<li>把TTL字段改称为跳数限制字段，但作用是一样的（名称与作用更加一致）。</li>
<li>取消了协议字段，改用下一个首部字段。</li>
<li>取消了检验和字段，这样就加快了路由器处理数据报的速度。
在数据链路层对检测出有差错的帧就丢弃
在运输层：
当使用UDP时，若检测出有差错的用户数据报就丢弃。
当使用TCP时，对检测出有差错的报文段就重传，直到正确传送到目的进程为止。
因此在网络层的差错检测可以精简掉。</li>
<li>取消了选项字段，而用扩展首部来实现选项功能。</li>
</ol>
<h3 id="ip多播" tabindex="-1"><a class="header-anchor" href="#ip多播"><span>IP多播</span></a></h3>
<figure><img src="https://s2.loli.net/2024/03/25/um2KiLFIbesDkW5.png" alt="单播与多播" tabindex="0" loading="lazy"><figcaption>单播与多播</figcaption></figure>
<p>对应的D类地址</p>
<h4 id="网际组管理协议igmp" tabindex="-1"><a class="header-anchor" href="#网际组管理协议igmp"><span>网际组管理协议IGMP</span></a></h4>
<p><code v-pre>用于探寻、转发本局域网内的组成员关系</code></p>
<h4 id="多播路由选择协议" tabindex="-1"><a class="header-anchor" href="#多播路由选择协议"><span>多播路由选择协议</span></a></h4>
<h3 id="vpn与nat【看下即可】" tabindex="-1"><a class="header-anchor" href="#vpn与nat【看下即可】"><span>VPN与NAT【看下即可】</span></a></h3>
<figure><img src="https://s2.loli.net/2024/03/25/SfQXP4cUuDZmFxG.png" alt="image-20240324180404353" tabindex="0" loading="lazy"><figcaption>image-20240324180404353</figcaption></figure>
<h2 id="_5-运输层-进程通信" tabindex="-1"><a class="header-anchor" href="#_5-运输层-进程通信"><span>5.运输层（进程通信）</span></a></h2>
<p><code v-pre>向上面的应用层提供通信服务</code></p>
<h3 id="运输层功能" tabindex="-1"><a class="header-anchor" href="#运输层功能"><span>运输层功能</span></a></h3>
<ol>
<li>运输层为应用进程之间提供端到端的逻辑通信（网络层是为主机）</li>
<li>运输层还要对收到的报文进行差错检测</li>
<li>运输层需要有两种不同的运输协议，即面向连接的TCP和无连接的UDP</li>
</ol>
<h3 id="运输层的两个协议" tabindex="-1"><a class="header-anchor" href="#运输层的两个协议"><span><mark>运输层的两个协议</mark></span></a></h3>
<p>协议端口分类</p>
<p>TCP（协议字段=6）：SMTP（25）、FTP（21/20）、BGP（179）、HTTP（80）、HTTPS（443）</p>
<p>UDP（协议字段=17）：RIP（520）、DNS（53）、TFTP（69）、SNMP（161）、DHCP（67/68）</p>
<h4 id="传输控制协议tcp" tabindex="-1"><a class="header-anchor" href="#传输控制协议tcp"><span>传输控制协议TCP</span></a></h4>
<ul>
<li><strong>面向连接服务</strong></li>
<li>可靠传输</li>
<li>只有一对一，<strong>不提供广播或多播的服务</strong></li>
<li>首部最小20字节，最大60字节</li>
<li>面对字节流</li>
<li>TCP提供全双工的可靠交付的服务</li>
</ul>
<h5 id="流量控制" tabindex="-1"><a class="header-anchor" href="#流量控制"><span>流量控制</span></a></h5>
<p><code v-pre>让发送方的速率不要太快，让接收方来得及接收</code></p>
<p>滑动窗口机制方便实现发送方的流量控制</p>
<ol>
<li>接收方用接收窗口大小限制发送方发送窗口大小</li>
<li>发送方收到接收方的零通知窗口后，启动持续计时器
持续计时器超时后，向接收方发送零窗口探测报文</li>
</ol>
<h5 id="拥塞控制-rwnd和cwnd" tabindex="-1"><a class="header-anchor" href="#拥塞控制-rwnd和cwnd"><span>拥塞控制（rwnd和cwnd）</span></a></h5>
<p><code v-pre>拥塞：对网络中某一资源的需求超过了该资源所能提供的可用部分，网络性能就要变坏</code>
<code v-pre>判断是否拥塞：发生超时重传</code>
<code v-pre>若出现拥塞而不进行控制，整个网络的吞吐量将随输入负荷的增大而下降</code></p>
<p><img src="https://s2.loli.net/2024/03/25/xyN3JHlgOV1traf.png" alt="image-20240324224502015" loading="lazy"><img src="https://s2.loli.net/2024/03/25/4RDtq6J9o13AnU8.png" alt="image-20240324234819255" loading="lazy"></p>
<h6 id="算法" tabindex="-1"><a class="header-anchor" href="#算法"><span>算法</span></a></h6>
<ul>
<li>
<p>慢开始</p>
<p>每个传输轮次结束后：拥塞窗口值按指数规律增长
<img src="https://s2.loli.net/2024/03/25/47vgYWhVfnbd3jr.png" alt="image-20240324225244717" loading="lazy"></p>
</li>
<li>
<p>拥塞避免</p>
<p>到达慢开始门限值（ssthresh）之后
每个传输轮次结束后：拥塞窗口值只能线性加一</p>
</li>
<li>
<p>快重传
提高拥塞控制算法运行的效率
接收方要立即发送确认，而不是等待自己发送数据时才进行销带确认
收到失序报文段：发出对<strong>已收到的报文段</strong>的重复确认</p>
</li>
<li>
<p>快恢复
发送方收到3个重复确认，就执行快恢复算法
发送方将慢开始门限值（ssthresh）和拥塞窗口值（cwnd）调整为当前窗口一半，开始执行拥塞避免算法（也有的将cwnd值调整为当前窗口一半+3）
<img src="https://s2.loli.net/2024/03/25/aGVgefd42WiFIsX.png" alt="image-20240324234124956" loading="lazy"></p>
</li>
</ul>
<p>当网络拥塞时：</p>
<ol>
<li>将ssthresh值更新为发生拥塞时cwnd值的一半：</li>
<li>将cwnd值减少为1，并重新开始执行慢开始算法。</li>
</ol>
<h5 id="三次握手【必须掌握-简单说原理】" tabindex="-1"><a class="header-anchor" href="#三次握手【必须掌握-简单说原理】"><span><mark>三次握手【必须掌握，简单说原理】</mark></span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/xjpioYT2HaCEBqr.png" alt="image-20240324235123156" tabindex="0" loading="lazy"><figcaption>image-20240324235123156</figcaption></figure>
<p>A-&gt;B：SYN=1 seq=x</p>
<p>B-&gt;A：SYN=1 ACK=1 seq=y ack=x+1</p>
<p>A-&gt;B：ACK=1 seq=x+1 ack=y+1</p>
<ul>
<li><strong>三次握手是建立连接</strong>：
1.客户机向服务器发送一个连接请求报文：SYN=1，seq=x
2.服务器收到连接请求后接收并发送确认报文：SYN=1，ACK=1，ack=x+1；seq=y
3.发送方收到确认报文：ACK=1，seq=x+1，ack=y+1</li>
</ul>
<h5 id="四次挥手【必须掌握-简单说原理】" tabindex="-1"><a class="header-anchor" href="#四次挥手【必须掌握-简单说原理】"><span><mark>四次挥手【必须掌握，简单说原理】</mark></span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/6BbhI4cLj97r2yY.png" alt="image-20240324235209224" tabindex="0" loading="lazy"><figcaption>image-20240324235209224</figcaption></figure>
<p>A-&gt;B：FIN=1 ACK=1 seq=u ack=v</p>
<p>B-&gt;A：ACK=1 seq=v ack=u+1</p>
<p>B-&gt;A：FIN=1 ACK=1 seq=w ack=u+1</p>
<p>A-&gt;B：ACK=1 seq=u+1 ack=w+1</p>
<ul>
<li><strong>四次握手是释放连接</strong>：
1.客户机向服务器发送一个释放报文：FIN=1，seq=u
2.服务器收到后发送一个确认报文：ACK=1，ack=u+1，seq=v
3.服务器向客户机发送释放连接的请求，将服务器到客户机方向的连接释放：FIN=1，ACK=1，seq=w，ack=u+1
4.客户机收到释放连接的报文，发送确认：ACK=1，seq=u+1，ack=w+1</li>
</ul>
<h5 id="tcp报文段的首部格式" tabindex="-1"><a class="header-anchor" href="#tcp报文段的首部格式"><span>TCP报文段的首部格式</span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/MQTC8pvuZA5qBxb.png" alt="tcp报文段" tabindex="0" loading="lazy"><figcaption>tcp报文段</figcaption></figure>
<ul>
<li>
<p>SYN：同步
当SYN=1和ACK=0时，这是一个连接请求报文段。
对方若同意建立连接，则在响应的报文段中使SYN和ACK置为1（只有等于1时SYN有效）</p>
</li>
<li>
<p>FIN：终止
当FIN为1时，表明此报文段的发送方的数据已发送完毕，并要求释放运输连接</p>
</li>
<li>
<p>ACK：确认
在建立连接后所有传送的报文段都必须把ACK置1（只有等于1时确认字段有效）</p>
</li>
<li>
<p>seq：自己发送信息的序号</p>
</li>
<li>
<p>ack：对上个对方发来信息序号的确认，上个对方发来信息序号+1</p>
</li>
</ul>
<h4 id="用户数据报协议udp" tabindex="-1"><a class="header-anchor" href="#用户数据报协议udp"><span>用户数据报协议UDP</span></a></h4>
<h5 id="udp的主要特点" tabindex="-1"><a class="header-anchor" href="#udp的主要特点"><span>UDP的主要特点</span></a></h5>
<ul>
<li><strong>无连接服务</strong></li>
<li>一对一、一对多、多对多，<strong>支持广播和多播</strong></li>
<li>首部开销小，仅8字节</li>
<li>尽最大努力交付，即不使用可靠交付和拥塞控制</li>
<li>单工或者半双工</li>
<li>对应用层交付的报文直接打包</li>
</ul>
<h5 id="udp首部格式" tabindex="-1"><a class="header-anchor" href="#udp首部格式"><span>UDP首部格式</span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/Hht5w8SvKlpZbXO.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<ol>
<li>
<p>源端口
源端口号，在需要对方回信时选用，不需要时可用全０</p>
</li>
<li>
<p>目的端口
目的端口号，这在重点交付时必须使用</p>
</li>
<li>
<p>长度
UDP用户数据报的长度，最小值是８（仅有首部）</p>
</li>
<li>
<p>检验和
检测UDP用户数据报是否有错，有则丢弃</p>
</li>
</ol>
<h2 id="应用层-【简答题】" tabindex="-1"><a class="header-anchor" href="#应用层-【简答题】"><span>应用层 <mark>【简答题】</mark></span></a></h2>
<p><code v-pre>应用层是计算机网络体系结构的最顶层，是设计和建立计算机网络的最终目的，也是计算机网络中发展最快的部分</code></p>
<h3 id="域名系统dns" tabindex="-1"><a class="header-anchor" href="#域名系统dns"><span>域名系统DNS</span></a></h3>
<p><code v-pre>域名和IP地址的映射关系必须保存在域名服务器中，供所有其他应用查询，显然不能将所有信息都储存在一台域名服务器中</code>
<code v-pre>DNS使用分布在各地的域名服务器来实现域名到IP地址的转换</code></p>
<h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h4>
<ul>
<li>
<p>域名系统DNS是互联网使用的命名系统，用来把便于人们使用的机器名字转换成IP地址</p>
</li>
<li>
<p>当某一个应用进程需要把主机名解析为IP地址时，该应用进程就调用解析程序，并成为DNS的一个客户</p>
<ol>
<li>
<p>应用进程把待解析的域名放在DNS请求报文中，以UDP用户数据报的方式发送给本地域名服务器</p>
</li>
<li>
<p>本地域名服务器在查找到域名后，把对应的IP地址放在回答报文中返回，若本地域名服务器不能回答该请求，即本地服务器没有查找到该待解析的域名的IP地址时，此域名服务器就暂时成为DNS中的另一个客户，并向其他域名服务器发出查询请求，这种进程直至找到能够回答该请求的域名服务器为止</p>
</li>
<li>
<p>应用进程获得目的主机的IP地址后即可进行通信</p>
</li>
</ol>
</li>
</ul>
<h4 id="域名分类" tabindex="-1"><a class="header-anchor" href="#域名分类"><span>域名分类</span></a></h4>
<p><code v-pre>层次树状结构的域名结构</code></p>
<ol>
<li>根域名服务器
<ol>
<li>国家顶级域名nTLD</li>
<li>通用顶级域名gTLD</li>
<li>反向域arpa</li>
</ol>
</li>
<li>顶级域名服务器</li>
<li>权限域名服务器</li>
<li>本地域名服务器</li>
</ol>
<h4 id="域名的解析过程" tabindex="-1"><a class="header-anchor" href="#域名的解析过程"><span>域名的解析过程</span></a></h4>
<p><code v-pre>为了提高DNS的查询效率，并减轻根域名服务器的负荷和减少因特网上的DNS查询报文数量，在域名服务器和主机中广泛地使用了高速缓存</code></p>
<h5 id="递归查询" tabindex="-1"><a class="header-anchor" href="#递归查询"><span>递归查询</span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/zbnd96cEZrVx37s.png" alt="image-20240325024316340" tabindex="0" loading="lazy"><figcaption>image-20240325024316340</figcaption></figure>
<h5 id="迭代查询" tabindex="-1"><a class="header-anchor" href="#迭代查询"><span>迭代查询</span></a></h5>
<figure><img src="https://s2.loli.net/2024/03/25/xoeQyw6EHb5GXMV.png" alt="image-20240325024328473" tabindex="0" loading="lazy"><figcaption>image-20240325024328473</figcaption></figure>
<h3 id="文件传送协议-ftp" tabindex="-1"><a class="header-anchor" href="#文件传送协议-ftp"><span>文件传送协议：FTP</span></a></h3>
<h4 id="概述-1" tabindex="-1"><a class="header-anchor" href="#概述-1"><span>概述</span></a></h4>
<ul>
<li>
<p>提供交互式的访问，允许客户指明文件的类型与格式，并允许文件具有存储权限</p>
</li>
<li>
<p>屏蔽了各计算机系统的细节，因而适合于在异构网络中任意计算机之间按传送文件</p>
</li>
</ul>
<h4 id="基本工作原理" tabindex="-1"><a class="header-anchor" href="#基本工作原理"><span>基本工作原理</span></a></h4>
<p><code v-pre>使用c/s方式，建立两个连接</code></p>
<ol>
<li>控制连接（21端口）：在整个会话期间一直保持打开，用于传送FTP相关控制命令</li>
<li>数据连接（默认20端口，可自行商议）：用于文件传输，在每次文字传输时才建立，传输结束就关闭</li>
</ol>
<figure><img src="https://s2.loli.net/2024/03/25/5GHu24I8X3i7NdT.png" alt="image-20240325025353408" tabindex="0" loading="lazy"><figcaption>image-20240325025353408</figcaption></figure>
<h3 id="网络文件系统-nfs" tabindex="-1"><a class="header-anchor" href="#网络文件系统-nfs"><span>网络文件系统：NFS</span></a></h3>
<ol>
<li>NFS允许应用进程远程打开一个远地文件，并能在该文件的某一个特定的位置上开始读写数据</li>
<li>在网络上传送的只是少量的修改数据</li>
</ol>
<h3 id="简单文件传送协议-tftp" tabindex="-1"><a class="header-anchor" href="#简单文件传送协议-tftp"><span>简单文件传送协议：TFTP</span></a></h3>
<ol>
<li>TFTP虽然也使用客户服务器方式，但是使用UDP数据报</li>
<li>TFTP只支持文件传输而不支持交互</li>
</ol>
<h4 id="主要特点" tabindex="-1"><a class="header-anchor" href="#主要特点"><span>主要特点</span></a></h4>
<ul>
<li>每次传送的数据报文中有512字节的数据，最后一次可不足512字节</li>
<li>数据报文按序编号，从1开始</li>
<li>支持ASCII码或二进制传送</li>
<li>可对文件进行读或写</li>
<li>使用很简单的首部</li>
<li>若文件长度为512的整数倍，在文件传送完毕后，还需要发送一个只含首部而无数据的数据报文</li>
</ul>
<h4 id="远程终端协议telnet" tabindex="-1"><a class="header-anchor" href="#远程终端协议telnet"><span>远程终端协议TELNET</span></a></h4>
<ul>
<li>TELNET能将用户的击键传到远地主机，同时也能将远地主机的输出通过TCP连接返回到用户屏幕</li>
</ul>
<h3 id="万维网www" tabindex="-1"><a class="header-anchor" href="#万维网www"><span>万维网WWW</span></a></h3>
<p><code v-pre>运行在因特网上的一个分布式应用</code></p>
<p>Web服务器主要作用：存储、处理、提供Web内容，而不是创建或编辑内容</p>
<h4 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器"><span>浏览器</span></a></h4>
<p><code v-pre>最重要的东西时渲染引擎（浏览器内核），负责对网页内容解析和显示</code></p>
<h4 id="统一资源定位符url" tabindex="-1"><a class="header-anchor" href="#统一资源定位符url"><span>统一资源定位符URL</span></a></h4>
<p><code v-pre>指明因特网上任何种类‘资源’的位置</code></p>
<ul>
<li>一般形式：&lt;协议&gt;://&lt;主机&gt;:&lt;端口&gt;/&lt;路径&gt;</li>
</ul>
<h4 id="万维网文档" tabindex="-1"><a class="header-anchor" href="#万维网文档"><span>万维网文档</span></a></h4>
<ul>
<li>超文本标记语言HTML：使用多种“标签”来描述网页的结构和内容。(网页扩展名为.htm)</li>
<li>层叠样式表CSS：从审美角度来描述网页的样式。(文件扩展名为.css)</li>
<li>脚本语言JavaScript：控制网页的行为。(文件扩展名为js)</li>
</ul>
<h4 id="超文本传送协议http" tabindex="-1"><a class="header-anchor" href="#超文本传送协议http"><span>超文本传送协议HTTP</span></a></h4>
<p><code v-pre>定义了浏览器（万维网客户进程）怎样向万维网服务器请求万维网文档，以及服务器怎样把万维网文档传送给浏览器</code></p>
<ol>
<li>HTTP/1.0：非持续连接方式
每次浏览器要请求一个文件都要与服务器建立TCP连接(80端口)，当收到响应后就立即关闭连接</li>
<li>HTTP/1.1：持续连接方式
万维网服务器在发送响应后仍然保持这条连接，使同一个客户（浏览器）和该服务器可以继续在这条连接上传送后续的HTTP请求报文和响应报文。
为了进一步提高效率，还可采用流水线方式，即浏览器在收到HTTP的响应报文之前就能够连续发送多个请求报文。</li>
</ol>
<h4 id="http报文" tabindex="-1"><a class="header-anchor" href="#http报文"><span>HTTP报文</span></a></h4>
<p><code v-pre>报文中的每一个字段都是一些ASCI码串，并且每个字段的长度都是不确定的</code></p>
<ul>
<li>请求报文</li>
<li>响应报文</li>
</ul>
<h4 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>cookie</span></a></h4>
<p><code v-pre>一种对无状态的HTTP进行状态化的技术</code></p>
<h4 id="万维网缓存" tabindex="-1"><a class="header-anchor" href="#万维网缓存"><span>万维网缓存</span></a></h4>
<p><code v-pre>使用缓存机制以提高万维网的效率</code></p>
<ul>
<li>又称Web缓存，可位于客户机，也可位于中间系统上</li>
<li>位于中间系统上的Web缓存又称为代理服务器</li>
</ul>
<h3 id="电子邮件-smtp、pop3" tabindex="-1"><a class="header-anchor" href="#电子邮件-smtp、pop3"><span>电子邮件：SMTP、pop3</span></a></h3>
<h4 id="电子邮件系统组成" tabindex="-1"><a class="header-anchor" href="#电子邮件系统组成"><span>电子邮件系统组成</span></a></h4>
<ul>
<li>用户代理：用户与电子邮件系统的接口，即电子邮件客户端软件</li>
<li>邮件服务器：电子邮件系统的基础设施。因特网所有的ISP都有邮件服务器（发送和接收邮件），同时负责维护用户的邮箱</li>
<li>协议：邮件发送协议（如SMTP）和邮件读取协议（如POP3）</li>
</ul>
<h4 id="邮件发送协议" tabindex="-1"><a class="header-anchor" href="#邮件发送协议"><span>邮件发送协议</span></a></h4>
<p>SMTP</p>
<ul>
<li>只能传送ASCII码文本</li>
<li>用于用户代理向邮件服务器发送邮件以及邮件服务器之间的邮件发送</li>
</ul>
<h4 id="邮件读取协议" tabindex="-1"><a class="header-anchor" href="#邮件读取协议"><span>邮件读取协议</span></a></h4>
<h5 id="邮局协议-pop3-端口-110" tabindex="-1"><a class="header-anchor" href="#邮局协议-pop3-端口-110"><span>邮局协议：POP3（端口：110）</span></a></h5>
<p>非常简单、功能有限的邮件读取协议。
用户只能以下载并副除方式或下载并保留方式从邮件服务器下载邮件到用户方计算机。不允许用户在邮件服务器上管理自己的邮件</p>
<h5 id="因特网邮件访问协议-imap-端口-143" tabindex="-1"><a class="header-anchor" href="#因特网邮件访问协议-imap-端口-143"><span>因特网邮件访问协议：IMAP（端口：143）</span></a></h5>
<p>功能比POP3强大的邮件读取协议。
用户在自己的计算机上就可以操控邮件服务器中的邮箱，就像在本地操控一样，因此MAP是一个联机协议</p>
<h4 id="基于万维网的电子邮件" tabindex="-1"><a class="header-anchor" href="#基于万维网的电子邮件"><span>基于万维网的电子邮件</span></a></h4>
<p><code v-pre>用户浏览器与邮件服务器网站之间使用HTTP协议 邮件服务器之间使用SMTP协议.</code></p>
<ul>
<li>浏览器网页登录邮件服务器万维网网站</li>
</ul>
<h3 id="动态主机配置dhcp" tabindex="-1"><a class="header-anchor" href="#动态主机配置dhcp"><span>动态主机配置DHCP</span></a></h3>
<p><code v-pre>允许一台计算机加入新网络时可自动获取P地址等网络配置信息而不用手工参与</code>
<code v-pre>DHCP客户在未获取到IP地址时使用地址0.0.0.0</code></p>
<h4 id="报文类型" tabindex="-1"><a class="header-anchor" href="#报文类型"><span>报文类型</span></a></h4>
<ul>
<li>DHCP DISCOVER：DHCP发现报文</li>
<li>DHCP OFFER：DHCP提供报文</li>
<li>DHCP REQUEST：DHCP请求报文</li>
<li>DHCP ACK：DHCP确认报文</li>
<li>DHCP NACK：DHCP否认报文</li>
<li>DHCP RELEASE：DHCP释放报文</li>
</ul>
<p>在每一个网络上都设置一个DHCP服务器会使DHCP服务器的数量太多。因此现在是使每一个网络至少有一个DHCP中继代理（通常是一台路由器），它配置了DHCP服务器的IP地址信息，作为各网络中计算机与DHCP服务器的桥梁。</p>
<h3 id="简单网络管理协议snmp" tabindex="-1"><a class="header-anchor" href="#简单网络管理协议snmp"><span>简单网络管理协议SNMP</span></a></h3>
<p><code v-pre>常称为网管，包括对硬件、软件和人力的使用、综合与协调，以便对网络资源进行监控、测试、配置、分析、评价和控制，这样就能以合理的价格满足网络的一些需求，如实时运行性能、服务质量等。</code></p>
<figure><img src="@source/notes/read/计算机网络.assets/Y63xsvITrjKdWiB.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h4 id="组成" tabindex="-1"><a class="header-anchor" href="#组成"><span>组成</span></a></h4>
<ol>
<li><strong>管理信息库（MIB）</strong>：MIB是一个数据库，包含了网络设备和应用程序的管理信息。它定义了要收集和管理的各种网络对象（如设备、接口、协议等）的结构和属性。</li>
<li><strong>管理实体</strong>：管理实体通常是网络管理员或管理系统，负责监控和管理网络设备和应用程序。它们使用SNMP协议与代理进行通信，从而获取和设置管理信息。</li>
<li><strong>代理</strong>：代理是安装在网络设备上的软件模块，负责收集设备的管理信息并向管理实体提供服务。代理通过SNMP协议与管理实体进行通信，接收管理请求并响应查询。</li>
<li><strong>SNMP协议</strong>：SNMP协议定义了管理实体和代理之间的通信规则和消息格式。它包括了几个版本，最常见的是SNMPv1、SNMPv2和SNMPv3。</li>
</ol>
<h4 id="smi" tabindex="-1"><a class="header-anchor" href="#smi"><span>SMI</span></a></h4>
<p>定义了MIB（Management Information Base）中的对象、属性和关系，使得网络管理系统能够对网络设备进行有效的监控、配置和故障排除。</p>
<h3 id="p2p与c-s" tabindex="-1"><a class="header-anchor" href="#p2p与c-s"><span>P2P与C/S</span></a></h3>
<figure><img src="https://s2.loli.net/2024/03/25/cAeQbE9mz6KHtYq.png" alt="image-20240325022454762" tabindex="0" loading="lazy"><figcaption>image-20240325022454762</figcaption></figure>
<h2 id="重点都是前6章-后面的重点" tabindex="-1"><a class="header-anchor" href="#重点都是前6章-后面的重点"><span>重点都是前6章，，后面的重点</span></a></h2>
<h3 id="公钥加密-私钥解密" tabindex="-1"><a class="header-anchor" href="#公钥加密-私钥解密"><span>公钥加密，私钥解密</span></a></h3>
<h2 id="学习指南" tabindex="-1"><a class="header-anchor" href="#学习指南"><span><mark>学习指南</mark></span></a></h2>
<p>计算题：
用课后题和知识点总结里面的题来练习
通过b站视频等方式学习计算题</p>
<h3 id="计算题" tabindex="-1"><a class="header-anchor" href="#计算题"><span>计算题</span></a></h3>
<p>三次四次握手</p>
<p>拥塞控制算法题、香农公式、奈氏准则题做做</p>
<figure><img src="https://s2.loli.net/2024/03/29/FsdCuyE8TaS1QcI.png" alt="image-20240329130816707" tabindex="0" loading="lazy"><figcaption>image-20240329130816707</figcaption></figure>
<h3 id="简答题" tabindex="-1"><a class="header-anchor" href="#简答题"><span>简答题</span></a></h3>
<p>能说多少说多少，一定要搞懂标红色的部分，很重要。
其他的也要看（包括没标记的），考出来要会说。</p>
<h2 id="笔记本" tabindex="-1"><a class="header-anchor" href="#笔记本"><span>笔记本</span></a></h2>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3>
<ul>
<li>计算机网络各层次结构模型及其协议的集合：网络体系结构</li>
<li>同步传输的同步是指：时钟同步</li>
<li>以太网是一种分布式的局域网技术，没有中心控制节点</li>
</ul>
<h3 id="细说三种交换方式" tabindex="-1"><a class="header-anchor" href="#细说三种交换方式"><span>细说三种交换方式</span></a></h3>
<p>电路交换（面向连接）：时延小，无差错检测</p>
<p>分组交换：提供虚电路和数据报服务，减少传输时延
虚电路（面向连接）：可靠（有差错检测）、有序到达【如果故障，就得重新建立连接】【建立连接后，带虚电路标识】
数据报：无连接、不可靠（无差错检测）、无序到达【头部开销，带源地址和目的地址】</p>
<p>报文交换（面向连接）：</p>
<h4 id="电路交换与虚电路的区别" tabindex="-1"><a class="header-anchor" href="#电路交换与虚电路的区别"><span>电路交换与虚电路的区别：</span></a></h4>
<ul>
<li>电路交换是物理连接，如电话线</li>
<li>虚电路交换是逻辑上的连接，一条物理线路可以进行多条逻辑连接</li>
</ul>
<p>数据报服务中，每个分组在传输过程中都必须携带源地址和目的地址：
虚电路服务中，在建立连接后，分组只需携带虚电路标识，而不必带有源地址和目的地址</p>
<h3 id="点到点与端到端" tabindex="-1"><a class="header-anchor" href="#点到点与端到端"><span>点到点与端到端</span></a></h3>
<ul>
<li>点到点：主机（mac地址）之间-数据链路层</li>
<li>端到端：端口（进程）之间通信-运输层</li>
</ul>
<h3 id="计网模型连接类型" tabindex="-1"><a class="header-anchor" href="#计网模型连接类型"><span>计网模型连接类型</span></a></h3>
<ul>
<li>OSI模型的网络层支持无连接和面向连接两种通信，传输层只提供面向连接的通信服务；</li>
<li>TCP模型（反着来）网络层只提供无连接的服务，运输层提供无连接和面向连接的服务；</li>
</ul>
<h3 id="osi模型每一层的作用" tabindex="-1"><a class="header-anchor" href="#osi模型每一层的作用"><span>OSI模型每一层的作用</span></a></h3>
<ul>
<li>物理层：解决使用何种信号来传输比特的问题</li>
<li>数据链路层：解决分组在一个网络（或一段链路）上传输的问题</li>
<li>网络层：解决分组在多个网络上传输（路由）的问题</li>
<li>运输层解决进程之间基于网络的通信问题</li>
<li>应用层：解决通过应用进程的交互来实现特定网络应用的问题</li>
</ul>
<h3 id="计算机网络功能" tabindex="-1"><a class="header-anchor" href="#计算机网络功能"><span>计算机网络功能</span></a></h3>
<p>数据交换、资源共享、稳定性</p>
<h3 id="物理传输与连接" tabindex="-1"><a class="header-anchor" href="#物理传输与连接"><span>物理传输与连接</span></a></h3>
<ul>
<li>
<p>双绞线最大传输距离：100m</p>
</li>
<li>
<p>交换机与双绞线进行连接的端口： RJ-45
RJ-45 端口用于连接计算机、路由器、交换机等网络设备，而双绞线则是常见的网络连接介质之一</p>
</li>
</ul>
<h3 id="rfc1918定义私有ip地址范围-可用于局域网的ip地址" tabindex="-1"><a class="header-anchor" href="#rfc1918定义私有ip地址范围-可用于局域网的ip地址"><span>RFC1918定义私有IP地址范围（可用于局域网的IP地址）</span></a></h3>
<ul>
<li>10.0.0.0 到 10.255.255.255（10.0.0.0/8）</li>
<li>172.16.0.0 到 172.31.255.255（172.16.0.0/12）</li>
<li>192.168.0.0 到 192.168.255.255（192.168.0.0/16）</li>
</ul>
<h3 id="对等层之间的通信使用的是-协议" tabindex="-1"><a class="header-anchor" href="#对等层之间的通信使用的是-协议"><span>对等层之间的通信使用的是：协议</span></a></h3>
<p>A. 接口 B. 服务 C. 协议 D. 以上三者都是</p>
<p>在计算机网络中，每一层都有自己的协议集合，用于在相邻层之间进行通信和数据交换。</p>
<ul>
<li>接口：连接设备或组件</li>
<li>服务：提供特定的功能或任务</li>
<li>协议：沟通和协调的作用</li>
</ul>
<h3 id="网络层向上提供的服务有哪两种-请比较各自的特点。" tabindex="-1"><a class="header-anchor" href="#网络层向上提供的服务有哪两种-请比较各自的特点。"><span>网络层向上提供的服务有哪两种？请比较各自的特点。</span></a></h3>
<p>网络层向上可提供两种类型的服务：面向连接的虚电路服务和无连接的数据报服务。</p>
<ul>
<li>数据报方式中，分组是独立的实体，各分组可以经由不同的路径到达终点。</li>
<li>虚电路方式中，必须先建立一条虚电路，然后各分组沿着同一路径到达终点。虚电路的可靠通信由网络保证，数据报的可靠通信则由用户主机保证。</li>
</ul>
<h3 id="简述rip-路由协议的工作原理" tabindex="-1"><a class="header-anchor" href="#简述rip-路由协议的工作原理"><span>简述RIP 路由协议的工作原理</span></a></h3>
<ul>
<li>RIP 是一种分布式的基于距离向量的路由选择协议。</li>
<li>RIP 将“距离”定义为从源主机到目的主机所经过的路由器数量，也称为“跳数”。</li>
<li>好路由：跳数最少的路由</li>
<li>一条路由最多15 个路由器。</li>
<li>RIP 仅和相邻路由器交换信息（自己的路由表）（通常30s交换一次）</li>
</ul>
<h3 id="网络协议的组成要素有哪些-各有什么含义" tabindex="-1"><a class="header-anchor" href="#网络协议的组成要素有哪些-各有什么含义"><span>网络协议的组成要素有哪些？各有什么含义？</span></a></h3>
<p>网络协议由 3 个要素组成，分别是语法、语义和同步。</p>
<ol>
<li>语法，即数据与控制信息的结构或格式；</li>
<li>语义，即需要发出何种控制信息，完成何种动作以及做出何种响应；</li>
<li>同步，即事件顺序的详细说明。</li>
</ol>
<h3 id="传输时延" tabindex="-1"><a class="header-anchor" href="#传输时延"><span>传输时延</span></a></h3>
<p><code v-pre>总时延 = 发送时延 + 传播时延 + 处理时延 + 排队时延</code></p>
<p>已知要发送的报文共x（bit）。从源结点到目的结点共经过k 段链路，每段链路的传输时延为d（s），数据率为b（bit/s）。在电路交换中，电路的建立时延为s（s）。在分组交换中， 分组长度为p（bit），且各结点的排队等待时间可以忽略不计。请 问在什么样的条件下，分 组交换的时延比电路交换的时延小？</p>
<p><strong>答案</strong>：</p>
<p>电路交换：</p>
<ul>
<li>总时延=建立时延+发送时延+传输时延</li>
<li>建立时延+发送时延：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mi>s</mi><mo>+</mo><mfrac><mi>x</mi><mi>b</mi></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge s+\frac{x}{b}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.1527em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>总延迟</mtext><mo>=</mo><mi>s</mi><mo>+</mo><mfrac><mi>x</mi><mi>b</mi></mfrac><mo>+</mo><mi>k</mi><mo>×</mo><mi>d</mi></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge \text{总延迟}=s+\frac{x}{b}+k\times d}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.1558em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">总延迟</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">d</span></span></span></span></span> 时报文到达目的地</li>
</ul>
<p>分组交换：</p>
<ul>
<li>总时延 = 发送时延 + 转发时延 + 传输时延</li>
<li>发送时延 + 转发时延：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mfrac><mi>x</mi><mi>b</mi></mfrac><mo>+</mo><mo stretchy="false">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mfrac><mi>p</mi><mi>b</mi></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge \frac{x}{b}+(k-1)\frac{p}{b}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.271em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">1</span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7439em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.885em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">p</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></li>
<li><strong>转发时延：最后 1 个分组必须被中间的路由器重发 k­-1 次，每次重发花时间 p/b（一个分组的所有比特都接收齐了，才能开始重发，因此最后 1 位在每个中间结点的停滞时间为<mark>最后一个分组</mark>的发送 时间）</strong></li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mtext>总延迟</mtext><mo>=</mo><mfrac><mi>x</mi><mi>b</mi></mfrac><mo>+</mo><mo stretchy="false">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mfrac><mi>p</mi><mi>b</mi></mfrac><mo>+</mo><mi>k</mi><mo>×</mo><mi>d</mi></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge \text{总延迟} =  \frac{x}{b}+(k-1)\frac{p}{b}+k\times d}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.271em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord text sizing reset-size6 size10" style="color:Red;"><span class="mord cjk_fallback" style="color:Red;">总延迟</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">1</span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7439em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.885em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">p</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">d</span></span></span></span></span></li>
</ul>
<p>为了使电路时延&lt;分组时延，必须：</p>
<ol>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mi>s</mi><mo>+</mo><mfrac><mi>x</mi><mi>b</mi></mfrac><mo>+</mo><mi>k</mi><mo>×</mo><mi>d</mi><mo>&gt;</mo><mfrac><mi>x</mi><mi>b</mi></mfrac><mo>+</mo><mo stretchy="false">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mfrac><mi>p</mi><mi>b</mi></mfrac><mo>+</mo><mi>k</mi><mo>×</mo><mi>d</mi></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge s+\frac{x}{b}+k\times d &gt;\frac{x}{b}+(k-1)\frac{p}{b}+k\times d}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.271em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">s</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">d</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.6929em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.834em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">x</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">1</span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7439em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.885em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">p</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">×</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">d</span></span></span></span></span></li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mstyle mathsize="2.074em"><mi>s</mi><mo>&gt;</mo><mo stretchy="false">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo><mfrac><mi>p</mi><mi>b</mi></mfrac></mstyle></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red}\huge s &gt;(k-1)\frac{p}{b}}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.271em;vertical-align:-0.7155em;"></span><span class="mord"><span class="mord mathnormal sizing reset-size6 size10" style="color:Red;">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel sizing reset-size6 size10" style="color:Red;">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mopen sizing reset-size6 size10" style="color:Red;">(</span><span class="mord mathnormal sizing reset-size6 size10" style="margin-right:0.03148em;color:Red;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin sizing reset-size6 size10" style="color:Red;">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord sizing reset-size6 size10" style="color:Red;">1</span><span class="mclose sizing reset-size6 size10" style="color:Red;">)</span><span class="mord sizing reset-size6 size10" style="color:Red;"><span class="mopen nulldelimiter sizing reset-size10 size6"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7439em;"><span style="top:-3.095em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">b</span></span></span></span><span style="top:-3.67em;"><span class="pstrut" style="height:3.44em;"></span><span class="frac-line" style="color:Red;border-bottom-width:0.04em;"></span></span><span style="top:-3.885em;"><span class="pstrut" style="height:3.44em;"></span><span class="sizing reset-size10 size8 mtight" style="color:Red;"><span class="mord mtight" style="color:Red;"><span class="mord mathnormal mtight" style="color:Red;">p</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter sizing reset-size10 size6"></span></span></span></span></span></span></li>
</ol>
<h3 id="机房设计" tabindex="-1"><a class="header-anchor" href="#机房设计"><span>机房设计</span></a></h3>
<figure><img src="https://s2.loli.net/2024/03/27/k58OC3b7teIBpmW.png" alt="image-20240327144107213" tabindex="0" loading="lazy"><figcaption>image-20240327144107213</figcaption></figure>
<ol>
<li>根据题目描述，组建的是教学机房.
可将局域网的工作组命名为jiaoxuegroup，或使用系统默认的工作组名称workgroup，或其它名称。
80 台计算机可划分为8 组（采用字母编号，分别为A、B、C、D、E、F、G、H），每组10 台（使用数字序号标识，分别是01、02、03、04、05、06、07、08、09、10）。
这样每一台计算机的名称就由“字母+数字序号”构成，例如，A01、H10。</li>
<li>由于是局域网，故使用专用IP 地址。
建议采用的IP 地址范围是192.168.0.1～192.168.0.254，子网掩码是255.255.255.0。其中192.168.0.254 用作默认网关，其他主机根据计算机名称分配IP 地址。
例如，A01 分配IP 地址192.168.0.1，A10 分配IP 地址192.168.0.10，B01 分配IP 地址192.168.0.11，B10 分配IP 地址192.168.0.20，依次类推。</li>
<li>所有一切做好（包括连接网线、配置IP 地址）后，先观测主机桌面右下角是否有红叉，如果没有，说明网络物理上已经连通。否则需要进一步检查是网线问题还是网卡问题。
接下来可以使用ping 命令测试主机之间逻辑上是否连通。</li>
</ol>
</div></template>


