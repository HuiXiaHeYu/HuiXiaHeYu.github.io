<template><div><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键"><span>快捷键</span></a></h2>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> c</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 强制停止命令运行/退出当前命令的输入</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> d</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 退出账户登录/退出特定程序的专属页面（如python3，不能退出vi/vim）</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">history</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 历史命令</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> r</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 匹配历史命令</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 光标移动快捷键</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> a</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 跳到命令开头</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> e</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 跳到命令结尾</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 键盘左键</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 向左跳一个单词</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 键盘右键</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 向右跳一个单词</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 清屏</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> l</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 清空终端内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">clear</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 清空终端内容</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 路径-文件-文件夹</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">pwd</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 查看当前路径</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [Linux路径]	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 切换路径</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-a </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-l</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -h</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Linux路径</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	 # 查看路径下文件，[-a]:隐藏文件；[-l]:列表显示；[-h]:数据单位</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">touch</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Linux路径</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 创建文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-p] Linux路径	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建文件夹，[-p]：自动创建不存在的父目录，适用于连续创建多层级目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mv</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 原路径</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 新路径</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 移动文件/文件夹</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cp</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-r] 原路径 新路径	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制文件/文件夹，[-r]：递归，复制文件夹使用</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rm</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-r </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-f</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">] 参数1 参数2 ..... 参数N	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除文件/文件夹，[-r]：递归文件夹；[-f]：强制删除</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">cat</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Linux路径</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 查看文件内容</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">more</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Linux路径</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看你文件内容【支持 空格 翻页，支持 q 退出查看】</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊符号" tabindex="-1"><a class="header-anchor" href="#特殊符号"><span>特殊符号</span></a></h2>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span>*</span></a></h4>
<p><code v-pre>通配符，即匹配任意内容（包含空）</code></p>
<ul>
<li>test* 表示匹配test开头的内容</li>
<li>*test 表示匹配任何test结尾的内容</li>
<li>*test * 表示匹配任何包含test的内容</li>
</ul>
<h4 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span>~</span></a></h4>
<h4 id="-2" tabindex="-1"><a class="header-anchor" href="#-2"><span>|</span></a></h4>
<p>左边命令的返回值交给右边处理</p>
<h4 id="-3" tabindex="-1"><a class="header-anchor" href="#-3"><span>$</span></a></h4>
<p>取变量的值</p>
<h2 id="查找" tabindex="-1"><a class="header-anchor" href="#查找"><span>查找</span></a></h2>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查找命令</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">which</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 要查找的命令</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# cd是内置命令，无法被which到</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查找文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 起始路径</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -name</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">被查找文件名</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 通过文件名查找</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">find</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 起始路径</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -size</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-n[kMG]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 通过文件大小查找</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查找关键字</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">grep</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-n] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-v</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 关键字 文件路径	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># [-n]:在结果中显示匹配的行的行号；[-v]:反向过滤（过滤掉）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="统计-wc" tabindex="-1"><a class="header-anchor" href="#统计-wc"><span>统计-wc</span></a></h2>
<p><code v-pre>统计文件的行数、单词数量、字节数</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wc</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-c </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-m</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -l</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -w</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">] 文件路径</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wc</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-c</td>
<td>统计bytes数量</td>
</tr>
<tr>
<td>-m</td>
<td>统计字符数量</td>
</tr>
<tr>
<td>-l</td>
<td>统计行数</td>
</tr>
<tr>
<td>-w</td>
<td>统计单词数量</td>
</tr>
<tr>
<td>内容路径</td>
<td>被统计的文件，可作为内容输入端口</td>
</tr>
</tbody>
</table>
<h2 id="输出-echo" tabindex="-1"><a class="header-anchor" href="#输出-echo"><span>输出-echo</span></a></h2>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">文本</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 输出文本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> `</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">代码</span><span style="--shiki-light:#999999;--shiki-dark:#666666">`</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 执行代码（反引号中）</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">文本</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 文件路径</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 覆盖写入文件文本</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">文本</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 文件路径</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 追加写入文件文本</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ls</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>`</td>
<td>反引号，执行代码</td>
</tr>
<tr>
<td>&gt;</td>
<td>重定向符，覆盖</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>重定向符，写入</td>
</tr>
</tbody>
</table>
<h4 id="跟踪文件尾部-tail" tabindex="-1"><a class="header-anchor" href="#跟踪文件尾部-tail"><span>跟踪文件尾部-tail</span></a></h4>
<p><code v-pre>查看文件尾部内容，跟踪文件的最新更改</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tail</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-f </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-num</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">] Linux路径</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tail</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-f</td>
<td>持续跟踪</td>
</tr>
<tr>
<td>-name</td>
<td>查看尾部多少行，不填默认10行</td>
</tr>
<tr>
<td>Linux路径</td>
<td>被跟踪的文件路径</td>
</tr>
</tbody>
</table>
<h2 id="系统" tabindex="-1"><a class="header-anchor" href="#系统"><span><mark>系统</mark></span></a></h2>
<h2 id="服务器状况" tabindex="-1"><a class="header-anchor" href="#服务器状况"><span>服务器状况</span></a></h2>
<h3 id="uname" tabindex="-1"><a class="header-anchor" href="#uname"><span>uname</span></a></h3>
<p><code v-pre>查看服务器内核</code></p>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-py"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">uname </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">r	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看服务器内核版本号</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="who" tabindex="-1"><a class="header-anchor" href="#who"><span>who</span></a></h3>
<p><code v-pre>查看当前活动的登录会话</code></p>
<p>列出用户名、登录时间、登录IP地址等信息，不会显示已经注销或已断开连接的用户</p>
<h3 id="last-lastlog" tabindex="-1"><a class="header-anchor" href="#last-lastlog"><span>last/lastlog</span></a></h3>
<p><code v-pre>查看登录历史日志</code></p>
<ul>
<li>last：显示最近登录用户的列表，包括用户名、登录时间、登录IP地址等信息</li>
<li>lastlog：显示所有用户的登录历史记录</li>
</ul>
<h2 id="ip与主机名" tabindex="-1"><a class="header-anchor" href="#ip与主机名"><span>IP与主机名</span></a></h2>
<h3 id="基本ip" tabindex="-1"><a class="header-anchor" href="#基本ip"><span>基本IP</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>127.0.0.1 	# 指代本机，可以在端口绑定中用来确定绑定关系</span></span>
<span class="line"><span>0.0.0.0 	# 特殊IP地址，在一些IP地址限制中，表示所有IP的意思，如放行规则设置为0.0.0.0，表示允许任意IP访问</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求访问流程" tabindex="-1"><a class="header-anchor" href="#请求访问流程"><span>请求访问流程</span></a></h3>
<figure><img src="@source/notes/language/Linux.assets/image-20240815172857151.png" alt="image-20240815172857151" tabindex="0" loading="lazy"><figcaption>image-20240815172857151</figcaption></figure>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 本机hosts文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Windows：‪C:\Windows\System32\drivers\etc\hosts</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Linux：/etc/hosts</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># DNS服务器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">如：114.114.114.114</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>本地DNS解析：</strong></p>
<p><img src="@source/notes/language/Linux.assets/1723714373518.jpg" alt="1723714373518" style="zoom: 50%;" /><img src="@source/notes/language/Linux.assets/1723714424963.jpg" alt="1723714424963" style="zoom: 50%;" /></p>
<h3 id="ifconfig" tabindex="-1"><a class="header-anchor" href="#ifconfig"><span>ifconfig</span></a></h3>
<p><code v-pre>查看ip地址（v4版本、v6版本）</code></p>
<p>ipv4地址格式：a.b.c.d，其中abcd表示0-255的数字，如192.168.88.101就是一个标准的ip地址</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 如果无法使用此命令，下载安装一下</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> net-tools</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/language/Linux.assets/image-20240815160154079.png" alt="image-20240815160154079" tabindex="0" loading="lazy"><figcaption>image-20240815160154079</figcaption></figure>
<h3 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h3>
<p><code v-pre>主机名</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">hostname</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看主机名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">hostnamectl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> set-hostname</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 新主机名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 重新设置主机名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测速-ping" tabindex="-1"><a class="header-anchor" href="#测速-ping"><span>测速-ping</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ping</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-c </span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">num]</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ip或主机名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 测速，[-c]:指定检查次数，不适用则无限检查</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="端口" tabindex="-1"><a class="header-anchor" href="#端口"><span>端口</span></a></h2>
<h3 id="linux端口" tabindex="-1"><a class="header-anchor" href="#linux端口"><span>Linux端口</span></a></h3>
<ul>
<li>公认端口：<code v-pre>1~1023</code>，通常用于一些系统内置或知名程序的预留使用，如SSH服务的22端口，HTTPS服务的443端口（非特殊需要，不要占用这个范围的端口）</li>
<li>注册端口：<code v-pre>1024~49151</code>，用于松散绑定一些程序/服务（用户自定义）</li>
<li>动态端口：<code v-pre>49152~65535</code>，通常不会固定绑定程序，而是当程序对外进行网络连接时，用于临时使用</li>
</ul>
<h3 id="nmap-netstat" tabindex="-1"><a class="header-anchor" href="#nmap-netstat"><span>nmap-netstat</span></a></h3>
<p><code v-pre>查看端口占用</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nmap</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> net-tools</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">nmap</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 127.0.0.1</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看端口占用（利用本地回环地址）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">netstat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -anp</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看所有端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">netstat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -anp</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 端口号</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看指定端口占用（利用本地回环地址）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统服务" tabindex="-1"><a class="header-anchor" href="#系统服务"><span>系统服务</span></a></h2>
<h3 id="systemctl" tabindex="-1"><a class="header-anchor" href="#systemctl"><span>systemctl</span></a></h3>
<p><code v-pre>linux很多软件（内置或第三方）均支持使用systemctl命令控制：启动、停止、开机自启。能够被systemctl管理的软件，一般称为：服务</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> stop</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> status</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> enable</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> disable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 服务名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>系统内置服务：</p>
<ul>
<li>NetworkManager：主网络服务</li>
<li>network：副网络服务</li>
<li>firewalld：防火墙服务</li>
<li>sshd、ssh服务（远程登陆）</li>
</ul>
<h3 id="service" tabindex="-1"><a class="header-anchor" href="#service"><span>service</span></a></h3>
<p><code v-pre>如果你是在 windows 中通过 WSL 使用的 Ubuntu 或者 Dibian 系统，默认情况下系统使用的是 SysV 而不是 systemd。</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看系统使用的初始化进程，若显示输出：init 或 sysv（或类似的东西），我们应该使用Sysvinit来代替Systemd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> comm=</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看系统运行的第一个进程</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">service</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 服务名</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> stop</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> status</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> restart</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chkconfig</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 服务名</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> on</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> off</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# （打开/关闭）开启自启</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙"><span>防火墙</span></a></h2>
<h3 id="ufw" tabindex="-1"><a class="header-anchor" href="#ufw"><span>ufw</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> status</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> allow</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 22</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     # 允许端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> deny</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 21</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      # 拒绝端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> allow</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> from</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 192.168.1.100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> any</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> port</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 22</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 允许特定 IP 访问指定端口</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> deny</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> from</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 192.168.1.100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> any</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> port</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 22</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 拒绝特定 IP 访问指定端口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	 	# 启用UFW</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> disable</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 禁用UFW</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> status</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> numbered</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看规则编号</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> delete</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 删除规则3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ufw</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reset</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 重置UFW</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="firewall" tabindex="-1"><a class="header-anchor" href="#firewall"><span>firewall</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> status</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> firewalld</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看防火墙状态</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> firewall-cmd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --list-ports</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看端口情况</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> firewall-cmd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --zone=public</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --add-port=9090/tcp</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --permanent</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 默认区域打开TCP9090端口，并且规则永久生效</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> firewall-cmd</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --reload</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 重新加载firewall配置</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>启动</td>
</tr>
<tr>
<td>stop</td>
<td>关闭</td>
</tr>
<tr>
<td>status</td>
<td>查看状态</td>
</tr>
<tr>
<td>enable</td>
<td>开启开机自启</td>
</tr>
<tr>
<td>disable</td>
<td>关闭开机自启</td>
</tr>
</tbody>
</table>
<h2 id="进程" tabindex="-1"><a class="header-anchor" href="#进程"><span>进程</span></a></h2>
<p>每个运行的程序被操作系统注册为系统中的一个<strong>进程</strong>并分配一个独有的<strong>进程ID（进程号）</strong></p>
<h3 id="ps" tabindex="-1"><a class="header-anchor" href="#ps"><span>ps</span></a></h3>
<p><code v-pre>查看Linux系统中的进程信息</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-e </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-f</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -ef</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -ef</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> tail</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -ef</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">grep</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">19:35</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -ef</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">grep</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 950</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-e</td>
<td>显示全部进程</td>
</tr>
<tr>
<td>-f</td>
<td>格式化显示全部信息</td>
</tr>
</tbody>
</table>
<figure><img src="@source/notes/language/Linux.assets/1723721447710.jpg" alt="1723721447710" tabindex="0" loading="lazy"><figcaption>1723721447710</figcaption></figure>
<ul>
<li>UID：进程所属用户ID</li>
<li>PID：进程的进程号ID</li>
<li>PPID：进程的父ID（启动此进程的其他进程）</li>
<li>C：此进程的CPU占用率（百分比）</li>
<li>STIME：进程的启动时间</li>
<li>TTY：启动此进程的终端序号，如显示“ ？”，表示非终端启动</li>
<li>TIME：进程占用CPU的时间</li>
<li>CMD：进程对应的名称或启动路径或启动命令</li>
</ul>
<h3 id="kill" tabindex="-1"><a class="header-anchor" href="#kill"><span>kill</span></a></h3>
<p><code v-pre>关闭进程</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">kill</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-9] 进程号（PID）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="主机状态-top" tabindex="-1"><a class="header-anchor" href="#主机状态-top"><span>主机状态-top</span></a></h2>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">top</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="磁盘" tabindex="-1"><a class="header-anchor" href="#磁盘"><span>磁盘</span></a></h2>
<h3 id="df" tabindex="-1"><a class="header-anchor" href="#df"><span>df</span></a></h3>
<p><code v-pre>查看硬盘使用情况</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">df</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-h]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-h</td>
<td>以更加人性化的单位显示</td>
</tr>
</tbody>
</table>
<h3 id="iostat" tabindex="-1"><a class="header-anchor" href="#iostat"><span>iostat</span></a></h3>
<p><code v-pre>磁盘信息监控</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sysstat</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">iostat</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-x] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">iostat</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -x</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 4</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 显示详细信息，间隔3s，刷新4次</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-x</td>
<td>显示更多信息</td>
</tr>
<tr>
<td>num1</td>
<td>数字，刷新间隔</td>
</tr>
<tr>
<td>num2</td>
<td>数字，刷新几次</td>
</tr>
</tbody>
</table>
<figure><img src="@source/notes/language/Linux.assets/image-20240815230355711.png" alt="image-20240815230355711" tabindex="0" loading="lazy"><figcaption>image-20240815230355711</figcaption></figure>
<h3 id="磁盘弹性管理-lvm" tabindex="-1"><a class="header-anchor" href="#磁盘弹性管理-lvm"><span>磁盘弹性管理-LVM</span></a></h3>
<p><code v-pre>logical volume manager，逻辑卷管理</code></p>
<h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h4>
<ul>
<li>PV(Physical Volume): 物理卷
<ul>
<li>处于LVM最底层，可以是物理硬盘或者分区，整个硬盘，或使用fdisk等工具建立的普通分区，包括许多默认4MB大小的PE(Physical Extent，基本单元)</li>
</ul>
</li>
<li>PE(Physical Extend): 物理区域
<ul>
<li>PV中可以用于分配的最小存储单元，可以在创建PV的时候制定（默认为4MB)，如1M, 2M, 4M, 8M, 32M, 64M ... 组成同一VG中所有PV的PE大小应该相同</li>
</ul>
</li>
<li>VG(Volume Group): 卷组
<ul>
<li>建立在PV之上，可以含有一个到多个PV，一个或多个物理卷组合而成的整体</li>
</ul>
</li>
<li>LV(Logical Volume): 逻辑卷
<ul>
<li>建立在VG之上，相当于原来分区的概念，不过大小可以动态改变。从卷组中分割出的一块空间，用于建立文件系统。</li>
<li>PV(PE) --&gt; VG --&gt; (PE*n)LV --&gt; 目录挂载</li>
</ul>
</li>
</ul>
<img src="@source/notes/language/Linux.assets/image-20241220150337596.png" alt="image-20241220150337596" style="zoom:67%;" />
<h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h4>
<table>
<thead>
<tr>
<th>功能</th>
<th>PV物理卷命令</th>
<th>VG卷命令</th>
<th>LV卷命令</th>
</tr>
</thead>
<tbody>
<tr>
<td>扫描</td>
<td>pvscan</td>
<td>vgscan</td>
<td>lvscan</td>
</tr>
<tr>
<td>建立</td>
<td>pvcreate</td>
<td>vgcreate</td>
<td>lvcreate</td>
</tr>
<tr>
<td>查询</td>
<td>pvdiaplay</td>
<td>vgdisplay</td>
<td>lvdisplay</td>
</tr>
<tr>
<td>删除</td>
<td>pvremove</td>
<td>vgremove</td>
<td>lvremove</td>
</tr>
<tr>
<td>扩容</td>
<td></td>
<td>vgextend</td>
<td>lvextend</td>
</tr>
<tr>
<td>缩容</td>
<td></td>
<td>vgreduce</td>
<td>lvreduce</td>
</tr>
</tbody>
</table>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 举例：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fdisk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sda</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 删除并创建分区表</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">g</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">n</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enter</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enter</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">w</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fdisk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sdb</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 删除并创建分区表</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">g</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">n</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">enter</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enter</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">w</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pvcreate</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sda1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sdb1</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 创建物理卷</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> vgextend</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-vg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sda1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/sdb1</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 扩容vg卷</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lvdisplay</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-vg</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看lv卷</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lvextend</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -l</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +100%FREE</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/ubuntu-vg/ubuntu-lv</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 扩容lv卷</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">lsblk</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> 	# 查看</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">df</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -T</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看文件系统类型</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> resize2fs</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /dev/ubuntu-vg/ubuntu-lv</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 调整文件系统块大小</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="网络监控-sar" tabindex="-1"><a class="header-anchor" href="#网络监控-sar"><span>网络监控-sar</span></a></h2>
<p><code v-pre>查看网络相关统计，有点复杂的</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -n</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> DEV</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [num1] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-n</td>
<td>查看网络，DEV表示查看网络接口</td>
</tr>
<tr>
<td>num1</td>
<td>刷新间隔（不填查看一次结束）</td>
</tr>
<tr>
<td>num2</td>
<td>查看次数（不填无限次数）</td>
</tr>
</tbody>
</table>
<p><img src="@source/notes/language/Linux.assets/image-20240815231529054.png" alt="image-20240815231529054" loading="lazy">
<code v-pre>IFACE：本地网卡接口的名称；</code>
<code v-pre>rxpck/s：每秒接收的数据包；</code>
<code v-pre>txpck/s：每秒发送的数据包；</code>
<code v-pre>rxKB/S：每秒接收的数据包大小，单位KB；</code>
<code v-pre>txKB/s：每秒发送的数据包大小，单位KB；</code>
<code v-pre>rxcmp/s：每秒接收的压缩数据包；</code>
<code v-pre>rxcmp/s：每秒发送的压缩包；</code>
<code v-pre>rxmcst/s：每秒接收的多播数据包</code></p>
<h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span><mark>用户</mark></span></a></h2>
<h2 id="用户-用户组" tabindex="-1"><a class="header-anchor" href="#用户-用户组"><span>用户-用户组</span></a></h2>
<h3 id="root用户" tabindex="-1"><a class="header-anchor" href="#root用户"><span>root用户</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># ubuntu系统激活root用户</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> passwd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换和退出账户" tabindex="-1"><a class="header-anchor" href="#切换和退出账户"><span>切换和退出账户</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">su</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">用户名</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 切换账户</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 退回上一个账户</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">exit</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 或</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ctrl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> +</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> d</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>是否在切换用户后加载环境变量，建议带上</td>
</tr>
<tr>
<td>用户名</td>
<td>不带此选项默认切换到root用户</td>
</tr>
</tbody>
</table>
<h3 id="配置root权限" tabindex="-1"><a class="header-anchor" href="#配置root权限"><span>配置root权限</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 法一：在 /etc/sudoers 中添加权限，然后强制写入退出</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">账户名</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> ALL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ALL</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	NOPASSWD: ALL</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 法二：将用户追加到sudo组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">usermod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -a</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -G</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> username</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> passwd</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看所有用户	# 信息介绍 -> 用户名:密码(X):用户ID:组ID:描述信息(无用):HOME目录:执行终端(默认bash)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">useradd</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-g </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-d</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">] 用户名		   </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建用户</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">userdel</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-r] 用户名		  </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除用户</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">usermod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /bin/bash</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> username</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 更改用户新登录shell</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">id</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [用户名]			      </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看用户所属组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">usermod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -aG</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 用户组</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 用户名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 修改用户所属组，将指定用户加入指定用户组</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-g</td>
<td>指定用户的组（需要组已存在，如已存在同名组，并须使用-g）<br />不指定：创建同名组并加入</td>
</tr>
<tr>
<td>-d</td>
<td>指定用户Home路径<br />不指定：Home目录默认在：/home/用户名</td>
</tr>
<tr>
<td>-r</td>
<td>删除用户的Home目录<br />不使用-r，删除用户时，Home目录保留</td>
</tr>
<tr>
<td>-aG</td>
<td>修改用户所属组</td>
</tr>
</tbody>
</table>
<h3 id="用户组管理" tabindex="-1"><a class="header-anchor" href="#用户组管理"><span>用户组管理</span></a></h3>
<p><code v-pre>root账户下使用</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">groupadd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 用户组名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 创建用户组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">groupdel</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 用户组名</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 删除用户组</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">getent</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> group</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看所有用户组	# 信息介绍 -> 组名称:组认证(显示为x):组ID</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">r</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 可读</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">w</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 可写</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">x</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 可执行</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod"><span>chmod</span></a></h3>
<p><code v-pre>修改文件、文件夹的权限信息，只有文件、文件夹的所属用户或root用户可以修改</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chmod</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-R] 权限 文件或文件夹</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chmod</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> u=rwx,g=rx,o=x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.txt</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 将文件权限修改为：rwxr-x--x</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chmod</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -R</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> u=rwx,g=rx,o=x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 将文件夹test以及文件夹内全部内容权限设置为：rwxr-x--x</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-R</td>
<td>对文件夹内的全部内容应用同样的操作</td>
</tr>
<tr>
<td>u</td>
<td>所属用户权限</td>
</tr>
<tr>
<td>g</td>
<td>用户组权限</td>
</tr>
<tr>
<td>o</td>
<td>其他用户权限</td>
</tr>
</tbody>
</table>
<p>快捷修改权限方法</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">0:无任何权限,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> x:1,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> w:2,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> r:4</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chmod</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 751</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.txt</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 数字解析</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">第一位：用户权限</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">第二位：用户组权限</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">第三位：其他用户权限</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chown" tabindex="-1"><a class="header-anchor" href="#chown"><span>chown</span></a></h3>
<p><code v-pre>修改文件、文件夹的所属用户、用户组</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chown</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-R] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">用户</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">用户组</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 文件或文件夹</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chown</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 将hello.txt所属用户修改为root</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chown</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> :root</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 将hello.txt所属用户组修改为root</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chown</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root:itheima</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hello.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 将hello.txt所属用户修改为root，用户组修改为itheima</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">chown</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -R</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> root</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 将文件夹test所属用户修改为root并对文件夹内全部内容应用同样规则</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-R</td>
<td>对文件夹内全部内容应用相同规则</td>
</tr>
<tr>
<td>用户</td>
<td>修改所属用户</td>
</tr>
<tr>
<td>用户组</td>
<td>修改所属用户组</td>
</tr>
<tr>
<td>:</td>
<td>分隔用户和用户组</td>
</tr>
</tbody>
</table>
<h2 id="日常" tabindex="-1"><a class="header-anchor" href="#日常"><span><mark>日常</mark></span></a></h2>
<h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h2>
<h3 id="wget" tabindex="-1"><a class="header-anchor" href="#wget"><span>wget</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wget</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-b] url</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wget</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -b</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://archive.apache.org/dist/hadoop/common/hadoop-3.3.0/hadoop-3.3.0.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-b</td>
<td>后台下载，会将日志写入当前工作目录的wget-log文件</td>
</tr>
<tr>
<td>url</td>
<td>下载链接</td>
</tr>
</tbody>
</table>
<h3 id="curl" tabindex="-1"><a class="header-anchor" href="#curl"><span>curl</span></a></h3>
<p><code v-pre>发送http网络请求，可用于：下载文件、获取信息等</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-O] url</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cip.cc</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 通过此网站查看本机信息</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -O</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://archive.apache.org/dist/hadoop/common/hadoop-3.3.0/hadoop-3.3.0.tar.gz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-O</td>
<td>用于下载文件，当url是下载链接时，可以使用此选项保存文件</td>
</tr>
<tr>
<td>url</td>
<td>发起请求的网络地址</td>
</tr>
</tbody>
</table>
<h2 id="安装-卸载" tabindex="-1"><a class="header-anchor" href="#安装-卸载"><span>安装-卸载</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dpkg</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> -r]</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package_name.deb</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 安装-卸载</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dpkg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --purge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package_name</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 卸载软件包+配置文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [update </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> upgrade]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 更新-升级</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">apt</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-y] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">install </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> remove </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> search</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 软件名称	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装-卸载-搜索</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> dpkg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --get-selections</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ‘软件相关名称’</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查找软件包名</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> purge</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package_name</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 卸载软件包+配置文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> autoremove</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 清除不需要的依赖</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> upgrade</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package_name</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 安装-升级特定软件包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> package_name</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 卸载</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 清理缓存</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-y] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">install </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> remove </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">|</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> search</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 软件名称	</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装-卸载-搜索</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量"><span>环境变量</span></a></h2>
<p><code v-pre>查看环境变量（以键值对形式存在）</code></p>
<h3 id="env" tabindex="-1"><a class="header-anchor" href="#env"><span>env</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">env</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 查看环境变量</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">env</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> grep</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> PATH</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 根据PATH查看对应的键值对</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="export" tabindex="-1"><a class="header-anchor" href="#export"><span>export</span></a></h3>
<p><code v-pre>自定义变量</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">export</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 变量名=变量值</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>永久生效</strong></p>
<ol>
<li>
<p>配置：
针对当前用户生效，配置在当前用户：<code v-pre>~/.bashrc</code>
针对所有用户生效，配置在系统：<code v-pre>/etc/profile</code></p>
</li>
<li>
<p>生效（立刻或重新ssh连接生效）：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 配置文件</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<p><strong>任何地方都能使用的小脚本</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>写一个小脚本（如：echo "cnm"）</span></span>
<span class="line"><span>给脚本加上执行权限（chmod）</span></span>
<span class="line"><span>给脚本配置环境变量路径（export ${PATH}:脚本所在文件夹）（可以配置到当前用户或系统中）</span></span>
<span class="line"><span>从此可以在任何地方使用此脚本</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传-下载" tabindex="-1"><a class="header-anchor" href="#上传-下载"><span>上传-下载</span></a></h2>
<h3 id="rz-sz" tabindex="-1"><a class="header-anchor" href="#rz-sz"><span>rz-sz</span></a></h3>
<p><code v-pre>上传、下载</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lrzsz</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 要下载到本地的文件</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 下载</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">rz</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">					  # 上传，弹出文件夹，选择文件进行上传</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="压缩-解压" tabindex="-1"><a class="header-anchor" href="#压缩-解压"><span>压缩-解压</span></a></h2>
<h3 id="tar" tabindex="-1"><a class="header-anchor" href="#tar"><span>tar</span></a></h3>
<p><code v-pre>.tar	(tarball)归档文件，简易封装</code>
<code v-pre>.gz	(.tai.gz/.gz格式压缩文件)极大压缩体积</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tar</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-c </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">-v</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -x</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -z</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -C</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">] 参数1 参数2 ... 参数N</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例（压缩）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -cvf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.tar</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 1.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 789.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hadoop-3.3.0.tar.gz</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 简单封装</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -zcvf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.tar.gz</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 1.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 789.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hadoop-3.3.0.tar.gz</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 压缩【.gz也行】</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例（解压）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -xvf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -C</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /home/jzls/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 简单拆封</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tar</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -zxvf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.tar.gz</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -C</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /home/jzls/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 解压【.gz也行】</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-c</td>
<td>创建压缩文件，用于压缩模式</td>
</tr>
<tr>
<td>-v</td>
<td>显示压缩、解压过程，用于查看进度</td>
</tr>
<tr>
<td>-x</td>
<td>解压模式</td>
</tr>
<tr>
<td>-f</td>
<td>要创建的文件 / 要解压的文件。-f选项必须在所有选项位置处于最后一个</td>
</tr>
<tr>
<td>-z</td>
<td>gzip模式，不使用-z就是普通的tarball格式，一般放在第一个</td>
</tr>
<tr>
<td>-C</td>
<td>选择解压的目的地，用于解压模式</td>
</tr>
</tbody>
</table>
<h3 id="zip-unzip" tabindex="-1"><a class="header-anchor" href="#zip-unzip"><span>zip-unzip</span></a></h3>
<p><code v-pre>压缩-解压</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">zip</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [-r] 参数 参数1 ... 参数N</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">zip</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test1.zip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 1.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 2.txt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> hadoop-3.3.0.tar.gz</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 带文件夹记得用-r</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-r</td>
<td>被压缩的包含文件夹时使用，同rm、cp效果</td>
</tr>
<tr>
<td>参数</td>
<td>压缩包名</td>
</tr>
<tr>
<td>参数1-N</td>
<td>被压缩的文件/文件夹</td>
</tr>
</tbody>
</table>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">unzip</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> [待解压文件] </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">-d </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">路径</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">unzip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test.zip</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> test/</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 不指定路径默认解压到当前文件夹</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-d</td>
<td>指定被解压去的位置，同tar的-C选项</td>
</tr>
<tr>
<td>路径</td>
<td>解压到指定路径</td>
</tr>
</tbody>
</table>
<h2 id="关机-重启" tabindex="-1"><a class="header-anchor" href="#关机-重启"><span>关机-重启</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> shutdown</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -h</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> now</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> reboot</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span><mark>其他</mark></span></a></h2>
<h2 id="ln软链接" tabindex="-1"><a class="header-anchor" href="#ln软链接"><span>ln软链接</span></a></h2>
<p><code v-pre>创建软链接，类似windows的快捷方式</code></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 参数1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 参数2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 示例</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/yum.conf</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/yum.conf</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ln</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/yum</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>-s</td>
<td>创建软连接</td>
</tr>
<tr>
<td>参数1</td>
<td>被链接的文件或文件夹</td>
</tr>
<tr>
<td>参数2</td>
<td>要链接去的目的地</td>
</tr>
</tbody>
</table>
<h2 id="快照" tabindex="-1"><a class="header-anchor" href="#快照"><span>快照</span></a></h2>
<h2 id="驱动安装" tabindex="-1"><a class="header-anchor" href="#驱动安装"><span>驱动安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> purge</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">^nvidia-.*</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> autoremove</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ubuntu-drivers</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> autoinstall</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h2>
<h3 id="ssh断连" tabindex="-1"><a class="header-anchor" href="#ssh断连"><span>ssh断连</span></a></h3>
<p><a href="https://cloud.tencent.com/developer/article/2321628" target="_blank" rel="noopener noreferrer">Linux SSH 连接在一段时间内没有活动时可能会自动断开，怎么办？-腾讯云开发者社区-腾讯云 (tencent.com)</a></p>
<p><strong>使用 SSH 客户端选项</strong></p>
<p>在使用 SSH 客户端连接服务器时，可以使用命令行选项来设置连接超时时间。例如，可以使用 <code v-pre>-o</code> 选项来指定 <code v-pre>ServerAliveInterval</code> 和 <code v-pre>ServerAliveCountMax</code> 的值：</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ServerAliveInterval=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">600</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ServerAliveCountMax=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> user@hostname</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这会覆盖配置文件中的相应设置，对于特定的连接非常有用。</p>
<h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2>
<p><code v-pre>官方安装指南（推荐）：https://docs.docker.com/engine/install/centos/</code></p>
<h3 id="卸载旧版docker" tabindex="-1"><a class="header-anchor" href="#卸载旧版docker"><span>卸载旧版docker</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-client</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-client-latest</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-common</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-latest</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-latest-logrotate</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-logrotate</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">	docker-engine</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装docker</span></a></h3>
<h4 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载"><span>卸载</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> remove</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-engine</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker.io</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> containerd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> runc</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="配置docker源" tabindex="-1"><a class="header-anchor" href="#配置docker源"><span>配置docker源</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 安装yum工具包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum-utils</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 添加 Docker 的阿里云镜像源</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum-config-manager</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --add-repo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 修改 docker-ce.repo 文件以使用阿里云的镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> sed</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -i</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">s+download.docker.com+mirrors.aliyun.com/docker-ce+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/yum.repos.d/docker-ce.repo</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 更新缓存</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> makecache</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> fast</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> upgrade</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ca-certificates</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> gnupg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> lsb-release</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 依赖包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-key</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> -</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# docker官方的GPG密钥</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 密钥过期应对方法</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/apt</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> cp</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> trusted.gpg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> trusted.gpg.d</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> add-apt-repository</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu </span><span style="--shiki-light:#999999;--shiki-dark:#666666">$(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">lsb_release</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -cs</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stable</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 添加软件源</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装docker-1" tabindex="-1"><a class="header-anchor" href="#安装docker-1"><span>安装docker</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yum</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-ce</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-ce-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> containerd.io</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-buildx-plugin</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-compose-plugin</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-ce</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker-ce-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> containerd.io</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h5 id="docker支持gpu" tabindex="-1"><a class="header-anchor" href="#docker支持gpu"><span>docker支持GPU</span></a></h5>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -fsSL</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://nvidia.github.io/libnvidia-container/gpgkey</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> gpg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --dearmor</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">  &#x26;&#x26;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> curl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -s</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -L</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    sed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">s#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> |</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> \</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sed</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -i</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -e</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/experimental/ s/^#//g</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/apt/sources.list.d/nvidia-container-toolkit.list</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -y</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nvidia-container-toolkit</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 安装 NVIDIA Container Toolkit 软件包</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> nvidia-ctk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> runtime</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> configure</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --runtime=docker</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 修改/etc/docker/daemon.json主机上的文件，以便 Docker 可以使用 NVIDIA 容器运行</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 重启docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动和校验" tabindex="-1"><a class="header-anchor" href="#启动和校验"><span>启动和校验</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 启动Docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 停止Docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stop</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 设置开机自启</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> enable</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 执行docker ps命令，如果不报错，说明安装启动成功</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ps</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置镜像源" tabindex="-1"><a class="header-anchor" href="#配置镜像源"><span>配置镜像源</span></a></h4>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 创建目录</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">mkdir</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 复制内容，注意把其中的镜像加速地址改成你自己的</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">tee</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /etc/docker/daemon.json</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;&#x3C;-</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'EOF'</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">{</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    "registry-mirrors": [</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">        "https://docker.1panel.live",</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">        "https://k-docker.asia",</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">        "https://docker.1ms.run"</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">    ]</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">}</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">EOF</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重新加载配置</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> daemon-reload</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 重启Docker【Job for docker.service failed because the control process exited with error code. See "systemctl status docker.service" and "journalctl -xe" for details.】</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> docker</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h3>
<p><code v-pre>官方文档：https://docs.docker.com/reference/</code>
<code v-pre>Dockerhub：https://hub.docker.com/</code></p>
<img src="@source/notes/language/Linux.assets/image-20240903184359357-1729245905757-106-1731284955034-1-1731284960645-6.png" alt="image-20240903184359357" style="zoom:67%;" />
<img src="@source/notes/language/Linux.assets/image-20240903184359521-1729245905757-105-1731284955034-2-1731284960645-5.png" alt="image-20240903184359521" style="zoom:67%;" />
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sh"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">"""镜像"""</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> pull</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	 &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image_nam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ta</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">g</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 拉取镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> push</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">  &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">repositor</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">/</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image_nam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ta</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">g</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	# 推送到镜像仓库</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看本地所有docker镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> images</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除docker镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rmi</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image_nam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ta</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">g</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rmi</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image_i</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 通过dockerfile构建docker镜像</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> build</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> myimage:latest</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> .</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    -t：指定镜像标签。</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    .</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">：当前目录的</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> Dockerfile（可以指定其他路径）</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 保存 Docker 镜像为 tar 文件。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> save</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -o</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">path_to_tar_fil</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">image_nam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ta</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">g</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 从 tar 文件加载 Docker 镜像。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> load</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -i</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> qinglong.tar</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">"""镜像->容器"""</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 从本地镜像创建docker容器（没必要重复创建容器）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> run</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -d</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --gpus</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> all</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /opt/ai/ollama:/root/.ollama</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -p</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 5700:5700</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --name</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> qinglong</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> unless-stopped</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> whyour/qinglong:latest</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    -d：后台运行容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	--gpus</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> all:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 使用所有gpu运行容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    -p</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">host_por</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">t</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_por</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">t</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">：端口映射。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    -v</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">host_pat</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">h</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_pat</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">h</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">：文件挂载。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    --name</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_nam</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">e</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">：指定容器名称。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">    --restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> unless-stopped：容器崩溃后自动重启。</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">"""容器"""</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看docker容器进程(-a为所有容器)</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ps</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -a</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 运行docker容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_name_or_i</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 停止docker容器</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> stop</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_name_or_i</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 删除一个或多个容器（容器必须已停止）</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rm</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_name_or_i</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 查看docker容器日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> logs</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	&#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_name_or_i</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> logs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -f</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> qinglong</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 实时查看日志</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> logs</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --tail</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> qinglong</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 查看最后 100 行日志</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 在运行中的容器内执行命令</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> exec</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -it</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">container_name_or_i</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">d</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	-it：交互模式和分配终端。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


