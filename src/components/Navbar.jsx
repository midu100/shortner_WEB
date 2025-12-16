import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/img/Logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='navbar-b py-[10px]'>
         <div className="container">
            <div className="row flex items-center justify-between">

                <div className="Logo w-[110px]">
                    <Link to={'/'}><img src={Logo} alt='Logo' className='w-full' /></Link>
                </div>


                <div className="btns flex gap-[20px] items-center">
                     <button class="btn"> Login </button>
                     <button class="btn"> Register Now </button>
                </div>

            </div>
         </div>
      </nav>
    </>
  )
}

export default Navbar