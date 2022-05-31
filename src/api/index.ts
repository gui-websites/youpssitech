import socials from "@/assets/data/socials.json";
import images from "@/assets/data/gallery.json";
import list from "@/assets/data/list.json";
import old_lists from "@/assets/data/old_lists.json";

import { partition, loadImage } from "./tools";
import supabase, { SupabaseSocials } from "./supabase";

// === Exports ===

export { getSocials, getImages, sendMessage, getList, getOldLists };
export { Social, Dept, Member, List };

// === Methods ===

// Gallery

async function getImages(): Promise<string[]> {
  return images.map((rel_path) =>
    loadImage("../assets/images/gallery/" + rel_path)
  );
}

// Socials

async function getSocials(): Promise<Social[]> {
  const { data, error } = await supabase
    .from<SupabaseSocials>("Socials")
    .select("*");
  if (error) return [];

  const socials: Social[] = data.map((x) => ({
    name: x.name,
    icon: x.name.toLowerCase(),
    url: x.url,
  }));

  return socials;
}

interface Social {
  name: string;
  icon: string;
  url: string;
}

// Contact

function sendMessage(email: string, message: string) {
  console.log(email, message);
}

// Get council list

async function getOldLists(): Promise<List[]> {
  return old_lists;
}

interface List {
  icon: string;
  dates: string;
}

async function getList(): Promise<Dept[]> {
  const members: Member[] = list.map((m) => ({
    name: m.Name,
    dept: m.Pole,
    img: loadImage(`../assets/images/faces/${m.Name}.png`),
    leader: m.Responsable != "",
  }));

  const partitions = partition(members, (m) => m.dept);
  const depts: Dept[] = partitions.keySet().map((dept) => ({
    name: dept,
    members: partitions.get(dept),
  }));

  return depts;
}

interface Dept {
  name: string;
  members: Member[];
}

interface Member {
  name: string;
  dept: string;
  img: string;
  leader: boolean;
}
