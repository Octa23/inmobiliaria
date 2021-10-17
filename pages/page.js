import {Box, Spinner, Center, Grid} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import getInfo from "../src/services/getInfo.js";
import Listad from "../src/modules/Listapropiedad.js";

export default function Home({data}) {
  const [producto, setproducto] = useState();

  useEffect(() => {
    getInfo().then((res) => setproducto(res));

    // setImagenes(getImages())
  }, []);

  return (
    <>
      <Box bg={"white"} mt={40}>
        {producto ? (
          <Center>
            <Grid
              gap={6}
              justifyContent="center"
              mt={6}
              px={6}
              templateColumns={{base: "repeat(auto-fill, minmax(400px,1fr))"}}
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
    </>
  );
}
