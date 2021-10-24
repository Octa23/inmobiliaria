import {
  Box,
  Spinner,
  Center,
  Select,
  Text,
  StackDivider,
  Image,
  Stack,
  Grid,
} from "@chakra-ui/react";
import React, {useState} from "react";
import axios from "axios";

import getInfo from "../src/services/getInfo.js";
import Listad from "../src/modules/Listapropiedad.js";

function Home({data, imgnes}) {
  const [filtro, setfiltro] = useState({operacion: "TODOS", propiedad: "TODOS", orden: null});

  const handleChange1 = (e) => {
    setfiltro({...filtro, operacion: e.target.value});
  };
  const handleChange2 = (e) => {
    setfiltro({...filtro, propiedad: e.target.value});
  };
  const handleChange3 = (e) => {
    setfiltro({...filtro, orden: e.target.value});
  };

  console.log(imgnes.resources);

  return (
    <>
      <Stack direction={{base: "column", xl: "row"}} divider={<StackDivider />} p={2} w="100%">
        <Stack
          alignItems="center"
          direction={{base: "column", md: "row", xl: "column"}}
          margin={{base: "auto", xl: "0"}}
          maxW={{base: "300px", md: "900px", xl: "300px"}}
          p={3}
          w="100%"
        >
          <Text alignSelf="center" fontSize="xl" textAlign="center" w="100%">
            Filtrar busqueda
          </Text>
          <Select bg="green.200" borderColor="green.200" variant="filled" onChange={handleChange1}>
            <option defaultValue value="TODOS">
              Todas las operaciones
            </option>
            <option value="VENTA">Ventas</option>
            <option value="ALQUILER">Alquileres</option>
          </Select>
          <Select bg="blue.100" borderColor="blue.100" variant="filled" onChange={handleChange2}>
            <option defaultValue value="TODOS">
              Todas las propiedades
            </option>
            <option value="CASA">Casas</option>
            <option value="DEPTO">Departamentos</option>
          </Select>
          <Select
            bg="yellow.200"
            borderColor="yellow.200"
            placeholder="Ordenar por precio"
            variant="filled"
            onChange={handleChange3}
          >
            <option value="MENOR">Menor Primero</option>
            <option value="MAYOR">Mayor Primero</option>
          </Select>
        </Stack>

        <Box bg={"white"} mb={5} w="100%">
          {data ? (
            <Grid
              gap={3}
              justifyContent="center"
              p={3}
              templateColumns={{base: "repeat(auto-fill, minmax(350px,1fr))"}}
              w={"100%"}
            >
              <Listad filtro={filtro} producto={data} />
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
      </Stack>
      <Stack>
        {imgnes &&
          imgnes.resources.map((e) => (
            <li key={e.public_id}>
              <Image
                alt="algo"
                borderTopRadius="lg"
                h="100%"
                objectFit="cover"
                src={e.url}
                w="100%"
              />
            </li>
          ))}
      </Stack>
    </>
  );
}

export async function getServerSideProps() {
  const data = await getInfo(process.env.GS_URL);
  const imgnes = await axios.get(process.env.C_URL).then((response) => response.data);

  return {props: {data, imgnes}};
}
export default Home;
