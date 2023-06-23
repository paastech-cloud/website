import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import { BiBook } from 'react-icons/bi';
import { Cloud } from '@components/Cloud';
import { ReactComponent as PaastechLogo } from '@assets/images/logo.svg';
import '@assets/fonts/font-orbit.css';

export const Hero = () => {
  return (
    <>
      <div css={cloudContainer}>
        <Cloud x={10} y={15} />
        <Cloud x={70} y={20} />
        <Cloud x={80} y={68} />
      </div>
      <Container maxW={'6xl'} paddingInline={'0'} css={containerCss}>
        <div css={leftColumnCss}>
          <Heading fontSize={{ base: '3xl', sm: '4xl', lg: '6rem' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '25%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'brand.red',
                zIndex: -1,
              }}
              fontWeight={'black'}
              color={'white'}
              px={2}
            >
              PaaSTech
            </Text>
          </Heading>

          <Text as={'span'} fontFamily={'Orbit'} fontSize={30}>
            Code, Eat, Deploy, Sleep
          </Text>

          <Text fontSize={18} maxWidth={'430px'}>
            PaasTech is the simplest PaaS you could ever dream of 💫
          </Text>

          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button rounded={'lg'} size={'lg'} px={6} fontWeight={'normal'} color={'white'} bg={'brand.red'} _hover={{ bg: 'red.500' }} shadow={'md'}>
              Getting Started
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
    </>
  );
};

const containerCss = css`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  justify-content: space-between;
`;

const spacing = css`
  transform: translateY(150px);
`;

const leftColumnCss = css`
  ${spacing};
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 30px;
`;

const cloudContainer = css`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: calc(100% - 150px);
  z-index: -1;
`;

const logoCss = css`
  ${spacing};
  cursor: pointer;
  height: auto;
  width: 400px;
  filter: drop-shadow(0px 6px 7px rgba(50, 50, 93, 0.3));
`;
