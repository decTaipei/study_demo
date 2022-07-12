<template>
  <div class="box">
    我是父亲组件<br>
    父组件显示爷爷组件的传值：{{love}}
        <HomeView2 :live='love' :addtodo='addtodo' ></HomeView2>
  </div>
</template>

<script>
import HomeView2 from '../views/HomeView2.vue'
  export default {
    data() {
      return {
       list:''
      }
    },
    components:{
      HomeView2
    },
    props:{
      love:{
        type:String,
        required:true
      }
    },
    methods: {
      addtodo(x){
         console.log('收到了值：',x)
      },
      
    },
  }
</script>

<style lang="less" scoped>
.box{
  border: 1px solid black;
  padding: 10px;
}
</style>