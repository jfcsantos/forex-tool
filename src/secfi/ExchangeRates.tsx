import { Flex } from "@chakra-ui/react";
import { ExchangeRate } from "./ExchangeRate";
import { useConvertedCurrency } from "./model/hooks";
import { RatesForm } from "./RatesForm";

const initialValues = {
  baseCurrency: { value: "BTC", label: "Bitcoin" },
  targetCurrency: { value: "USD", label: "United States Dollar" },
  amount: 1,
};

const ExchangeRates = () => {
  const { convertedResults, convertCurrency } = useConvertedCurrency();

  return (
    <Flex direction="column">
      <RatesForm onSubmit={convertCurrency} initialValues={initialValues} />
      {convertedResults && (
        <ExchangeRate
          rateData={convertedResults.rateData}
          convertedAmount={convertedResults.convertedAmount}
          amount={convertedResults.amount}
        />
      )}
    </Flex>
  );
};

export default ExchangeRates;
