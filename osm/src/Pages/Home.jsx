import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { AuthContext } from '../Context/AuthContext/AuthContex'
import axios from "axios";
import { Box, Grid, GridItem,Image,Text } from '@chakra-ui/react';


const getData = () => {
  return axios.get(`http://localhost:8080/products`);
}

const Home = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {state} = useContext(AuthContext);


  useEffect(() => {
    setLoading(true);
    getData()
    .then((res) => {
      setData(res.data)
      console.log(res.data);
      setError(false);
    })
    .catch(() => {
      setError(true);
      setData([])
    })
    .finally(() => {
      setLoading(false);
    })
  },[])

  if(loading) {
    return (
      <>
      ..loading
      </>
    )
  }

  return (
    <div>

    <Grid w="80%" margin="auto" border="1px solid red" gap={5}  templateColumns={{
      base: "repeat(1,1fr)",
      md: "repeat(2,1fr)",
      lg: "repeat(4,1fr)"
    }} >
      {
        data.map((item) => (
          <GridItem>
            <Box h={"275px"} border="1px solid black" mt={"100px"} overflow={"hidden"} borderRadius={"5px"}>
              <Box  >
                <Image src={item.imageSrc} m="auto" h={{
                  sm: '10em',
                  md: '10em',
                  lg: '10em',
                }}/>
              </Box>
              <Box marginTop={"5px"} padding="15px" borderLeft={"5px solid #FFCE32"}  >
              <Text fontSize="1.1em" fontWeight={"bold"}>

              {item.price}
              </Text>
                <Text>
                  {item.title}
                </Text>
                <Text>
                  {item.gender}
                </Text>
              </Box>
            
            </Box>
            
          </GridItem>
        ))
      }

    </Grid>

    </div>
  )
}

export default Home