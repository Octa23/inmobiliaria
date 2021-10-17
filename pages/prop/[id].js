import {Box, Spinner, Center, Grid} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import Propiedad from "../../src/modules/Propiedad";
import getInfo from "../../src/services/getInfo";

const algo = () => {
  const [producto, setproducto] = useState();

  useEffect(() => {
    getInfo().then((res) => setproducto(res));
  }, []);

  return (
    <>
      {producto ? (
        <Center mt={40}>
          <Propiedad
            propiedad={producto.filter((x) => x.Id == window.location.pathname.substring(6))[0]}
          />
        </Center>
      ) : (
        <Center h="50vh">
          <Spinner color="secondary" emptyColor="primary" size="xl" speed="0.65s" thickness="4px" />
        </Center>
      )}
    </>
  );
};

export default algo;
