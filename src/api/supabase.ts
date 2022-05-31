import { createClient } from "@supabase/supabase-js";
import { supabase_url, supabase_key } from "@/config.json";

const supabase = createClient(supabase_url, supabase_key);

export default supabase;
export { SupabaseSocials };

// Types

interface SupabaseSocials {
  name: string;
  url: string;
}
