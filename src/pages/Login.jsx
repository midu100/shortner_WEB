import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import LoginBg from "../assets/img/LoginBg1.png";
import Logo from '../assets/img/Logo.png'
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Btn from "../components/common/Btn";
import { authServices } from "../api";
import { Slide, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()

  const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()

    const handleLogin = async(data)=>{
      try {
        
        const res = await authServices.login(data)
        toast.success(res.message, {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
          transition: Slide,
        });

        // setTimeout(()=>{
        //   navigate('/dashboard')
        // },2000)
      } 
      
      catch (error) {
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
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-900/50" />

      {/* Login Card */}
      <div
        className="
          relative z-10
          w-[400px] max-w-[92%]
          rounded-2xl
          p-8
          
          backdrop-blur-6xl
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
          border border-white/30
        "
      >
        {/* Logo */}
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Heading */}
        <h2 className="text-[#fff] text-xl font-semibold mb-6">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs text-white mb-1">Email</label>
          <input
          {...register("email",{ required: 'Email is required.' })}
            type="email"
            placeholder="username@gmail.com"
            className="
              w-full
              px-4 py-2
              rounded-md
              bg-white
              text-gray-700
              text-sm
              outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="block text-xs text-white mb-1">Password</label>
          <input
            {...register("password",{ required: 'Password is required.' })}
            type="password"
            placeholder="Password"
            className="
              w-full
              px-4 py-2
              rounded-md
              bg-white
              text-gray-700
              text-sm
              outline-none
              focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        {/* Forgot */}
        <div className="flex justify-end mb-5">
          <Link
            to="#"
            className="text-xs text-blue-200 hover:text-white transition"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}
        <Btn onClick={handleSubmit(handleLogin)} Name={'Login'}/>

        {/* Divider */}
        <p className="text-center text-xs text-blue-100 my-5">
          or continue with
        </p>

        {/* Social Login */}
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

        {/* Register */}
        <p className="text-center text-xs text-blue-100 mt-6">
          Don’t have an account yet?{" "}
          <Link to={'/register'} className="text-white font-semibold hover:underline">
            Register for free
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

export default Login;
