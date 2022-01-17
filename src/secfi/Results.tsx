import { Flex, Text } from "@chakra-ui/react";
import { ExchangeRate } from "./ExchangeRate";
import ReactApexChart from "react-apexcharts";
import { ExchangeResults } from "./model/types";
import { ApexOptions } from "apexcharts";

type Props = {
  data: ExchangeResults | undefined;
  loading: boolean;
};

export const chartOptions: ApexOptions = {
  chart: {
    type: "candlestick",
  },
};

const Results = ({ data }: Props) => {
  if (!data) {
    return <Text>No results to show</Text>;
  }

  const { amount, convertedAmount, rateData, graphData } = data;
  return (
    <Flex direction="column">
      <ExchangeRate
        rateData={rateData}
        convertedAmount={convertedAmount}
        amount={amount}
      />
      <ReactApexChart
        options={chartOptions}
        series={graphData?.series}
        type="candlestick"
        
      />
    </Flex>
  );
};

export default Results;
