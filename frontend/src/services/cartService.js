import API from "./api";

// Get user cart
export const getCart = (userId) => API.get(`/cart/${userId}`);

// Save full cart (sync)
export const saveCart = (data) => API.post(`/cart/${data.userId}` , data);

// Update cart
export const updateCart = (data) => API.put("/cart" , data);   

// Clear cart
export const clearCart = (userId) => API.delete(`/cart/${userId}`);

// Add to cart
export const addToCart = (productId , quantity = 1) => API.post("/cart/add" , { productId , quantity});