//第三个组件要用到的
import axios from 'axios'
const three = {
    actions:{
      ajaxqingqiu(context,value){
         axios.get(`https://api.github.com/search/users?q=${value}`).then(
                    response =>{
                            console.log('请求成功',response.data.items);
                            // this.$store.state.three.users = response.data.items
                            context.commit("AJAXQINGQIU",response.data.items)
                    },
                    error =>{
                            console.log('请求失败',error.message);                        
                    }
                )
     }
    },
    mutations:{
      AJAXQINGQIU(state,value){
          state.users = value
      }
    },
    state:{
      users:[]
    }
  }
  export default three