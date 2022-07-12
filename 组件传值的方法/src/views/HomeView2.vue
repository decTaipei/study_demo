<template>
  <div class="box">
    我是孙子组件<br />
    我接受父组件HomeView传的值:{{ live }}
    <button @click="chufaaddtodo">点击给父组件传值并打印</button><br />

    输入名字:<input type="text" v-model="listname" /> 输入年龄:<input
      type="text"
      v-model="listold"
    />
    <input type="button" value="提交" @click="addpush" />
    <ul>
      <li v-for="item in lists" :key="item.id">
        {{ item.id }}---{{ item.name }}---{{ item.old }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: "我是张宇啊",
      listname: "",
      listold: "",
      lists: [
        { id: 1, name: "张宇", old: 21 },
        { id: 2, name: "zyq", old: 21 },
        { id: 3, name: "cyq", old: 22 },
      ],
    };
  },
  props:['addtodo'],
  methods: {
    addpush() {
      if (this.listname && this.listold) {
         
        if (0 <= Number(this.listold) <= 99) {
          this.lists.push({
            id: this.lists.length + 1,
            name: this.listname,
            old: this.listold,
          });
          this.listname = "";
          this.listold = "";
        }else{
            alert('listold错误')
             this.listname = "";
          this.listold = "";
        }
      } else {
        alert("输入不能为空!");
        this.listname = "";
        this.listold = "";
      }
    },
    chufaaddtodo(){
      this.addtodo(this.aaa)
    }
  },
  // props: {
  //   addtodo: "addtodo",
  //   live: {
  //     type: String,
  //     rqeuired: true,
  //   },
  // },
  
};
</script>

<style lang="less" scoped>
.box {
  border: 1px solid rebeccapurple;
}
</style>
