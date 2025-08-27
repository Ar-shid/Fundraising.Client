import invoke from "../../utils/invoke";

// POST /api/Order/create - Create new order
export const createOrder = async (orderData, token) => {
  const { data } = await invoke({
    url: `/api/Order/create`,
    method: "POST",
    data: orderData,
    token,
  });
  return data;
};

// POST /api/Order/create-checkout-session - Create checkout session
export const createCheckoutSession = async (checkoutData, token) => {
  const { data } = await invoke({
    url: `/api/Order/create-checkout-session`,
    method: "POST",
    data: checkoutData,
    token,
  });
  return data;
};
