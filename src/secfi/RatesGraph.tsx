import { Flex, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { useGraphData } from "./model/hooks";
import { RatesForm } from "./RatesForm";

export const chartOptions: ApexOptions = {
  chart: {
    type: "candlestick",
  },
};

const initialValues = {
  baseCurrency: { value: "EUR", label: "Euro" },
  targetCurrency: { value: "USD", label: "United States Dollar" },
};

const RatesGraph = () => {
  const { graphData, getGraphData } = useGraphData();
  return (
    <Flex direction="column">
      <RatesForm
        onSubmit={getGraphData}
        initialValues={initialValues}
        allowCryptoCurrencies={false}
      />
      {graphData && (
        <Flex direction="column">
          <Text
            fontWeight="bold"
            color="messenger"
            fontSize="xl"
            marginBottom="1em"
          >
            {graphData.fromCurrencyCode} to {graphData.toCurrencyCode} chart
          </Text>
          <ReactApexChart
            options={chartOptions}
            series={graphData?.series}
            type="candlestick"
            // height={500}
            width={800}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default RatesGraph;
