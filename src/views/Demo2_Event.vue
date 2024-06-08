<template>
  <div id="app2">
    <h1>Event and Method</h1>
    <button v-on:click="clickMe">ClickMe</button>
    <button v-on:click="clickMe2('Welcome to Vue')">ClickMe2</button>
    <button @click="clickMe2('Welcome to vueShort')">ClickMe3</button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "demoEvent2",
  // mounted()  initial  component คล้ายๆ useeffect เกิดหลัง component render เสร็จแล้ว หรือมีการ refresh หน้าเว็บ แต่อันนี้ไม่ได้จัดการ side effect
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      alert("is mounted");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    },
  },
};
</script>

<style></style>
