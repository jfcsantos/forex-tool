import {
  Box,
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
    <Box display="flex" flexDirection="column">
      <Text>Select the currency pair you wish to display the data for.</Text>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Convert</Tab>
          <Tab>Graph</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ExchangeRates
              data={convertedResults}
              convertCurrency={convertCurrency}
            />
          </TabPanel>
          <TabPanel>
            <RatesGraph data={graphData} getGraph={getGraphData} />
          </TabPanel>
        </TabPanels>
        <Container />
      </Tabs>
    </Box>
  );
}

export default ForexTool;
