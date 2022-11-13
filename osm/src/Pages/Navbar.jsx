import { Box, HStack, Spacer, Text ,Image, Input, Flex} from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext/AuthContex'
import { Menu,MenuButton, MenuList, Button, MenuItem,Select } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons';
import { useState } from 'react'


const Navbar = () => {

  const {state} = useContext(AuthContext);
  // const [log, setLog] = useState("Login");

  // if(state.isAuth) {
  //   setLog('Logout')
  // }

  return (
    <div>
        <Box fontSize={"1.1em"} h={"4rem"} w="full"  bg="#EFF1F3" paddingLeft={"10%"} paddingRight="10%" display={"flex"} alignItems={"center"} justifyContent="space-evenly" pos="fixed">
            <HStack >
            <Link to='/'>
                <Text fontWeight={"bold"} >OSM</Text>
                </Link> 
              
              {/* <Select placeholder='Select option' bg={"white"} border="2px solid #002F34" w={"300px"} >
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select> */}
{/*              
              <Menu w="200%" >
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} >
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu> */}
<Input w={"700px"} bg="white" placeholder='Find Cars, Mobile Phone and more...' border="2px solid black"  />
<button><SearchIcon  h={"35"}  /></button>

              <Text>{state.token}</Text>
             
             
                
               
                <Link to="/login">
                 
                <Text>Login</Text>
                </Link>
                {/* <Link to={"/pro"} >Pro</Link> */}
                <Link to={"/dash"} >sell</Link>
            </HStack>
        </Box>
        <Flex w={'80%'} h='50px'm="auto" border={'1px solid red'} >

        </Flex>

    </div>
  )
}

export default Navbar