<template>
  <div id="demo1">
    <h1>DemoRoute</h1>
    <ul class="Navigator">
      <li><router-link to="/"> Home</router-link></li>
      <li><router-link to="/Demo1"> demo1_Route</router-link></li>
      <li><router-link to="/Demo2"> demo2_Event</router-link></li>
      <li><router-link to="/Demo3"> demo3_Data</router-link></li>
      <li><router-link to="/Demo4"> demo4_Compute</router-link></li>
      <li><router-link to="/Demo5"> demo5_Binding</router-link></li>
      <li><router-link to="/Demo6"> demo6_Binding</router-link></li>
    </ul>

    <!-- router-view ใช้พื่อให้สามารถแสดงเนื้อหาตาม path ที่ตั้งเอาไว้ใน route  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "demoRoute",
};
</script>

<!-- style scoped  กำหนดให้เป็น style แบบ local-->
<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin: 50px;
}
</style>

<!-- * ใช้ร่วมกับ folder router และ views(component of pages)-->

<!-- !  ถ้าจะใช้ก็ไปเปลี่ยนไปเปลี่ยนใน main.ts -->

<!-- 
    1. Router ใช้เพื่อเปลี่ยนหน้า page
    2. ไปแก้ใน router folder คล้าย route ใน react-route-dom ของ react ซึ่งอันนั่นจะต้อง BrowserRouter -> Router -> Route 
 -->
