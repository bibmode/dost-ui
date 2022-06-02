import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Inter', sans-serif`,
    serif: `'Merriweather', serif`,
  },
  sizes: {
    ...chakraTheme.space,
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1500px",
    },
  },
});

export default theme;
