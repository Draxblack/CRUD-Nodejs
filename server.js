const express = require('express')
const app = express()
// const Product = require('./models/productModels')
const mongoose = require('mongoose')
const Product = require('./models/productModels')
const productRoutes = require('./routes/productRoutes')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/products', productRoutes )
app.listen(5000, () =>{
    console.log('Server is running on port 5000')
})
 
mongoose.connect('mongodb+srv://surappasumanth:ApKLHgI7ABTXKSCs@curd.lrcqg.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=CURD')