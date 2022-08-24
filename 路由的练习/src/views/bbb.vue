<template>
    <div>
<h1>这是组件2的内容</h1>
<ul>
    <li v-for='item in msg' :key='item.id'>
        <!-- 第一种写法 -->
        <!-- <router-link :to='`/bb/ccc?id=${item.id}&one=${item.one}&two=${item.two}`'>{{item.id}}---{{item.name}}---{{item.age}}</router-link> -->

        <!-- 第二种写法  用query传递参数 并在配置路由里写props函数接收 就可以在Ccc组件里面直接使用值-->
        <router-link :to="{
            name:'Ccc',
           path:'/bb/ccc',
           query:{
               id:item.id,
               one:item.one,
               two:item.two
           } 
        }">
        {{item.id}}---{{item.name}}---{{item.age}}
        </router-link>
        <button @click='addpush(item)'>点击我试试</button>

    </li>
</ul>
<hr>
<router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:[
                    {id:'001',name:'张宇',age:22,one:'这是展示的第一个内容',two:'B'},
                    {id:'002',name:'张大宇',age:23,one:'这是展示的第二个内容',two:'A'},
                    {id:'003',name:'张小宇',age:24,one:'这是展示的第三个内容',two:'C'},
                ]
            }
        },
        methods: {
            addpush(item){
                this.$router.push({
                     path:'/',
                     query:{
                      id:item.id,
                      one:item.one,
                      two:item.two
                       } 
                })
            }
        },
      
    }
</script>

<style lang="less" scoped>

</style>