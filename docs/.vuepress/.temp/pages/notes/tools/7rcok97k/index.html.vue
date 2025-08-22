<template><div><blockquote>
<p>WSL说明文档：https://learn.microsoft.com/zh-cn/windows/wsl/</p>
<p>你想搞的话，也就只需要：</p>
<ol>
<li>电脑换成win10专业版</li>
<li>配置wsl</li>
<li>配置ubuntu</li>
<li>装驱动</li>
<li>pycharm解释器配置</li>
</ol>
</blockquote>
<h2 id="wsl内核" tabindex="-1"><a class="header-anchor" href="#wsl内核"><span>Wsl内核</span></a></h2>
<h3 id="要求" tabindex="-1"><a class="header-anchor" href="#要求"><span>要求</span></a></h3>
<p>系统：windows10专业版</p>
<h3 id="wsl内核安装" tabindex="-1"><a class="header-anchor" href="#wsl内核安装"><span>wsl内核安装</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wsl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --install</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="wsl2内核安装" tabindex="-1"><a class="header-anchor" href="#wsl2内核安装"><span>wsl2内核安装</span></a></h3>
<p>微软WSL官网 <a href="https://link.zhihu.com/?target=https%3A//learn.microsoft.com/zh-cn/windows/wsl/install-manual%23step-4---download-the-linux-kernel-update-package" target="_blank" rel="noopener noreferrer">https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package</a></p>
<p>内核下载地址：<a href="https://link.zhihu.com/?target=https%3A//wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi" target="_blank" rel="noopener noreferrer">https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi</a></p>
<p>下载后直接双击安装</p>
<h3 id="设置wsl版本" tabindex="-1"><a class="header-anchor" href="#设置wsl版本"><span>设置wsl版本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wsl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -l</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -v</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 正在运行的wsl版本</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">wsl</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --set-default-version</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		# 设置使用的wsl版本为wsl2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="windows功能开启" tabindex="-1"><a class="header-anchor" href="#windows功能开启"><span>Windows功能开启</span></a></h2>
<p><code v-pre>启动或关闭Windows功能</code></p>
<ol>
<li>Hyper-V</li>
<li>适用于linux的windows子系统</li>
<li>虚拟机平台（wsl2基于此）</li>
</ol>
<h2 id="microsoft安装ubuntu" tabindex="-1"><a class="header-anchor" href="#microsoft安装ubuntu"><span>Microsoft安装ubuntu</span></a></h2>
<p>安装完配置一下用户</p>
<h2 id="细节设置" tabindex="-1"><a class="header-anchor" href="#细节设置"><span>细节设置</span></a></h2>
<img src="@source/notes/tools/Wsl.assets/image-20241115161306438.png" alt="image-20241115161306438" style="zoom: 67%;" /></div></template>


