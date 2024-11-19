const express = require('express')
const { getProducts, getProductById, updateProduct, deleteProduct, postProduct } = require('../controllers/product.controller')
const router = express.Router()
router.post('/', postProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
