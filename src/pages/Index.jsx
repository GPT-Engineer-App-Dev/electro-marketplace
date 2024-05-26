import { Box, Container, VStack, Text, Image, Grid, GridItem, Heading, Link, Flex, Spacer, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <HStack spacing={8}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Products</Link>
          <Link href="#" color="white">About Us</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Featured Product</Heading>
        <Text fontSize="xl" mb={6}>Check out our latest and greatest electronics!</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Our Products</Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 1" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 1</Heading>
                <Text>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 2" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 2</Heading>
                <Text>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 3" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 3</Heading>
                <Text>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/240" alt="Product 4" />
              <Box p={6}>
                <Heading size="md" mb={2}>Product 4</Heading>
                <Text>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} mt={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="md">ElectroShop</Heading>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook size="24px" /></Link>
              <Link href="#"><FaTwitter size="24px" /></Link>
              <Link href="#"><FaInstagram size="24px" /></Link>
            </HStack>
          </Flex>
          <Text textAlign="center">&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Text textAlign="center">
            <Link href="#" color="white" mr={4}>Terms of Service</Link>
            <Link href="#" color="white">Privacy Policy</Link>
          </Text>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;