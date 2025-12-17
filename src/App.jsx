import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

function App() {
  
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={<LayoutOne />} >
          <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute} />
      
    </>
  )
}

export default App
