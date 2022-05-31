import { RouteRecordRaw } from "vue-router";
import { route } from "./tools";

const routes: Array<RouteRecordRaw> = [
  route("Accueil", "/"),
  route("Évenements", "/events"),
  route("Qui sommes-nous", "/about"),
  route("Gallerie", "/gallery"),
  route("Map Monde", "/map"),
  route("Contact", "/contact"),
];

export default routes;
