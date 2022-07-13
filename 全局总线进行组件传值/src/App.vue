<template>
  <div>
    <zujianone></zujianone>
    <zujiantwo></zujiantwo>
  </div>
</template>

<script>
import zujianone from '../src/views/Zujianone.vue'
import zujiantwo from '../src/views/Zujiantwo.vue'
  export default {
    data(){
      return{
      
      }
    },
    components:{
      zujianone,zujiantwo
    }
  }
</script>

<style lang="less" scoped>
div{
  border: 3px solid black;
  padding: 5px;
}
</style>

