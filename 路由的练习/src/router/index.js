import Vue from 'vue'
import VueRouter from 'vue-router'
import Aaa from '../views/aaa.vue'
import Bbb from '../views/bbb.vue'
import Ccc from '../views/ccc.vue'
import Ceshi from '../views/ceshi.vue'
import Ceshi2 from '../views/ceshi2.vue'

Vue.use(VueRouter)

const routes = [
  {
    name:'aaa',
    path: '/',
    component: Aaa,
    meta:{
      title:'第一个路由'
    }
  },
  { 
    name:'bbb',
    path: '/bb',
    component: Bbb,
    meta:{
       title:'第二个路由'
    },
    children:[
      {
        name:'Ccc',
        path:'/bb/ccc',
        component:Ccc,
        beforeEnter: (to, from, next) => {
          // ...这是独享路由守卫，只对这一个起作用
        },
        props($route){
          return {one:$route.query.one,two:$route.query.two}
        }
      }
    ]
  },
  {
      name:'ceshi',
      path:'/ceshi',
      component:Ceshi,
      meta:{
        title:'测试路由'
      }
      
  },
  {
    name:'ceshi2',
    path:'/ceshi2',
    component:Ceshi2,
    meta:{
      title:'测试的展示路由'
    },
    props($route){
      return {
        id:$route.query.id,
        name:$route.query.name,
        num:$route.query.num,
        chandi:$route.query.chandi,
        xiangqing:$route.query.xiangqing,
      }
    }
}
  
 
]


const router = new VueRouter({
  routes
})



// 全局前置路由守卫 初始化被调用一次 每次路由切换时调用
// to====>去的地方  from===>来的地方
router.beforeEach((to,from,next)=>{
  console.log('@@@',to,from);
  next()
  })

  // 全局后置路由守卫 初始化被调用一次 每次路由切换时调用
// to====>去的地方  from===>来的地方
router.afterEach((to,from)=>{
  console.log('@@@',to,from);
  document.title = to.meta.title
  
  })

export default router
