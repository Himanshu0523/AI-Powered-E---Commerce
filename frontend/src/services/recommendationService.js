import API from "./api";

// Get recommendation
export const getRecommendations = (userId) => 
    API.get(`/recommendations/${userId}`)

// Optional advanced features
export const getRecommendationsByProduct = (productId) => 
    API.get(`/recommendations/product/${productId}`)

export const getRecommendationsByCategory = (categoryId) => 
    API.get(`/recommendations/category/${categoryId}`)

export const getRecommendationsByBrand = (brandId) => 
    API.get(`/recommendations/brand/${brandId}`)    