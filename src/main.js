import * as Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'

VMdPreview.use(githubTheme, {
  Hljs: hljs
})

window.$vueApp = Vue.createApp(App)

window.$vueApp.config.globalProperties.$filters = {
  dateFormat(value) {
    function zero(time) {
      return time < 10 ? '0' + time : time
    }
    var date = new Date(Number(value) * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const Y = date.getFullYear() + '-'
    const M =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '-'
    const D = zero(date.getDate()) + ' '
    const h = zero(date.getHours()) + ':'
    const m = zero(date.getMinutes()) + ':'
    const s = zero(date.getSeconds())
    return Y + M + D + h + m + s
  }
}

window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(VMdPreview)
window.$vueApp.use(router)
window.$vueApp.mount('#app')

