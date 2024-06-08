<template>
  <div>
    <h1 ref="title">Waiting CodeRef</h1>
    <input ref="input1" type="text" />
  </div>
</template>

<script>
export default {
  mounted() {
    // $ref['custom-name'] เป็นการทำให้เหมือนเราสามารถใช้ propertyต่างๆ เวลาที่เรา getElementById ได้ พวก Dom อะไรพวกนี้
    this.$refs["title"].textContent = "Code Ref Changed";
    this.$refs["input1"].focus();
  },
};
</script>

<style></style>
