import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthContex'
import axios from "axios";
import { Box, Divider,Stack, Flex, Grid, GridItem,Image,ListItem,Text } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';
import Pagination from '../Components/Pagination';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './Home.css'
const getData = ({page = 1}) => {
  return axios.get(`https://osm-mock-server-modified.onrender.com/products?_page=${page}&_limit=10`);
}

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {state} = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getData({page})
    .then((res) => {
      setData(res.data)
      console.log(res.data);
      setError(false);
      setTotalPage(res.totalPage)
    })
    .catch(() => {
      setError(true);
      setData([])
    })
    .finally(() => {
      setLoading(false);
    })
  },[page])

  if(loading) {
    return (
      <>
      <Stack position={'absolute'} top="10px">
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>  
      </>
    )
  }

  return (
    <div>
       <Flex w={'100%'} h='50px'm="auto" mt="15px" className='home-pro'  display='flex' alignItems={"center"} justifyContent="space-around" >
          <Text fontWeight={'bold'} >ALL Categories</Text>
          <Text fontSize={'0.8m'} >Cars</Text>
          <Text fontSize={'0.8m'} >MotorCycle</Text>
          <Text fontSize={'0.8m'} >Mobile Phones</Text>
          <Text fontSize={'0.8m'} >For sale: Hoses & Apartments</Text>
          <Text fontSize={'0.8m'} >OLX Renew(Mobile)</Text>
          <Text fontSize={'0.8m'} >Scooters</Text>
          <Text fontSize={'0.8m'} >Commercial and other vehicels</Text>
          <Text fontSize={'0.8m'} >For Rent : House and Apartment</Text>
      </Flex>

    <Flex w={"80%"} m='auto'  mt='50px' >
      <Image src='https://next-js-olx-clone.vercel.app/images/banner.JPG' />
    </Flex>
    <Grid w="80%" margin="auto"  gap={2}   templateColumns={{
      base: "repeat(1,1fr)",
      md: "repeat(2,1fr)",
      lg: "repeat(4,1fr)"
    }} >
      {
        data.map((item) => (
          <GridItem>
            <Box h={"280px"} className="home-pro" mt={"25px"}  overflow={"hidden"} borderRadius={"5px"}>
              <Box  >
                <Image src={item.img} m="auto" h={{
                  sm: '10em',
                  md: '10em',
                  lg: '10em',
                }}/>
              </Box>
              <Box marginTop={"5px"} padding="15px" borderLeft={"5px solid #FFCE32"}  >
              <Text fontSize="1.1em" fontWeight={"bold"}>

              ₹{item.price}
              </Text>
              <Link to={`/res/${item.id}`}  >
                <Text fontWeight={"bold"}>
                  {item.title}
                </Text>
                </Link>
                <Text>
                  {item.address}
                </Text>
              </Box>
            
            </Box>
            
          </GridItem>
        ))
      }

    </Grid>
      <br />
      <Box width="20%"  m={"auto"} display="flex" justifyContent="center"  >
        <Pagination current={page} totalPage={totalPage} onChange= {page=> setPage(page)} />
      </Box>
      <Flex w={"full"} pl={"10%"} pr="10%" gap={9} bg={"#F7F8F9"} mt="50px" >
        <Box>
          <Image  src='https://statics.olx.in/external/base/img/phone-app.webp' />
        </Box>
        <Box mt={"10px"} w="35%">
          <Text fontSize={"2em"} fontWeight="bold" color={"#002F34"} >TRY THE OSM APP</Text>
          <Text fontSize={"1.2em"} color={"#002F34"} >
          Buy, sell and find just about anything using the app on your mobile.
          </Text>
        </Box>
        <Divider orientation='vertical' />
        <Box ml={"10px"} mr="10px" mt={"50px"}>
          <Text fontSize={"1em"} color={"#002F34"} >GET YOUR APP TODAY</Text>
        <Flex>
          <Image src='https://statics.olx.in/external/base/img/appstore_2x.webp' />
          <Image src='https://statics.olx.in/external/base/img/playstore_2x.webp' />
        </Flex>
        </Box>
       
      </Flex>
      <Flex w={"full"}  bg="#EBEEEF" >
        <Flex ml="10%" mr="10%" pt={"5px"} gap={20}>
        <Box >
          <Text fontSize={"0.9em"} color={"#002F34"} fontWeight="bold"  >POPULAR LOCATIONS</Text>
        <List >
            <ListItem fontSize={"0.8em"} >    Kolkata
            </ListItem >
            <ListItem fontSize={"0.8em"}>    Mumbai
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Chennai
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Pune
            </ListItem>
        </List>
        </Box>
        <Box >
          <Text fontSize={"0.9em"} color={"#002F34"} fontWeight="bold"  >TRENDING LOCATIONS</Text>
        <List >
            <ListItem fontSize={"0.8em"} >    Bhubaneshwar
            </ListItem >
            <ListItem fontSize={"0.8em"}>    Hyderabad
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Chandigarh
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Nashik
            </ListItem>
        </List>
        </Box>
        <Box >
          <Text fontSize={"0.9em"} color={"#002F34"} fontWeight="bold"  >ABOUT US</Text>
        <List >
            <ListItem fontSize={"0.8em"} >   About OLX Group
            </ListItem >
            <ListItem fontSize={"0.8em"}>    Careers
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Contact Us
            </ListItem>
            <ListItem fontSize={"0.8em"}>    OLXPeople
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Waah Jobs
            </ListItem>
        </List>
        </Box>
        <Box >
          <Text fontSize={"0.9em"} color={"#002F34"} fontWeight="bold"  >OLX</Text>
        <List >
            <ListItem fontSize={"0.8em"} >    Help
            </ListItem >
            <ListItem fontSize={"0.8em"}>    Sitemap
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Legal & Privacy information
            </ListItem>
            <ListItem fontSize={"0.8em"}>    Blog
            </ListItem>
        </List>
        </Box>
        <Box>
          <Text fontSize={"0.9em"} color="#002F34" fontWeight={"bold"} >FOLLOW US</Text>
        </Box>
        </Flex>
      </Flex>
      <Flex w={"full"} h="50px" bg={"#002F34"} justifyContent="space-between" color={"white"} alignItems="center" >
      <Flex gap="50px">
          <Text fontWeight={"bold"}>Other Countries</Text>
        <Text>Pakistan - South Africa - Indonesia</Text>
      </Flex>
      <Flex>
        <Text>All rights reserved</Text>
      </Flex>
      </Flex>
    </div>
  )
}

export default Home