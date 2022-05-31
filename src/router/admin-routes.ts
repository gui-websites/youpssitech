import { RouteRecordRaw } from "vue-router";
import { adminRoute as route } from "./tools";

const adminRoutes: RouteRecordRaw[] = [
  route("Admin Section", "/admin/"),
  route("About", "/admin/about"),
  route("Gallery", "/admin/gallery"),
];

export default adminRoutes;
