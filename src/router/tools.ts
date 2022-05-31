import { RouteRecordRaw } from "vue-router";

// Exports

export { route, adminRoute };

// Methods

const route = (name: string, path: string): RouteRecordRaw => {
  return {
    name: name,
    path: path,
    component: () => import(`../pages/${path == "/" ? "/index" : path}.vue`),
  };
};

function adminRoute(name: string, path: string): RouteRecordRaw {
  const r = route(name, path);
  r.meta = {
    middleware: adminMiddleware,
  };

  return r;
}

function adminMiddleware() {}
