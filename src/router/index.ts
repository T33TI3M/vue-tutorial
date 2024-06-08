import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Demo1 from "../views/Demo1_Route.vue";
import Demo2 from "../views/Demo2_Event.vue";
import Demo3 from "../views/Demo3_Data.vue";
import Demo4 from "../views/Demo4_Compute.vue";
import Demo5 from "../views/Demo5_Binding.vue";
import Demo6 from "../views/Demo6_Form.vue";
import Demo7 from "../views/Demo7_Slot.vue";
import Demo8 from "../views/Demo8_Conditions.vue";
import Demo9 from "../views/Demo9_Loop.vue";
import Demo10 from "../views/Demo10_LifeCycle.vue";
import Demo11 from "../views/Demo11_State_Variable.vue";
import Demo12 from "../views/Demo12_Ref.vue";
import Demo13 from "../views/Demo13_Filter.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/demo1",
    name: "demo1",
    component: Demo1,
  },
  {
    path: "/demo2",
    name: "demo2",
    component: Demo2,
  },
  {
    path: "/demo3",
    name: "demo3",
    component: Demo3,
  },
  {
    path: "/demo4",
    name: "demo4",
    component: Demo4,
  },
  {
    path: "/demo5",
    name: "demo5",
    component: Demo5,
  },
  {
    path: "/demo6",
    name: "demo6",
    component: Demo6,
  },
  {
    path: "/demo7",
    name: "demo7",
    component: Demo7,
  },
  {
    path: "/demo8",
    name: "demo8",
    component: Demo8,
  },
  {
    path: "/demo9",
    name: "demo9",
    component: Demo9,
  },
  {
    path: "/demo10",
    name: "demo10",
    component: Demo10,
  },
  {
    path: "/demo11",
    name: "demo11",
    component: Demo11,
  },
  {
    path: "/demo12",
    name: "demo12",
    component: Demo12,
  },
  {
    path: "/demo13",
    name: "demo13",
    component: Demo13,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
