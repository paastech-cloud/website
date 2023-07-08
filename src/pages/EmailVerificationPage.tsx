import { Box, Flex, Heading, Link, Spinner, Stack, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import { authApi } from '@/api/api';

export const EmailVerificationPage = () => {
  const { token } = useParams();

  if (!token) {
    return <VerificationError />
  }

  // Simulate the verification flow
  const { isLoading, isSuccess } = useQuery('verify email', () =>
      authApi.authControllerConfirmEmail(token));

  return (
    <Flex align={'center'} justify={'stretch'} mt={10}>
      <Stack spacing={8} mx={'auto'} w={'full'} maxW={'2xl'} minW={'md'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Email verification
        </Heading>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
          <Stack spacing={8} color={'black'} fontSize={'xl'} textAlign={'justify'} css={linksCss}>
            {isLoading ? <Spinner /> : isSuccess ? <VerificationSuccess /> : <VerificationError />}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const VerificationSuccess = () => {
  return (
    <>
      <Heading as={'h2'}>Account verified! 🎉</Heading>
      <Text as={'p'} fontWeight={'bold'}>
        Your e-mail address has been verified and you can now access PaaSTech 🍉.
      </Text>
      <Text as={'p'}>
        <Link as={RouterLink} to={'/login'}>
          Log in
        </Link>{' '}
        with your credentials to start using our service.
      </Text>
      <Text as={'p'}>
        If you have any connection problems or questions, don't hesitate to contact us by opening{' '}
        <Link href={'https://github.com/paastech-cloud/website/issues'} isExternal>
          a ticket on Github
          <ExternalLinkIcon />
        </Link>
        .
      </Text>
    </>
  );
};

const VerificationError = () => {
  return (
    <>
      <Heading as={'h2'}>An error occurred 😔</Heading>
      <Text as={'p'} fontWeight={'bold'}>
        We encountered an issue while verifying your email address&hellip;
      </Text>
      <Text as={'p'}>
        It appears that the verification token is invalid or there is a problem with our server. We apologize for any inconvenience caused.
      </Text>
      <Box>
        <Text as={'p'}>Please ensure that you have clicked on the verification button within your email correctly.</Text>
        <Text as={'p'}>If the problem persists, kindly reach out to our support team for further assistance.</Text>
      </Box>
      <Text as={'p'}>
        You can contact us by opening{' '}
        <Link href={'https://github.com/paastech-cloud/website/issues'} isExternal>
          a ticket on Github
          <ExternalLinkIcon />
        </Link>
        , and our team will be happy to help you resolve this issue promptly.
      </Text>
    </>
  );
};

const linksCss = css`
  a {
    color: #202124;
    font-weight: bolder;
    text-decoration: underline;
    text-decoration-color: #fe0096;
    text-decoration-thickness: 3px;
  }
`;
