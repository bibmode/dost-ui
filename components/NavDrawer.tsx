import { ChevronRightIcon, EmailIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  VStack,
  StackDivider,
  Text,
  Link,
  Divider,
  IconButton,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import NextLink from "next/link";

type Props = {
  btnRef: React.MutableRefObject<null>;
  isOpen: boolean;
  onClose: () => void;
};

const NavDrawer = ({ btnRef, isOpen, onClose }: Props) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt={8}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search site" />
            </InputGroup>
          </DrawerHeader>

          <DrawerBody
            sx={{
              "&::-webkit-scrollbar": {
                width: "8px",
                marginRight: "2px",
                borderRadius: "8px",
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `rgba(0, 0, 0, 0.05)`,
              },
            }}
          >
            <VStack spacing={1} pb={6}>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Home
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Transparency
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    About Us
                    <ChevronRightIcon ml="auto" />
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Programs & Services
                    <ChevronRightIcon ml="auto" />
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    DOST Agencies
                    <ChevronRightIcon ml="auto" />
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Contact Us
                  </Text>
                </Button>
              </NextLink>
              <Divider py={2} />
            </VStack>

            {/* bottom part navigation */}
            <VStack spacing={1}>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Announcements
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    GAD Corner
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Procurement
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Job Vacancy
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Grants-in-Aid Program
                    <ChevronRightIcon ml="auto" />
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Privacy Policy
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Privacy Policy
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    IEC Materials
                    <ChevronRightIcon ml="auto" />
                  </Text>
                </Button>
              </NextLink>
              <NextLink href="/" passHref>
                <Button
                  width="100%"
                  colorScheme="gray"
                  variant="ghost"
                  outline="none"
                >
                  <Text
                    flexGrow="1"
                    fontSize="smaller"
                    textAlign="left"
                    display="flex"
                    justifyContent="space-between"
                    textDecoration="none"
                    fontFamily="serif"
                    fontWeight="normal"
                  >
                    Testimonials
                  </Text>
                </Button>
              </NextLink>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack mr="auto">
              <IconButton
                variant="unstyled"
                color="gray.400"
                _hover={{ color: "gray.800" }}
                width="fit-content"
                fontSize="28px"
                aria-label="Send email"
                icon={<Icon as={MdFacebook} />}
              />
              <IconButton
                variant="unstyled"
                color="gray.400"
                _hover={{ color: "gray.800" }}
                width="fit-content"
                fontSize="28px"
                aria-label="Send email"
                icon={<Icon as={RiInstagramFill} />}
              />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
