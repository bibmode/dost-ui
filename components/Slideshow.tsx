import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Portal,
  Text,
} from "@chakra-ui/react";
import { scaleCorrectors } from "framer-motion/types/projection/styles/scale-correction";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

import slide1 from "../public/slides/web-slider_coursera-03-1024x576.jpg";
import slide2 from "../public/slides/slide-image-2.jpg";
import slide3 from "../public/slides/slide-image-3.jpg";
import slide4 from "../public/slides/slide-image-4.jpg";
import mountain from "../public/slides/mountain.png";
import mountainLeft from "../public/slides/mountain-left.png";
import mountainRight from "../public/slides/mountain-right.png";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import StandardContent from "./slideshow/StandardContent";

type Props = {
  // children: JSX.Element[] | JSX.Element;
};

const Slideshow = (props: Props) => {
  const [slidesItems, setSlidesItems] = useState(4);
  const [activeSlide, setActiveSlide] = useState(1);
  const [slideHeight, setSlideHeight] = useState(500);

  const nextSlide = () => {
    activeSlide !== slidesItems && setActiveSlide(activeSlide + 1);
  };

  const prevSlide = () => {
    activeSlide !== 1 && setActiveSlide(activeSlide - 1);
  };

  const getHeight = (image: StaticImageData) => {
    console.log(image.height);
    setSlideHeight(image.height);
  };

  useEffect(() => {
    switch (activeSlide) {
      case 1:
        getHeight(slide1);
        break;
      case 2:
        getHeight(slide2);
        break;
      case 3:
        getHeight(slide3);
        break;
      case 4:
        getHeight(slide4);
        break;

      default:
        break;
    }
  }, [activeSlide]);

  return (
    <Container
      position="relative"
      maxW="container.xxl"
      w="97%"
      pl={0}
      sx={{ aspectRatio: "16/6" }}
    >
      <Flex
        w="full"
        pos="absolute"
        top="-0.5"
        zIndex={2}
        justifyContent="center"
      >
        <Image src={mountain} alt="mountain white" />
      </Flex>

      <InputGroup
        width="fit-content"
        pos="absolute"
        right="12"
        top="8"
        zIndex={2}
        colorScheme="gray"
        bg="white"
        rounded="full"
      >
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          as={motion.input}
          whileFocus={{
            width: "250px",
          }}
          w={120}
          rounded="full"
          type="tel"
          placeholder="Search"
        />
      </InputGroup>

      {/* <Box overflow="hidden" w="full" pos="absolute"> */}
      <AnimatePresence>
        {activeSlide === 1 && <StandardContent image1={slide1} />}
      </AnimatePresence>
      <AnimatePresence>
        {activeSlide === 2 && <StandardContent image1={slide2} />}
      </AnimatePresence>
      <AnimatePresence>
        {activeSlide === 3 && <StandardContent image1={slide3} />}
      </AnimatePresence>
      <AnimatePresence>
        {activeSlide === 4 && <StandardContent image1={slide4} />}
      </AnimatePresence>
      {/* </Box> */}

      {/* prev-next buttons */}
      <Flex
        as={motion.div}
        pos="absolute"
        left="-1"
        top="-1"
        w="fit-content"
        h="full"
        alignItems="center"
        zIndex={2}
        justifyContent="center"
      >
        <Button
          as={motion.button}
          onClick={prevSlide}
          px={0}
          variant="unstyled"
          display="flex"
          pos="relative"
          h="155"
          width="30px"
          whileHover={{
            width: "50px",
          }}
          sx={{
            boxShadow: "none !important",
          }}
        >
          <Image
            src={mountainLeft}
            alt="mountain white"
            layout="fill"
            objectFit="fill"
          />
          <ChevronLeftIcon pos="absolute" left="2" fontSize="2xl" />
        </Button>
      </Flex>

      <Flex
        pos="absolute"
        right="-1"
        h="full"
        w="fit-content"
        alignItems="center"
        top="-1"
        zIndex={2}
        justifyContent="center"
      >
        <Button
          as={motion.button}
          onClick={nextSlide}
          px={0}
          variant="unstyled"
          display="flex"
          pos="relative"
          h="155"
          width="30px"
          whileHover={{
            width: "50px",
          }}
          sx={{
            boxShadow: "none !important",
          }}
        >
          <Image
            src={mountainRight}
            alt="mountain white"
            layout="fill"
            objectFit="fill"
          />
          <ChevronRightIcon pos="absolute" right="2" fontSize="2xl" />
        </Button>
      </Flex>
    </Container>
  );
};

export default Slideshow;
