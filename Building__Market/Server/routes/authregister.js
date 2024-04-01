const express = require('express');
const router = express.Router();

// Login model 
const LoginModel = require("../model/auth");

router.post("/", (req, res) => {
    LoginModel.create(req.body)
      .then((student) => res.json(student))
      .catch((err) => res.json(err));
  });

  module.exports = router;