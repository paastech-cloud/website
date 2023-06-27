import { Card, CardBody, Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
import { FaGithubAlt } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { ProjectList } from '@components/dashboard/ProjectList';
import { BreadcrumbDashboard } from '@components/dashboard/BreadcrumbDashboard';

export const DashboardHomePage = () => {
  return (
    <VStack spacing={8} flex={1} mx={'auto'} pt={8} pb={10} color={'black'} css={maxWidth}>
      <Flex flexWrap={'nowrap'} flex={'1'} css={maxWidth}>
        <VStack as={'aside'} flexBasis={'20rem'} p={'1.5rem'} pl={'2rem'} display={{ base: 'none', lg: 'flex' }}></VStack>

        <VStack flex={1} spacing={8}>
          <BreadcrumbDashboard
            breads={[
              { title: 'Dashboard', url: '/dashboard', icon: <MdSpaceDashboard /> },
              { title: 'Projects', isCurrentPage: true },
            ]}
          />
          <Card rounded={'lg'} flex={1} w={'full'} p={8}>
            <Flex flex={'1'} flexDirection={'column'} bgColor={'white'}>
              <HStack justifyContent={'space-between'} borderBottom={'1px'} borderColor={'brand.border_gray'} pb={6} pl={4}>
                <Heading color={'gray.700'}>Projects</Heading>
              </HStack>
              <ProjectList />
            </Flex>
          </Card>
        </VStack>

        <VStack spacing={4} alignItems={'stretch'} flexBasis={'20rem'} mt={'35px'} pt={'2rem'} px={'2rem'} display={{ base: 'none', lg: 'flex' }}>
          <Card rounded={'lg'}>
            <CardBody>
              <Text fontWeight={'bold'} mb={2}>
                Welcome to PaaSTech! 🍉
              </Text>
              <Text as={'p'}>The simplest PaaS you could ever dream of 💫</Text>
            </CardBody>
          </Card>
          <Card rounded={'lg'}>
            <CardBody>
              <Link href={'https://github.com/paastech-cloud'} isExternal fontWeight={'bold'}>
                <HStack spacing={2}>
                  <FaGithubAlt size={'20px'} />
                  <span>Github</span>
                  <ExternalLinkIcon />
                </HStack>
              </Link>
            </CardBody>
          </Card>
        </VStack>
      </Flex>
    </VStack>
  );
};

const maxWidth = css`
  width: 100%;
  max-width: 1620px;
`;
