<template>
  <dir>
    <ul>
      <li v-for="(items, ind) in ['A', 'B', 'C']" :key="ind">
        {{ items }}
      </li>
    </ul>
    <ul>
      <li v-for="(items, ind) in msDataArray" :key="ind">
        {{ items }}
      </li>
    </ul>

    <!-- nested object loop -->
    <ul>
      <h1>nested object loop</h1>
      <li v-for="(items, ind) in msDataObject" :key="ind">
        {{ items.title }} {{ items.price }}
      </li>
    </ul>
    <!-- destructuring loop -->
    <ul>
      <h1>destructuring object loop</h1>
      <li v-for="({ title, price }, ind) in msDataObject" :key="ind">
        {{ title }} {{ price }}
      </li>
    </ul>

    <!-- Dynamic -->

    <div>
      <input type="text" placeholder="title" v-model="course.title" />
      <input type="number" placeholder="price" v-model="course.price" />
      <button @click="addCourse">Add</button>
    </div>

    <ul>
      <li v-for="(course, ind) in dynamicObject" :key="ind">
        Title : {{ course.title }} Price : {{ course.price }}
        <button @click="deleteCourse(ind)">X</button>
      </li>
    </ul>
  </dir>
</template>

<script>
export default {
  data() {
    return {
      msDataArray: ["C", "D", "E"],
      msDataObject: [
        { title: "tt1", price: 11 },
        { title: "tt2", price: 12 },
        { title: "tt3", price: 13 },
      ],
      dynamicObject: [],
      course: {
        title: "",
        prcie: 0,
      },
    };
  },
  methods: {
    addCourse() {
      this.dynamicObject.push(this.course);
      this.course = { title: "", prcie: 0 };
    },
    deleteCourse(ind) {
      this.dynamicObject.splice(ind, 1); // [splice เหมือนการหยิบออกไปเอาที่เหลือมาประกบกัน ใช้ได้เลยไม่ต้องเก็บบน variable] [slice เอาตัวที่หยิบไปเป็น array] [fliter กรองเฉพาะเงื่อนไขที่อยากได้]
    },
  },
};
</script>

<style></style>
