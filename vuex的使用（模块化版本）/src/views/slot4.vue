<template>
    <div class="zujianfour">
 <h1 style="color:red">组件4</h1>
 <button @click="adddd">组件4发送请求</button>
 <h1>请求到的值是：{{$store.state.four.fourtype}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            adddd(){
                this.$store.dispatch('ajaxtwo')
            }
        },
    }
</script>

<style lang="less" scoped>
.zujianfour{
    height:100px;
    width: 100%;
}
</style>