import { Box, Button, Flex, Heading, HStack, Image, Link } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { NavLink } from '@components/NavLink';

import logo from '@/assets/logo.png';
import { FaGithub } from 'react-icons/fa';

type NavbarProps = {
  links: { title: string; link: string }[];
};

export const Navbar = (props: NavbarProps) => {
  return (
    <Box px={10}>
      <Flex h={20} alignItems="center" justifyContent="space-between">
        <HStack spacing={6} alignItems="center">
          <Image src={logo} alt="Logo" width={50}/>
          <Heading>PaasTech</Heading>
        </HStack>

        <HStack as="nav"
                align={'center'}
                spacing={8}
                display={{ base: 'none', md: 'none', lg: 'flex' }}>
          {props.links.map((items, i) => (
            <NavLink key={i}
                     link={items.link}
                     title={items.title}/>
          ))}
        </HStack>

        <Flex>
          <HStack spacing={3} display={{ base: 'none', md: 'flex' }} marginRight={"20px"}>
            <NavLink link={'/signup'} title={'signup'}/>
            <Button as={RouterLink}
                    to="/install"
                    variant="solid"
                    bg="brand.green"
                    size="md"
                    mr={4}
                    leftIcon={<AddIcon/>}>
              Install
            </Button>
          </HStack>

          <Link href="https://github.com/paas-tech" isExternal>
            <FaGithub size={'50px'} opacity={0.3}/>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
