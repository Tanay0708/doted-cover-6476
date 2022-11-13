import React from 'react'
import SideBar from './SideBar'
import { Box, Button, Flex, Image , Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const theData = () => {
  return axios.get(`https://osm-mock-server-modified.onrender.com/products?_limit=3`);
}

const Dashboard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    
    theData()
    .then((res) => {
      setData(res.data)
      console.log(res.data);
      
    })
    .catch(() => {
      
      setData([])
    })
    
  },[])

  return (
    <>
        
        <Flex w="full" h="100vh" bg="gray.100" padding={10} gap={5} >
        <SideBar />
        <Flex w="full" h={"full"} as="main" pos="relative" bg="white" alignItems={"center"} justifyContent="center" flexDirection={"column"} borderRadius="3xl" mt="25px">
        <Box    w={"80%"} h="auto" position={"absolute"} top="0%"  > 
         {
          
          data.map((item) => (
           
             <Box w={"full"} h="100px" borderRadius={"3xl"} display={"flex"} alignItems={"center"} justifyContent="space-between" border={"1px solid black"} mt="5px" bg={"gray.100"}>
                <Image h={"50%" } borderRadius="10%" src={item.img} />
                <Text>{item.title}</Text>
                <Button bg={'red.400'} >Remove</Button>
            </Box>
          ))
         }
          
          
          </Box>
           
            
        </Flex>
        </Flex>
     
     

    </>
  )
}

export default Dashboard