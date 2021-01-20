import {Product} from "../models/ProductModel.js";
import { product_data } from "../data/products.js";
import path from "path";

export const CreateProduct = (req, res) => {

    const {name, brand, description, price, rating} = req.body

    let product_images = []

    if (req.files.length > 0) {
        product_images = req.files.map(file => {
            return {
                name: file.filename,
                path: path.resolve(file.destination)
            }
        })
    }

    const newProduct = new Product({
        name,
        brand,
        description,
        price,
        rating,
        product_images,
        cover_image: product_images[0].name
    })

    newProduct.save((error, product) => {
        if(error) return res.status(400).json({ error })
        if(product) return res.status(200).json({ product })
    })
}

export const GetProducts = (req, res) => {
    Product.find().exec((error, products)  => {
        if(error) return res.status(400).json({ error })
        if(products) return res.status(200).json({ products })
    })
}

export const GetProductDetails = (req, res) => {
    Product.findById(req.params.id).exec((error, product)  => {
        if(error) return res.status(400).json({ error })
        if(product) return res.status(200).json({ product })
    })
}

export const UpdateProduct = (req, res) => {

    let product_images = []

    if (req.files.length > 0) {
        product_images = req.files.map(file => {
            return {
                image_name: file.filename,
                image_path: path.resolve(file.destination)
            }
        })
    }

    Product.findByIdAndUpdate(req.params.id, {product_images}, (error, result) => {

        if(error) return res.status(400).json({ msg: 'product not found' })
        else return res.status(200).json({ msg: 'product updated', result })

    })
}

export const SeedProducts = (req, res) => {
    const createdProducts = Product.insertMany(product_data);
    res.send({ createdProducts });
}