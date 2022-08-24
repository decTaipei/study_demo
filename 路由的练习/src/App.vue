<template>
  <div id="app">
    <nav>
      <router-link to="/">组件1</router-link> 
    
      <router-link to="/bb">组件2</router-link>
      <router-link to="/ceshi">组件3</router-link>

      <button @click='back'>后退</button>
      <button @click='forward'>前进</button>
    </nav>
<!-- 利用keep-alive来缓存组件 让不展示的路由组件保持挂载不被销毁 include中的值为组件名（组件aaa中的name （非常重要！！！）） -->
     <keep-alive include="aaa">
       <div id="box">
         <router-view></router-view>
       </div>
     </keep-alive>
    
  </div>
</template>


<script>
export default {
  methods: {
    back(){
      this.$router.back()
    }, 
    forward(){
      this.$router.forward()
    },
  },
}
</script>

<style lang="less">
#box{
   height: 500px;
   width: 500px;
   border: 1px solid black;
   margin-left: 200px;
   margin-top: 200px;
}
</style>
