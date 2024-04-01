const mongoose = require("mongoose");

const orderDetailsSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String, // Changed to String assuming it might include country codes, dashes, etc.
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String, // Changed to String assuming it might include alphanumeric characters.
        required: true,
    },
    productPrice: {
        type: Number, // Changed to Number assuming it represents a numeric value.
        default: 0,
        required: true,
    },
    productName: {
        type: String,
        required: true,
        minlength: 1, // Adjusted minlength to 1 to disallow empty strings.
        maxlength: 255,
    },
    productImage: {
        type: String, // Assuming it represents a URL or file path.
        default: "", // Changed default value to an empty string.
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
});

const OrderDetails = mongoose.model('OrderDetails', orderDetailsSchema);

module.exports = OrderDetails;
