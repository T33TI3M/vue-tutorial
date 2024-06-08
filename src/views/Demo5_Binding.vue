<!-- ใน vue Binding คือการ ผูกค่า attributes กับ instance variable -->
<!-- โดยเราต้องใช้คำสั่ง v-bind:attributes หรือแบบ shorthand :attributes -->
<template>
  <div>
    <h1>Binding</h1>
    <img v-bind:src="imageUrl" alt="img" />

    <!-- style class binding -->
    <div :class="error">classBinding</div>
    <div :class="[error, font]">classbindingVue</div>
    <div :class="[false ? error : font]">classbindingVue</div>
    <!-- style dictionary binding style -->
    <div :style="{ color, fontSize: fontSize30 }">bindingStyle</div>
    <div :style="styleObject">bindingStyle</div>

    <!-- event and binding -->
    <div :style="isActive ? styleObject : ''">ToggleActive</div>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://th.bing.com/th?id=OIP.avb9nDfw3kq7NOoP0grM4wHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      error: "errorClass",
      font: "font-custom",
      color: "green",
      fontSize30: "30px",
      styleObject: {
        backgroundColor: "yellow",
        color: "blue",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.errorClass {
  color: red;
}
.font-custom {
  font-size: large;
}
</style>
