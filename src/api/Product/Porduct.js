import invoke from "../../utils/invoke";

// GET /api/Product - Get all products
export const getAllProducts = async (token) => {
  const { data } = await invoke({
    url: `/api/Product`,
    method: "GET",
    token,
  });
  return data;
};

// POST /api/Product - Create new product (FormData)
export const createProduct = async (productData, token) => {
  const { data } = await invoke({
    url: `/api/Product`,
    method: "POST",
    data: productData,
    token,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// GET /api/Product/{id} - Get product by ID
export const getProductById = async (id, token) => {
  const { data } = await invoke({
    url: `/api/Product/${id}`,
    method: "GET",
    token,
  });
  return data;
};

// PUT /api/Product/{id} - Update product by ID (FormData)
export const updateProduct = async (id, productData, token) => {
  const { data } = await invoke({
    url: `/api/Product/${id}`,
    method: "PUT",
    data: productData,
    token,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// DELETE /api/Product/{id} - Delete product by ID
export const deleteProduct = async (id, token) => {
  const { data } = await invoke({
    url: `/api/Product/${id}`,
    method: "DELETE",
    token,
  });
  return data;
};
