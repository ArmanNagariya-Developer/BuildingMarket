const mongoose = require('mongoose');

const User_ContactUs = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  stateOrProvince: {
    type: String,
    required: true,
  },
  zipOrPostalCode: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User_ContactUs', User_ContactUs);

module.exports = User;
