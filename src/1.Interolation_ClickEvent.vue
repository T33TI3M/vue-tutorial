<template>
  <div>
    <!--  Interpolation  การผูกค่าตัวแปรใน html js expreesion-->
    <h1>Vue-101</h1>
    <!-- title คือ instance variable -->
    <p>{{ title }}</p>
    <!--  @click ย่อมาจาก v-on:click -->
    <button @click="onIncrement">Increment</button>
    <p>{{ count }}</p>
  </div>
</template>
<script>
export default {
  name: "App",
  // data เป็น method ที่กำหนดข้อมูล
  data() {
    return {
      title: "Hello Vue",
      count: 0,
    };
  },

  //  method คือ method ตัว store method เอาไว้
  methods: {
    onIncrement() {
      this.count++;
    },
  },
};
</script>

<style></style>
