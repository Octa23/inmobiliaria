import {Box, Image, Stack, Badge, Button, Link as Linkk} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import {FaWhatsapp} from "react-icons/fa";

export const Propiedadinfo = ({propiedad}) => {
  const {Nombre, Id, Descripcion, Propiedad, Operacion, Precio, Ambientes, Imagenes} = propiedad;
  const text = `Hola, me interesa la propiedad de la calle ${Nombre}`;

  return (
    <Box w="100%">
      <Box
        bg="white"
        borderColor={"secondary"}
        borderRadius="lg"
        borderWidth="1px"
        boxShadow={"xl"}
        flex={1}
        h="300px"
        m="auto"
        maxW="sm"
        overflow="hidden"
        p={1.5}
        w="100%"
      >
        <Link href={"/prop/" + Nombre}>
          <a>
            <Box h="60%">
              <Image
                alt={Nombre}
                borderTopRadius="lg"
                h="100%"
                objectFit="cover"
                src={Imagenes}
                w="100%"
              />
            </Box>
          </a>
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
            {Ambientes} Ambientes &bull; Planta baja
          </Box>
          <Stack alignItems="center" direction="row" justifyContent="space-between" w="100%">
            <Box>
              <Box isTruncated as="h4" fontWeight="semibold" lineHeight="tight" mt="1">
                {Nombre}
              </Box>
              <Box>
                ${Precio}
                <Box as="span" color="gray.600" fontSize="md" />
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
export default Propiedadinfo;
