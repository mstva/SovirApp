const Blouse = require('../../assets/images/products/blouse.png')
const Shirt = require('../../assets/images/products/tshirt.png')
const WhiteSportsDress = require('../../assets/images/products/white_sports_dress.png')
const BlackSportsDress = require('../../assets/images/products/black_sports_dress.png')
const EveningDress = require('../../assets/images/products/evening_dress.png')

export default [
    {
        id: '1',
        name: 'Blouse',
        brand: 'Dorothy Perkins',
        description: 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        cover_image: Blouse,
        product_images: [
            {
                id: '1',
                image_name: Blouse,
                path: ''
            },
            {
                id: '2',
                image_name: Blouse,
                path: ''
            },
            {
                id: '3',
                image_name: Blouse,
                path: ''
            },
        ] ,
        price: '12',
        rating: '10'
    },
    {
        id: '2',
        name: 'Evening Dress',
        brand: 'Silly',
        description: 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        cover_image: EveningDress,
        product_images: [
            {
                id: '1',
                image_name: EveningDress,
                path: ''
            },
            {
                id: '2',
                image_name: EveningDress,
                path: ''
            },
            {
                id: '3',
                image_name: EveningDress,
                path: ''
            },
        ] ,
        price: '19',
        rating: '55'
    },
    {
        id: '3',
        name: 'White Sports Dress',
        brand: 'OVS',
        description: 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        cover_image: WhiteSportsDress,
        product_images: [
            {
                id: '1',
                image_name: WhiteSportsDress,
                path: ''
            },
            {
                id: '2',
                image_name: WhiteSportsDress,
                path: ''
            },
            {
                id: '3',
                image_name: WhiteSportsDress,
                path: ''
            },
        ] ,
        price: '33',
        rating: '13'
    },
    {
        id: '4',
        name: 'T-Shirt Sailing',
        brand: 'Mango Boy',
        description: 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        cover_image: Shirt,
        product_images: [
            {
                id: '1',
                image_name: Shirt,
                path: ''
            },
            {
                id: '2',
                image_name: Shirt,
                path: ''
            },
            {
                id: '3',
                image_name: Shirt,
                path: ''
            },
        ] ,
        price: '150',
        rating: '5'
    },
    {
        id: '5',
        name: 'Black Sports Dress',
        brand: 'Cool',
        description: 'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.',
        cover_image: BlackSportsDress,
        product_images: [
            {
                id: '1',
                image_name: BlackSportsDress,
                path: ''
            },
            {
                id: '2',
                image_name: BlackSportsDress,
                path: ''
            },
            {
                id: '3',
                image_name: BlackSportsDress,
                path: ''
            },
        ] ,
        price: '25',
        rating: '40'
    },

]