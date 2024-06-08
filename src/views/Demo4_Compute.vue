<template>
  <h1>Compute and Methods Tutorial</h1>

  <p>
    {{ firstName }}
  </p>
  <p>
    {{ lastName }}
  </p>

  {{ getAlert }}

  <!-- 
    Compute 1.จะเก็บค่าเดิมเอาไว้แล้วแสดงออกมา 2.ไม่ต้องมี () เวลาเรียกใช้ผ่าน interpolation  
     คล้าย useMemo ใน react เป็นการ cache ค่าเอาไว้ใช้ซ้ำาจะได้ไม่เปลือง memory 
-->
  <h2>Random No. form compute property : {{ getRandNoFromCompute }}</h2>
  <h2>Random No. form compute property : {{ getRandNoFromCompute }}</h2>

  <!-- Methods จะเก็บค่าใหม่เรื่อยๆ -->
  <h2>Random No. form method {{ getRandNoFromMethods() }}</h2>
  <h2>Random No. form method {{ getRandNoFromMethods() }}</h2>
</template>

<script>
export default {
  data() {
    return {
      firstName: "ff",
      lastName: "ll",
    };
  },
  methods: {
    getRandNoFromMethods() {
      return Math.random();
    },
  },
  computed: {
    getFullName() {
      return this.firstName + " " + this.lastName;
    },
    getRandNoFromCompute() {
      return Math.random();
    },
  },
};
</script>

<style></style>
