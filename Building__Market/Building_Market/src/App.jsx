import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Categories from "./pages/categories/categories";
import Products from "./pages/Products/Products";
import Aboutus from "./pages/Aboutus/Aboutus";
import Contactus from "./pages/Contactus/Contactus";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/Home" element={<Home />} ></Route>
        <Route path="/Login" element={<Login />} ></Route>
        <Route path="/SignUp" element={<SignUp />} ></Route>
        <Route path="/Categories" element={<Categories />} ></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/Contactus" element={<Contactus />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
