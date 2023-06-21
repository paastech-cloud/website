import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, useColorModeValue } from '@chakra-ui/react';
import { To } from 'react-router';
import { css } from '@emotion/react';

type NavLinkProps = {
  title: ReactNode | string;
  link: To;
  variant?: string;
  bg?: string;
};

export const NavLink = (props: NavLinkProps) => (
  <Link
    as={RouterLink}
    to={props.link}
    px={2}
    py={1}
    rounded={'md'}
    fontWeight={'bold'}
    fontSize={'xl'}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('dark', 'dark'),
      bg: useColorModeValue('green.500', 'green.500'),
    }}
    css={linkCss}
    variant={props.variant}
    bg={props.bg}
  >
    {props.title}
  </Link>
);

const linkCss = css`
  text-transform: capitalize;
  padding: 7px 15px;

  :hover {
    filter: drop-shadow(0 0 1rem #42b883aa);
  }
`;
