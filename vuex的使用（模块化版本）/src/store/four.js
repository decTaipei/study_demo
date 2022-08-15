//第四个组件要用到的
import axios from 'axios'
const four = {
    
    actions:{
      ajaxtwo(context){
         axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                    response =>{
                             console.log('请求成功',response.data);
                            context.commit("AJAXQINGQIU2",response.data)
                    },
                    error =>{
                            console.log('请求失败',error.message);                        
                    }
                )
     }
    },
    mutations:{
        AJAXQINGQIU2(state,value){
          state.fourtype = value
      }
    },
    state:{
      fourtype:''
    }
  }
  export default four