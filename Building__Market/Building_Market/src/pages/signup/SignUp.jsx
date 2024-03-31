import React from "react";
import loginlogo from "/img/LoginPageLogo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { useState } from "react";


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const apiUrl = 'http://localhost:3000/register';

      const response = await axios.post(apiUrl, { name, email, password });
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <img
        src={loginlogo}
        alt="Example"
        className="align-middle h-32 items-center left-[600px] top-[60px] absolute"
      />
      <h3 className=" text-xl left-[555px] top-[200px] fixed">
        Sign Up in to your account
      </h3>
  <form onSubmit={handleSubmit}>
      <table className="left-[520px] top-[250px] absolute py-6 ">
    
        <tr >
          <td className="pb-5">
            <input type="text" placeholder="Name" className="w-[300px] h-[20px] bg-white rounded-[5px] border border-black size-max p-4"   required onChange={(e) => setName(e.target.value)}/>
          </td>
        </tr>
        <tr>
            <td>
        <input type="email" placeholder="Email" className="w-[300px] h-[20px] bg-white rounded-[5px] border border-black p-4"    required onChange={(e)=>setEmail(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td className="py-4">
            <input type="password" placeholder="Password" className="w-[300px] h-[20px] bg-white rounded-[5px] border border-black p-4"  required onChange={(e)=>setPassword(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td className="pb-4">
           <button className=" bg-orange-500 rounded-[5px] text-white w-[300px] h-[35px]" type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
           {error && <div className="alert alert-danger mt-3">{error}</div>}
        </td>
        </tr>
      </table>
      </form>
      <p className="left-[575px] top-[440px] fixed pt-5 ">Don't have any account yet ? <Link to="/Login" className="text-orange-500">Login</Link></p>
      <h3 className=" text-xl left-[655px] top-[480px] fixed pt-3">
        OR 
      </h3>
  <p className="w-[300px] left-[520px]  top-[530px] fixed rounded-[5px] border border-black size-max p-2">
        <FcGoogle className="w-[40px] h-[30px] absolute pt-2 left-12 bottom-2"></FcGoogle><a href=""><label className=" pl-20 mt-5 left-[575px] top-[515px]"> signing with google </label></a>
     </p>
    </div>
  );
}
export default SignUp;
