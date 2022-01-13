import { Flex } from "@chakra-ui/react";
import { ExchangeRate } from "./ExchangeRate";
import { CurrencyExchangeResults } from "./model/types";
import { RatesForm } from "./RatesForm";

type Props = {
  data: CurrencyExchangeResults | null;
  convertCurrency: (
    baseCurrency: string,
    targetCurrency: string,
    amount: number
  ) => void;
};

const ExchangeRates = ({ data, convertCurrency }: Props) => {
  const initialValues = {
    baseCurrency: "USD",
    targetCurrency: "EUR",
    amount: 1,
  };

  // useEffect(() => {
  //   exchangeRateCallback(
  //     initialValues.baseCurrency,
  //     initialValues.targetCurrency,
  //     initialValues.amount
  //   );
  // }, []);

  return (
    <Flex direction="column">
      <RatesForm onSubmit={convertCurrency} initialValues={initialValues} />
      {data && (
        <ExchangeRate
          rateData={data.rateData}
          convertedAmount={data.convertedAmount}
        />
      )}
    </Flex>
  );
};

export default ExchangeRates;
