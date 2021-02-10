const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const productsList = await Product.find();
        
        return res.json(productsList);
    },

    async store(req, res){
        const { name, price, sold } = req.body;

        const productExists = await Product.findOne({ name });

        if(productExists){
            return res.json(productExists)
        }

        const product = await Product.create({
            name,
            price,
            sold
        })

        return res.json(product);
    }
};