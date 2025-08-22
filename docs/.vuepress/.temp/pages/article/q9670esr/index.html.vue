<template><div><blockquote>
<p>我尝试过各种各样的博客框架，但大多不尽如人意，如：hexo、hugo、wordpress等。有的过于花哨或是过于臃肿，直到我发现了<code v-pre>vuepress</code>并选择了<code v-pre>plume</code>主题，正如它所说：一个简约易用的，功能丰富的 vuepress 文档&amp;博客 主题。</p>
<p>我尝试过一些笔记软件，如：obsidian、notion、onenote、csdn、雨雀等。有的过于花哨或是过于臃肿，直到我发现并使用了<code v-pre>typora</code>：一款所见即所得的Markdown编辑器。</p>
<p>我尝试过一些云平台，csdn-&gt;博客园-&gt;gitee-&gt;github。功能确实、图床繁杂，最终选定<code v-pre>Github</code>。</p>
<p>写作流程：<code v-pre>typora写作</code>-&gt;<code v-pre>pnpm docs:dev 本地预检查错误，并加入fortmatter</code>-&gt;<code v-pre>git推送github</code>-&gt;<code v-pre>github workflow自动构建博客</code></p>
</blockquote>
<p>部署经参考以下网站：</p>
<ul>
<li>Vuepress：https://vuepress.vuejs.org/zh/</li>
<li>Plume：https://theme-plume.vuejs.press/</li>
<li>Typora：https://typora.io/</li>
<li>Github：https://github.com/</li>
<li>Git：https://git-scm.com/</li>
</ul>
<p><strong>待做：</strong></p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 按领域划分笔记（最好将notes中的板块拆分为多个显示在导航栏），博客作为主页</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 博客网页图标</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 各个label加图标</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 美化readme</label></li>
</ul>
<p><strong>写文章要求：</strong></p>
<ol>
<li>标准排版：不准写大标题，写二号标题【博客默认规则大标题在formatter的title里】</li>
<li>创建时间：不要把两篇文章的创建时间设为相同，因为别人也不知道怎么给你排版上下两篇文章</li>
</ol>
</div></template>


