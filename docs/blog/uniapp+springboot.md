---
title: uniapp+springboot
createTime: 2025/07/09 16:50:14
permalink: /article/4a4x0v9p/
---
## 二手交易小程序

> Uniapp + Vue + Springboot 

### 小程序页面





### 后台管理系统

#### 创建基础项目

```bash
pnpm create vite@latest
cd shop-pc
pnpm i
npm run dev
```

#### 路径解析配置

##### vite

> vite.config.ts 运行时的模块路径解析

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 解决控制台：Network: use --host to expose
    port: 8080, // 配置端口号
    hmr: true,  // 开启热更新
    open: true  // 启动在浏览器打开
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
```

##### typescript

> ##### tsconfig.app.json 开发时的模块路径解析

```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".", // 路径解析起点（当前项目根目录）
    "paths": {
      "@/*": [ // 将 `@/xxx` 映射到 `src/xxx`
        "src/*"
      ]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

**如果别名配置完依旧报错：**

> Vite-env.d.ts

```typescript
/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}
```

#### 安装路由

```sh
pnpm add vue-router@4
```

##### 新建路由文件

> src->router->index.ts

```typescript
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Layout from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: Layout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
```

##### 引入路由文件

> src->main.ts

```typescript
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'

const app = createApp(App);
app.use(router).mount('#app')
```

##### 修改App.vue

> 使用路由插槽

```vue
<template>
  <router-view/>
</template>

<style lang="scss">
</style>
```

#### 使用插件

```sh
# UI
pnpm i element-plus --save
pnpm i @element-plus/icons-vue
# 数据管理
pnpm i pinia
# 样式
pnpm i --save-dev sass
```

> main.ts

```typescript
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'

const pinia = createPinia();	// 创建pinia实例
const app = createApp(App); // 创建vue应用实例
app.use(router).use(ElementPlus).use(pinia)    // 使用路由、element plus、pinia插件
app.mount('#app')   // 将应用挂在到dom元素#app上

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

> 创建文件：src->store->menu && [test->index.ts]

```typescript
import { defineStore } from "pinia";

export const testStore = defineStore('testStore', {
    state:()=> {
        return{
            count:0
        }
    },
    // 获取值
    getters:{
        getCount(state){
            return state.count
        }
    },
    // 改变state的值
    actions:{
        setCount(count:number){
            this.count = count
        }
    }
})
```

> src->components->HelloWorld.vue

```vue
<template>
  <div>{{ count }}</div>
  <div>666</div>
  <div class="mb-4">
    <el-button icon="Edit">编辑</el-button>
    <el-button @click="addBtn" type="primary">新增</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button icon="Close" type="danger">关闭</el-button>
  </div>
  <el-icon>
    <Edit />
  </el-icon>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { testStore } from '@/store/test/index'

const store = testStore()

const count = computed(()=>{
  return store.getCount
})
const addBtn = ()=>{
  store.setCount(++store.count)
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
```

