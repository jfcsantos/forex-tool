import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: "#F9FAF5",
  },
  components: {
    Tabs: {
      variants: {
        custom: {
          tablist: {
            borderTopRadius: "base",
            overflow: "hidden",
          },
          tab: {
            bg: "gray.200",
            _selected: {
              bg: "white",
            },
            _focus: {
              boxShadow: "none",
            },
          },
        },
      },
      //   baseStyle: {
      //     tab: {
      //       bg: "gray.200",
      //     },
      //   },
    },
  },
});

export default theme;
