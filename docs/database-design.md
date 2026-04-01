# System Design Document

## 1. High Level Architecture

System architecture consists of four main layers.

Client Layer
API Layer
Data Layer
AI Layer

---

Application Layer
      │
      ▼
MongoDB (Operational DB)
      │
      ▼
ETL Pipeline
      │
      ▼
MySQL (Analytics DB)
      │
      ▼
Python ML Service

---

## 2. Architecture Components

### 2.1 Frontend

Technology:

React

Responsibilities:

* user interface
* dashboards
* product catalog
* analytics charts


---

### 2.2 Backend API

Technology:

Node.js + Express

Responsibilities:

* authentication
* product APIs
* order APIs
* analytics queries
* integration with ML service

---

### 2.3 Operational Database

Technology:

MongoDB

Stores:

* users
* products
* orders
* cart
* sessions

Optimized for:

* fast writes
* flexible schema

---

### 2.4 Analytics Database

Technology:

MySQL

Stores:

* order metrics
* customer analytics
* product statistics

Used for:

* reporting
* advanced SQL queries
* ML feature engineering

---

### 2.5 ML Service

Technology:

Python + FastAPI

Provides:

* recommendation engine
* customer clustering
* demand forecasting

---

## 3. Data Flow

### Order Processing Flow

1. Customer places order
2. API stores order in MongoDB
3. ETL job moves data to MySQL
4. Analytics queries update dashboards

---

### Recommendation Flow

1. User opens product page
2. Backend calls ML service
3. ML model fetches data from MySQL
4. Model returns recommended products

---

## 4. Scalability Design

Strategies:

* caching with Redis
* MySQL read replicas
* MongoDB sharding
* asynchronous jobs

---

## 5. Fault Tolerance

System reliability methods:

* retry mechanisms
* background job queue
* database backups
* circuit breaker patterns



MongoDB  Database Design -
    user activity and Transactions:-
        Collections:
            users
            products
            orders
            carts
            events
            reviews




2.1 Users Collection

Purpose
Stores user account information.

Example document:

{
  _id: ObjectId,
  name: "John Doe",
  email: "john@example.com",
  password_hash: "hashed_password",
  role: "customer",
  created_at: Date,
  last_login: Date
}

Indexes:

email (unique)
created_at


2.2 Products Collection

Purpose
Stores product catalog.

Example:

{
  _id: ObjectId,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 120,
  description: "...",
  created_at: Date,
  updated_at: Date
}

Indexes:

category
price
created_at


2.3 Orders Collection

Purpose
Stores customer orders.

Example:

{
  _id: ObjectId,
  user_id: ObjectId,
  items: [
    {
      product_id: ObjectId,
      quantity: 2,
      price: 799
    }
  ],
  total_price: 1598,
  status: "completed",
  created_at: Date
}

Indexes:

user_id
created_at
status


2.4 Cart Collection

Stores temporary cart items.

Example:

{
  _id: ObjectId,
  user_id: ObjectId,
  items: [
     { product_id, quantity }
  ],
  updated_at: Date
}



2.5 Events Collection

Tracks user behavior for analytics.

Example:

{
  _id: ObjectId,
  user_id: ObjectId,
  product_id: ObjectId,
  event_type: "view",
  timestamp: Date
}

Event types:

view
add_to_cart
purchase
click

Indexes:

user_id
product_id
timestamp

These events feed the analytics database.


3. MySQL Database Design (Analytics)

MySQL stores structured tables optimized for SQL analysis.

Tables:

dim_users
dim_products
fact_orders
fact_order_items
fact_events
customer_metrics
product_metrics

This follows a data warehouse star schema.


3.1 Users Dimension Table
dim_users

Columns:

user_id (PK)
name
email
created_at
country

Purpose
Used for customer analytics.


3.2 Products Dimension Table
dim_products

Columns:

product_id (PK)
name
category
price
created_at

Indexes:

category
price


3.3 Orders Fact Table
fact_orders

Columns:

order_id (PK)
user_id (FK)
total_price
status
created_at

Indexes:

user_id
created_at


3.4 Order Items Fact Table
fact_order_items

Columns:

id (PK)
order_id (FK)
product_id (FK)
quantity
price

Indexes:

product_id
order_id


3.5 Events Fact Table
fact_events

Columns:

event_id
user_id
product_id
event_type
timestamp

Indexes:

user_id
product_id
timestamp



3.5 Events Fact Table
fact_events

Columns:

event_id
user_id
product_id
event_type
timestamp

Indexes:

user_id
product_id
timestamp


3.6 Customer Metrics Table

Stores aggregated analytics.

customer_metrics

Columns:

user_id
total_orders
total_spent
avg_order_value
last_purchase_date

Used for customer segmentation ML.


3.7 Product Metrics Table
product_metrics

Columns:

product_id
total_sales
total_revenue
total_views
conversion_rate

Used for recommendation system.