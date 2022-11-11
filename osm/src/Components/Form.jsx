import React from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react';
import SideBar from './SideBar';



const Form = () => {
  return (
    <div>
          <Flex w="full" h="100vh" bg="gray.100" padding={10} gap={5} >
        <SideBar />
        <Flex w="full" h={"full"} as="main" pos="relative" bg="white" alignItems={"center"} justifyContent="center" flexDirection={"column"} borderRadius="3xl" mt="25px">
         
           
            
        </Flex>
        </Flex>
     
    </div>
  )
}

export default Form