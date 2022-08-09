import { partition, loadImage, CustomMap } from "./tools";
import supabase from "./supabase";

const SUPABASE_BUCKET = "public";

// === Exports ===

export {
  getYournaux,
  getSocials,
  getList,
  getCouncils,
  getEvents,
  getPictures,
};
export { Yournal, Social, Member, Dept, Council };

// === Methods ===

async function getPictures(): Promise<string[]> {
  const { data } = await supabase.storage
    .from(SUPABASE_BUCKET)
    .list("gallery/");
  if (!data) return [];

  console.log(data);

  return data.map((x) => loadSupabaseFile("gallery/" + x.name));
}

async function getEvents(): Promise<Event[]> {
  const { data } = await supabase.from<Event>("Events").select("*");
  if (!data) return [];

  const events = data.map((x) => ({
    ...x,
    cover: loadSupabaseFile(x.cover),
  }));

  return events;
}

async function getCouncils(): Promise<Council[]> {
  const { data } = await supabase.from<Council>("Councils").select("*");
  if (!data) return [];

  const councils: Council[] = data
    .sort((a, b) => b.year - a.year)
    .map((x) => ({
      ...x,
      logo: loadSupabaseFile(x.logo),
    }));

  return councils;
}

async function getList(): Promise<Dept[]> {
  const { data: depts, error: err1 } = await supabase
    .from<DeptSupabase>("Departments")
    .select("*");

  const { data: members, error: err2 } = await supabase
    .from<MemberSupabase>("Members")
    .select("*");

  if (err1 || err2) return [];

  const list: Dept[] = depts
    .sort((a, b) => a.id - b.id)
    .map(({ id, name, desc }) => ({
      name,
      desc,
      members: members
        .filter((m) => m.dept == id)
        .map((m) => ({
          ...m,
          avatar: loadSupabaseFile(m.avatar),
        })),
    }));

  return list;
}

async function getYournaux(): Promise<Yournal[]> {
  const { data, error } = await supabase
    .from<YournalSupabase>("Yournaux")
    .select("*");
  if (error) return [];

  const list: Yournal[] = await Promise.all(
    data
      .sort((a, b) => a.id - b.id)
      .map(async (x) => ({
        name: x.name,
        cover: loadSupabaseFile(x.cover),
        download: loadSupabaseFile(x.download),
      }))
  );

  return list;
}

async function getSocials(): Promise<Social[]> {
  const { data } = await supabase.from<Social>("Socials").select("*");
  return data ?? [];
}

function loadSupabaseFile(path: string) {
  return (
    supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(path).publicURL ?? ""
  );
}

// === Types ===

type Social = {
  name: string;
  link: string;
};

type YournalSupabase = {
  id: number;
  name: string;
  cover: string;
  download: string;
};

type Yournal = {
  name: string;
  cover: string;
  download: string;
};

type MemberList = CustomMap<string, Member[]>;

type DeptSupabase = {
  id: number;
  name: string;
  desc: string;
};

type Dept = {
  name: string;
  desc: string;
  members: Member[];
};

type MemberSupabase = Member & {
  dept: number;
};

type Member = {
  name: string;
  avatar: string;
  leader: boolean;
};

type Council = {
  name: string;
  year: number;
  logo: string;
};

type Event = {
  title: string;
  cover: string;
  description: string;
};
