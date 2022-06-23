import { partition, loadImage, CustomMap } from "./tools";
import supabase from "./supabase";

const SUPABASE_BUCKET = "public";

// === Exports ===

export { getYournaux, getSocials, getMembers };
export { Yournal, Social, Member, MemberList };

// === Methods ===

async function getMembers(): Promise<MemberList> {
  const { data, error } = await supabase.from<Member>("Members").select("*");
  if (error) return new CustomMap();

  const members: Member[] = data.map((m) => ({
    ...m,
    avatar: loadSupabaseFile(m.avatar),
  }));

  const depts = partition(members, (m) => m.dept);
  return depts;
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

type Member = {
  name: string;
  avatar: string;
  dept: string;
  leader: boolean;
};
