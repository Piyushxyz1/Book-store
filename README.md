# Book Store

Book Store is a MERN-based e-commerce application for browsing and purchasing books online.

The application includes JWT-based authentication, product management, shopping cart functionality, order management and Razorpay payment integration.

## Features

* User registration and login
* JWT-based authentication
* Browse books
* Book details
* Shopping cart
* Cart quantity management
* Checkout
* Razorpay payment integration
* Order creation
* Order history
* Redux Toolkit for state management
* REST API integration

## Tech Stack

**Frontend**

* React.js
* JavaScript
* React Hooks
* Redux Toolkit
* Axios
* HTML5
* CSS3

**Backend**

* Node.js
* Express.js
* REST APIs
* MongoDB
* JWT Authentication

**Payment**

* Razorpay

**Tools**

* Git
* GitHub
* Postman

## Application Flow

User → React Frontend → Express REST API → MongoDB

For payments:

Checkout → Backend → Razorpay → Payment Verification → Order Creation

## Authentication

JWT-based authentication is used for user login and protected operations.

After successful login, the backend generates a JWT token. The frontend stores the token and sends it with protected API requests.

The backend verifies the token before processing protected requests.

## State Management

Redux Toolkit is used to manage shared application state, including authentication and cart-related data.

React Hooks are used for component-level state and application logic.

## Payment Integration

Razorpay is integrated for online payments.

The payment flow includes:

1. User proceeds to checkout
2. Backend creates a Razorpay order
3. Razorpay handles the payment
4. Payment response is verified by the backend
5. Order is created after successful verification

## API

The backend provides REST APIs for:

* Authentication
* Books / Products
* Cart
* Orders
* Payments

Protected APIs require a valid JWT token.

## Project Highlights

During the development of this project, I worked on:

* Building the frontend using React
* Managing application state with Redux Toolkit
* Implementing JWT authentication
* Developing REST APIs using Node.js and Express
* Integrating MongoDB
* Implementing shopping cart functionality
* Integrating Razorpay payments
* Implementing order creation and order history
* Connecting frontend and backend APIs
* Testing and debugging application flows

## Project Status

Book Store is a completed MERN-based e-commerce project developed to practice full-stack development, authentication, state management, API integration and online payment processing.

## Author

**Piyush Negi**


