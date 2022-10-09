import pocketbase from "@/api/pocketbase";

// === EXPORTS ===

export { getMemberList, Member, Dept };

// === METHODS ===

async function getMemberList(): Promise<Dept[]> {
  try {
    //
    const deptList = await pocketbase.records.getFullList("departments");
    const memberList = await pocketbase.records.getFullList("members");

    const getDeptMembers = (id: string): Member[] =>
      memberList
        .filter((record: any) => record.dept == id)
        .map((record: any) => ({
          name: record.name,
          avatar: pocketbase.records.getFileUrl(record, record.avatar),
          leader: record.leader,
        }));

    const list: Dept[] = deptList.map((record: any) => ({
      name: record.name,
      desc: record.desc,
      members: getDeptMembers(record.id),
    }));

    return list;
    //
  } catch (e) {
    return [];
  }
}

// === TYPES ===

type Dept = {
  name: string;
  desc: string;
  members: Member[];
};

type Member = {
  name: string;
  avatar: string;
  leader: boolean;
};
