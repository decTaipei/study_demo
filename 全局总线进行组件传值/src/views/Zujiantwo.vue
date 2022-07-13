<template>
  <div class="two">
<h2>这是组件2</h2>
名字:{{name}}
年龄:{{age}}
<br>
收到组件1的名字:{{zujian1name}}
<br>
收到组件1的年龄:{{zujian1age}}
<zujian3></zujian3>
  </div>
</template>

<script>
import zujian3 from '../views/Zujian3.vue'
  export default {
    data() {
      return {
        name:'zyq',
        age:21,
        zujian1name:"",
        zujian1age:""
      }
    },
    mounted() {
      this.$bus.$on('give',(name,age) => {
           this.zujian1name = name
           this.zujian1age = age
      })
    },
    beforeDestroy() {
      this.$bus.$off('give')
    },
    components:{
      zujian3
    }
  }
</script>

<style lang="less" scoped>
.two{
  border:  2px solid orange;
  padding: 5px;
  margin: 5px;
}
</style>