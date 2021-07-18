import { createRouter, createWebHistory } from "vue-router";
import CountryInfo from "../views/CountryInfo.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/country/:countryName",
    name: "country",
    component: CountryInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
