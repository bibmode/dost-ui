import { HStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import StandardContent from "../components/slideshow/StandardContent";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Slideshow />
    </>
  );
};

export default Home;
