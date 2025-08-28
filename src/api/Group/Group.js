import invoke from "../../utils/invoke";

// GET /api/group - Get all groups
export const getAllGroups = async (token) => {
  const { data } = await invoke({
    url: `/api/group`,
    method: "GET",
    token,
  });
  return data;
};

// POST /api/group - Create new group (FormData)
export const createGroup = async (groupData, token) => {
  const { data } = await invoke({
    url: `/api/group`,
    method: "POST",
    data: groupData,
    token,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// GET /api/group/{id} - Get group by ID
export const getGroupById = async (id, token) => {
  const { data } = await invoke({
    url: `/api/group/${id}`,
    method: "GET",
    token,
  });
  return data;
};

// PUT /api/group/{id} - Update group by ID (FormData)
export const updateGroup = async (id, groupData, token) => {
  const { data } = await invoke({
    url: `/api/group/${id}`,
    method: "PUT",
    data: groupData,
    token,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// DELETE /api/group/{id} - Delete group by ID
export const deleteGroup = async (id, token) => {
  const { data } = await invoke({
    url: `/api/group/${id}`,
    method: "DELETE",
    token,
  });
  return data;
};
