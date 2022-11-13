import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Home from './Home'
import Login from './Login'
import Product from './Product'
import Sellers from './Sellers';
import Form from '../Components/Form'
import PrivateRoutes from './PrivateRoutes'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/pro' element={<Product />} />
            <Route path='/sell' element={<PrivateRoutes><Sellers /> </PrivateRoutes>} />
            <Route path='/dash' element={ <PrivateRoutes><Dashboard /></PrivateRoutes>} />
            <Route path='/new' element={<PrivateRoutes> <Form /> </PrivateRoutes>} />
            <Route path='/res/:id' element={ <PrivateRoutes><Product /></PrivateRoutes>}  />
        </Routes>
    </div>
  )
}

export default AllRoutes