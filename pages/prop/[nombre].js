import {Center, Grid, Box, Stack, Image, StackDivider} from "@chakra-ui/react";
import React, {useState} from "react";

import getInfo from "../../src/services/getInfo";

const algo = ({data, imgnes}) => {
  const [selectedImg, setSelectedImg] = useState(data.Imagenes);
  const imagenes = [data.Imagenes];

  imgnes.map((e) => imagenes.push(e));
  imgnes.map((e) => imagenes.push(e));

  return (
    <Box className="App" p={5}>
      <Stack
        alignItems={"center"}
        className="container"
        direction="column"
        divider={<StackDivider borderColor="blackAlpha.400" borderWidth={2} />}
      >
        <Image
          alt="Selected"
          className="selected"
          h={{base: "45vh", md: "400px", lg: "600px"}}
          objectFit="cover"
          src={selectedImg}
          w={{base: "100vw", md: "70%", lg: "800px"}}
        />
        <Grid
          alignItems="center"
          gap={1}
          justifyContent="center"
          templateColumns={{base: "repeat(auto-fit, minmax(50px,100px))"}}
          w="100%"
        >
          {imagenes.map((Imagen) => (
            <Box key={Math.random()} h="100px" w="100%">
              <Image
                alt="Casa"
                h="100%"
                objectFit="cover"
                src={Imagen}
                style={{opacity: selectedImg === Imagen ? 0.5 : 1}}
                w="100%"
                onClick={() => setSelectedImg(Imagen)}
              />
            </Box>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export async function getStaticProps({params}) {
  const data = await getInfo(process.env.GS_URL).then((respuesta) =>
    respuesta.find((x) => x.Nombre === params.nombre),
  );
  const imagenes = await fetch(process.env.C_URL) //Devuelve un array con todas las url que contenga el nombre del campo qeu se encuentra en la google sheet
    .then((response) => response.json())
    .then((response) => response.resources.map((e) => e.url));
  const imgnes = imagenes;
  //     response.resources.map((e) => {
  //       if (e.public_id.includes(data.Nombre)) {
  //         return e.url;
  //       } else return null;
  //     }),
  //   );
  // const imgnes = imagenes.filter((e) => e !== null);

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {data, imgnes},
  };
}

export async function getStaticPaths() {
  const data = await getInfo(process.env.GS_URL);

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
