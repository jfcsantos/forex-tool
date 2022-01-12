import { useCallback, useState } from "react";
import { getExchangeRates, getHistoricalData } from "./api";
import {
  CurrencyExchangeData,
  CurrencyExchangeResults,
  DailyPrices,
} from "./types";

// Interaction layer
export const useConvertedCurrency = () => {
  const [results, setResults] = useState<CurrencyExchangeResults | null>(null);

  const convertCurrency = useCallback(
    (from: string, to: string, amount: number) =>
      getExchangeRates(from, to).then((data: CurrencyExchangeData) => {
        const exchangeRate = parseFloat(data.exchangeRate);
        setResults({
          rateData: data,
          convertedAmount: amount * exchangeRate,
          amount,
        });
      }),
    []
  );

  return { convertedResults: results, convertCurrency };
};

export const useGraphData = () => {
  const [results, setResults] = useState<DailyPrices | null>(null);

  const getGraphData = useCallback(
    (from: string, to: string) =>
      getHistoricalData(from, to).then((data: DailyPrices) => {
        console.log(data);

        setResults(data);
      }),
    []
  );

  return { graphData: results, getGraphData };
};
