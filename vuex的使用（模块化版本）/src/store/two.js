
//第二个组件要用到的
const two = {
    actions:{},
    mutations:{
      ADDNAME(state,value){
        state.renyuan.push(value)
    }
    },
    state:{
      renyuan:[
        {name:'张宇',age:22},
        {name:'zyq',age:21},
        {name:'cyq',age:22}
      ],
    },
    // getters:{
    //   fistr(state){
    //     return state.renyuan['0']
    //   }
    // }
  }
  export default two