import { Box, Button, Text, HStack, Input, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useContext, useState } from 'react'
import { loginSuccess, loginUserFailure, loginUserLoading } from '../Context/AuthContext/action'
import { AuthContext } from '../Context/AuthContext/AuthContex'
import axios from "axios";
import { Navigate } from 'react-router-dom'
const Login = () => {
   
    const {state,dispatch} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUserLoading());
        axios({
            method: "POST",
            url : `https://reqres.in/api/login`,
            data : {email, password}
        })
        .then((res) => {
            dispatch(loginSuccess(res.data.token))
        })
        .catch(() => {
            dispatch(loginUserFailure());
        })
    }



    const handleEmail = (e) => {
        setEmail(e.target.value)
    }


    const handlePassword = (e) => {
        setpassword(e.target.value)
    }

    if(state.isAuth) {
      return  <Navigate to='/' />
    }

  return (
    <div>
      
        <HStack>
        <Box border={"1px solid blue"} h="600px" w={"50%"} marginTop="65px">
    <Text>dfdfd </Text>
        </Box>
        <Box border={"1px solid red"} w={"50%"} h="600px" marginTop="65px"  >
        <form onSubmit={handleSubmit} >
        <Button colorScheme='blue'marginTop="200px" w="70%" marginLeft={"15%"} >Button</Button>
        <br />
        <Button colorScheme='blue'marginTop="5px"w="70%" marginLeft={"15%"} >Button</Button>
        <br />
        <Button colorScheme='blue'marginTop="5px"w="70%" marginLeft={"15%"} >Button</Button>
        <br />
        <Input type="text" placeholder='Enter your Email' onChange={handleEmail} w="70%" marginLeft={"15%"} marginTop="5px"  />
        <Input type="password" placeholder='Enter your password' onChange={handlePassword} w="70%" marginLeft={"15%"} marginTop="5px" />
        <br />
        <Button margin={"auto"} onClick={handleSubmit} w="30%" marginLeft={"35%"} marginTop="5px" >Login</Button>
        </form>
    
      </Box>
      </HStack>
      

     
    </div>
  )
}

export default Login