<template>
  <h1>Demo6_Form</h1>

  <!-- submit.prevent เป็น shortcut ในการสร้าง event.preventDefault()-->
  <form @submit.prevent="submit">
    <!-- First Name -->
    <div>
      <label for="firstName">FirstName</label>
      <input type="text" name="firstName" v-model="applicant.firstName" />
      <!-- id แทนด้วย v-model -->
    </div>

    <!-- Last Name -->
    <div>
      <label for="lastName">lastName</label>
      <input type="text" name="lastName" v-model="applicant.lastName" />
      <!-- id แทนด้วยv-model -->
    </div>

    <!-- Sex -->
    <div>
      <label for="sex">Male</label>
      <input type="radio" name="sex" value="male" v-model="applicant.sex" />
      <!-- id แทนด้วย v-model -->
      <label for="sex">Female</label>
      <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      <!-- idแทนด้วย v-model -->
    </div>

    <!-- Courses -->
    <div>
      <select name="courses" v-model="applicant.course">
        <option value="react">react</option>
        <option value="vue">vue</option>
        <option value="angular">angular</option>
      </select>
    </div>

    <button type="button" @click="clearForm">Clear</button>
    <button type="submit">Submit</button>
  </form>

  <div>#Spy {{ JSON.stringify(applicant) }}</div>
</template>

<script>
export default {
  data() {
    return {
      applicant: {
        firstName: "",
        lastName: "",
        sex: "male",
        course: "react",
      },
    };
  },
  methods: {
    clearForm() {
      this.applicant = {
        firstName: "",
        lastName: "",
        sex: "male",
        course: "react",
      };
    },
    submit() {
      //   event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
  },
};
</script>

<style></style>
