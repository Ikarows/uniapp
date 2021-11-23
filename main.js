import Vue from 'vue'
import App from './App'
import store from './store'
import './config/http.js'
import './router'
import './utils/fontsize'
import * as  funs from './utils/funs'
import { RouterMount } from 'uni-simple-router'

import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$funs = funs
Vue.prototype.$toast = funs.toast
Vue.prototype.$pages = funs.pages

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app,'#app');
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif