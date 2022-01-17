import { Flex } from "@chakra-ui/react";
import Loading from "./Loading";
import { useExchangeData } from "./model/hooks";
import { RatesForm } from "./RatesForm";
import Results from "./Results";

const initialValues = {
  baseCurrency: { value: "EUR", label: "Euro" },
  targetCurrency: { value: "USD", label: "United States Dollar" },
  amount: 1,
};

const ExchangeRates = () => {
  const { exchangeData, loading, convert } = useExchangeData();
  return (
    <Flex direction="column">
      <RatesForm onSubmit={convert} initialValues={initialValues} />
      {loading && <Loading />}
      {!loading && exchangeData && (
        <Results data={exchangeData} loading={loading} />
      )}
    </Flex>
  );
};

export default ExchangeRates;
