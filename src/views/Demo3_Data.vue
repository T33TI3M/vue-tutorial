<template>
  <div>
    <h1>Data</h1>
    <button @click="count++">Count++</button>
    <span>{{ count }}</span>
    <div>{{ message }}</div>
    <div>{{ isLogin }}</div>
    <input type="text" v-model="message" placeholder="Enter ur message" />
    <h1 v-if="message === 'yahoo'">Yahoo</h1>
    <div>Dictionary object {{ account }}</div>
    <div>in object {{ account.username }} {{ account.password }}</div>
    <div>Array {{ courses }}</div>
    <div>index at 0 of the Array is {{ courses[0] }}</div>
    <ul>
      <li v-for="(items, ind) in courses" :key="ind">{{ ind }} {{ items }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo3_Data",

  // mounted เหมือน useeffect แต่ว่าไม่มีการ subscibe ค่าใน dependencies คือทำงานหลัง component render รอบเดียวจบ
  mounted() {
    this.message = "Welcome to Code";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogin: false,
      account: {
        username: "admin",
        password: "1234",
      },
      courses: ["angular", "Vuejs", "React"],
    };
  },
};
</script>

<style>
li {
  list-style-type: none;
}
</style>
