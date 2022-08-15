<template>
    <div> 
        <h1 style="color:red">组件1</h1>
     <h1>总和:{{sum}}</h1>
    <h1>放大十倍后的总和:{{this.$store.getters.bigsum}}</h1>
    <!-- 以下两个显示不出来 但其中一个为正确写法 -->
    <!-- <h1>放大十倍后的总和:{{this.$store.getters['one/bigsum']}}</h1> -->
    <!-- <h1>放大十倍后的总和:{{this.$store.one['getters/bigsum']}}</h1> -->
      <h2>我在{{$store.state.one.school}},专业：{{$store.state.one.xueke}}</h2>
     <select v-model.number="num">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
     </select>
     <button @click='add'>点击加</button>
     <button @click='del'>点击减</button>
     <button @click='ji'>为奇数则加</button>
     <button @click='deng'>等一等再加</button>
     <h2>读取人员信息，完成组件之间的数据共享</h2>
     <h2>下方列表总人数是：{{$store.state.two.renyuan.length}}</h2>
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
             
               num:1
            }
        },
        methods: {
            add(){
        
                this.$store.commit('JIA',this.num)
            },
            del(){
              
                this.$store.commit('JIAN',this.num)
            },
            ji(){
               
                this.$store.dispatch('jiaodd',this.num)
                
            },
            deng(){
                this.$store.dispatch('jiawite',this.num)
            }
        },
        computed:{
            sum(){
                return this.$store.state.one.sum
            }
        },
        // mounted(){
        //     console.log(this.$store);
        // }
    }
</script>

<style lang="less" scoped>

</style>