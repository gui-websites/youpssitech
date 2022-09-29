import pocketbase from "@/api/pocketbase";
import { pictures } from "@/stores";

// === EXPORTS ===

export { getPictures, Picture };

// === METHODS ===

async function getPictures(): Promise<string[]> {
  try {
    //
    const list = await pocketbase.records.getFullList("pictures");

    // const pictures: Picture[] = list.map((record) => ({
    //   img: pocketbase.records.getFileUrl(record, record.image),
    //   tags: record.tags.split(","),
    // }));

    const pictures: string[] = list.map((record) =>
      pocketbase.records.getFileUrl(record, record.image)
    );

    return pictures;
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ===

type Picture = {
  img: string;
  tags: string[];
};
