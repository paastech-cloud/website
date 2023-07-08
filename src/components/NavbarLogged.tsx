import { Flex } from '@chakra-ui/react';
import { LinkType } from '@/typings/link.type';
import { NavbarLogo } from '@components/navbar/NavbarLogo';
import { MenuAccount } from '@components/navbar/MenuAccount';
import { MenuResources } from '@components/navbar/MenuResources';

type NavbarLoggedProps = {
  logoLink: LinkType;
};

export const NavbarLogged = (props: NavbarLoggedProps) => {
  return (
    <Flex h={16} w={'full'} maxW={'8xl'} justifyContent={'space-between'} marginX={'auto'} px={'2rem'}>
      <NavbarLogo link={props.logoLink} logoWidth={30} fontSize={'1.5rem'} />

      <Flex as={'nav'} alignItems={'center'} justifyContent={'center'} gap={4}>
        <MenuResources />
        <MenuAccount />
      </Flex>
    </Flex>
  );
};
