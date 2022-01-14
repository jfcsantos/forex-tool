import { Container, Flex, Text } from "@chakra-ui/react";
import { CurrencyExchangeData } from "./model/types";

type Props = {
  convertedAmount: number;
  rateData: CurrencyExchangeData;
  amount?: number;
};

export const ExchangeRate = ({ amount = 1, rateData, convertedAmount }: Props) => {
  return (
    <Flex direction="column" width="fit-content" marginTop={{ md: "-2em" }}>
      <Text fontWeight="bold" fontSize="sm" color="brand.100">
        {amount} {rateData.fromCurrencyName} ={" "}
      </Text>
      <Text fontWeight="bold" fontSize="4xl" marginBottom="0.5em">
        {convertedAmount} {rateData.toCurrencyName}
      </Text>
      <Text fontSize="sm">
        1 {rateData.fromCurrencyCode} = {rateData.exchangeRate}{" "}
        {rateData.toCurrencyCode}{" "}
      </Text>
    </Flex>
  );
};
