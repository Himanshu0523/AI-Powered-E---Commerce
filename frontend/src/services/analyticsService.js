import API from "./api";

// DashBoard analytics
export const getAnalytics = (params) => API.get("/analytics" , {params});

export const getSalesByProduct = (params) => API.get("/analytics/sales-by-product" , {params});

