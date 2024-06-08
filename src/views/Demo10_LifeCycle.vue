<template>
  <div>
    <h1>LifeCycle</h1>
    <p>{{ count }}</p>
    <button @click="add">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeunmount");
  },
  unmounted() {
    console.log("unmount");
  },
};
</script>

<style></style>
