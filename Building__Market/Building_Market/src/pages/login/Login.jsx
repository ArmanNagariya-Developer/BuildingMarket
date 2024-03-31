// eslint-disable-next-line no-unused-vars
import * as React from "react";
import loginlogo from "/img/LoginPageLogo.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/login", { email, password })
            .then(response => {
                console.log(response);
                // if (response.data === "Success") {
                    navigate("/home");
                // }
            })
            .catch(error => {
                console.error(error);
            })
          }
  return (
    <div>
      <img
        src={loginlogo}
        alt="Example"
        className="align-middle h-32 items-center left-[600px] top-[60px] absolute"
      />
      <h3 className=" text-xl left-[567px] top-[200px] fixed">
        Login in to your account
      </h3>
    <form onSubmit={handleSubmit}>
      <table className="left-[520px] top-[250px] absolute py-6">
    
        <tr >
          <td className="pb-5">
            <input type="email" placeholder="Email Address" className="w-[300px] h-[20px] bg-white rounded-[5px] border border-black size-max p-4" required onChange={(e) => setEmail(e.target.value)} />
          </td>
        </tr>
        <tr>
            <td>
        <input type="password" placeholder="Password" className="w-[300px] h-[20px] bg-white rounded-[5px] border border-black p-4" required onChange={(e) => setPassword(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td className="py-4">
            <a href="" className="text-orange-500 ">Forgot your password ? </a>
        </td>
        </tr>
        <tr>
            <td className="pb-4">
           <button className=" bg-orange-500 rounded-[5px] text-white w-[300px] h-[35px]" type="submit">Login</button>
        </td>
        </tr>
      </table>
      </form>
      <p className="left-[560px] top-[440px] fixed">Don't have any account yet ? <Link to={"/SignUp"} className="text-orange-500">Sign Up</Link></p>
      <h3 className=" text-xl left-[655px] top-[480px] fixed">
        OR 
      </h3>
      <p className="w-[300px] left-[520px]  top-[530px] fixed rounded-[5px] border border-black size-max p-2">
        <FcGoogle className="w-[40px] h-[30px] absolute pt-2 left-12 bottom-2"></FcGoogle><a href=""><label className=" pl-20 mt-5 left-[575px] top-[515px]"> signing with google </label></a>
     </p>
    </div>
  );
}
export default Login;
