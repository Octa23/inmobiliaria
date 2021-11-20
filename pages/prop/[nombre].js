import {
  Heading,
  Grid,
  Tag,
  Icon,
  TagLabel,
  Box,
  Stack,
  Text,
  Image,
  StackDivider,
} from "@chakra-ui/react";
import React, {useState} from "react";

import icons from "../../public/icons/icons.js";
import Imagegalery from "../../src/modules/Imagegalery";
import getInfo from "../../src/services/getInfo";

const algo = ({data, imgnes}) => {
  const [selectedImg, setSelectedImg] = useState(data.Imagenes);
  const imagenes = [data.Imagenes];

  imgnes.map((e) => imagenes.push(e));
  imgnes.map((e) => imagenes.push(e));

  const heading = `${data.Propiedad} en ${data.Operacion}`;

  return (
    <Box>
      <Box>
        <Stack
          alignItems={"center"}
          direction={{base: "column", md: "row"}}
          spacing={7}
          textAlign={{base: "center", md: "unset"}}
        >
          <Stack>
            <Heading
              as="h1"
              fontFamily="unset"
              fontSize="3xl"
              fontWeight="unset"
              px={{base: 0, md: 5}}
            >
              {heading.toUpperCase()}
            </Heading>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent={{base: "center", md: "unset"}}
              pl={{base: 0, md: 5}}
            >
              <Icon color="black" h={6} viewBox="0 0 32 32" w={6}>
                <path d={icons[0]} fill="currentColor" />
                <path d={icons[1]} fill="currentColor" />
              </Icon>

              <Heading
                alignItems="center"
                as="h3"
                fontFamily="unset"
                fontSize="2xl"
                fontWeight="unset"
              >
                {data.Nombre}
              </Heading>
            </Stack>
          </Stack>
          <Tag
            borderRadius={0}
            colorScheme="green"
            fontSize="2xl"
            height={"60px"}
            mx={{base: "20px", md: 0}}
            variant="subtle"
            width="min-content"
          >
            <TagLabel>${data.Precio.toUpperCase()}</TagLabel>
          </Tag>

          <Stack
            alignItems="center"
            direction="row"
            flex={1}
            justifyContent="space-evenly"
            spacing={{base: "50px", md: 0}}
          >
            <Stack alignItems="center" direction="column">
              <Icon color="black" h={50} viewBox="0 0 512 512" w={100}>
                <path d={icons[2]} fill="currentColor" />
                <path d={icons[3]} fill="currentColor" />
              </Icon>
              <Text>2 Ambientes</Text>
            </Stack>
            <Stack alignItems="center" direction="column">
              <Icon color="black" h={50} viewBox="0 0 512 512" w={100}>
                <path d={icons[4]} fill="currentColor" />
              </Icon>
              <Text>2 Dormitorios</Text>
            </Stack>
            <Stack alignItems="center" direction="column">
              <Icon color="black" h={50} viewBox="0 0 512 512" w={100}>
                <path d={icons[5]} fill="currentColor" />
                <path d={icons[6]} fill="currentColor" />
                <path d={icons[7]} fill="currentColor" />
              </Icon>
              <Text>20 m2</Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Stack className="App" direction={{base: "column", md: "row"}} p={5}>
        <Stack
          alignItems={"center"}
          borderColor={"secondary"}
          borderRadius="lg"
          borderWidth="1px"
          className="container"
          direction="column"
          divider={<StackDivider borderColor="blackAlpha.400" borderWidth={2} />}
          p={1}
        >
          <Image
            alt="Selected"
            borderTopRadius={"lg"}
            className="selected"
            h={{base: "45vh", md: "400px", xl: "700px"}}
            objectFit="cover"
            src={selectedImg}
            w={{base: "100vw"}}
          />
          <Grid
            alignItems="center"
            gap={1}
            justifyContent="center"
            mb={1}
            templateColumns={{base: "repeat(auto-fit, minmax(50px,100px))"}}
            w="100%"
          >
            {imagenes.map((Imagen) => (
              <Box key={Math.random()} h="100px" w="100%">
                <Image
                  alt="Casa"
                  cursor="pointer"
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
        <Box w="100%">
          <div dangerouslySetInnerHTML={{__html: data.Descripcion}} />
        </Box>
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
