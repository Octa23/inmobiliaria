import {Spinner, Center} from "@chakra-ui/react";
import React from "react";

import Propiedadinfo from "../../src/modules/Propiedadinfo";
import getInfo from "../../src/services/getInfo";

const algo = ({data}) => {
  return (
    <>
      {data ? (
        <Center>
          <Propiedadinfo propiedad={data} />
        </Center>
      ) : (
        <Center h="50vh">
          <Spinner color="secondary" emptyColor="primary" size="xl" speed="0.65s" thickness="4px" />
        </Center>
      )}
    </>
  );
};

export async function getStaticProps({params}) {
  const data = await getInfo(process.env.GS_URL).then((respuesta) =>
    respuesta.find((x) => x.Nombre === params.nombre),
  );

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {data},
  };
}

export async function getStaticPaths() {
  const data = await getInfo(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQkMK9JhKKEkVSifYq-4Nwr4Xz1qrtb-6lSRESU2F0RVUYRfuy7_JmD4CzVCi_dVMHaY9l4zp9ZY59m/pub?gid=0&single=true&output=csv",
  );

  return {
    paths: data.map((propiedad) => ({
      params: {
        nombre: propiedad.Nombre,
      },
    })),
    fallback: false,
  };
}

export default algo;
