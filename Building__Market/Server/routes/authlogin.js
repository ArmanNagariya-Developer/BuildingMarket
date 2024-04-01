
const express = require('express');
const router = express.Router();

// Login model 
const LoginModel = require("../model/auth");

router.get("/",(req,res)=>{
    if(req.session.email){
       return res.json({valid:true, email: req.session.email})
    }else{
     return res.json({valid:false})
 } })

/* *****************************LOGIN ROUTE********************************** */
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await LoginModel.findOne({ email: email });
  
      if (user) {
        if (user.password === password ) {
          req.session.email = user.email;
          return res.json({ Login: true});
        } else {
          return res.json({ Login: false, error: "Password or email is not correct." });
        }
      } else {
        return res.json({ Login: false, error: "Email does not exist." });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ Login: false, error: "Internal Server Error." });
    }
  });
  
  // Logout  Route
  router.get("/logout", (req, res) => {
    if (req.session.email) {
      // Destroy the session on the server side
      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err);
          return res.status(500).json({ Login: false, error: "Server error" });
        }
  
        // Clear the session cookie on the client side
        res.clearCookie("connect.sid"); // Change "connect.sid" to your actual session cookie name
  
        // Respond with a success message
        return res.json({ Login: true, message: "Logout successful" });
      });
    } else {
      return res.json({ Login: true, message: "No active session" });
    }
  });
  
  module.exports = router;