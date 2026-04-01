import API from "./api";

// Get all users (admin)
export const getUsers = () =>
  API.get("/users");

// Get single user
export const getUser = (id) =>
  API.get(`/users/${id}`);

// Update profile
export const updateUser = (id, data) =>
  API.put(`/users/${id}`, data);

// Delete user
export const deleteUser = (id) =>
  API.delete(`/users/${id}`);