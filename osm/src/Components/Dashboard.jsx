import React from 'react'
import SideBar from './SideBar'
import { Box, Flex, Image , Text } from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <>
        
        <Flex w="full" h="100vh" bg="gray.100" padding={10} gap={5} >
        <SideBar />
        <Flex w="full" h={"full"} as="main" pos="relative" bg="white" alignItems={"center"} justifyContent="center" flexDirection={"column"} borderRadius="3xl" mt="25px">
          <Box    w={"80%"} h="auto" position={"absolute"} top="0%"  > 
          <Box borderRadius={"3xl"}   w={"full"} h="200px" display={"flex"} alignItems={"center"}   border={"1px solid black"} mt="5px" bg={"gray.100"} >
                <Image h={"50%"} borderRadius={"50%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" />
            </Box>
            <Box w={"full"} h="200px" borderRadius={"3xl"} display={"flex"} alignItems={"center"}  border={"1px solid black"} mt="5px" bg={"gray.100"}>
                <Image h={"50%" } borderRadius={"50%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" />
                <Text>Image</Text>
            </Box>
          </Box>
           
            
        </Flex>
        </Flex>
     
     

    </>
  )
}

export default Dashboard