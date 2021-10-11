// eslint-disable-next-line import/order
import React from "react";
import {Box, Container, Image, Stack, Link, Icon} from "@chakra-ui/react";
import {FaInstagram, FaWhatsapp, FaFacebook} from "react-icons/fa";

const Navbar = () => {
  return (
    <Box bg="gray.200" boxShadow="lg">
      <Container maxWidth="10xl">
        <Stack alignItems="center" as="nav" direction="row" justifyContent="space-between" p={3}>
          <Image alt="logo" src="/logo.png" w={"240px"} />
          <Stack alignItems="end" direction="row" height={20} spacing={6}>
            <Link isExternal href="https://chakra-ui.com">
              <Icon as={FaFacebook} color="secondary" height={8} w={8} />
            </Link>
            <Link isExternal href="https://chakra-ui.com">
              <Icon as={FaWhatsapp} color="secondary" height={8} w={8} />
            </Link>
            <Link isExternal href="https://chakra-ui.com">
              <Icon as={FaInstagram} color="secondary" height={8} w={8} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
