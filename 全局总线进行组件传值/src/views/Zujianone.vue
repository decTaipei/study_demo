<template>
  <div class="one">
<h2>这是组件1</h2>
名字:{{name}}
年龄:{{age}}
<button @click="givename">把数据给组件2</button>
<button @click="give2">把数据给组件3</button>
  </div>
</template>

<script>
  export default {
    data(){
      return{
           name:'张宇',
           age:21
      }
    },
    methods: {
      givename(){
        this.$bus.$emit('give',this.name,this.age)
      },
      give2(){
        this.$bus.$emit('give2',this.name,this.age)
      }
    },
  }
</script>

<style lang="less" scoped>
.one{
  border: 2px solid blue;
  padding: 5px;
  margin: 5px;
}
</style>