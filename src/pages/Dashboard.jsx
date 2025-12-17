import React from 'react'
import DashNav from '../components/common/DashNav'
import bg from '../assets/img/bg.png'
import LinkTable from '../components/common/LinkTable'

const Dashboard = () => {
  return (
    <div style={{background : `url(${bg})`,backgroundRepeat :'no-repeat',backgroundSize: 'cover',backgroundPosition : 'center'}} className='h-screen'>
        <DashNav />
        <LinkTable />

    </div>
  )
}

export default Dashboard