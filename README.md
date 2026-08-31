# Book Store

A full-stack e-commerce application built with the MERN stack, with Redis used as a caching layer for cart operations and Razorpay integrated for payment processing.

The project was built to handle the complete flow from authentication and product browsing to cart management, checkout, payment verification, and order creation.

## Overview

The application follows a client-server architecture where the React frontend communicates with a Node.js/Express backend through REST APIs.

MongoDB is used as the primary persistent database. Redis sits between the application and database for frequently accessed cart data, reducing unnecessary database queries.

Razorpay is integrated into the backend-controlled checkout flow for payment order creation and payment verification.

```text
                    React Frontend
                          |
                     REST APIs
                          |
                 Node.js / Express
                          |
          +---------------+---------------+
          |               |               |
          v               v               v
       MongoDB          Redis          Razorpay
     Persistent DB       Cache        Payment Gateway
```

---

## Core Functionality

### Authentication

The application uses JWT-based authentication.

During registration:

1. User credentials are received by the backend.
2. The password is hashed using bcrypt.
3. The user is stored in MongoDB.
4. A JWT is generated after successful authentication.

For protected API requests, the token is sent with the request. Authentication middleware verifies the token and makes the authenticated user's ID available to the controller.

This user ID is then used for user-specific operations such as cart and order management.

---

## Cart Architecture

The cart was designed with both persistence and performance in mind.

MongoDB provides the persistent storage, while Redis is used as the fast-access layer.

A user's cart is associated with a Redis key based on their user ID:

```text
cart:<userId>
```

For example:

```text
cart:64f8xxxxxxxx
```

### Why Redis is used

Cart operations are frequent. A user can:

* Open the cart
* Add an item
* Remove an item
* Change quantity
* Return to the cart multiple times during checkout

Reading the same data from MongoDB for every request creates unnecessary database operations.

Redis keeps the frequently accessed cart representation in memory.

The application therefore follows a cache-first approach when retrieving cart data.

```text
GET CART
   |
   v
Check Redis
   |
   +---- Cache Hit ----> Parse cached data
   |                         |
   |                         v
   |                    Return cart
   |
   +---- Cache Miss ---> Query MongoDB
                              |
                              v
                        Store in Redis
                              |
                              v
                         Return cart
```

### Redis Data Handling

Redis stores values as strings, so the cart object is serialized before being stored.

```js
await redisClient.set(
  `cart:${userId}`,
  JSON.stringify(cart)
);
```

When the cart is retrieved, the cached JSON string is converted back into a JavaScript object:

```js
const cachedCart = await redisClient.get(
  `cart:${userId}`
);

const cart = JSON.parse(cachedCart);
```

This keeps Redis responsible for fast retrieval while MongoDB remains the persistent data source.

### Cache Consistency

Cart updates need to keep Redis and MongoDB synchronized.

When a cart operation changes the data, the updated cart is persisted and the corresponding Redis entry is updated as well.

The important distinction is:

```text
MongoDB = persistent source of data
Redis    = fast-access cache
```

Redis is therefore not treated as the database itself.

---

## Payment Architecture

Razorpay is integrated into the checkout process through the backend.

The frontend does not directly decide whether a payment should be considered successful.

The payment flow is:

```text
User Cart
    |
    v
Frontend Checkout
    |
    v
Backend
    |
    |  Get cart / calculate amount
    v
Create Razorpay Order
    |
    v
Razorpay Checkout
    |
    v
Payment
    |
    v
Payment Response
    |
    v
Backend Verification
    |
    v
Create / Update Order
```

### Creating the Payment Order

When the user starts checkout, the backend retrieves the user's cart and calculates the amount that should be charged.

The backend then creates a Razorpay order using the server-side Razorpay credentials.

The resulting order information is returned to the frontend, which uses it to initialize the Razorpay checkout.

### Payment Verification

The application does not rely solely on the frontend response to mark an order as paid.

The payment information is sent back to the backend where it can be verified before updating the order/payment status.

This keeps payment-sensitive operations on the server side.

The current implementation uses Razorpay's test environment.

---

## Order Flow

The cart and order are treated as separate concepts.

The cart represents the user's current selection.

An order represents the purchase created during checkout.

A simplified flow is:

```text
Cart
 |
 | Checkout
 v
Razorpay Order
 |
 | Successful / verified payment
 v
Application Order
 |
 +-- User
 +-- Items
 +-- Amount
 +-- Address
 +-- Payment Status
 +-- Order Status
```

