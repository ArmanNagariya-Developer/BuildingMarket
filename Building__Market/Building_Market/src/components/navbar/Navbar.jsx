import React from "react";
import navlogo from "/img/NavbarLogo.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { IoPersonSharp } from "react-icons/io5";
import SignUp from "../../pages/signup/SignUp";

function Navbar() {
  return (
    <div>
      <table>
        <tr>
        <th>
          <img src={navlogo} alt="Example" className="w-[60px] h-[60px] p-2 block" /> 
        </th>
        <th>
          <p className="text-sky-950">BUILDING</p>
        </th>
        <th>
        <p className="text-orange-400">MARKET</p>
        </th>
        <th>
            <Link to="/Home" className=" pl-10 text-orange-400">Home</Link>
        </th>
        <th>
            <Link to="/Categories" className=" pl-10">Categories</Link>
        </th>
        <th>
        <Link to="/Products" className=" pl-10">Products</Link>
        </th>
        <th>
        <Link to="/Aboutus" className=" pl-10">About Us</Link>
        </th>
        <th>
        <Link to="/Contactus" className=" pl-10">Contact Us</Link>
        </th>
        <th  className=" pl-10">
        <input type="text" placeholder="Search" className="w-[250px] h-[30px] rounded-[5px] border border-black text-sm p-5 "></input>
        </th>
        <th>
        <CiSearch className=" h-5 w-5 absolute left-[1015px] top-[20px] "/>
        </th>
        <th>
            <div className=" pl-6"><CgShoppingCart className="h-7 w-7 "/></div>
        </th>
        <th>
            <div className=" pl-6"><IoPersonSharp  className="h-5 w-5 "/></div>
        </th>
        <th>
            <Link className="p-2 text-orange-400" to={"Login"}> Log In </Link>
        </th>
        <th>
            <samp> | </samp>
        </th>
        <th>
            <Link className="p-2" to={"SignUp"}> Sign Up </Link>
        </th>
        </tr>
      </table>
    </div>
  );
}

export default Navbar;
