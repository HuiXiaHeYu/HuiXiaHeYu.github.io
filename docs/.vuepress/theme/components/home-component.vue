<script setup lang="ts">
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'
import { getDailyWallpaper } from './random-wallpaper'
import { ref, onMounted, watch } from 'vue'

// 内置组件
const props = defineProps<ThemeHomeConfigBase & {
  // 组件 props, frontmatter 中的属性将会传递给组件
}>()
</script>

<template>
  <VPHomeBox
    :type="type"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="full"
  >
    <!-- 自定义你的内容 -->
    <div>随缘更新</div>
    <div>网页seo，评论数据库。。。</div>
    <div>正在装修，请稍后。。。</div>
  </VPHomeBox>
</template>