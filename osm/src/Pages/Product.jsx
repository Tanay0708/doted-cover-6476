import { Box,Image,Text, Flex } from '@chakra-ui/react'
import React from 'react'

const Product = () => {
  return (

    <Flex w={"80%"} margin="auto" gap={"1.5%"} >
        <Box h={"auto"} border={"1px solid black"} mt="65px" w={"65%"} >
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
                <Text>
                Note : Name transfer is mandatory

1. First owner .

2. 2021 March cash purchased.

3. 5 years insurance updated till 2026 and pollution updated till 2023

4. No pending cases.

5. Dual key available.

6. LED headlamp , stand censor , BS6 Varient , ABS model ,

Price is slightly negotiable. Thank you.
                </Text>
            </Box>
        </Box>
        <Box h={"500px"} border={"1px solid black"} mt="65px" w={"30%"} >
            <Box w={"full"}>
                
            </Box>
        </Box>
    </Flex>

  )
}

export default Product