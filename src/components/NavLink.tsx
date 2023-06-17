import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, useColorModeValue } from '@chakra-ui/react';
import { To } from 'react-router';
import { css } from '@emotion/react';

type NavLinkProps = {
  title: ReactNode | string;
  link: To;
};

export const NavLink = (props: NavLinkProps) => (
  <Link as={RouterLink}
        to={props.link}
        px={2}
        py={1}
        rounded={'md'}
        fontWeight={'bold'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        css={linkCss}>
    aaa
  </Link>
);

const linkCss = css`
  text-transform: capitalize;
`;
