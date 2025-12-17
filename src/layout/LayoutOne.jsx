import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import bg from '../assets/img/bg.png'

const LayoutOne = () => {
  return (
    <div style={{background : `url(${bg})`,backgroundRepeat :'no-repeat',backgroundSize: 'cover',backgroundPosition : 'center'}}>
       <Navbar />
       <Outlet />
    </div>
  )
}

export default LayoutOne