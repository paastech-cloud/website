import { ReactElement } from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { NavLink } from '@components/NavLink';
import { NavbarLogo } from '@components/navbar/NavbarLogo';
import { LinkType } from '@/typings/link.type';

type NavbarProps = {
  logoLink: LinkType;
  primaryLink: LinkType & { icon?: ReactElement };
  secondaryLink?: LinkType;
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
        {props.secondaryLink ? <NavLink title={props.secondaryLink.title} link={props.secondaryLink.link} /> : null}
        <NavLink
          title={
            <Flex alignItems={'center'} gap={1}>
              {props.primaryLink.icon}
              {props.primaryLink.title}
            </Flex>
          }
          link={props.primaryLink.link}
          variant={'solid'}
          bg={'brand.red'}
        />
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
