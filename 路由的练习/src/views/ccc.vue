<template>
    <div>
          <h3>名字：{{$route.query.id}}</h3>
          <!-- 简易写法 接收值 -->
          <h3>内容：{{one}}</h3>
          <h3>等级：{{two}}</h3>
         
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        
        props:['one','two']
    }
</script>

<style lang="less" scoped>

</style>