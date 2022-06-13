import { createClient } from "@supabase/supabase-js";
import { supabase_url, supabase_key } from "@/config.json";

const supabase = createClient(supabase_url, supabase_key);

const getPublicBucket = () =>
  supabase.storage.getBucket("public").then((x) => x.data);

export default supabase;
export { getPublicBucket };
