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

export const forgot = async (user) => {
  const { data } = await invoke({
    url: `/api/Auth/forgot-password`,
    method: "POST",
    data: user,
  });
  return data;
};

export const reset = async (user) => {
  const { data } = await invoke({
    url: `/api/Auth/reset-password`,
    method: "POST",
    data: user,
  });
  return data;
};

// GET /api/Auth/GetOrganizers - Get all organizers
export const getOrganizers = async (token) => {
  const { data } = await invoke({
    url: `/api/User/GetOrganizers`,
    method: "GET",
    token,
  });
  return data;
};

// GET /api/Auth/GetAllUser - Get all organizers
export const getUser = async (token) => {
  const { data } = await invoke({
    url: `/api/User`,
    method: "GET",
    token,
  });
  return data;
};
