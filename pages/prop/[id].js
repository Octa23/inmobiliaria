import {Box, Spinner, Center, Grid} from "@chakra-ui/react";
import React, {useState, useEffect} from "react";

import Propiedadinfo from "../../src/modules/Propiedadinfo";
import getInfo from "../../src/services/getInfo";

const algo = () => {
  const [producto, setproducto] = useState();

  useEffect(() => {
    getInfo(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQkMK9JhKKEkVSifYq-4Nwr4Xz1qrtb-6lSRESU2F0RVUYRfuy7_JmD4CzVCi_dVMHaY9l4zp9ZY59m/pub?gid=0&single=true&output=csv",
    ).then((res) => setproducto(res));
  }, []);

  return (
    <>
      {producto ? (
        <Center>
          <Propiedadinfo
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
