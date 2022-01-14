import {
  Box,
  color,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import ExchangeRates from "./ExchangeRates";
import { useConvertedCurrency, useGraphData } from "./model/hooks";
import RatesGraph from "./RatesGraph";

function ForexTool() {
  const { convertedResults, convertCurrency } = useConvertedCurrency();
  const { graphData, getGraphData } = useGraphData();

  return (
    <Box
      display="flex"
      flexDirection="column"
      m={{ base: "-10em 2em 4em", md: "-10em auto 4em" }}
      maxWidth="2xl"
      alignSelf={{ base: "stretch" }}
      boxShadow="base"
      rounded="md"
      bg="brand.500"
    >
      <Tabs isFitted variant="custom" width={{ base: "auto", md: "42em" }}>
        <TabList border="none">
          <Tab border="none">Convert</Tab>
          <Tab border="none">Graph</Tab>
        </TabList>
        <TabPanels p="10">
          <TabPanel p="0">
            <ExchangeRates
              data={convertedResults}
              convertCurrency={convertCurrency}
            />
          </TabPanel>
          <TabPanel p="0">
            <RatesGraph data={graphData} getGraph={getGraphData} />
          </TabPanel>
        </TabPanels>
        <Container />
      </Tabs>
    </Box>
  );
}

export default ForexTool;
