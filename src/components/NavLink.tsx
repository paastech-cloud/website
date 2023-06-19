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
        px={2} py={1}
        rounded={'md'}
        fontWeight={'bold'}
        fontSize={'xl'}
        _hover={{
          textDecoration: 'none',
          color: useColorModeValue('white', 'white'),
          bg: useColorModeValue('green.400', 'green.400'),
        }}
        css={linkCss}>
    {props.title}
  </Link>
);

const linkCss = css`
  text-transform: capitalize;
  :hover {
    filter: drop-shadow(0 0 2rem #42b883aa);
  }
`;
