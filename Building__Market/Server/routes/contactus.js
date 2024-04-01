const User  = require("../model/contactus")
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => { 

  const ContactUsList = await ContactUs.find();
  if (!ContactUsList) {
    return res.status(401).json({ msg: "No ContactUsList found" });
  }
  res.json(ContactUsList);

});
// Importing the User model

// POST route to create a new user
router.post('/', async (req, res) => {
  try {
    // Destructure the request body to extract user data
    const { firstName, lastName, email, country, streetAddress, city, stateOrProvince, zipOrPostalCode } = req.body;

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      country,
      streetAddress,
      city,
      stateOrProvince,
      zipOrPostalCode
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with the created user object
    res.status(201).json(savedUser);
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
