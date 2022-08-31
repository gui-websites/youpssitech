import supabase from "./supabase";
import { useRoute } from "vue-router";

export default useAnalytics;

async function useAnalytics() {
  if (window.location.hostname == "localhost") return;

  const date = getDate();
  const page = useRoute().fullPath;

  const table = supabase.from<Analytics>("Analytics");

  const { data } = await table.select("*").eq("date", date).eq("page", page);
  if (!data) return;

  if (data.length == 0) {
    await table.insert({ date, page });
  } else {
    await table
      .update({ visits: data[0].visits + 1 })
      .eq("date", date)
      .eq("page", page);
  }
}

function getDate() {
  const time = new Date();
  return (
    time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate()
  );
}

type Analytics = {
  date: string;
  page: string;
  visits: number;
};
