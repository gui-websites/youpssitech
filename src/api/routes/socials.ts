import pocketbase from "@/api/pocketbase";

// === EXPORTS ===

export { getSocials, Social, SocialProvider, socialsList };

// === METHODS ===

async function getSocials(): Promise<Social[]> {
  try {
    //
    const list = await pocketbase.records.getFullList("socials");
    const socials: Social[] = list.map((record: any) => ({
      name: record.name,
      link: record.link,
    }));

    return socials;
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ===

type Social = {
  name: SocialProvider;
  link: string;
};

type SocialProvider = typeof socialsList[number];

const socialsList = [
  "Discord",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "Reddit",
] as const;
