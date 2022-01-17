import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex justifyContent="center"  alignItems="center" minH="10em">
      <Spinner size="xl" />
    </Flex>
  );
};

export default Loading;
