// import JSONfile from "./data.json";
import {
  CURRENCY_EXCHANGE_RATE,
  FX_DAILY,
  // JsonData,
  mapApiDailyRatesData,
  mapApiExchangeRatesData,
} from "./dataProvider/network";

export const getExchangeRates = async (from: string, to: string) => {
  // const loadedData = JSON.stringify(JSONfile);
  // const parsed: JsonData = JSON.parse(loadedData);
  // return mapApiExchangeRatesData(parsed.rate);

  return await fetch(CURRENCY_EXCHANGE_RATE(from, to))
    .then((res) => res.json())
    .then((json) => mapApiExchangeRatesData(json));
};

export const getHistoricalData = async (from: string, to: string) => {
  // const loadedData = JSON.stringify(JSONfile);
  // const parsed: JsonData = JSON.parse(loadedData);
  // return mapApiDailyRatesData(parsed.daily);

  return await fetch(FX_DAILY(from, to))
    .then((res) => res.json())
    .then((json) => mapApiDailyRatesData(json));
};
