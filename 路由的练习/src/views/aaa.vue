<template>
  <div>
<h1>这是组件一的内容</h1>
 用keep-alive缓存数据：<input type="text">
  </div>
</template>

<script>
  export default {
    name:'aaa',
    beforeDestroy(){
      console.log('aaa被销毁了');
    }
  }
</script>

<style lang="less" scoped>

</style>