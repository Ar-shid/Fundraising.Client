import invoke from "../../utils/invoke";

export const register = async (user) => {
  const { data } = await invoke({
    url: `/api/Auth/register`,
    method: "POST",
    data: user,
  });
  return data;
};

export const login = async (user) => {
  const { data } = await invoke({
    url: `/api/Auth/login`,
    method: "POST",
    data: user,
  });
  return data;
};

// GET /api/Auth/GetOrganizers - Get all organizers
export const getOrganizers = async (token) => {
  const { data } = await invoke({
    url: `/api/Auth/GetOrganizers`,
    method: "GET",
    token,
  });
  return data;
};
