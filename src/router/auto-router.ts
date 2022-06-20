import { RouteRecordRaw } from "vue-router";

export default function () {
  const files = import.meta.glob("../pages/**/*.vue");
  const routes: RouteRecordRaw[] = [];

  for (const [path, component] of Object.entries(files)) {
    const routePath = path.substring(8, path.length - 4).replace("index", "");

    routes.push({
      path: routePath,
      component: component,
    });
  }

  return routes;
}
