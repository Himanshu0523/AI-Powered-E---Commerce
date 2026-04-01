import API from "./api";

export const getProducts = () => API.get("/products");

export const getProduct = (id) => API.get(`/products/${id}`);

export const createProduct = (product) => API.post("/products", product);

export const updateProduct = (id, product) => API.put(`/products/${id}`, product);

export const deleteProduct = (id) => API.delete(`/products/${id}`);

// Advanced Queries
export const searchProducts = (query) => API.get("/products/search" , {params: { q: query}});

export const filterProducts = (filters) => API.get("/products/filter" , {params: filters});

export const sortProducts = (sort) => API.get("/products/sort" , {params: { sort }});

export const getProductsByPage = (page) => API.get(`/products/page/${page}`);   