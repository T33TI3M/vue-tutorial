<!-- ใน vue Binding คือการ ผูกค่า attributes กับ instance variable -->
<!-- โดยเราต้องใช้คำสั่ง v-bind:attributes หรือแบบ shorthand :attributes -->
<template>
  <div>
    <h1>Binding</h1>
    <img v-bind:src="imageUrl" alt="img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://th.bing.com/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    };
  },
};
</script>

<style></style>
