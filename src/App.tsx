import { ChakraProvider, Text, Flex, Container } from "@chakra-ui/react";
import ForexTool from "./secfi/ForexTool";

export const App = () => (
  <ChakraProvider resetCSS>
    <Container maxW="container.xl" p={0}>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Flex
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Text fontSize="3xl" fontWeight="bold">
            ⚡️Welcome to OpenChakra
          </Text>
        </Flex>
        <Text color="gray.500">The Visual Editor for Chakra UI</Text>
      </Flex>
      <Container maxW="container.xl" p={10}>
        <ForexTool />
      </Container>
    </Container>
  </ChakraProvider>
);
