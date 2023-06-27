import { Box, Card, CardBody, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ProjectList } from '@components/dashboard/ProjectList';

export const DashboardHomePage = () => {
  return (
    <div css={dashboardCss}>
      <Box as={'aside'} flexBasis={'20rem'} p={'1.5rem'} pl={'2rem'} display={{ base: 'none', lg: 'block' }}></Box>

      <Flex flex={'1'} flexDirection={'column'} bgColor={'white'} border={'1px'} borderColor={'brand.border_gray'}>
        <HStack justifyContent={'space-between'} borderBottom={'1px'} borderColor={'brand.border_gray'} p={'1.5rem'}>
          <Heading color={'gray.700'}>Projects</Heading>
        </HStack>
        <ProjectList />
      </Flex>

      <Box as={'aside'} flexBasis={'20rem'} pt={'2rem'} px={'2rem'} display={{ base: 'none', lg: 'block' }}>
        <Card rounded={'lg'}>
          <CardBody>
            <Text fontWeight={'bold'} mb={2}>
              Welcome to PaaSTech! 🍉
            </Text>
            <Text as={'p'}>The simplest PaaS you could ever dream of 💫</Text>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
};

const dashboardCss = css`
  width: 100%;
  max-width: 1620px;
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
`;
