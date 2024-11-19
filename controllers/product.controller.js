
const Product = require('../models/productModels')
const postProduct =  async (req, res) => {
    try{
       const newProduct = await Product.create(req.body)
        res.status(200).json(newProduct)
    }
    catch{
        res.status(500).json({message: 'falied to create product'})
    }
}
 const getProducts = async(req, res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }
    catch{
        res.status(500).json({message: 'failed to fetch products'})
    }
}

 const getProductById = async(req, res)=>{
    try{
        const product = await Product.findOne({_id: req.params.id})
        res.status(200).json(product)
    }
    catch{
        res.status(500).json({message: 'failed to fetch product'})
    }
    }
 const updateProduct = async(req, res)=> {
    try{
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body)
        if(!product){
            return res.status(404).json({message: 'product not found'})
        }
        const updateProduct = await Product.findOne({_id: req.params.id})
        res.status(200).json(updateProduct)
    }
    catch{
        res.status(500).json({message: 'failed to fetch product'})
    }
}

 const deleteProduct = async(req, res) => {

    try{
        const product = await Product.findOneAndDelete({_id: req.params.id})
        if(!product){
            return res.status(404).json({message: 'product not found'})
        }
        res.status(200).json({message: 'product deleted'})
    }
    catch{
        res.status(500).json({message: 'failed to delete product'})
    }
}
module.exports = {postProduct, getProducts, getProductById, updateProduct, deleteProduct}