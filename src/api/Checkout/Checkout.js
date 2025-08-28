import invoke from "../../utils/invoke";

// GET /api/Checkout - Get checkout by cartKey
export const getCheckout = async (cartKey, token) => {
  const { data } = await invoke({
    url: `/api/Checkout?cartKey=${cartKey}`,
    method: "GET",
    token,
  });
  return data;
};

// POST /api/checkout - Process checkout
export const processCheckout = async (checkoutData, token) => {
  const { data } = await invoke({
    url: `/api/checkout`,
    method: "POST",
    data: checkoutData,
    token,
  });
  return data;
};

// POST /api/Checkout/remove - Remove item from checkout
export const removeFromCheckout = async (cartKey, productId, token) => {
  const { data } = await invoke({
    url: `/api/Checkout/remove?cartKey=${cartKey}&productId=${productId}`,
    method: "POST",
    token,
  });
  return data;
};

// POST /api/Checkout/clear - Clear checkout
export const clearCheckout = async (cartKey, token) => {
  const { data } = await invoke({
    url: `/api/Checkout/clear?cartKey=${cartKey}`,
    method: "POST",
    token,
  });
  return data;
};
