import { Box, Container, VStack, Text, Input, InputGroup, InputRightElement, IconButton, Grid, GridItem, Image, Heading, Flex, Spacer, Link } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">ElectroShop</Heading>
        <Spacer />
        <Flex>
          <Link p={2} href="#">Home</Link>
          <Link p={2} href="#">Products</Link>
          <Link p={2} href="#">About Us</Link>
          <Link p={2} href="#">Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.700" color="white" p={10} textAlign="center">
        <Heading size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mt={4}>Your one-stop shop for the latest electronics</Text>
      </Box>

      {/* Search Bar */}
      <Box p={4} textAlign="center">
        <InputGroup size="lg" maxW="600px" mx="auto">
          <Input placeholder="Search for products..." />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<FaSearch />} />
          </InputRightElement>
        </InputGroup>
      </Box>

      {/* Product Grid */}
      <Box p={4}>
        <Heading size="lg" mb={4}>Featured Products</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 1" />
              <Box p={4}>
                <Heading size="md">Product 1</Heading>
                <Text mt={2}>$299.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 2" />
              <Box p={4}>
                <Heading size="md">Product 2</Heading>
                <Text mt={2}>$399.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 3" />
              <Box p={4}>
                <Heading size="md">Product 3</Heading>
                <Text mt={2}>$499.99</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/200" alt="Product 4" />
              <Box p={4}>
                <Heading size="md">Product 4</Heading>
                <Text mt={2}>$599.99</Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Box bg="blue.800" color="white" p={4} mt={10}>
        <Flex justify="space-between" align="center">
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Flex>
            <Link p={2} href="#"><FaFacebook /></Link>
            <Link p={2} href="#"><FaTwitter /></Link>
            <Link p={2} href="#"><FaInstagram /></Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;