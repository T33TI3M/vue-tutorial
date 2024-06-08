<template>
  <div id="footer">
    <span class="footer" :style="{ color: textColor }"> {{ title }} </span>
  </div>
</template>

<script>
export default {
  name: "FooterMutiword",
  mounted() {
    setInterval(() => {
      //  $emit(method , payload) เป็น method ที่ใช้เพื่อส่งข้อมูลเข้าไปใน onClock event ทำเพื่อส่งข้อมูล child ไป parent component
      this.$emit("onClock", Date());
    }, 100);
  },
  props: ["title", "textColor"],
};
</script>

<style scoped></style>
