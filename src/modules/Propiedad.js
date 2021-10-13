import {Box, Text, Image, Badge} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export const Propiedad = ({propiedad}) => {
  const {Nombre, Id, Descripcion, Operacion, Precio, Imagenes} = propiedad;

  console.log(propiedad);

  return (
    <Link href={"/prop/" + Id}>
      <a>
        <Box
          borderColor={"secondary"}
          borderRadius="lg"
          borderWidth="3px"
          boxShadow={"xl"}
          flex={1}
          h="300px"
          justifySelf="center"
          maxW="sm"
          overflow="hidden"
          w="100%"
        >
          <Image alt={Nombre} h="60%" objectFit="cover" src={Imagenes} w="100%" />

          <Box p="6">
            <Box alignItems="baseline" display="flex">
              {propiedad.nuevo && (
                <Badge borderRadius="full" colorScheme="orange" px="2">
                  Nuevo
                </Badge>
              )}
              <Box
                color="secondary"
                fontSize="xs"
                fontWeight="semibold"
                letterSpacing="wide"
                ml="2"
                textTransform="uppercase"
              >
                {3} Ambientes &bull; Planta baja
              </Box>
            </Box>

            <Box isTruncated as="h4" fontWeight="semibold" lineHeight="tight" mt="1">
              {Nombre}
            </Box>

            <Box>
              {Precio}
              <Box as="span" color="gray.600" fontSize="md">
                / mes
              </Box>
            </Box>
          </Box>
        </Box>
      </a>
    </Link>
  );
};
export default Propiedad;

{
  /* <Box
  alignItems="center"
  borderRadius="md"
  borderWidth={"medium"}
  justifyContent="center"
  textAlign="center"
>
  <Text>{Id}</Text>
  {Imagenes && <Image alt="casa" src="https://i.blogs.es/c68014/casa-3d/450_1000.jpeg" />}

  <Text>{Nombre}</Text>
  <Text>{Descripcion}</Text>
  <Text>{Operacion}</Text>
  <Text>{Precio}</Text>
</Box>; */
}
