import invoke from "../../utils/invoke";

// GET /api/Category - Get all Category
export const getAllCategory = async (token) => {
  const { data } = await invoke({
    url: `/api/Category`,
    method: "GET",
    token,
  });
  return data;
};
