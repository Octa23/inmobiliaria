import {Box, Image, Stack, Badge, Button, Link as Linkk, Divider} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";

export const Propiedad = ({propiedad}) => {
  const {Nombre, Id, Descripcion, Propiedad, Operacion, Precio, Imagenes} = propiedad;
  const text = `Hola, me interesa la propiedad de la calle ${Nombre}`;

  return (
    <Box py={5} w={{base: "90%", lg: "40%"}}>
      <Box
        borderColor={"secondary"}
        borderRadius="lg"
        borderWidth="1px"
        boxShadow={"xl"}
        justifySelf="center"
        overflow="hidden"
        p={2}
        w="100%"
      >
        <Link href={"/prop/" + Id}>
          <Box h="100%" w="100%">
            <Image
              alt={Nombre}
              borderTopRadius="lg"
              h="100%"
              objectFit="cover"
              src={Imagenes}
              w="100%"
            />
          </Box>
        </Link>
        <Box p="3">
          <Stack alignItems="baseline" direction="row" spacing={2}>
            <Badge borderRadius="full" colorScheme="green" px="2">
              {Operacion}
            </Badge>
            <Badge borderRadius="full" colorScheme="blue" px="2">
              {Propiedad}
            </Badge>
          </Stack>
          <Box
            color="secondary"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            mt={2}
            textTransform="uppercase"
          >
            {3} Ambientes &bull; Planta baja
          </Box>
          <Stack alignItems="center" direction="row" justifyContent="space-between" w="100%">
            <Box>
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
            <Linkk
              isExternal
              alignSelf="end"
              href={`https://wa.me/5493484502322?text=${text}`}
              py={1}
            >
              <Button alignSelf="end" colorScheme="whatsapp" leftIcon={<FaWhatsapp />} size="sm">
                Consultar
              </Button>
            </Linkk>
          </Stack>
        </Box>
      </Box>
    </Box>
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
