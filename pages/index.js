import {Box, Spinner, Center, Grid} from "@chakra-ui/react";
import React from "react";

import getInfo from "../src/services/getInfo.js";
import Listad from "../src/modules/Listapropiedad.js";

function Home({data}) {
  return (
    <>
      <Box bg={"white"} mt={20}>
        {data ? (
          <Grid
            gap={3}
            justifyContent="center"
            mt={6}
            px={3}
            templateColumns={{base: "repeat(auto-fill, minmax(350px,1fr))"}}
            w={"100%"}
          >
            <Listad producto={data} />
          </Grid>
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
    </>
  );
}

export async function getServerSideProps() {
  const data = await getInfo();

  return {props: {data}};
}
export default Home;

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
