import { useState } from "react";
import { ArrowUpDownIcon, UpDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";

type Props = {
  initialValues: {
    baseCurrency: string;
    targetCurrency: string;
    amount: number;
  };
  onSubmit: (
    baseCurrency: string,
    targetCurrency: string,
    amount: number
  ) => void;
};

export const RatesForm = ({ initialValues, onSubmit }: Props) => {
  const [baseCurrency, setBaseCurrency] = useState(initialValues.baseCurrency);
  const [targetCurrency, setTargetCurrency] = useState(
    initialValues.targetCurrency
  );
  const [amount, setAmount] = useState(initialValues.amount);

  return (
    <Flex direction="column">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "column", md: "flex-end" }}
        justifyContent="space-between"
        marginBottom={{ base: "0", md: "6" }}
      >
        <InputGroup
          display="flex"
          flexDirection="column"
          maxW={{ base: "none", md: "10rem" }}
          marginBottom={{ base: "6", md: "0" }}
        >
          <FormLabel>Amount</FormLabel>
          <Input
            placeholder="Amount"
            name="amount"
            type="number"
            value={amount}
            min={0}
            onChange={(e) => {
              setAmount(parseFloat(e.target.value));
            }}
          />
        </InputGroup>
        <InputGroup
          display="flex"
          flexDirection="column"
          maxW={{ base: "none", md: "10rem" }}
          marginBottom={{ base: "6", md: "0" }}
        >
          <FormLabel>From</FormLabel>
          <Input
            placeholder="Base currency"
            name="from"
            type="text"
            value={baseCurrency}
            onChange={(e) => {
              setBaseCurrency(e.target.value);
            }}
          />
        </InputGroup>
        <UpDownIcon
          alignSelf={{ base: "flex-start", md: "flex-end" }}
          padding="10px"
          borderRadius="50%"
          border="1px solid"
          borderColor="gray.200"
          height="40px"
          width="40px"
          transform={{ md: "rotate(90deg)" }}
          onClick={(ev) => {
            ev.preventDefault();
            const newBase = targetCurrency;
            setTargetCurrency(baseCurrency);
            setBaseCurrency(newBase);
          }}
        />
        <InputGroup
          display="flex"
          flexDirection="column"
          maxW={{ base: "none", md: "10rem" }}
          marginBottom={{ base: "6", md: "0" }}
          marginTop="6"
        >
          <FormLabel>To</FormLabel>
          <Input
            placeholder="Target currency"
            name="to"
            type="text"
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          />
        </InputGroup>
      </Flex>

      <Button
        onClick={(e) => {
          e.preventDefault();
          onSubmit(baseCurrency, targetCurrency, amount);
        }}
        variant="solid"
        alignSelf={{ base: "center", md: "flex-end" }}
        size="md"
        colorScheme="messenger"
        type="submit"
        marginBottom={{ base: "2em", md: 0 }}
      >
        Convert
      </Button>
    </Flex>
  );
};
