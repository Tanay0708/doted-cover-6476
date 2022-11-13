import { Box, Button, Text, Flex,Center,Stack, Input, Divider,Image } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin, SiMessenger } from 'react-icons/si';
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
      
        <Flex bg={"#F7F8F9"}>
        <Box  h="600px" w={"50%"} p="10%" marginTop="65px" bg="#EBEEEF" display={"flex"} justifyContent="space-around" alignItems={"center"} >
    <Image src='https://statics.olx.in/external/base/img/loginEntryPointPost.webp' />
    <Image src='https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp' />
    <Image src='https://statics.olx.in/external/base/img/loginEntryPointChat.webp' />
        </Box>
        <Box  w={"50%"} h="600px" marginTop="65px" p={"absolute"} top="100%" bg="#002F34"  >
        <form onSubmit={handleSubmit}  >
        <Center p={8}>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} mt="50px">
        {/* Facebook */}
        <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
          <Center>
            <Text>Continue with Facebook</Text>
          </Center>
        </Button>

        {/* Google */}
        <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}  >
          <Center>
            <Text color={"white"} >Sign in with Google</Text>
          </Center>
        </Button>

        {/* LinkedIn */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
          <Center>
            <Text>Send to Linkedin</Text>
          </Center>
        </Button>

        {/* Messenger */}
        <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
          <Center>
            <Text>Send to Messenger</Text>
          </Center>
        </Button>
        <Divider orientation='horizontal' marginTop="10px" w={"70%"}  marginLeft="15%" />
          
          <Input bg="white" type="text" placeholder='Enter your Email' onChange={handleEmail} w="full" marginLeft={"15%"} marginTop="10px"  />
          <Input bg="white" type="password" placeholder='Enter your password' onChange={handlePassword} w="full" marginLeft={"15%"} marginTop="5px" />
          <br />
          <Button margin={"auto"} onClick={handleSubmit} w="full" marginLeft={"35%"} marginTop="5px" >Login</Button>
      </Stack>
    </Center>
        <br/>
       
        </form>
    
      </Box>
      </Flex>
      

     
    </div>
  )
}

export default Login