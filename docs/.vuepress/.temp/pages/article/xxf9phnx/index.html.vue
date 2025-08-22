<template><div><h2 id="刷回原厂" tabindex="-1"><a class="header-anchor" href="#刷回原厂"><span>刷回原厂</span></a></h2>
<p>路由器型号：<strong>H3C-nx30pro</strong></p>
<h3 id="固件下载" tabindex="-1"><a class="header-anchor" href="#固件下载"><span>固件下载</span></a></h3>
<p>21.02固件 https://sssddddff.lanzoup.com/b019stevi 密码:eylf</p>
<p>uboot ：https://sssddddff.lanzoup.com/igjBl10tm6va</p>
<p>精简版固件 ：https://sssddddff.lanzoup.com/i7CWW114pueb</p>
<ul>
<li>原厂固件（刷了会变成我的序列号）：https://sssddddff.lanzoup.com/i3sp20xn3taj</li>
</ul>
<h3 id="刷机教程" tabindex="-1"><a class="header-anchor" href="#刷机教程"><span>刷机教程</span></a></h3>
<ol>
<li>路由器连网，telnet 连接路由器<code v-pre>ip 192.168.124.1 </code>端口号<code v-pre>99</code> 用户名<code v-pre>H3C</code> 密码是登录密码，运行以下命令开ssh</li>
</ol>
<div class="language-actionscript line-numbers-mode" data-highlighter="shiki" data-ext="actionscript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-actionscript"><span class="line"><span>curl -o /tmp/dropbear.ipk https://downloads.openwrt.org/releases/packages-19.07/aarch64_cortex-a53/base/dropbear_2019.78-2_aarch64_cortex-a53.ipk</span></span>
<span class="line"><span>opkg install /tmp/dropbear.ipk</span></span>
<span class="line"><span>/etc/init.d/dropbear enable</span></span>
<span class="line"><span>/etc/init.d/dropbear start</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p><code v-pre>winscp</code>将压缩包里的<code v-pre>uboot.bin</code>传到路由器的<code v-pre>tmp</code>目录，scp端口号22，用户名和密码依旧是第一步</p>
</li>
<li>
<p>运行以下命令刷入<code v-pre>uboot</code>，此<code v-pre>uboot</code>可以引导原厂固件。</p>
</li>
</ol>
<div class="language-actionscript line-numbers-mode" data-highlighter="shiki" data-ext="actionscript" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-actionscript"><span class="line"><span>mtd write /tmp/uboot.bin FIP</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>运行以下命令，将<code v-pre>tmp</code>目录备份的原厂固件<code v-pre>backup.img</code>下载到电脑进行保存。备份的大小大概是60多</li>
</ol>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>mdd if=/dev/mtd5 of=/tmp/backup.img</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>
<p>拔掉路由器电源，按住路由器背后的reset按钮不放再插入电源，10s后松开reset。电脑有线连接路由器任意lan口，并设置电脑固定ip 192.168.1.2 网关192.168.1.1，输入192.168.1.1 即可进入uboot刷机界面</p>
</li>
<li>
<p>刷机界面选择压缩包里的nx30-firmware.bin，点击upload 等待刷入完成后点击update，路由器会自动重启，记得改回电脑ip为自动获取。</p>
</li>
</ol>
<h3 id="系统后台登录" tabindex="-1"><a class="header-anchor" href="#系统后台登录"><span>系统后台登录</span></a></h3>
<ul>
<li>默认ip：192.168.6.1</li>
<li>用户名：root</li>
<li>密码：password</li>
</ul>
<p>注意：多拨时不能选择”使用旧的macvlan创建方式“ ，同时需要选中绑定物理接口 否则硬件加速失效。</p>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3>
<p>uboot源码修改于 https://github.com/hanwckf/bl-mt798x</p>
<p>固件源码 https://github.com/padavanonly/immortalwrtarm/tree/mt7981</p>
<p>GL.inet固件见此贴 https://www.right.com.cn/forum/forum.php?mod=viewthread&amp;tid=8297881&amp;page=1&amp;extra=#pid18838949</p>
<h2 id="刷入openwrt" tabindex="-1"><a class="header-anchor" href="#刷入openwrt"><span>刷入openwrt</span></a></h2>
<p>参考链接：https://ericclose.github.io/install-openwrt-on-h3c_magic-nx30-pro.html</p>
</div></template>


