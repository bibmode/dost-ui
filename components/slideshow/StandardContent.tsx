import { Box, Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image1: StaticImageData;
};

const StandardContent = ({ image1 }: Props) => {
  return (
    <Center
      as={motion.div}
      w="full"
      height="full"
      bg="gray.300"
      borderRadius="2rem"
      overflow="hidden"
      pos="absolute"
      top="0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      // transition="linear 2s"
    >
      <Box
        pos="absolute"
        top="0"
        display="flex"
        zIndex={1}
        height="full"
        w="full"
      >
        <Image src={image1} alt="poster 1" layout="fill" objectFit="contain" />
      </Box>

      {/* background image */}
      <Box filter="auto" blur="12px" sx={{ transform: "scale(1.5)" }}>
        <Image src={image1} alt="poster 1" />
      </Box>
    </Center>
  );
};

export default StandardContent;
