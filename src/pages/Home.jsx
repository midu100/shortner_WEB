import React from 'react'
import bg from '../assets/img/bg.png'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div style={{background : `url(${bg})`,backgroundRepeat :'no-repeat',backgroundSize: 'cover',backgroundPosition : 'center'}} className='h-screen'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default Home