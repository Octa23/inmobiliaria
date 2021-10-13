import {ChakraProvider, Box, Spinner, Center, Grid} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import theme from "../src/theme.js";
import Navbar from "../src/modules/Navbar.js";
import getInfo from "../src/services/getInfo.js";
import Listad from "../src/modules/Listapropiedad.js";

export default function Home() {
  const [producto, setproducto] = useState();

  useEffect(() => {
    getInfo().then((res) => setproducto(res));

    // setImagenes(getImages())
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box bg={"white"}>
        <Navbar />
        {producto ? (
          <Center>
            <Grid
              gap={6}
              justifyContent="center"
              mt={6}
              px={6}
              templateColumns={{base: "repeat(auto-fill, 300px)"}}
              w={"8xl"}
            >
              <Listad producto={producto} />
            </Grid>
          </Center>
        ) : (
          <Center h={"50vh"}>
            <Spinner
              color="secondary"
              emptyColor="primary"
              size="xl"
              speed="0.65s"
              thickness="4px"
            />
          </Center>
        )}
      </Box>
    </ChakraProvider>
  );
}

{
  /* <Box boxSize="sm" color="blue.200">
<Image src="https://res.cloudinary.com/dcn2ctbhp/image/upload/v1633657108/Inmo/20210926_132857_e9z86y.jpg" alt="Prueba"/>
</Box> */
}
// https://api.cloudinary.com/v1_1/demo/resources/video
// curl https://885488275165474:yxjX7DK0sUk_BMc91G_cJvHfOIk@api.cloudinary.com/v1_1/dcn2ctbhp/resources/image
// const getImages = () =>{
//   return fetch("https://api.cloudinary.com/v1_1/dcn2ctbhp/resources/image")
//   .then((response)=>{return response.json()})
//   .then((json)=>{return json.resources})
// }
