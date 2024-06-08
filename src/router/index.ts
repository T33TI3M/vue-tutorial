import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Demo1 from "../views/Demo1_Route.vue";
import Demo2 from "../views/Demo2_Event.vue";
import Demo3 from "../views/Demo3_Data.vue";
import Demo4 from "../views/Demo4_Compute.vue";
import Demo5 from "../views/Demo5_Binding.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
