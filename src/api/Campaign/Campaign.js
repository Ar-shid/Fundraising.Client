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

// POST /api/Compaign - Create new campaign (Form data)
export const createCampaign = async (campaignData, token) => {
  // Debug: Log what's being sent to the API
  console.log('API Function - campaignData:', campaignData);
  if (campaignData instanceof FormData) {
    console.log('API Function - FormData contents:');
    for (let [key, value] of campaignData.entries()) {
      console.log(`${key}:`, value);
    }
  }

  const { data } = await invoke({
    url: `/api/Compaign`,
    method: "POST",
    data: campaignData,
    token,
    // Note: Don't set Content-Type for FormData, let the browser set it automatically
    // with the correct boundary
  });
  return data;
};

// GET /api/Compaig/{id} - Get campaign by ID
export const getCampaignById = async (id, token) => {
  const { data } = await invoke({
    url: `/api/Compaig/${id}`,
    method: "GET",
    token,
  });
  return data;
};

// PUT /api/Compaig/{id} - Update campaign by ID (Form data)
export const updateCampaign = async (id, campaignData, token) => {
  const { data } = await invoke({
    url: `/api/Compaig/${id}`,
    method: "PUT",
    data: campaignData,
    token,
    // Note: Don't set Content-Type for FormData, let the browser set it automatically
    // with the correct boundary
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
