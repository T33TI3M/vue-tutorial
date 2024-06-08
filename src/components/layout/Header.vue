<template>
  <div>
    <ul class="Navigator">
      <li><router-link to="/"> Home</router-link></li>
      <li><router-link to="/Demo1"> demo1_Route</router-link></li>
      <li><router-link to="/Demo2"> demo2_Event</router-link></li>
      <li><router-link to="/Demo3"> demo3_Data</router-link></li>
      <li><router-link to="/Demo4"> demo4_Compute</router-link></li>
      <li><router-link to="/Demo5"> demo5_Binding</router-link></li>
      <li><router-link to="/Demo6"> demo6_Form</router-link></li>
      <li><router-link to="/Demo7"> demo7_Slot</router-link></li>
      <li><router-link to="/Demo8"> demo8_Conditions</router-link></li>
      <li><router-link to="/Demo9"> demo9_Loop</router-link></li>
      <li><router-link to="/Demo10"> demo10_LifeCycle</router-link></li>
      <li><router-link to="/Demo11"> demo11_StateAndNormal</router-link></li>
      <li><router-link to="/Demo12"> demo12_Ref</router-link></li>
      <li><router-link to="/Demo13"> demo13_Filters</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MultiWordHeader",
};
</script>

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
