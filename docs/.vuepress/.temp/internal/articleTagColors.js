import './articleTagColors.css'
export const articleTagColors = {"Crack":"rxte","Vue":"rxte","Workflow":"lt2p","Spider":"k3rg","Auto.js":"k76q","vue":"rxte","C/C++":"iqht","Latex":"mc3s","Mysql":"6may","Python":"6may","English":"6may","Deep Learning":"kqiq","计算机网络":"dehx","Conda":"tqbk","Git":"0f7j","Wsl":"0f7j"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
