<template>
  <h1>Demo6_Form</h1>

  <!-- Modifier คือ . หลัง event หรือ directive  คือ ตัวปรับแต่งแบบ shortcut เช่น [ .prevent .trim .lazy .number ]  -->
  <!-- Modifier .lazy เมื่อ user focus ที่ input อื่น หรือกด enter ถึงจะเอาค่ามาใส่ในผลลัพธ์ ช่วยให้ไม่ต้องเก็บซ้ำๆ-->
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

    <div>
      <label for="age">Age</label>
      <input type="number" name="age" v-model="applicant.age" />
      <!-- OR ใช้ Modifier-->
      <!-- <input type="text" name="age" v-model.number="applicant.age" /> -->
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
        age: 0,
        course: "react",
      },
    };
  },
  methods: {
    clearForm() {
      this.applicant = {
        firstName: "",
        lastName: "",
        age: 0,
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
