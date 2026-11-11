require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

app.disable('x-powered-by'); // hides the "Express" header (fixes warning 1)

app.use(express.json());

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler); // must be the LAST middleware

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Startup error:', err.message)); // fixes warning 2