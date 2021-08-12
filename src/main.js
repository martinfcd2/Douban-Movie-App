import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入main.scss文件
import "./stylesheets/main.scss"

//引入rem.js文件
import "./modules/rem.js"

//引入swiper.min.css样式文件
import '../node_modules/swiper/swiper.min.css'

//引入自定义指令
import "./modules/directive"

// 引入axios
// 因为在很多地方都会用到请求方法，所以在入口直接将请求挂载到vue的prototype上
// 在页面引用时使用this.$http就能使用了
import axios from "axios"
Vue.prototype.$http = axios;

//引入mint-ui相关的模块
import { InfiniteScroll, Lazyload, Button, Header, Tabbar, TabItem, Cell } from "mint-ui"
Vue.use(InfiniteScroll); // mint-ui无限滚动插件，在main.js里使用
Vue.use(Lazyload); // 懒加载
Vue.component("mt-header", Header);
Vue.component("mt-button", Button);
Vue.component("mt-tabbar", Tabbar);
Vue.component("mt-tab-item", TabItem);
Vue.component("mt-cell", Cell);

import { SubmitBar, Toast } from 'vant';
Vue.use(Toast);
Vue.use(SubmitBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
