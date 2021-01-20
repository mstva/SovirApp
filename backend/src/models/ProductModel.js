import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        brand: {type: String, required: true},
        description: {type: String, required: true},
        cover_image: {type: String},
        product_images: [
            {
                name: {type: String},
                path: {type: String}
            }
        ],
        price: {type: String, required: true},
        rating: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model('products', ProductSchema)