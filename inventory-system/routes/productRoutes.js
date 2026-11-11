const express = require('express');
const mongoose = require('mongoose');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  updateStock,
  getLowStock,
  getSummary,
} = require('../controllers/productController');

const router = express.Router();

// Input validation middleware: runs on every route that has :id
router.param('id', (req, res, next, id) => {
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }
  next();
});

// IMPORTANT: fixed paths must come BEFORE '/:id',
// otherwise Express treats "low-stock" or "summary" as an ID.
router.get('/low-stock', getLowStock);
router.get('/summary', getSummary);

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
router.patch('/:id/stock', updateStock);

module.exports = router;