import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    (process.env.NEXT_PUBLIC_SUPABASE_URL =
      "https://tigglbvkmthmxnjacpet.supabase.co"),
    (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY =
      "sb_publishable_WyaCiVJOVqG_MMFm-tVdQQ_OFbfWDhl"),
  );
}
