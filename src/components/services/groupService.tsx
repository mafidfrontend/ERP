import axios from "@/lib/axios";

export const getGroupItems = async () => {
  const res = await axios.get("/group");
  return res.data;
};