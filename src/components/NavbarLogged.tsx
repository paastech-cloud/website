import { Flex } from '@chakra-ui/react';
import { LinkType } from '@/typings/link.type';
import { MenuAccount } from '@components/navbar/MenuAccount';
import { NavbarLogo } from '@components/navbar/NavbarLogo';

type NavbarLoggedProps = {
  logoLink: LinkType;
};

export const NavbarLogged = (props: NavbarLoggedProps) => {
  return (
    <Flex h={16} w={'full'} maxW={'8xl'} justifyContent={'space-between'} marginX={'auto'} px={'2rem'}>
      <NavbarLogo link={props.logoLink} logoWidth={30} fontSize={'1.5rem'} />

      <Flex as={'nav'} alignItems={'center'} justifyContent={'center'}>
        <MenuAccount />
      </Flex>
    </Flex>
  );
};
