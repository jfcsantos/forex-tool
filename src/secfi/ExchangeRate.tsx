import { Container, Text } from "@chakra-ui/react";
import { CurrencyExchangeData } from "./model/types";

type Props = {
  values: {
    amount: number;
    convertedAmount: number;
    rateData: CurrencyExchangeData;
  };
};

export const ExchangeRate = ({
  values: { amount, rateData, convertedAmount },
}: Props) => {
  return (
    <Container>
      <Text fontWeight="bold" color="facebook.500">
        {amount} {rateData.fromCurrencyName} ={" "}
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        {convertedAmount} {rateData.toCurrencyName}
      </Text>
      <Text>
        1 {rateData.fromCurrencyCode} = {rateData.exchangeRate}{" "}
        {rateData.toCurrencyCode}{" "}
      </Text>
    </Container>
  );
};
