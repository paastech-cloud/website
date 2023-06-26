import { Heading, HStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import { ReactComponent as PaastechLogo } from '@assets/images/logo.svg';
import { LinkType } from '@/typings/link.type';

type NavbarLogoProps = {
  link: LinkType;
  logoWidth?: number | string;
  fontSize?: number | string;
};

export const NavbarLogo = (props: NavbarLogoProps) => {
  return (
    <RouterLink to={props.link.link} css={logoCss}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        <HStack spacing={4} alignItems={'center'}>
          <PaastechLogo width={props.logoWidth ?? 50} height={props.logoWidth ?? 50} />
          <Heading color={'white'} fontSize={props.fontSize}>
            {props.link.title}
          </Heading>
        </HStack>
      </motion.div>
    </RouterLink>
  );
};

const logoCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
