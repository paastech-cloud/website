import { ReactNode } from "react";
import { Box, Flex, HStack, Link, Button, useColorModeValue, Heading, Image } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { capitalizeFirstLetter } from "../helper/TextFormating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Links = ["home", "docs", "status", "community"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    fontWeight={"bold"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    as={RouterLink}
    to={`/${children}`}>
    {capitalizeFirstLetter(children as string)}
  </Link>
);

export default function Navbar() {
  return (
    <Box px={10}>
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Image src={logo} alt="Logo" width={50} />
          <Heading>PaasTech</Heading>
        </HStack>
        <Flex alignItems="center">
          <HStack as="nav" spacing={8} display={{ base: "none", md: "none", lg: "flex" }} marginRight="10vw">
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <HStack spacing={3} display={{ base: "none", md: "flex" }}>
            <NavLink key="signup">signup</NavLink>
            <Button variant="solid" colorScheme="teal" size="sm" mr={4} leftIcon={<AddIcon />} as={RouterLink} to="/install">
              Install
            </Button>
          </HStack>
          <Link href="https://github.com/paas-tech" isExternal>
            <FontAwesomeIcon icon={faGithub} size="2xl" opacity={0.3} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
