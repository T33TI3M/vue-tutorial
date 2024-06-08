<template>
  <div>
    <!-- Modify Content in Clock with slot -->

    <Clock>
      <span style="color: red"> เวลาปัจจุบัน : </span>
    </Clock>

    <Clock>
      <span style="color: green"> Time is : </span>
    </Clock>

    <!-- slot Fallback  คือการกำหนด default template -->
    <Clock> </Clock>

    <!-- V-slot Naming for Multiple Slots -->
    <!-- จะใช้เวลาจะ overinding template เช่น table tr td -->
    <Clock>
      <template v-slot:header>
        <h1>Header Slot</h1>
      </template>

      <span style="color: red"> เวลาปัจจุบัน : </span>

      <template v-slot:footer>
        <h1>Footer Slot</h1>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "../components/helper/Clock.vue";
export default {
  name: "SlotDemo",
  components: {
    Clock,
  },
};
</script>

<style></style>
