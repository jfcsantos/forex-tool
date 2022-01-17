import {
  ChakraProvider,
  Text,
  Flex,
  Container,
  Heading,
} from "@chakra-ui/react";
import ForexTool from "./secfi/ForexTool";
import Logo from "./secfi/Logo";
import theme from "./theme";

export const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Container
      display="flex"
      maxW="full"
      flexDirection="column"
      minH="100vh"
      p={0}
      bg="brand.200"
    >
      <Flex
        as="header"
        position="fixed"
        w="100%"
        align="flex-start"
        p="10px 20px"
        background="brand.500"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex direction="column">
          <Logo />
          <Text fontSize="xl" fontWeight="bold" color="brand.100" ml="1.6em">
            forex
          </Text>
        </Flex>
      </Flex>
      <Flex
        mt="65px"
        p="10"
        bg="brand.200"
        direction="column"
        alignItems="center"
      >
        <Heading color="brand.100">A Secfi currency exchange tool</Heading>
        <Text color="brand.100">
          Select the currency pair you wish to display the data for.
        </Text>
      </Flex>
      <ForexTool />
      <Flex
        direction="column"
        p="5"
        background="brand.500"
        marginTop="auto"
        alignItems="flex-end"
      >
        <Text color="brand.100">Copyright João Santos 2022</Text>
      </Flex>
    </Container>
  </ChakraProvider>
);
