import { useParams } from 'react-router';
import { Text } from '@chakra-ui/react';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';

export const DashboardDetails = () => {
  const { projectId } = useParams();

  return (
    <DashboardTemplate
      breadcrumbs={[
        { title: 'Projects', url: `/dashboard` },
        { title: projectId ?? 'unknown', url: `/dashboard/${projectId}` },
      ]}
      pageTitle={`Project ${projectId}`}
    >
      <Text as={'p'} fontSize={30} mt={10}>
        🚧 Work in progress
      </Text>
    </DashboardTemplate>
  );
};
