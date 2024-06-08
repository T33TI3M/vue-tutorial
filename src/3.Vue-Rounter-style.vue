<template>
  <div id="demo1">
    <h1>DemoRoute</h1>

    <Header />
    <Content />
    <!-- Prop sending  -->
    <!-- @onClock คือ event ที่เราสร้างขึ้นเองเพื่อจะรับ data มาจาก child component โดยให้มันส่งเข้าไปใน function onClock -->
    <Footer @onClock="onClock" title="CopyRight 2024" textColor="red" />
    <span>{{ time }}</span>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Content from "./components/layout/Content.vue";
import Footer from "./components/layout/Footer.vue";
import moment from "moment";

export default {
  name: "demoRoute",
  data() {
    return {
      time: "",
    };
  },
  methods: {
    onClock(value) {
      // this.time = value;
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    },
  },

  //  การเรียก child component
  components: {
    Header,
    Content,
    Footer,
  },
};
</script>

<!-- style scoped  กำหนดให้เป็น style แบบ local-->
<style></style>

<!-- * ใช้ร่วมกับ folder router และ views(component of pages)-->

<!-- !  ถ้าจะใช้ก็ไปเปลี่ยนไปเปลี่ยนใน main.ts -->

<!-- 
    1. Router ใช้เพื่อเปลี่ยนหน้า page
    2. ไปแก้ใน router folder คล้าย route ใน react-route-dom ของ react ซึ่งอันนั่นจะต้อง BrowserRouter -> Router -> Route 
 -->
