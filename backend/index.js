const Supabase = require("@supabase/supabase-js");
const config = require("../src/config.json");
const fs = require("fs");
const sha1 = require("sha1");

const supabase = Supabase.createClient(
  config.supabase_url,
  config.supabase_key
);
const members = require("./data/list.json");

// ================================================================================

for (const m of members) {
  const path = `members/${sha1(m.Name)}.png`;
  const avatar = fs.createReadStream(`./data/faces/${m.Name}.png`);

  supabase.storage
    .from("public")
    .upload(path, avatar, { contentType: "image/png" })
    .then(({ data, error }) => {
      console.log(m.Name, error);
    });

  const member = {
    name: m.Name,
    avatar: path,
    dept: m.Pole,
    leader: m.Responsable != "",
  };

  supabase
    .from("Members")
    .insert(member)
    .then(({ data, error }) => {
      console.log(data, error);
    });
}
