import { CustomMap } from "@/api/tools";
import {
  getSocials,
  getYournaux,
  getList,
  getCouncils,
  getEvents,
  getPictures,
} from "@/api";
import persisted from "./persisted-data";

const socials = persisted(getSocials, []);
const yournaux = persisted(getYournaux, []);
const list = persisted(getList, []);
const councils = persisted(getCouncils, []);
const events = persisted(getEvents, []);
const pictures = persisted(getPictures, []);

export { socials, yournaux, list, councils, events, pictures };
