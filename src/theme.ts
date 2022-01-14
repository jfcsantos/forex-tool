import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: { 100: "#46413c", 200: "#e9e8d9", 300: "#eaf1ec", 500: "#F9FAF5" },
  },
  components: {
    Button: {
      baseStyle: {
        bgColor: "brand.100",
        textColor: "brand.500",
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Tabs: {
      variants: {
        custom: {
          tablist: {
            borderTopRadius: "base",
            overflow: "hidden",
          },
          tab: {
            bg: "brand.300",
            _selected: {
              bg: "brand.500",
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
