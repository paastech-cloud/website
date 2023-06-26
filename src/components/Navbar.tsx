import { HStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { NavLink } from '@components/NavLink';
import { LinkType } from '@/typings/link.type';
import { NavbarLogo } from '@components/navbar/NavbarLogo';

type NavbarProps = {
  logoLink: LinkType;
  primaryLink: LinkType;
  secondaryLink: LinkType;
  links: LinkType[];
};

export const Navbar = (props: NavbarProps) => {
  return (
    <div css={containerCss}>
      <NavbarLogo link={props.logoLink} />

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
