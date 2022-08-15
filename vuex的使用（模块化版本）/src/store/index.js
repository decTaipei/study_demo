//该文件用于管理vuex的数据的store

//引入vuex
import Vuex from 'vuex'
//引入vue
import Vue from 'vue'

//引入四个模块化的vuex文件：one  two  three four
import one from './one'
import two from './two'
import three from './three'
import four from './four'
//使用vuex
Vue.use(Vuex)

//创建actions --  用于响应组件中的动作
// const actions = {
//       //   jia(context,value){
// //     context.commit('JIA',value)
// //   },
// //   jian(context,value){
// //     context.commit('JIAN',value)
// //   },
// jiaodd(context,value){
//   if(context.state.sum % 2){
//     context.commit('JIA',value)
//   }
// },
// jiawite(context,value){
//    setTimeout(() => {
//       context.commit('JIA',value)
//    },500)
// }
// }

//创建mutations --  用于操作数据state
// const mutations = {
//   JIA(state,value){
//     //  console.log(a,b);
//     state.sum = state.sum + value
//     console.log(state.users);
//   },
//   JIAN(state,value){
//       state.sum = state.sum - value
//   },
//   ADDNAME(state,value){
//       state.renyuan.push(value)
//   }
// }

//创建state --  用于存储数据
// const state = {
//     sum:0,
//     school:'湖北商贸学院',
//     xueke:'计算机科学与技术',
//     renyuan:[
//       {name:'张宇',age:22},
//       {name:'zyq',age:21},
//       {name:'cyq',age:22}
//     ],
//     users:[]
   
// }

//创建getters --  用于加工state中的数据
// const getters = {
//   bigsum(state){
//    return state.sum * 10
//   }
// }

//创建并导出store
export default new Vuex.Store({
   modules:{
    // namespaced: true,
     one,two,three,four
   }
})

//导出store
// export default store