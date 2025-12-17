import React from "react";
import { Link } from "react-router";
import { FaBell, FaLink, FaSignOutAlt } from "react-icons/fa";
import Logo from "../../assets/img/Logo.png";
import Btn from "./Btn";

const DashNav = () => {
  return (
    <>
      <nav className="navbar-b py-[12px]  backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        <div className="container">
          <div className="row flex items-center justify-between">

            {/* Logo */}
            <div className="logo flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-[110px]" />
            </div>

            {/* Search / Input */}
            <div className="flex items-center gap-3 w-[520px] max-w-full bg-[#111a2e] border border-white/10 rounded-full px-4 py-2">
              <FaLink className="text-gray-400 text-sm" />

              <input
                type="text"
                placeholder="Enter the link here"
                className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
              />

              <Btn />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">

              {/* Profile + Logout */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full cursor-pointer border border-white/10">
                <span className="text-sm text-white">welcome,</span>
                <span className="text-sm text-[#dc58ea] font-semibold">Mohammed</span>
              </div>
                <button className=""><FaSignOutAlt className="text-white/70 text-xl hover:text-white transition" /></button>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
