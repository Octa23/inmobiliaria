import {ChakraProvider, Box, Spinner, Center, Grid} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import theme from "../../src/theme.js";
import Navbar from "../../src/modules/Navbar.js";
import Propiedad from "../../src/modules/Propiedad";
import getInfo from "../../src/services/getInfo";

const algo = () => {
  const [producto, setproducto] = useState();

  useEffect(() => {
    getInfo().then((res) => setproducto(res));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {producto ? (
        <Center h="100vh">
          <Propiedad
            propiedad={producto.filter((x) => x.Id == window.location.pathname.substring(6))[0]}
          />
        </Center>
      ) : (
        <Center h="50vh">
          <Spinner color="secondary" emptyColor="primary" size="xl" speed="0.65s" thickness="4px" />
        </Center>
      )}
    </ChakraProvider>
  );
};

export default algo;
