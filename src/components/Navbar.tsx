import { Heading, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { css } from '@emotion/react';
import { NavLink } from '@components/NavLink';
import { LinkType } from '@/typings/link.type';
import { motion } from 'framer-motion';
import { ReactComponent as PaastechLogo } from '@assets/images/logo.svg';

type NavbarProps = {
  links: LinkType[];
  primaryLink: LinkType;
  secondaryLink: LinkType;
};

export const Navbar = (props: NavbarProps) => {
  return (
    <div css={containerCss}>
      <RouterLink to={'/'}>
        <motion.div whileTap={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <HStack spacing={4} alignItems={'center'}>
            <PaastechLogo height={50} />
            <Heading color={'white'}>PaaSTech</Heading>
          </HStack>
        </motion.div>
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
