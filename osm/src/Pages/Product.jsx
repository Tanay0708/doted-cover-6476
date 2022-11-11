import { Box,Image,Text, Flex, Avatar, Button } from '@chakra-ui/react';
import { Collapse, } from '@chakra-ui/react';
import React from 'react'

const Product = () => {

    const [show, setShow] = React.useState(false)
    const handleToggle = () => setShow(!show)
  return (

    <Flex w={"90%"} margin="auto" gap={"1.5%"} >
        <Box h={"auto"}  mt="65px" w={"65%"} >
            <Box bg={"black"}>
            <Image w={"70%"} m="auto" h="100%" src="https://apollo-singapore.akamaized.net/v1/files/odsosvjun4qw2-IN/image;s=780x0;q=60" />
            </Box>
            <Box border={"1px solid black"} w="100%" mt={"5px"} borderRadius={"5px"}  >
                <Text fontSize={"1.5em"} fontWeight="bold">Details</Text>
                Brand
KTM 
Model 
Duke 200
Year
2021
KM driven
18,000 km
            </Box>
            <Box border={"1px solid black"} w="100%" mt={"5px"} borderRadius="5px">
                <Text fontSize={"1.5em"} fontWeight="bold">
                    Description
                </Text>
                <Collapse startingHeight={20} in={show}>
                Direct Sale from Factory

All types of extension Boards Available.

Bulk Order Accepted And Delivery All Over India With Shipping Charges Applicable.
      </Collapse>
      <Button size='sm' onClick={handleToggle} mt='1rem'>
        Show {show ? 'Less' : 'More'}
      </Button>
            </Box>
        </Box>
        <Box h={"auto"} mt="65px" w={"30%"} >
            <Box w={"full"} p="20px" borderRadius="4px" border="1px solid black" >
                <Text fontSize={"2em"}  fontWeight="bold" >₹35,000</Text>
                <Text color="grey" fontSize="1em" >Extension Board Wholesale</Text>
                <br />
                <Text fontSize="sm" color="grey" >Samudrapur, Maharashtra, India</Text>
            </Box>
            <Box w="full" border="1px solid black"borderRadius="4px" mt="20px"padding={"20px"} >
                <Text fontSize="1.2em"  >Seller Description</Text>
                <Flex alignItems={"center"} gap="10" mt={"5px"}  >
                    <Avatar size="lg"  name='tanay' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU' />
                    <Text fontSize="1.1em" >Seller name</Text>
                  
                </Flex>
                <Button bg="white" border="2px solid black" h={"3.3em"} borderRadius="4px"  mt="5px" w={"100%"} fontWeight="bold"> Chat with seller </Button>
                <Text> Phone no. 123456789</Text>
            </Box>
            <Box w={"full"} border="1px solid black" p="20px" mt="10px" >
                <Text fontSize="1.2em" fontWeight="bold" >Posted in</Text>
                <Text fontSize="0.8em"mt={"5px"}>Samudrapur, Maharashtra, India</Text>
                <Image mt="10px" src='https://maps.googleapis.com/maps/api/staticmap?center=20.638%2C78.964&language=en-IN&size=640x256&zoom=15&scale=1&lang=en-IN&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=w6zKEQU7w769Dauxuzjx5mXHjyk=' />
            </Box>
        </Box>
    </Flex>

  )
}

export default Product