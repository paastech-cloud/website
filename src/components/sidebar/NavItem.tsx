import { ReactElement, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

type NavItemProps = {
  icon: ReactElement;
  children: string | ReactNode;
  slug: string;
  isCurrent?: boolean;
};

export const NavItem = (props: NavItemProps) => {
  return (
    <Button
      as={RouterLink}
      to={props.slug}
      minW={'150px'}
      leftIcon={props.icon}
      rounded={'lg'}
      py={6}
      shadow={'xl'}
      bg={props.isCurrent ? 'brand.red' : 'brand.light_black'}
      color={'white'}
      _hover={{ bg: 'red.500', color: 'white' }}
      display={'flex'}
      justifyContent={'left'}
    >
      {props.children}
    </Button>
  );
};
