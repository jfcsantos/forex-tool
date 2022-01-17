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
    (from: string, to: string, amount: number = 1) => {
      if (!!amount && !!from && !!to) {
        getExchangeRates(from, to).then((data: CurrencyExchangeData) => {
          const exchangeRate = parseFloat(data.exchangeRate);
          setResults({
            rateData: data,
            convertedAmount: amount * exchangeRate,
            amount,
          });
        });
      } else {
        setResults(null);
      }
    },
    []
  );

  return { convertedResults: results, convertCurrency };
};

export const useGraphData = () => {
  const [results, setResults] = useState<DailyPrices | null>(null);

  const getGraphData = useCallback((from: string, to: string) => {
    if (!!from && !!to) {
      getHistoricalData(from, to).then((data: DailyPrices) => {
        setResults(data);
      });
    } else {
      setResults(null);
    }
  }, []);

  return { graphData: results, getGraphData };
};
