export type CurrencyExchangeData = {
  fromCurrencyCode: string;
  fromCurrencyName: string;
  toCurrencyCode: string;
  toCurrencyName: string;
  exchangeRate: string;
  lastRefreshed: string;
};

export type CurrencyExchangeResults = {
  amount: number;
  convertedAmount: number;
  rateData: CurrencyExchangeData;
};

export type DailyRateValues = {
  x: string;
  y: [number, number, number, number];
};

export type DailyPrices = {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  lastRefreshed: string;
  series: [
    {
      data: DailyRateValues[];
    }
  ];
};

export type ExchangeResults = {
  amount: number;
  convertedAmount: number;
  rateData: CurrencyExchangeData;
  graphData: DailyPrices;
};
