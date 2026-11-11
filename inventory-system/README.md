# Inventory and Data Management System

A REST API for managing a product catalogue, built with Node.js, Express, MongoDB and Mongoose.
Built for Web Dev III, Assignment 3.

## Features

- Product schema with field-level validation
- Full CRUD for products
- Filtering, sorting and pagination
- Safe stock updates (restock and sale)
- Low-stock alert report
- Category-wise inventory summary (MongoDB aggregation)
- Centralized error handling

## Setup

1. Install dependencies: `npm install`
2. Make sure MongoDB is running locally.
3. Copy `.env.example` to `.env`.
4. (Optional) Load 12 sample products: `node seed.js`
5. Start the server: `npm run dev`

The server runs on `http://localhost:5000`.

## API endpoints

| Method | Route | Description |
|---|---|---|
| POST | `/api/products` | Create a product |
| GET | `/api/products` | List products (supports `category`, `supplier`, `search`, `minPrice`, `maxPrice`, `sort`, `page`, `limit`) |
| GET | `/api/products/:id` | Get one product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |
| PATCH | `/api/products/:id/stock` | Adjust stock, body `{ "change": 10 }` (negative for a sale) |
| GET | `/api/products/low-stock` | Products at or below their reorder level |
| GET | `/api/products/summary` | Totals and average price per category |