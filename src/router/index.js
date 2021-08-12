import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "*", redirect: "/notfound" },
    {
      name: "home",
      path: "/home",
      component: () => import("@/views/Home")
    },
    {
      name: "mine",
      path: "/mine",
      component: () => import("@/views/Mine"),
      // 二级路由
      children: [
        { path: "", redirect: "list" },
        { path: "list", component: () => import("@/views/Mine/List"), name: "list" },
        { path: "car", component: () => import("@/views/Mine/Car"), name: "car" },
      ]
    },
    {
      name: "moviedetail",
      path: "/moviedetail/:id",
      component: () => import("@/views/Home/MovieDetail")
    },
    {
      name: "audio",
      path: "/audio",
      component: () => import("@/views/Audio")
    },
    {
      name: "broadcast",
      path: "/broadcast",
      component: () => import("@/views/Broadcast")
    },
    {
      name: "city",
      path: "/city",
      component: () => import("@/views/City")
    },
    {
      name: "group",
      path: "/group",
      component: () => import("@/views/Group")
    }
  ]
})
