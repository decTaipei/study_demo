<template>
    <div>
<h3>这是组件3 是组件2的子组件</h3>
拿到组件1的名字：{{name}}
拿到组件1的年龄：{{age}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:'',
                age:''
            }
        },
        mounted() {
            this.$bus.$on('give2',(name,age) => {
                 this.name = name
                 this.age = age
            })
        },
        beforeDestroy() {
            this.$bus.$off('give2')
        },
    }
</script>

<style lang="less" scoped>
div{
    border: 2px solid green;
    padding: 5px ;
    margin: 5px;
}
</style>