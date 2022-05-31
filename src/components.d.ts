import VueFeather from "vue-feather";
import { VueMasonryPlugin } from "vue-masonry";

declare module "vue" {
  export interface GlobalComponents {
    VueFeather: typeof VueFeather;
    VueMasonry: any;
  }
}
