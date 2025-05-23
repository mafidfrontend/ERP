import axios from "@/lib/axios";

export const getShopItems = async () => {
  const res = await axios.get("/shop");
  return res.data;
};