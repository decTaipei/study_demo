<template>
  <div id="app">
    <Slot1></Slot1>
    <hr>
    <Slot2></Slot2>
    <hr>
    <Slot3></Slot3>
    <!-- <Slot1 title="名字">
      <template scope="aaaaa">
        
        <ul>
          <li v-for="(item, index) in aaaaa.demo.mingzi" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Slot1>

    <Slot1 title="名字">
      <template scope="aaaaa">
   
        <ol>
          <li v-for="(item, index) in aaaaa.demo.love" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Slot1> -->
  </div>
</template>

<script>
import Slot1 from "../src/views/slot1.vue";
import Slot2 from "../src/views/slot2.vue";
import Slot3 from "../src/views/slot3.vue";
export default {
  data() {
    return {};
  },
  components: { Slot1,Slot2,Slot3 },
};
</script>

<style lang="less" scoped></style>
