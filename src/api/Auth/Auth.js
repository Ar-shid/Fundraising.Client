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
