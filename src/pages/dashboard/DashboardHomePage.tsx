import { Card, CardBody, HStack, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FaGithubAlt } from 'react-icons/fa';
import { ProjectList } from '@components/dashboard/ProjectList';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';

export const DashboardHomePage = () => {
  return (
    <DashboardTemplate pageTitle={'Projects'} rightSidebar={rightSidebar}>
      <ProjectList />
    </DashboardTemplate>
  );
};

const rightSidebar = (
  <>
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
  </>
);