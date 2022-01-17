import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ExchangeRates from "./ExchangeRates";
import { CurrencyDataProvider } from "./model/dataProvider/context";
import RatesGraph from "./RatesGraph";

function ForexTool() {
  return (
    <CurrencyDataProvider>
      <Box
        display="flex"
        flexDirection="column"
        m={{ base: "0  2em 4em", md: "4em 4em", lg: "4em  auto" }}
        alignSelf="stretch"
        boxShadow="base"
        rounded="md"
        bg="brand.500"
      >
        <Tabs isFitted variant="custom" width={{ base: "auto", lg: "55em" }}>
          <TabList border="none">
            <Tab border="none">Convert</Tab>
            <Tab border="none">Graph</Tab>
          </TabList>
          <TabPanels p="10">
            <TabPanel p="0">
              <ExchangeRates />
            </TabPanel>
            <TabPanel p="0">
              <RatesGraph />
            </TabPanel>
          </TabPanels>
          <Container />
        </Tabs>
      </Box>
    </CurrencyDataProvider>
  );
}

export default ForexTool;
