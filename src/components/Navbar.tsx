import { Heading, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { css } from '@emotion/react';
import { NavLink } from '@components/NavLink';
import { ReactComponent as PaastechLogo } from '@/assets/logo.svg';
import { LinkType } from '@/typings/link.type';

type NavbarProps = {
  links: LinkType[];
  primaryLink: LinkType;
  secondaryLink: LinkType;
};

export const Navbar = (props: NavbarProps) => {
  return (
    <div css={containerCss}>
      <RouterLink to={'/'}>
        <HStack spacing={4} alignItems={'center'}>
          <PaastechLogo height={50} />
          <Heading color={'brand.yellow'}>PaaSTech</Heading>
        </HStack>
      </RouterLink>

      <HStack as={'nav'} align={'center'} spacing={4} display={{ base: 'none', md: 'none', lg: 'flex' }}>
        {props.links.map((items, i) => (
          <NavLink key={i} link={items.link} title={items.title} />
        ))}
      </HStack>

      <HStack spacing={4} alignItems={'center'}>
        <NavLink title={props.secondaryLink.title} link={props.secondaryLink.link} />
        <NavLink title={props.primaryLink.title} link={props.primaryLink.link} variant={'solid'} bg={'brand.red'} />
      </HStack>
    </div>
  );
};

const containerCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;
