import express from "express";
import multer from "multer";
import path from "path";

import {CreateProduct, GetProducts, UpdateProduct, SeedProducts, GetProductDetails } from "../controllers/ProductController.js";

const __dirname = path.resolve();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/src/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null,  Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

export const ProductRouter = express.Router()

ProductRouter.post('/product/create', upload.array('product_images'), CreateProduct)

ProductRouter.get('/products', GetProducts)

ProductRouter.get('/product/:id', GetProductDetails)

ProductRouter.put('/product/:id/update', upload.array('product_images'), UpdateProduct)

ProductRouter.get('/products/seed', SeedProducts)