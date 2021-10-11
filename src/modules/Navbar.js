import React from "react";
import {Box, Container, Image, Stack, Link, Icon} from "@chakra-ui/react";
import {FaInstagram, FaWhatsapp, FaFacebook} from "react-icons/fa";

const Navbar = () => {
  const text = `https://wa.me/5493484502322?text=Hola como estas`;

  return (
    <Box bg="gray.200" boxShadow="lg">
      <Container maxWidth="10xl" px={{base: 0, md: 6}}>
        <Stack alignItems="center" as="nav" direction="row" justifyContent="space-between" p={3}>
          <Image alt="logo" maxWidth={{base: "150px", md: "240px"}} src="/logo.png" />

          <Stack direction="row" spacing={{base: 2, md: 6}}>
            <Link isExternal href="https://www.facebook.com/jcarlosgilinmobiliaria">
              <Icon as={FaFacebook} color="secondary" height={8} w={8} />
            </Link>
            <Link isExternal href="https://wa.me/5491144247588">
              <Icon as={FaWhatsapp} color="secondary" height={8} w={8} />
            </Link>
            <Link isExternal href={text}>
              <Icon as={FaWhatsapp} color="red.500" height={8} w={8} />
            </Link>
            <Link isExternal href="https://www.instagram.com/inmobiliaria.jcg/">
              <Icon as={FaInstagram} color="secondary" height={8} w={8} />
            </Link>
          </Stack>
        </Stack>
        <Image alt="logo" maxWidth={"10xl"} src="/banner.jpg" />
      </Container>
    </Box>
  );
};

export default Navbar;
