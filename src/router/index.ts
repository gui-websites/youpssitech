import { createRouter, createWebHistory } from "vue-router";
import userRoutes from "./routes";
import adminRoutes from "./admin-routes";

const routes = [...userRoutes, ...adminRoutes];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
