import { useCallback, useState } from "react";
import { getExchangeRates, getHistoricalData } from "./api";
import { CurrencyExchangeData, DailyPrices, ExchangeResults } from "./types";

type Request = {
  from: string;
  to: string;
  timestamp: number;
};

export const useExchangeData = () => {
  const [lastRequest, setLastRequest] = useState<Request>();
  const [loading, setLoading] = useState(false);
  const [exchangeData, setExchangeData] = useState<ExchangeResults>();

  const getResults = useCallback(
    async (from: string, to: string, amount: number = 1) => {
      setLoading(true);
      const rateData = await getExchangeRates(from, to).then(
        (data: CurrencyExchangeData) => {
          return data;
        }
      );
      const graphData = await getHistoricalData(from, to).then(
        (data: DailyPrices) => {
          return data;
        }
      );
      setLoading(false);

      return {
        rateData,
        graphData,
        convertedAmount: amount * parseFloat(rateData.exchangeRate),
        amount,
      };
    },
    []
  );

  const getExchangeResults = useCallback(
    async (from: string, to: string, amount: number = 1) => {
      let results = exchangeData;
      //  check if from and to are different from past results
      // if yes do API request
      const requestDiff = lastRequest
        ? Math.floor((Date.now() - lastRequest?.timestamp) / 1000 / 60)
        : false;
      if (
        !results ||
        (results &&
          lastRequest &&
          (requestDiff > 5 ||
            from !== lastRequest?.from ||
            to !== lastRequest.to))
      ) {
        results = await getResults(from, to, amount);
      }

      setLastRequest({ from, to, timestamp: Date.now() });
      setExchangeData({
        ...results,
        convertedAmount: amount * parseFloat(results.rateData.exchangeRate),
      });
    },
    [exchangeData, lastRequest]
  );

  return { exchangeData, loading, convert: getExchangeResults };
};
