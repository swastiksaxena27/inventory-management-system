require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Wireless Mouse', sku: 'ELEC-MS-101', category: 'Electronics', price: 799, quantity: 25, reorderLevel: 10, supplier: 'Logitech' },
  { name: 'Bluetooth Speaker', sku: 'ELEC-SP-102', category: 'Electronics', price: 2499, quantity: 8, reorderLevel: 10, supplier: 'boAt' },
  { name: 'USB-C Charger 65W', sku: 'ELEC-CH-103', category: 'Electronics', price: 1499, quantity: 40, reorderLevel: 15, supplier: 'Anker' },
  { name: 'Laptop 15 inch', sku: 'ELEC-LP-104', category: 'Electronics', price: 51999, quantity: 5, reorderLevel: 5, supplier: 'Lenovo' },
  { name: 'Cotton T-Shirt', sku: 'APRL-TS-201', category: 'Apparel', price: 499, quantity: 60, reorderLevel: 20, supplier: 'Allen Solly' },
  { name: 'Denim Jeans', sku: 'APRL-JN-202', category: 'Apparel', price: 2299, quantity: 18, reorderLevel: 10, supplier: "Levi's" },
  { name: 'Study Table', sku: 'FURN-TB-812', category: 'Furniture', price: 3999, quantity: 2, reorderLevel: 4, supplier: 'IKEA India' },
  { name: 'Office Chair', sku: 'FURN-CH-813', category: 'Furniture', price: 5499, quantity: 9, reorderLevel: 5, supplier: 'Godrej' },
  { name: 'Gel Pen Pack of 15', sku: 'STNY-PN-713', category: 'Stationery', price: 120, quantity: 40, reorderLevel: 20, supplier: 'Cello Pens' },
  { name: 'A4 Notebook Pack', sku: 'STNY-NB-714', category: 'Stationery', price: 250, quantity: 3, reorderLevel: 15, supplier: 'Classmate' },
  { name: 'Basmati Rice 5kg', sku: 'GROC-RC-301', category: 'Grocery', price: 650, quantity: 30, reorderLevel: 10, supplier: 'India Gate' },
  { name: 'Olive Oil 1L', sku: 'GROC-OL-302', category: 'Grocery', price: 899, quantity: 14, reorderLevel: 8, supplier: 'Figaro' },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany({}); // clears existing products first
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products`);
  await mongoose.disconnect();
};

seed().catch((err) => {
  console.error(err.message);
  process.exit(1);
});