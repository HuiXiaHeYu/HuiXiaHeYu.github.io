---
title: Vue
createTime: 2024/11/10 18:40:14
tags:
  - vue
permalink: /notes/framework/tmq3adgm/
---
## 开发环境

1. `node.js`-version>=15.0
2. `Vue-Official`(vscode 扩展包)

```bash
# 安装cnpm并设置包的下载源（npm的中国镜像源）：https://registry.npmmirror.com
npm install -g cnpm --registry=https://registry.npmmirror.com
```

## 创建dev

```bash
cd 。。	# 进入目标文件夹
npm init vue@latest	# 创建vue项目并选择可选功能【相当于安装执行create-vue】
# 注意：项目名不能有大写

cd <your-project-name>	# 进入vue项目文件夹
cnpm install		# 安装依赖
npm run dev		# 启动开发服务器
```

## 目录结构

```sh
.vscode			-- vscode配置文件夹
node_modules	-- 运行依赖
public			-- 资源文件夹（浏览器图标）
src				-- 源码文件夹
.gitignore		-- git忽略文件
index.html		-- 入口html文件
package.json	-- 信息描述文件
README.md		-- 注释文件
vite.config.js	-- vue配置文件
```

## 模板语法

### 基本模板

```vue
<template>
	<!-- 模板区域：相当于html -->
</template>

<script>
	<!-- js区域 -->
</script>
```

### 1.文本插值

使用`双大括号`会将返回值转为`字符串`格式

```vue
<template>
	<!-- 模板区域：相当于html -->
  	<p>{{ hello }}</p>
</template>

<script>
	<!-- js区域 -->
    export default{
      data(){
        return{
          hello:"hello world",
        }
      }
    }
</script>
```

### 2.原始html？

为了避免被转为字符串格式，我们加入了`v-html`属性

```vue
<template>
	<!-- 模板区域：相当于html -->
	<p v-html="rawhtml"></p>
</template>

<script>
	<!-- js区域 -->
    export default{
      data(){
        return{
          rawhtml:"<a href='https://www.baidu.com'>百度搜索</a>"
        }
      }
    }
</script>
```

### ~~template中的表达式~~

`一般不这样用，因为不规范（逻辑操作应当在js中）`

```vue
<template>
	<!-- 模板区域：相当于html -->
  	<p>{{ ok ? "yes" : "no" }}</p>
        <!-- "字符串"->切割->翻转->合并 -->
  	<p>{{ message.split('').reverse().join("") }}</p>
</template>

<script>
	<!-- js区域 -->
    export default{
      data(){
        return{
          ok:true,
          message:"大家好",
        }
      }
    }
</script>
```

## 属性绑定