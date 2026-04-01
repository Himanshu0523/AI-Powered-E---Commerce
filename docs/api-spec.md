# API Specification

All APIs follow REST conventions.

Base URL:

/api/v1

---

# 1. Authentication APIs

## Register User

POST /auth/register

Request:

{
"name": "John",
"email": "[john@email.com](mailto:john@email.com)",
"password": "123456"
}

Response:

{
"message": "User created"
}

---

## Login

POST /auth/login

Response:

{
"token": "jwt_token"
}

---

# 2. Product APIs

## Create Product

POST /products

Body:

{
"name": "Laptop",
"price": 800,
"stock": 10
}

---

## Get Products

GET /products

---

## Update Product

PUT /products/{id}

---

## Delete Product

DELETE /products/{id}

---

# 3. Order APIs

## Create Order

POST /orders

Body:

{
"userId": "123",
"items": [
{"productId":"1","quantity":2}
]
}

---

## Get Orders

GET /orders

---

# 4. Analytics APIs

## Revenue Analytics

GET /analytics/revenue

---

## Top Products

GET /analytics/top-products

---

## Customer Insights

GET /analytics/customers

---

# 5. AI APIs

## Product Recommendations

GET /ai/recommendations/{userId}

---

## Demand Forecast

GET /ai/forecast/{productId}
