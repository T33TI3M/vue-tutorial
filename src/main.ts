import { createApp } from "vue";
import App from "./3.Vue-Rounter-style.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