This prevents the cart itself from becoming the permanent representation of a completed purchase.

---

## Frontend State Management

Redux Toolkit is used for client-side cart state.

The frontend has two different responsibilities:

```text
Redux
 |
 +-- UI / client-side state
 |
Backend
 |
 +-- Actual application data
     |
     +-- MongoDB
     +-- Redis
```

Redux allows components such as the product cards, navbar, and cart page to access and update cart-related state without passing the same data through multiple levels of React components.

The backend remains responsible for retrieving and persisting the actual cart data.

---

## Backend Structure

The backend follows a controller, route, model, and middleware based structure.

```text
backend/
|
+-- controllers/
|   +-- authController.js
|   +-- cartController.js
|   +-- orderController.js
|   +-- paymentController.js
|
+-- models/
|   +-- User.js
|   +-- Order.js
|
+-- routes/
|   +-- authRoutes.js
|   +-- cartRoutes.js
|   +-- orderRoutes.js
|   +-- paymentRoutes.js
|
+-- middleware/
|   +-- authMiddleware.js
|
+-- config/
|   +-- db.js
|   +-- redis.js
|
+-- server.js
```

Controllers contain the application logic, routes expose the APIs, middleware handles authentication, and models define the MongoDB data structure.

---

## API Responsibilities

The backend exposes REST APIs for the main application operations.

| Area           | Responsibility                                    |
| -------------- | ------------------------------------------------- |
| Authentication | Register, login and JWT authentication            |
| Products       | Retrieve product/book information                 |
| Cart           | Add, remove, update and retrieve cart items       |
| Payment        | Create Razorpay payment orders and verify payment |
| Orders         | Create and retrieve user orders                   |

The frontend communicates with these APIs using Axios.

---

## Data Flow

A typical authenticated cart request looks like:

```text
React Component
      |
      v
Redux / Axios
      |
      v
Express Route
      |
      v
JWT Middleware
      |
      | authenticated user ID
      v
Cart Controller
      |
      +----------+
      |          |
      v          v
    Redis     MongoDB
      |          |
      +----+-----+
           |
           v
       API Response
           |
           v
      React / Redux
```

This keeps authentication, business logic, caching, persistence, and UI state as separate responsibilities.

---

## Technology Choices

### MongoDB

Used as the primary persistent database for users, orders, and application data.

### Redis

Used as an in-memory caching layer for cart data that is accessed and modified frequently.

The main purpose is reducing repeated database reads rather than replacing MongoDB.

### Express.js

Used to expose REST APIs and organize backend request handling.

### JWT

Used to authenticate requests and associate API operations with the logged-in user.

### bcrypt

Used to hash passwords before storing them in MongoDB.

### Redux Toolkit

Used for predictable client-side state management, particularly cart state.

### Razorpay

Used for payment order creation and payment processing in the checkout flow.

### Docker

Used to containerize the application and provide a consistent runtime environment.

---

## Environment Configuration

Sensitive credentials are stored through environment variables rather than committed to the repository.

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

SECRET_KEY=your_jwt_secret

REDIS_URL=your_redis_connection_string

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

The actual credentials are intentionally excluded from the repository.

---

## Running the Project

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The backend requires MongoDB, Redis, and the required environment variables to be configured.

---

## Deployment

The application can be deployed as separate frontend and backend services.

```text
                    GitHub
                      |
             +--------+--------+
             |                 |
             v                 v
        Frontend            Backend
        Vercel              Render
                              |
                 +------------+------------+
                 |            |            |
                 v            v            v
              MongoDB       Redis       Razorpay
```

Docker is used for containerizing the application where required.

---

## What This Project Demonstrates

This project goes beyond implementing individual CRUD APIs. The main focus was understanding how the different parts of a production-style application interact.

The implementation covers:

* Full-stack MERN development
* JWT authentication and protected APIs
* Password hashing with bcrypt
* REST API design
* MongoDB data modeling with Mongoose
* Redis cache implementation
* Cache-first cart retrieval
* Synchronization between persistent storage and cache
* Redux Toolkit state management
* Backend-controlled payment flow
* Razorpay order creation
* Payment verification
* Order lifecycle
* Environment-based configuration
* Docker-based application setup

---

## Project Status

Completed as a development/test implementation.

Razorpay is configured in test mode and no real transactions are processed.
