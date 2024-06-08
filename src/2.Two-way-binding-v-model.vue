<template>
  <div>
    <!-- MVVM -->
    <h1>v-model</h1>
    <!-- tracking data โดยตรงเหมือนใช้ onChange กับ e.target.value แต่มันเปลี่ยนให้เลยอัตโนมัติ -->
    <!-- two-way binding คือ property binding  และ event binding -->
    <input v-model="message" type="text" placeholder="Enter your message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style></style>
