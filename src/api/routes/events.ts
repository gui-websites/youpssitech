import pocketbase from "@/api/pocketbase";

// === EXPORTS ===

export { getEvents, Event };

// === METHODS ===

async function getEvents(): Promise<Event[]> {
  try {
    //
    const list = await pocketbase.records.getFullList("events");
    const events: Event[] = list.map((record: any) => ({
      title: record.title,
      cover: pocketbase.records.getFileUrl(record, record.cover),
      description: record.description,
      has_passed: record.has_passed,
      cta: record.cta == "" ? null : record.cta,
    }));

    return events;
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ===

type Event = {
  title: string;
  cover: string;
  description: string;
  has_passed: boolean;
  cta: string | null;
};
