import { useState } from "react";
import { UpDownIcon } from "@chakra-ui/icons";
import { Button, Flex, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { GroupedOption, useCurrencyList } from "./model/dataProvider/context";
import { GroupBase, Select } from "chakra-react-select";
import Loading from "./Loading";

type Props = {
  initialValues: {
    baseCurrency: GroupedOption;
    targetCurrency: GroupedOption;
    amount?: number;
  };
  onSubmit: (from: string, to: string, amount?: number) => void;
};

export const RatesForm = ({ initialValues, onSubmit }: Props) => {
  const { currencyTypes, loading } = useCurrencyList();

  const [baseCurrency, setBaseCurrency] = useState(initialValues.baseCurrency);
  const [targetCurrency, setTargetCurrency] = useState(
    initialValues.targetCurrency
  );
  const [amount, setAmount] = useState(initialValues.amount);

  const inputMaxW = {
    base: "none",
    md: "12em",
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Flex direction="column" marginBottom={{ base: "0", md: "1em" }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "column", md: "flex-end" }}
        justifyContent="space-between"
        marginBottom={{ base: "0", md: "6" }}
      >
        {!!initialValues.amount && (
          <InputGroup
            display="flex"
            flexDirection="column"
            maxW={inputMaxW}
            marginBottom={{ base: "6", md: "0" }}
          >
            <FormLabel>Amount</FormLabel>
            <Input
              placeholder="Amount"
              name="amount"
              type="number"
              value={amount || ""}
              min={0}
              onChange={(e) => {
                setAmount(parseFloat(e.target.value));
              }}
            />
          </InputGroup>
        )}
        <InputGroup
          display="flex"
          flexDirection="column"
          maxW={inputMaxW}
          marginBottom={{ base: "6", md: "0" }}
        >
          <FormLabel>From</FormLabel>
          <Select<GroupedOption, true, GroupBase<GroupedOption>>
            options={currencyTypes}
            value={baseCurrency}
            placeholder="Base currency"
            closeMenuOnSelect={true}
            selectedOptionStyle="check"
            onChange={(selected: any) => {
              setBaseCurrency(selected);
            }}
          />
        </InputGroup>
        <UpDownIcon
          cursor="pointer"
          alignSelf={{ base: "flex-start", md: "flex-end" }}
          padding="10px"
          borderRadius="50%"
          border="1px solid"
          borderColor="gray.200"
          height="40px"
          width="40px"
          transform={{ md: "rotate(90deg)" }}
          onClick={(ev) => {
            const newBase = targetCurrency;
            setTargetCurrency(baseCurrency);
            setBaseCurrency(newBase);
          }}
        />
        <InputGroup
          display="flex"
          flexDirection="column"
          maxW={inputMaxW}
          marginBottom={{ base: "6", md: "0" }}
          marginTop="6"
        >
          <FormLabel>To</FormLabel>
          <Select<GroupedOption, true, GroupBase<GroupedOption>>
            options={currencyTypes}
            name="to"
            value={targetCurrency}
            placeholder="Target currency"
            closeMenuOnSelect={true}
            selectedOptionStyle="check"
            onChange={(selected: any) => {
              setTargetCurrency(selected);
            }}
          />
        </InputGroup>
      </Flex>

      <Button
        isDisabled={
          !baseCurrency ||
          !targetCurrency ||
          (!!initialValues.amount && !amount)
        }
        onClick={(e) => {
          onSubmit(baseCurrency.value, targetCurrency.value, amount);
        }}
        variant="brand"
        alignSelf={{ base: "center", md: "flex-end" }}
        size="md"
        type="submit"
        marginBottom={{ base: "2em", md: 0 }}
      >
        Convert
      </Button>
    </Flex>
  );
};
