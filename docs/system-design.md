# System Design Document

## 1. High Level Architecture

System architecture consists of four main layers.

Client Layer
API Layer
Data Layer
AI Layer

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
