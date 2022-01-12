import { Flex } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { GraphForm } from "./GraphForm";
import { DailyPrices } from "./model/types";

export const chartOptions: ApexOptions = {
  chart: {
    type: "candlestick",
  },
};
type Props = {
  data: DailyPrices | null;
  getGraph: (from: string, to: string) => void;
};

const RatesGraph = ({ data, getGraph }: Props) => {
  const initialValues = {
    baseCurrency: "USD",
    targetCurrency: "EUR",
  };
  return (
    <Flex direction="column">
      <GraphForm onSubmit={getGraph} initialValues={initialValues} />
      {data && (
        <ReactApexChart
          options={chartOptions}
          series={data?.series}
          type="candlestick"
          height={500}
        />
      )}
    </Flex>
  );
};

export default RatesGraph;
