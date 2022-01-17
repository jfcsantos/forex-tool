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
  },
});

export default theme;
