import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthContex'
import Login from './Login';


const PrivateRoutes = ({children}) => {

    const {state} = useContext(AuthContext);

    if(!state.isAuth) {
       return    <Navigate to="/login" />
    }

    return children
}

export default PrivateRoutes