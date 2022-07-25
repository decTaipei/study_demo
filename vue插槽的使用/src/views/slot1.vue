<template>
    <div> 
        <h1>{{ title }}分类</h1> 
         <slot :mingzi="mingzi"></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                 mingzi: ["zy", "zyq", "cyq"],
                 
            }
        },
        props:['title']
    }
</script>

<style lang="less" scoped>

</style>