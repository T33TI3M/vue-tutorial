<template>
  <div>
    <!-- v-if  -->
    <div v-if="type === 'A'">I am A</div>
    <div v-else-if="type === 'B'">I am B</div>
    <div v-else-if="type === 'C'">I am C</div>
    <div v-else>Not A B and C</div>

    <div v-if="isShow">Blink 1</div>
    <div v-else>Blink 2</div>

    <!-- v-show ตือการกำหนดเงื่อนไขว่า if true ให้ display: block | false = display:none       -->

    <div v-show="isShow">Blink V-Show</div>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      this.isShow = false;
    }, 2000);
  },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style></style>
