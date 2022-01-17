import { CurrencyExchangeData, DailyPrices, DailyRateValues } from "../types";

const API_KEY = "RVZTVA1LQ8G8W1K2";
const apiURL = "https://www.alphavantage.co/query?";

export const CURRENCY_EXCHANGE_RATE = (from: string, to: string) =>
  `${apiURL}function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}`;

export const FX_DAILY = (from: string, to: string) =>
  `${apiURL}function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&apikey=${API_KEY}`;

// temp structure for testing
export type JsonData = {
  rate: RealtimeDailyRatesApiResponse;
  daily: DailyPricesApiResponse;
};
// END temp structure for testing

// Alpha Advantage API specific types
export type RealtimeDailyRatesApiResponse = {
  "Realtime Currency Exchange Rate": {
    "1. From_Currency Code": string;
    "2. From_Currency Name": string;
    "3. To_Currency Code": string;
    "4. To_Currency Name": string;
    "5. Exchange Rate": string;
    "6. Last Refreshed": string;
    "7. Time Zone": string;
    "8. Bid Price": string;
    "9. Ask Price": string;
  };
};

export type DailyPricesApiResponse = {
  "Meta Data": {
    "1. Information": string;
    "2. From Symbol": string;
    "3. To Symbol": string;
    "4. Output Size": string;
    "5. Last Refreshed": string;
    "6. Time Zone": string;
  };
  "Time Series FX (Daily)": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
    };
  };
};
// END Alpha Advantage API specific types

export const mapApiExchangeRatesData = (
  apiData: RealtimeDailyRatesApiResponse
): CurrencyExchangeData => {
  const data = Object.values(apiData["Realtime Currency Exchange Rate"]);
  const [
    fromCurrencyCode,
    fromCurrencyName,
    toCurrencyCode,
    toCurrencyName,
    exchangeRate,
    lastRefreshed,
    timeZone,
    bidBrice,
    askPrice,
  ] = data;

  const mappedValues = {
    fromCurrencyCode,
    fromCurrencyName,
    toCurrencyCode,
    toCurrencyName,
    exchangeRate,
    lastRefreshed,
    timeZone,
    bidBrice,
    askPrice,
  };
  return mappedValues;
};

export const mapApiDailyRatesData = (
  apiData: DailyPricesApiResponse
): DailyPrices => {
  const rates: DailyRateValues[] = Object.keys(
    apiData["Time Series FX (Daily)"]
  ).map((key) => ({
    x: key,
    y: [
      parseFloat(apiData["Time Series FX (Daily)"][key]["1. open"]),
      parseFloat(apiData["Time Series FX (Daily)"][key]["2. high"]),
      parseFloat(apiData["Time Series FX (Daily)"][key]["3. low"]),
      parseFloat(apiData["Time Series FX (Daily)"][key]["4. close"]),
    ],
  }));
  return {
    fromCurrencyCode: apiData["Meta Data"]["2. From Symbol"],
    toCurrencyCode: apiData["Meta Data"]["3. To Symbol"],
    lastRefreshed: apiData["Meta Data"]["5. Last Refreshed"],
    series: [
      {
        data: rates,
      },
    ],
  };
};
