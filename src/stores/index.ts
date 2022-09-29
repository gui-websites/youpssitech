import { CustomMap } from "@/api/tools";
import {
  getSocials,
  getYournaux,
  getMemberList,
  getCouncils,
  getEvents,
  getPictures,
} from "@/api";
import persisted from "./persisted-data";

const socials = persisted(getSocials, []);
const yournaux = persisted(getYournaux, []);
const list = persisted(getMemberList, []);
const councils = persisted(getCouncils, []);
const events = persisted(getEvents, []);
const pictures = persisted(getPictures, []);

function getLink(name: string) {
  const matches = socials
    .get()
    .filter((s) => s.name.toLowerCase() == name.toLowerCase());
  return matches.length != 0 ? matches[0].link : "";
}

export { socials, yournaux, list, councils, events, pictures };
export { getLink };
