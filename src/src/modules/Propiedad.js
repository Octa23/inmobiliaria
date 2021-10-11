import React from "react";
import {Box, Text} from "@chakra-ui/layout";

export const Propiedad = ({propiedad}) => {
  return (
    <Box
      alignItems="center"
      borderRadius="md"
      borderWidth={"medium"}
      justifyContent="center"
      textAlign="center"
    >
      <Text>{propiedad.Id}</Text>
      <Text>{propiedad.Nombre}</Text>
      <Text>{propiedad.Descripcion}</Text>
      <Text>{propiedad.Operacion}</Text>
      <Text>{propiedad.Precio}</Text>
    </Box>
  );
};
export default Propiedad;
