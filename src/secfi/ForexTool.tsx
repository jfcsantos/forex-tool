import { Box } from "@chakra-ui/react";
import ExchangeRates from "./ExchangeRates";
import { CurrencyDataProvider } from "./model/dataProvider/context";

function ForexTool() {
  return (
    <CurrencyDataProvider>
      <Box
        display="flex"
        flexDirection="column"
        m={{ base: "0  2em 4em", md: "4em 4em", lg: "4em  auto" }}
        p={{ base: "1em", md: "3em" }}
        alignSelf="stretch"
        boxShadow="base"
        rounded="md"
        bg="brand.500"
        width={{ base: "auto", lg: "55em" }}
      >
        <ExchangeRates />
      </Box>
    </CurrencyDataProvider>
  );
}

export default ForexTool;
