import { useForm } from "react-hook-form"
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import LoginBg from "../assets/img/LoginBg1.png";
import Logo from '../assets/img/Logo.png'
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import Btn from "../components/common/Btn";
import { Slide, toast } from "react-toastify";
import { authServices } from "../api";

const Register = () => {
const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

   const onSubmit = async(data) => {
    try {
      
      const res = await authServices.signup(data)
      toast.success(res.message, {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(()=>{
          navigate('/login')
        },2000)



    } 
    catch (error) {
      // console.log(error.response.data.message)
      const errorMsg = error?.response?.data?.message
      toast.error(errorMsg, {
          position: "top-center",
          autoClose: 5000,
          theme: "dark",
          transition: Slide,
        });

    }
   }
   

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${LoginBg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",}}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Register Card */}
      <div className=" relative z-10 w-[400px] max-w-[92%] rounded-2xl p-8 backdrop-blur-6xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/30">
        {/* Logo */}
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Heading */}
        <h2 className="text-white text-xl font-semibold mb-6">
          Register
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-xs text-white mb-1">
            Full Name
          </label>
          <input {...register("fullName",{ required: 'FullName is required.' })} type="text" placeholder="John Doe" className="w-full px-4 py-2 rounded-md bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"/>
          {
            errors.fullName && (
              <p className="text-amber-300 text-sm font-semibold mb-1">{errors?.fullName?.message}</p>
            )
          }
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs text-white mb-1">
            Email
          </label>
          <input  type="email" {...register("email",{ required: 'Email is required.' })} placeholder="username@gmail.com" className=" w-full px-4 py-2 rounded-md bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500 "/>
          {
            errors.email && (
              <p className="text-amber-300 text-sm font-semibold mb-1">{errors?.email?.message}</p>
            )
          }
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-xs text-white mb-1">
            Password
          </label>
          <input {...register("password",{ required: 'Password is required.' })} type="password" placeholder="Password" className=" w-full px-4 py-2 rounded-md bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"/>
          {
            errors.password && (
              <p className="text-amber-300 text-sm font-semibold mb-1">{errors?.password?.message}</p>
            )
          }
        </div>

        {/* Register Button */}
        <Btn onClick={handleSubmit(onSubmit)} Name={'Register'} />


        {/* Divider */}
        <p className="text-center text-xs text-blue-100 my-5">
          or continue with
        </p>

        {/* Social Register */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-10 bg-white rounded-md flex items-center justify-center hover:scale-105 transition">
            <button><FaGoogle className="text-red-500 bg-white  text-sm" /></button>
          </div>

          <div className="w-12 h-10 bg-white rounded-md flex items-center justify-center hover:scale-105 transition">
            <button><FaGithub className="text-gray-800 text-sm" /></button>
          </div>

          <div className="w-12 h-10 bg-white rounded-md flex items-center justify-center hover:scale-105 transition">
            <button><FaFacebookF className="text-blue-600 text-sm" /></button>
          </div>
        </div>

        {/* Login link */}
        <p className="text-center text-xs text-blue-100 mt-6">
          Already have an account?{" "}
          <Link to={'/login'} className="text-white font-semibold hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-center text-xs text-blue-100 mt-1">
          Back to home page?{" "}
          <Link to={'/'} className="text-white font-semibold hover:underline">
            Home
          </Link>
        </p>

        
      </div>
    </div>
  );
};

export default Register;
