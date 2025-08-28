import invoke from "../../utils/invoke";

// GET /api/cart - Get cart by cartKey and userId
export const getCart = async (cartKey, userId, token) => {
  const { data } = await invoke({
    url: `/api/cart?cartKey=${cartKey}&userId=${userId}`,
    method: "GET",
    token,
  });
  return data;
};

// POST /api/cart - Add item to cart
export const addToCart = async (cartData, token) => {
  const { data } = await invoke({
    url: `/api/cart`,
    method: "POST",
    data: cartData,
    token,
  });
  return data;
};

// POST /api/cart/remove - Remove item from cart
export const removeFromCart = async (cartKey, userId, productId, token) => {
  const { data } = await invoke({
    url: `/api/cart/remove?cartKey=${cartKey}&userId=${userId}&productId=${productId}`,
    method: "POST",
    token,
  });
  return data;
};

// POST /api/cart/clear - Clear cart
export const clearCart = async (cartKey, userId, productId, token) => {
  const { data } = await invoke({
    url: `/api/cart/clear?cartKey=${cartKey}&userId=${userId}&productId=${productId}`,
    method: "POST",
    token,
  });
  return data;
};
