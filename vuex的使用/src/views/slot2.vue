<template>
    <div>
         <h1 style="color:red">组件2</h1>
        <h1>人员列表</h1>
请输入要添加的人员名字<input type="text"  v-model='name'>
<br>
请输入要添加的人员年龄<input type="text"  v-model='age'>
<br>
<button @click="addname">添加</button>
<ul>
    <li v-for="list in $store.state.renyuan" :key="list.name">
        {{list.name}}  -----  {{list.age}}
    </li>
</ul>
<h2>组件2共享到组件1方法10倍后的值:{{$store.getters.bigsum}}</h2>
<h2>组件2共享到组件3github的用户名：</h2>
<ul>
    <li v-for='i in $store.state.users' :key='i.id'>
        {{i.login}}
    </li>
</ul>
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
        methods: {
            addname(){
                const ren = { name:this.name , age:this.age }
                this.$store.commit('ADDNAME',ren)
                this.name = ''
                this.age = ''
            }
        },
    }
</script>

<style lang="less" scoped>

</style>