import {ChakraProvider} from "@chakra-ui/react";
import React from "react";

import Navbar from "../src/modules/Navbar";
import theme from "../src/theme";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <a href="/page">Sin serverside prop</a>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
