import pocketbase from "@/api/pocketbase";

// === EXPORTS ===

export { getYournaux, Yournal };

// === METHODS ===

async function getYournaux(): Promise<Yournal[]> {
  try {
    //
    const list = await pocketbase.records.getFullList("yournaux");
    const yournaux: Yournal[] = list.map((record: any) => ({
      name: record.name,
      cover: pocketbase.records.getFileUrl(record, record.cover),
      download: pocketbase.records.getFileUrl(record, record.download),
    }));

    return yournaux;
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ===

type Yournal = {
  name: string;
  cover: string;
  download: string;
};
