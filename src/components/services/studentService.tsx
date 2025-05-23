import axios from "@/lib/axios";

export const getStudentItems = async () => {
  const res = await axios.get("/student");
  return res.data;
};