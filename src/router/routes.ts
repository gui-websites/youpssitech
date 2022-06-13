import { RouteRecordRaw } from "vue-router";
import { route } from "./tools";

const routes: Array<RouteRecordRaw> = [
  route("Accueil", "/"),
  route("Yournal", "/yournal"),
];

export default routes;
