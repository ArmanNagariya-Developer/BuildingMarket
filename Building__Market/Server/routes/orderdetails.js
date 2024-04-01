const express = require("express");
const router = express.Router();
const OrderDetails = require("../model/orderdetails");

router.get("/", async (req, res) => {
    try {
        const orderDetailsList = await OrderDetails.find();
        if (!orderDetailsList || orderDetailsList.length === 0) {
            return res.status(404).json({ msg: "No order details found" });
        }
        res.json(orderDetailsList);
    } catch (error) {
        console.error('Error fetching orderDetails:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

router.post("/", async (req, res) => {
    try {
        const orderDetails = new OrderDetails({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            mobileNumber: req.body.mobileNumber,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            productPrice: req.body.productPrice,
            productName: req.body.productName,
            productImage: req.body.productImage,
            dateCreated: req.body.dateCreated,
        });

        const savedOrderDetails = await orderDetails.save();

        res.status(201).json(savedOrderDetails);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

module.exports = router;
