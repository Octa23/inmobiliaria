import {ChakraProvider, Center, Button, Link} from "@chakra-ui/react";
import React from "react";

import Navbar from "../src/modules/Navbar";
import theme from "../src/theme";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Center mt={10}>
        <Link href="/page">
          <Button colorScheme={"red"}>Sin serverside prop</Button>
        </Link>
      </Center>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
