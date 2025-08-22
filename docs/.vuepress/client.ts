import { defineClientConfig } from 'vuepress/client'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
// import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import CustomComponent from './theme/components/Custom.vue'
// import HomeComponent from './theme/components/home-component.vue'

import './theme/styles/index.css'
import './theme/styles/custom.css'

export default defineClientConfig({
  enhance({ app }) {
    // 编译到组件中
    app.component('RepoCard', RepoCard)
    // app.component('NpmBadge', NpmBadge)
    // app.component('NpmBadgeGroup', NpmBadgeGroup)
    // app.component('Swiper', Swiper) // you should install `swiper`

    // 自定义组件
    // app.component('CustomComponent', CustomComponent)
    // app.component('home-component', HomeComponent)
  },
})
