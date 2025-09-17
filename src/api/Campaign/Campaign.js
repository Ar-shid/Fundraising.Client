import invoke from "../../utils/invoke";

// GET /api/Compaign - Get all campaigns
export const getAllCampaigns = async (token) => {
  const { data } = await invoke({
    url: `/api/Compaign`,
    method: "GET",
    token,
  });
  return data;
};

// GET /api/Compaign - Get campaigns Approval

export const getCampaignApproval = async (token) => {
  const { data } = await invoke({
    url: `/api/Compaign/CompaignApprovals`,
    method: "GET",
    token,
  });
  return data;
};

// GET /api/Compaign - Get campaigns Approval

export const GetOrganizerCompaigns = async (sub, token) => {
  const { data } = await invoke({
    url: `/api/Compaign/GetOrganizerCompaigns${sub}`,
    method: "GET",
    token,
  });
  return data;
};

// POST /api/Compaign - Create new campaign (Form data)

export const createCampaign = async (campaignData, token) => {
  const { data } = await invoke({
    url: `/api/Compaign`,
    method: "POST",
    data: campaignData,
    token,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// GET /api/Compaig/{id} - Get campaign by ID
export const getCampaignById = async (id, token) => {
  const { data } = await invoke({
    url: `/api/Compaign/${id}`,
    method: "GET",
    token,
  });
  return data;
};

// PUT /api/Compaig/{id} - Update campaign by ID (Form data)
export const updateCampaign = async (id, campaignData, token) => {
  const { data } = await invoke({
    url: `/api/Compaign/${id}`,
    method: "PUT",
    data: campaignData,
    token,
    // Note: Don't set Content-Type for FormData, let the browser set it automatically
    // with the correct boundary
  });
  return data;
};

// POST /api/Compaig/{id} - Update campaign Approval
export const updateCampaignApproval = async (id, status, token) => {
  const { data } = await invoke({
    url: `/api/Compaign/UpdateCompaignApprovalAsync/${id}?status=${status}`,
    method: "POST",
    data: status,
    token,
  });
  return data;
};

// DELETE /api/Compaig/{id} - Delete campaign by ID
export const deleteCampaign = async (id, token) => {
  const { data } = await invoke({
    url: `/api/Compaig/${id}`,
    method: "DELETE",
    token,
  });
  return data;
};
