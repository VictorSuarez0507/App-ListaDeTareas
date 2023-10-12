import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: true,
    },
    components: {
      CSSReset: {
        baseStyle: {
          body: {
            bg: 'black',
            color: 'white',
          },
        },
      },
    },
  });
  
  export default theme;