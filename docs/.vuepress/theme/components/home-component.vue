<script setup lang="ts">
import type { ThemeHomeConfigBase } from 'vuepress-theme-plume'
import { VPHomeBox } from 'vuepress-theme-plume/client'

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
    <div>
      <RouterLink to="/guide/getting-started.html" class="action-button">
        快速入门
      </RouterLink>

      <RouterLink to="/about.html">
        <button class="button">了解更多</button>
      </RouterLink>
    </div>
  </VPHomeBox>
</template>