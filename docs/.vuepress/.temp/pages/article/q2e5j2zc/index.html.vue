<template><div><h2 id="ssh免密连接设置" tabindex="-1"><a class="header-anchor" href="#ssh免密连接设置"><span>ssh免密连接设置</span></a></h2>
<p>服务器端：</p>
<ol>
<li>
<p>用户目录权限为775</p>
</li>
<li>
<p>服务器的ssh配置</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">PubkeyAuthentication</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> yes</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">AuthorizedKeysFile</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">      .ssh/authorized_keys</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在本机生成rsa私钥公钥。私钥放本地，公钥放服务器</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">ssh-keygen</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -t</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> rsa</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">本地：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> C:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\U</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">sers</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">9124/.ssh/id_rsa</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> C:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\U</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">sers</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">9124/.ssh/id_rsa.pub</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">服务器：</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">-</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> 将公钥</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">.pub</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">传入服务器放入以下路径：~/.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">便捷代码：echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">xxxx</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> >></span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/.ssh/authorized_keys</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>vscode远程连接配置认证文件</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">IdentityFile</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ~/.ssh/id_rsa_school_servers</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目"><span>创建项目</span></a></h2>
<p>以每个项目为中心，各个项目隔离</p>
<h2 id="带参debug" tabindex="-1"><a class="header-anchor" href="#带参debug"><span>带参debug</span></a></h2>
<p>如何在vscode中顺滑的debug python文件？</p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<ol>
<li>安装依赖包：<code v-pre>pip install debugpy -U</code></li>
<li>添加带参数的<code v-pre>launch.json</code>文件配置并选择<code v-pre>sh_file_debug</code></li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-json"><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">name</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">sh_file_debug</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">debugpy</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">request</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">attach</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">    "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">connect</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">        "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">host</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">        "</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">port</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 9501</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在python代码前加上这句话</li>
</ol>
<div class="language-py line-numbers-mode" data-highlighter="shiki" data-ext="py" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-py"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> debugpy</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">try</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    # 5678 is the default attach port in the VS Code debug configurations. Unless a host and port are specified, host defaults to 127.0.0.1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    debugpy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">listen</span><span style="--shiki-light:#999999;--shiki-dark:#666666">((</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 9501</span><span style="--shiki-light:#999999;--shiki-dark:#666666">))</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    print</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">Waiting for debugger attach</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    debugpy</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">wait_for_client</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">except</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> Exception</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    pass</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<ol>
<li>在终端运行bash命令，并等待debug</li>
</ol>
<img src="@source/blog/Vscode经验总结.assets/image-20250528121207875.png" alt="image-20250528121207875" style="zoom: 67%;" />
<ol start="2">
<li>打上断点，点击调试按钮<code v-pre>sh_file_debug</code>，开始debug</li>
</ol>
<img src="@source/blog/Vscode经验总结.assets/image-20250528121356382.png" alt="image-20250528121356382" style="zoom: 37%;" /></div></template>


