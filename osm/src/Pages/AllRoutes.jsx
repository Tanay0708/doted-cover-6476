import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Product from './Product'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/pro' element={<Product />} />
        </Routes>
    </div>
  )
}

export default AllRoutes