const { Product } = require("../model/products");
const { Category } = require("../model/category");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let filter = {};
        if (req.query.categories) {
            filter = { category: req.query.categories.split(',') }
        }
        const productList = await Product.find(filter).populate('category');
        res.status(200).json({ success: true, data: productList });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

router.get('/brand/:id', async (req, res) => {
    try {
        let filter = {};
        if (req.query.brand) {
            filter = { brand: req.query.brand };
        }
        const productList = await Product.find(filter).populate('category');
        res.status(200).json({ success: true, data: productList });
    } catch (error) {
        console.error('Error fetching products by brand:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});


router.get("/:id", async (req,res)=>
{
    const productList = await Product.findById(req.params.id);
    if(!productList)
    {
        res.status(400).json({Success: false})
    }
    else
    {
        res.send(productList);
    }
});


router.get("/:id", async (req, res) => {
    try {
        // Check if category ID is undefined
        if (!req.params.id) {
            return res.status(400).json({ success: false, message: 'Category ID is required' });
        }

        const productList = await Product.findById(req.params.id);
        if (!productList) {
            return res.status(404).json({ success: false, message: 'Products not found for this category' });
        }
        res.status(200).json({ success: true, data: productList });
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});




router.post("/", async (req, res) => {
    try {
        const category = await Category.findById(req.body.category);
        if (!category) return res.status(400).send("Invalid Category");

        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        });

        const savedProduct = await product.save();

        if (!savedProduct) return res.status(400).send("Failed to add product");

        res.send(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

router.put("/Updateproduct/:id",async (req,res)=>{
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send("Invalid Category");
    const product =await Product.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    
    },{new :true});
    if (!product) return res.status(400).send("cannot update");
    
    res.send(product);
    });

module.exports = router;
