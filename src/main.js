import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import * as custom from '@/utils/filters'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'

// highlightjs
import hljs from 'highlight.js'

VMdPreview.use(githubTheme, {
  Hljs: hljs
})

Vue.use(VMdPreview)

Object.keys(custom).forEach(key => { Vue.filter(key, custom[key]) })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
