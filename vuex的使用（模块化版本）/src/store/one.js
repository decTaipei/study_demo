//第一个组件要用到的
export default{
    actions:{
      //   jia(context,value){
  //     context.commit('JIA',value)
  //   },
  //   jian(context,value){
  //     context.commit('JIAN',value)
  //   },
    jiaodd(context,value){
      if(context.state.sum % 2){
        context.commit('JIA',value)
      }
   },
   jiawite(context,value){
       setTimeout(() => {
          context.commit('JIA',value)
       },500)
   }
    },
    mutations:{
      JIA(state,value){
        //  console.log(a,b);
        state.sum += value
        // console.log(state.users);
      },
      JIAN(state,value){
          state.sum = state.sum - value
      },
      
    },
    state:{
      sum:0,
      school:'湖北商贸学院',
      xueke:'计算机科学与技术',
    },
    getters:{
      bigsum(state){
        return state.sum * 10
       }
    }
  }

  