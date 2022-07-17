<template>
    <div>
        <!-- 以下为搜索内容 -->
        <div>
              <h1>搜索github用户案例</h1>
            <input type="text" v-model="username" >
            <button @click="sousuo">点击搜索</button>
        </div>
        <!-- 以下为展示列表 -->
        <div class="list">
  <div class="card" v-for="item in users" :key='item.id'>
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
        </div>
     

    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                username:'',
                users:[]
            }
        },
        methods: {
            sousuo(){
              axios.get(`https://api.github.com/search/users?q=${this.username}`).then(
                  response =>{
                          console.log('请求成功',response.data.items);
                          this.users = response.data.items
                  },
                  error =>{
                          console.log('请求失败',error.message);                        
                  }
              )
            }
        },
    }
</script>

<style lang="less" scoped>
.list{
    margin: 20px;
    padding: 20px;
    // border: 2px solid black;
   height: 1000px;
   width: 100%;
//    display: flex;
//    flex-direction: row;
//    flex-wrap: wrap;
   div{
    //    flex: 1;
    float: left;
       height: 300px;
       width: 25%;
       border: 1px solid red;
       padding: 15px;
       margin: 20px;

   }
}
</style>