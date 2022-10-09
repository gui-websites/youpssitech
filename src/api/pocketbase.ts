// import PocketBase from "pocketbase";
import { api_url } from "@/config.json";

import dayjs from "dayjs";

import PocketBase from "pocketbase";

const formatDate = (date: Date) => dayjs(date).format("YYYY-MM-DD HH:MM:SS");
const pocketbase = new PocketBase(api_url);

export default pocketbase;
export { formatDate };
