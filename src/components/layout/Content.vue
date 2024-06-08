<template>
  <div>
    <div class="content-wrapper">
      <!-- router-view ใช้พื่อให้สามารถแสดงเนื้อหาตาม path ที่ตั้งเอาไว้เมื่อมันเปลี่ยนก็แสดงตัวนี้ -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentWrapper",
};
</script>

<style>
.content-wrapper {
  margin: 24px;
  padding: 24px;
  border: 1px dashed gray;
}
</style>
