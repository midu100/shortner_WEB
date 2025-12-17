import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import LoginBg from "../assets/img/LoginBg1.png";
import Logo from '../assets/img/Logo.png'
import { Link } from "react-router";

const Register = () => {
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
          <input type="text" placeholder="John Doe" className="w-full px-4 py-2 rounded-md bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xs text-white mb-1">
            Email
          </label>
          <input type="email" placeholder="username@gmail.com" className=" w-full px-4 py-2 rounded-md bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500 "/>
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-xs text-white mb-1">
            Password
          </label>
          <input type="password" placeholder="Password" className=" w-full px-4 py-2 rounded-md bg-white text-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>

        {/* Register Button */}
        <button className="w-full bg-blue-900 hover:bg-blue-950 text-white py-2.5 rounded-md text-sm font-medium transition " >
          Create account
        </button>

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
