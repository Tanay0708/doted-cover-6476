import { Box, Flex ,Button, Stack, HStack } from '@chakra-ui/react'
import React from 'react'
import Dashboard from '../Components/Dashboard'
import Form from '../Components/Form'
import SideBar from '../Components/SideBar'

const Sellers = () => {

    
    

  return (
    <>
    <Flex w="full" h="100vh" bg="gray.100" padding={10} gap={5} >
        <SideBar />
    {/* <Flex bg={"white"} w={"full"}  justifyContent={"space-between"} maxW={350} h="full" as='aside' alignItems={"center"} padding={6} mt="25px" flexDirection="column" borderRadius={"3xl"} >
      <Box  >
        <Button w={"300px"} mt="10px"  >DashBoard</Button>
        <Button w={"300px"} mt="10px"  onClick={() => handleClick("new")} >Add New Product</Button>
        <Button w={"300px"} mt="10px" onClick={() => handleClick("mess")} >Message</Button>
      </Box>
        
    </Flex> */}
    <Flex w="full" h={"full"} as="main" bg="white" alignItems={"center"} justifyContent="center" flexDirection={"column"} borderRadius="3xl" mt="25px">
        
    </Flex>
    </Flex>
    </>
  )
}

export default Sellers