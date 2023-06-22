import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ReactComponent as PaastechLogo } from '@/assets/logo.svg';
import { BiBook } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';

export const Hero = () => {
  return (
    <Container maxW={'7xl'} paddingInline={'0'} css={containerCss}>
      <div css={rightColumnCss}>
        <Heading fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'brand.red',
              zIndex: -1,
            }}
            fontWeight={'black'}
            color={'brand.yellow'}
            px={2}
          >
            PaaSTech
          </Text>
        </Heading>

        <Text as={'span'} fontWeight={'bold'} fontSize={28}>
          Code, Eat, Deploy, Sleep
        </Text>

        <Text fontSize={18} maxWidth={'430px'}>
          PaasTech is the simplest PaaS you could ever dream of 💫
        </Text>

        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <Button rounded={'lg'} size={'lg'} px={6} fontWeight={'normal'} color={'white'} bg={'brand.red'} _hover={{ bg: 'red.500' }} shadow={'md'}>
            Get Started
          </Button>
          <Button
            as={RouterLink}
            to={'https://paastech-cloud.github.io/docs'}
            rounded={'lg'}
            size={'lg'}
            px={6}
            fontWeight={'normal'}
            color={'brand.red'}
            bg={'white'}
            leftIcon={<BiBook />}
            shadow={'md'}
          >
            Documentation
          </Button>
        </Stack>
      </div>

      <div css={logoCss}>
        <PaastechLogo />
      </div>
    </Container>
  );
};

const containerCss = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10rem;
`;

const rightColumnCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-bottom: 20px;
`;

const logoCss = css`
  height: auto;
  width: 400px;
`;
