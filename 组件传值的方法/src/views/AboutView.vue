<template>
  <div>
    <h1>欢迎你{{zhangyu}}</h1>
    <span>我是About组件</span>
    <input type="text" v-model="myname">
    年龄:{{age+1}}
    性别:{{sex}}
    <button @click="upname()">点击换名字</button>
    
  </div>   
</template>

<script>

  export default {
    data(){
      return{
       zhangyu:'张宇',
       myname:this.name
      }

    },
    methods: {
      upname(){
        // if( this.myname = '郑元祺'){
        //   this.myname = '12'
        // }
       
        console.log(this.myname)
      }
    },
    props:{
      name:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        default:18
      },
      sex:{
        type:String,
        required:true
      }
    }
    // props:['name','age','sex']
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String
    // }
  //   props:{
  //     name:{
  //       type:String,
  //       required:true
  //     },
  //     age:{
  //       type:Number,
  //       default:99
  //     },
  //     sex:{
  //       type:String,
  //       required:true
  //     }
  //   }
 }
</script>
