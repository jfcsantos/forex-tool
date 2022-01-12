import JSONfile from "./data.json";
import {
  CURRENCY_EXCHANGE_RATE,
  FX_DAILY,
  JsonData,
  mapApiDailyRatesData,
  mapApiExchangeRatesData,
} from "./provider";

export const getExchangeRates = async (from: string, to: string) => {
  const loadedData = JSON.stringify(JSONfile);
  const parsed: JsonData = JSON.parse(loadedData);
  return mapApiExchangeRatesData(parsed.rate);
  // const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${API_KEY}'`;
  // const parsed = await fetch(url).then((res) => res.json());

  // return await fetch(CURRENCY_EXCHANGE_RATE(from, to))
  //   .then((res) => res.json())
  //   .then((json) => mapApiExchangeRatesData(json));
};

export const getHistoricalData = async (from: string, to: string) => {
  console.log("HERE");
  
  const loadedData = JSON.stringify(JSONfile);
  const parsed: JsonData = JSON.parse(loadedData);
  return mapApiDailyRatesData(parsed.daily);

  // const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&apikey=${API_KEY}`;
  // const parsed = await fetch(url).then((res) => res.json());
  // return mapApiDailyRatesData(parsed);

  // return await fetch(FX_DAILY(from, to))
  //   .then((res) => res.json())
  //   .then((json) => mapApiDailyRatesData(json));
};
