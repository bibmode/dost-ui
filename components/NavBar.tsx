import {
  Box,
  Button,
  Center,
  Container,
  Hide,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Show,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import Image from "next/image";
import React, { useRef } from "react";
import dostLogoPhone from "../public/dost-logo-phone.png";
import dostLogoPC from "../public/dost-logo-text.png";
import dostSymbol from "../public/dost-symbol.png";
import NavDrawer from "./NavDrawer";

type Props = {};

const NavBar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Container
        maxW="container.xxl"
        position="relative"
        display="flex"
        pt="8"
        pb="4"
        zIndex={3}
      >
        <Hide above="md">
          <Image src={dostLogoPhone} alt="logo" />

          <Spacer />
        </Hide>

        <Show above="md">
          <Image src={dostLogoPC} alt="logo" />

          <Center w="full" position="absolute" ml={-4}>
            <Button
              variant="unstyled"
              as={motion.button}
              whileHover={{ rotate: 360 }}
              transition="linear 0.2s"
              transitionDuration="1s"
              width="fit-content"
              height="fit-content"
              sx={{
                boxShadow: "none !important",
              }}
              _hover={{
                rotate: "360deg",
              }}
            >
              <Image src={dostSymbol} alt="logo" />
            </Button>
          </Center>
        </Show>

        <Box display="flex" alignItems="center" ml="auto">
          <Show above="md">
            <HStack spacing={1} fontSize="smaller">
              <Hide below="1245px">
                <Menu>
                  <MenuButton
                    as={Button}
                    px={2}
                    py={2}
                    border="none"
                    background="transparent"
                    fontWeight="normal"
                    fontSize="small"
                    _hover={{ fontWeight: "bold" }}
                  >
                    Transparency
                  </MenuButton>
                </Menu>
              </Hide>
              <Hide below="1100px">
                <Menu>
                  <MenuButton
                    as={Button}
                    px={2}
                    py={2}
                    border="none"
                    background="transparent"
                    fontWeight="normal"
                    fontSize="small"
                    _hover={{ fontWeight: "bold" }}
                  >
                    About Us <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New File</MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu>
              </Hide>
              <Hide below="867px">
                <Menu>
                  <MenuButton
                    as={Button}
                    px={2}
                    py={2}
                    border="none"
                    background="transparent"
                    fontWeight="normal"
                    fontSize="small"
                    _hover={{ fontWeight: "bold" }}
                  >
                    Programs & Services
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New File</MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={Button}
                    px={2}
                    py={2}
                    border="none"
                    background="transparent"
                    fontWeight="normal"
                    fontSize="small"
                    _hover={{ fontWeight: "bold" }}
                  >
                    DOST Agencies
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New File</MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu>
              </Hide>
            </HStack>
          </Show>

          <IconButton
            colorScheme="gray"
            aria-label="Search database"
            ml="2"
            icon={<HamburgerIcon />}
            ref={btnRef}
            onClick={onOpen}
          />
        </Box>
      </Container>

      <NavDrawer btnRef={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default NavBar;
