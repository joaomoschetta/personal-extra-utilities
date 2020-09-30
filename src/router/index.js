import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Spreadsheet from "../views/Spreadsheet.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/spreadsheet",
    component: Spreadsheet
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
