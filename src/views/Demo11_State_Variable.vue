<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
    <button @click="timeStamp = Date.now()">Update timeStamp</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

const value = ref("dasd");
const value1 = reactive({ count: 1 });

export default {
  // เมื่อ state variable ใน data เปลี่ยนแปลง และมีการเรียกใช้งาน เจ้าตัว template หรือ component จะ render ใหม่
  // normal variable จะไม่ส่งผลต่อการ render component

  data() {
    return {
      count: 0, // state variable
    };
  },

  created() {
    this.timeStamp = 0; // normal variable
  },
  mounted() {
    // setInterval(() => {
    //   this.count++;
    // }, 1000);
  },
};
</script>

<style></style>
