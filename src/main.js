import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
