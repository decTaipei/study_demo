<template>
    <div>
        <h3>{{name}}</h3>
        <h3>{{aihao}}</h3>
      <h1>我是第三个子组件</h1>
      <button @click='dianjichufa'>点击触发自定义组件事件</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'这是返回到父组件的值123',
                aihao:""
            }
        },
        methods: {
            dianjichufa(){
                // 可以传很多参数,在后面接收
                this.$emit('aizhangyu',this.name)
            }
        },
    }
</script>

<style lang="less" scoped>

</style>