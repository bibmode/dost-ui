import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

import "@fontsource/merriweather";
import "@fontsource/inter";
// import "@fontsource/inter/700.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/inter/400.css";
import "@fontsource/open-sans";
// import "@fontsource/open-sans/600.css";
// import "@fontsource/open-sans/500.css";
// import "@fontsource/open-sans/400.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
