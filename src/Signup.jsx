import React, { useState } from "react";

import signupImg from "./assets/signup.jpg";
import google from "./assets/google.png";

import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5  lg:px-16">
      <div className="max-w-10xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* left */}
        <div className="relative h-[320px]  sm:h-[380px] lg:h-[500px]  lg:w-[500px] overflow-hidden rounded-3xl sm:rounded-3xl lg:rounded-tr-[200px] lg:rounded-bl-[200px] lg:rounded-tl-[0px] lg:rounded-br-[0px]">
          <img
            src={signupImg}
            alt="perfume"
            className="w-full h-full object-fill "
          />
          <div className="absolute inset-0 bg-black/50  flex flex-col justify-center items-center text-center px-6 sm:px-10">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl   font-bold mb-4">
              Let's Get Started!
            </h1>
            <p className="text-white text-xl sm:3xl lg:5xl font-semibold  ">
              Create your account and unlock the full potential of Fragranzia.
            </p>
          </div>
        </div>

        {/* right */}

        <div className="w-full lg:max-w-md mx-auto ">
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-4 py-2 border-2 border-[#00354B] rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-[#00354B] hover:text-white transition-all">
              <img src={google} alt="google" className="w-5 h-5" /> Google
            </button>
            <button className="flex-1 px-4 py-2 border-2 border-[#00354B] rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-[#00354B] hover:text-white transition-all">
              <FaFacebookF className="text-blue-500 w-5 h-5" />
              Facebook
            </button>
          </div>

          <div className="flex items-center my-4 ">
            <div className="flex-1 border-b"></div>

            <p className=" mx-4 text-sm text-gray-600 ">
              Or sign up with email
            </p>

            <div className="flex-1 border-b"></div>
          </div>

          <div className="flex items-center  bg-gray-100 rounded-lg px-5 h-10 sm:h-12 mb-5 ">
            <FaRegCircleUser size={18} className="text-gray-500 text-size-24" />

            <input
              type="text"
              placeholder="Enter your username"
              className="flex-1 outline-none px-3 "
            />
          </div>

          <div className="flex items-center  bg-gray-100 rounded-lg px-5 h-10 sm:h-12 mb-5 ">
            <LuMail size={18} className="text-gray-500" />

            <input
              type="text"
              placeholder="Enter your E-mail"
              className="flex-1 outline-none px-3"
            />
          </div>

          <div className="flex items-center  bg-gray-100 rounded-lg px-5 h-10 sm:h-12 mb-5 ">
            <MdLockOutline size={21} className="text-gray-500" />

            <input
              type={showPassword?"text":"password"}
              placeholder="Enter your password"
              className="flex-1 outline-none px-3"
            />
            <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
              className="text-gray-500 cursor-pointer"

            >
{showPassword? <FiEye /> : <FiEyeOff /> }
            </button>
          </div>

          <div className="flex items-center  bg-gray-100 rounded-lg px-5 h-10 sm:h-12 mb-5 ">
            <MdLockOutline size={21} className="text-gray-500" />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your password"
              className="flex-1 outline-none px-3"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="text-gray-500 cursor-pointer"
            >
              {showConfirm ? <FiEye /> : <FiEyeOff />}
            </button>
          </div>

<div className="flex gap-2 mb-4">

<input type="checkbox" 
className="accent-[#00354B] " />
<p>
    Agree with{" "}
     <span className="text-[#00354B] underline  cursor-pointer ">Terms & Conditions</span>
</p>
</div>

<button className="w-full h-10 sm:h-12 bg-[#083D57] cursor-pointer text-center rounded-lg text-white text-lg sm:text-xl font-semibold transition-all">
    Sign Up
</button>

<p className="text-center mt-2 text-sm sm:text-base text-gray-700">
                Already have an account?{" "} 
<span className=" text-[#083D57] underline cursor-pointer">
    Sign In
</span>
</p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
