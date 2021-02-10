const mongoose = require('mongoose')
const Product = require('../models/Product');

mongoose.set('useFindAndModify', false);

module.exports = {
    async store(req, res){
        const { name, sold } = req.body;

        const productExists = await Product.findOne({ name });
        
        if(productExists){
            productExists.sold = productExists.sold + 1
            await productExists.save()
            return res.json(productExists);
        }

        return res.json({ message: "Este produto não está cadastrado, cadestre-o antes de reistrar uma venda"})
    }
};