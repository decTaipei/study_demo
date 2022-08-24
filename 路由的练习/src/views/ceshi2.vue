<template>
    <div>
        <p>商品编号：{{$route.query.id}}</p>
        <p>商品名称：{{name}}</p>
        <p>商品单价：{{num}}元/斤</p>
        <p>商品详情：{{chandi}}</p>
        <p>商品产地：{{xiangqing}}</p>
      
    </div>
</template>

<script>
    export default {
        props:['id','name','num','chandi','xiangqing']
    }
</script>

<style lang="less" scoped>

</style>