import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    (NEXT_PUBLIC_SUPABASE_URL = "//tigglbvkmthmxnjacpet.supabase.co"),
    (NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY =
      "sb_publishable_WyaCiVJOVqG_MMFm-tVdQQ_OFbfWDhl"),
  );
}
