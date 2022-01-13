import { ChakraProvider, Text, Flex, Container } from "@chakra-ui/react";
import ForexTool from "./secfi/ForexTool";
import theme from "./theme";

export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Container
      display="flex"
      // justifyContent="space-between"
      flexDirection="column"
      maxW="full"
      minH="100vh"
      p={0}
      bg="gray.50"
    >
      <Flex direction="column" align="flex-start" p="10" background="brand">
        <Text fontSize="3xl" fontWeight="bold">
          Secfi Forex
        </Text>
        <Text color="gray.500">A currency exchange tool.</Text>
      </Flex>
      <Text p="5">
        Select the currency pair you wish to display the data for.
      </Text>

      <ForexTool />
      <Flex direction="column" p="5" background="brand" marginTop="auto">
        <Text color="gray.500">Copyright João Santos.</Text>
      </Flex>
    </Container>
  </ChakraProvider>
);
