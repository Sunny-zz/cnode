
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes =[
  {
    path: '/404',
    component: () => import('../views/not-found/NotFound.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/',
    component: () => import('../views/home/HomeView.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/TopicList.vue')
      },
      {
        path: '/topic/:id',
        name: 'topic',
        component: () => import('../views/topic/TopicDetail.vue')
      },
      {
        path: '/user/:loginname',
        name: 'user',
        component: () => import('../views/center/UserCenter.vue')
      },
      {
        path: '/:type',
        name: 'topicList',
        component: () => import('../views/home/TopicList.vue')
      }
    ]
  },
  {
    path: '/*',
    redirect: '/404'
  }
]

// 初始化路由对象
const router = new VueRouter({
  routes,
  mode: 'history'
})

const $message = Vue.prototype.$message
router.beforeEach((to, from ,next) => {
  const token = localStorage.getItem('token')
  // if(to.path != '/login'){
  //   if(token){
  //     next()
  //   }else{
  //     $message({
  //       message: '没有登录，需要登录页登录',
  //       type: 'warning'
  //     })
  //     next('/login')
  //   }
  // }else{
  //   next()
  // }

  if(token || to.path === '/login'){
    next()
  }else{
    $message({
      message: '没有登录，需要登录页登录',
      type: 'warning'
    })
    next('/login')
  }
})

// 1. 直接访问首页  进入失败提示请登录，直接跳转到 登录页面
// 2. 登录页 成功登录，然后访问其他页面 可正常
// 3. header 内新增个退出按钮  实现退出功能
// 4. 退出之后 访问首页 直接提示请登录，直接跳转到 登录页面
export default router


