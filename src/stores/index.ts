import { CustomMap } from "@/api/tools";
import { getSocials, getYournaux, getMembers } from "@/api";
import persisted from "./persisted-data";

const socials = persisted(getSocials, []);
const yournaux = persisted(getYournaux, []);
const members = persisted(getMembers, new CustomMap());

export { socials, yournaux, members };
