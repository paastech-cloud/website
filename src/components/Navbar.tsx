import { Heading, HStack, Image, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { css } from '@emotion/react';
import { NavLink } from '@components/NavLink';
import { LinkType } from '@/typings/link.type';
import logo from '@/assets/logo.png';

type NavbarProps = {
  links: LinkType[];
  primaryLink: LinkType;
  secondaryLink: LinkType;
};

export const Navbar = (props: NavbarProps) => {
  return (
    <div css={containerSpace}>
      <HStack spacing={6} alignItems={'center'}>
        <Image src={logo} alt={'Logo'} width={50} />
        <Heading>PaasTech</Heading>
      </HStack>

      <HStack as={'nav'} align={'center'} spacing={6} display={{ base: 'none', md: 'none', lg: 'flex' }}>
        {props.links.map((items, i) => (
          <NavLink key={i} link={items.link} title={items.title} />
        ))}
      </HStack>

      <HStack spacing={6} alignItems={'center'}>
        <NavLink title={props.secondaryLink.title} link={props.secondaryLink.link} />
        <NavLink title={props.primaryLink.title} link={props.primaryLink.link} variant={'solid'} bg={'brand.green'} />

        <Link href={'https://github.com/paastech-cloud'} isExternal>
          <FaGithub size={'50px'} opacity={0.3} />
        </Link>
      </HStack>
    </div>
  );
};

const containerSpace = css`
  margin: 40px 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;
