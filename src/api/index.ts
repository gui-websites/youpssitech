import { partition, loadImage } from "./tools";
import supabase, { getPublicBucket } from "./supabase";

const SUPABASE_BUCKET = "public";

// === Exports ===

export { getYournaux, getSocials };
export { Yournal, Social };

// === Methods ===

async function getYournaux(): Promise<Yournal[]> {
  const { data, error } = await supabase
    .from<YournalSupabase>("Yournaux")
    .select("*");
  if (error) return [];

  const loadFile = (path: string) =>
    supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(path).publicURL ?? "";

  const downloadFile = async (path: string) => {
    const { data, error } = await supabase.storage
      .from(SUPABASE_BUCKET)
      .download(path);

    console.log(error);
    return data;
  };

  const list: Yournal[] = await Promise.all(
    data
      .sort((a, b) => a.id - b.id)
      .map(async (x) => ({
        name: x.name,
        cover: loadFile(x.cover),
        download: await loadFile(x.download),
      }))
  );

  return list;
}

async function getSocials(): Promise<Social[]> {
  const { data } = await supabase.from<Social>("Socials").select("*");
  return data ?? [];
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
