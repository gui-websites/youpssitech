import pocketbase from "@/api/pocketbase";

// === EXPORTS ===

export { getCouncils, Council };

// === METHODS ===

async function getCouncils(): Promise<Council[]> {
  try {
    //
    const list = await pocketbase.records.getFullList("councils");
    const councils: Council[] = list.map((record: any) => ({
      name: record.name,
      year: record.year,
      logo: pocketbase.records.getFileUrl(record, record.logo),
    }));

    return councils.sort((a, b) => b.year - a.year);
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ===

type Council = {
  name: string;
  year: number;
  logo: string;
};
