const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
}
);

module.exports = model('Product', ProductSchema);