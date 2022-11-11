import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Home from './Home'
import Login from './Login'
import Product from './Product'
import Sellers from './Sellers';
import Form from '../Components/Form'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/pro' element={<Product />} />
            <Route path='/sell' element={<Sellers />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path='/new' element={<Form />} />
        </Routes>
    </div>
  )
}

export default AllRoutes