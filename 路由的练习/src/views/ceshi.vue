<template>
    <div>
      <div class="bigbox">
          
           <div v-for='item in msg' :key='item.id' class="box" @click='tiaozhuan(item)'>
               <h2>{{item.name}}</h2>
               <h3>{{item.chandi}}</h3>
           </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:[
                    {id:'001',name:'苹果',num:20,chandi:'山东',xiangqing:'这是苹果，好吃'},
                    {id:'002',name:'香蕉',num:2262,chandi:'海南',xiangqing:'这是香蕉，也好吃'},
                    {id:'003',name:'橘子',num:250,chandi:'甘肃',xiangqing:'这是橘子，好吃'},
                    {id:'004',name:'西瓜',num:222,chandi:'湖南',xiangqing:'这是西瓜，也好吃'},
                    {id:'005',name:'桃子',num:221,chandi:'湖北',xiangqing:'这是桃子，好吃'},
                    {id:'006',name:'芒果',num:12,chandi:'黑龙江',xiangqing:'这是芒果，也好吃'},
                ]
            }
        },
        methods: {
            tiaozhuan(item){
                this.$router.push({
                    path:'/ceshi2',
                    query:{
                       id:item.id,
                       name:item.name,
                       num:item.num,
                       chandi:item.chandi,
                       xiangqing:item.xiangqing
                    }
                })
            }
        },
    }
</script>

<style lang="less" scoped>
.bigbox{
    height: 100%;
    width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: flex-start;
    .box{
        height: 100px;
        width: 17%;
        border: 2px solid red;
        margin:15px 5px 0px 5px;
    }
}
</style>