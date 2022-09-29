import pocketbase from "./pocketbase";
import { useRoute } from "vue-router";

export default useAnalytics;
export { Analytics, getAnalytics };

async function useAnalytics() {
  // if (window.location.hostname == "localhost") return;

  const date = new Date();
  const page = useRoute().fullPath;

  try {
    let rows = await pocketbase.records.getFullList("analytics", 10, {
      filters: `date = ${date} && page = ${page}`,
    });

    if (rows.length == 0) {
      await pocketbase.records.create("analytics", {
        date: date,
        page: page,
        visits: 1,
      });
    } else {
      const record = rows[0];
      record.visits += 1;

      await pocketbase.records.update("analytics", record.id, record);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getAnalytics(): Promise<Analytics[]> {
  try {
    //
    const list = await pocketbase.records.getFullList("analytics");

    const analytics: Analytics[] = list.map((record) => ({
      date: record.date,
      page: record.page,
      visits: record.visits,
    }));

    return analytics;
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ====

type Analytics = {
  date: string;
  page: string;
  visits: number;
};
