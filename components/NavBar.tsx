import { Container, IconButton, Spacer, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import Image from "next/image";
import React, { useRef } from "react";
import dostLogoPhone from "../public/dost-logo-phone.png";
import NavDrawer from "./NavDrawer";

type Props = {};

const NavBar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Container maxW="container.xl" display="flex" pt="8" pb="4">
        <Image src={dostLogoPhone} alt="logo" />
        <Spacer />
        <IconButton
          colorScheme="gray"
          aria-label="Search database"
          ml="2"
          icon={<HamburgerIcon />}
          ref={btnRef}
          onClick={onOpen}
        />
      </Container>

      <NavDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default NavBar;
