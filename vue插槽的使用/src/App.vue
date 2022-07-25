<template>
  <div id="app">
    <Slot1 title="名字">
      <template scope="aaaaa">
        <!-- {{zhangyu.name}} -->
        <ul>
          <li v-for="(item, index) in aaaaa.mingzi" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Slot1>

    <Slot1 title="名字">
      <template scope="aaaaa">
        <!-- {{zhangyu.name}} -->
        <ol>
          <li v-for="(item, index) in aaaaa.mingzi" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Slot1>
  </div>
</template>

<script>
import Slot1 from "../src/views/slot1.vue";
export default {
  data() {
    return {};
  },
  components: { Slot1 },
};
</script>

<style lang="less" scoped></style>
