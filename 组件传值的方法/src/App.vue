<template>
  <div>
           <!-- 一级组件 -->
        <AboutView name='zy' :age='21' sex='男'></AboutView>
      <hr>
           <!-- 一级组件 -->
       <HomeView1 love='zyq and cyq'></HomeView1>
           <!-- 一级组件 自定义事件-->
       <Zizujian @aizhangyu='demo'></Zizujian>
       <h1>收到的自定义事件传来的数据为:{{name}}</h1>
  </div>
</template>

<script>
import AboutView from '../src/views/AboutView.vue'
import HomeView1 from '../src/views/HomeView.vue'

import Zizujian from '../src/views/zizujian1.vue'


  export default {
    data() {
      return { 
        name:''
      }
    },
    components:{
      AboutView,HomeView1,
        Zizujian,
    },
    methods: {
      demo(zidingyiname){
        console.log('触发了事件',zidingyiname); 
        this.name = zidingyiname 
      }
    },
   
  }
</script>

<style lang="less" scoped>
div{
  border: 3px solid rebeccapurple;
  padding: 10px;
}
</style>