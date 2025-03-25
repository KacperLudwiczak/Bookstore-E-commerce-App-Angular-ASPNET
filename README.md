# Bookstore 📚

## Project Description

This is a comprehensive web application designed for **purchasing books online**, built using **Angular** for the frontend and **ASP.NET Core** for the backend. The application leverages **SQL Server** to store user and book data, while **Material Angular** ensures a responsive and visually appealing user interface. Additionally, **Stripe Service** is integrated to facilitate secure and efficient payment processing.

The project uses **Docker** for containerization to ensure consistent environments during development and deployment, making the application highly portable and scalable.

## Technologies Used

- **Angular**: A powerful framework for building dynamic, single-page applications (SPA) with client-side rendering.
- **ASP.NET Core**: A modern, high-performance backend framework for handling business logic, APIs, and data access.
- **Material Angular**: A CSS framework that provides pre-built UI components for building responsive and user-friendly interfaces.
- **SQL Server**: An enterprise-level relational database management system used to store and manage user, book, and transaction data.
- **Stripe Service**: A payment processing service integrated to handle transactions securely, including card payments and order completion.
- **Docker**: A platform used to create, deploy, and manage application containers for consistent and isolated environments.

## Features

- User Registration and Login (with authentication & authorization).
- Book Catalog Management (Add, Update, Delete, View Books).
- Shopping Cart System (Add to Cart, View Cart, Remove from Cart).
- Secure Payment Integration (using **Stripe Service**).
- Order Management (Order Details).
- Responsive UI (Built with **Material Angular**).

### Installation and Setup

1. **Backend (ASP.NET Core)**:
   - Navigate to the backend directory.
   - Run the following command:
     ```bash
     dotnet run
     ```
   - The application will start on the default port (e.g., `https://localhost:5001`).

2. **Frontend (Angular)**:
   - Navigate to the frontend directory.
   - Install dependencies by running:
     ```bash
     npm install
     ```
   - Then start the frontend application:
     ```bash
     ng serve
     ```
   - The app will be available at `http://localhost:4200`.

### System Requirements

- **Node.js** version 12+ (for Angular)
- **.NET SDK** version 5.0+ (for ASP.NET Core)
- **SQL Server** as the database

### Author
- [Kacper Ludwiczak](https://github.com/KacperLudwiczak) - Software Developer
