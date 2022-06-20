import { createRouter, createWebHistory } from "vue-router";
import autoRouter from "./auto-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: autoRouter(),
});

export default router;
