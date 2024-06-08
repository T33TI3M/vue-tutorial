<template>
  <div>
    <!-- ใส่ค่าใน slot เพื่อกำหนด default -->

    <slot name="header"></slot>
    <slot>ตอนนี้คือ</slot>
    {{ time }}
    <slot name="footer"></slot>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ClockVue",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("MM/DD/YYYY hh:mm:ss");
    }, 100);
  },
};
</script>

<style></style>
