import { ArrowUpDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

type Props = {
  initialValues: {
    baseCurrency: string;
    targetCurrency: string;
  };
  onSubmit: (baseCurrency: string, targetCurrency: string) => void;
};
export const GraphForm = ({ initialValues, onSubmit }: Props) => {
  const [baseCurrency, setBaseCurrency] = useState(initialValues.baseCurrency);
  const [targetCurrency, setTargetCurrency] = useState(
    initialValues.targetCurrency
  );

  return (
    <Flex direction="column">
      <Flex direction={{ base: "column", md: "row" }}>
        <InputGroup display="flex" flexDirection="column">
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
        <IconButton
          aria-label="icon"
          icon={<ArrowUpDownIcon />}
          size="xs"
          variant="ghost"
          transform="rotate(90deg)"
          onClick={(ev) => {
            ev.preventDefault();
            const newBase = targetCurrency;
            setTargetCurrency(baseCurrency);
            setBaseCurrency(newBase);
          }}
        />
        <InputGroup display="flex" flexDirection="column">
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
          onSubmit(baseCurrency, targetCurrency);
        }}
        variant="solid"
        size="lg"
        colorScheme="messenger"
        type="submit"
      >
        View Chart
      </Button>
    </Flex>
  );
};
