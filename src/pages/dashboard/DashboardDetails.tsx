import { useMemo } from 'react';
import { Badge, Flex, useToast } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { OverviewTab } from '@pages/dashboard/project-details/OverviewTab';
import { LogsTab } from '@pages/dashboard/project-details/LogsTab';
import { EnvironmentTab } from '@pages/dashboard/project-details/EnvironmentTab';
import { SettingsTab } from '@pages/dashboard/project-details/SettingsTab';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';
import { Sidebar } from '@components/sidebar/Sidebar';
import { StatusCard } from '@components/dashboard/StatusCard';
import { useProjectStore } from '@/stores/project.store';
import { BreadcrumbType } from '@/typings/link.type';
import { useQuery } from 'react-query';

type DashboardDetailsProps = {
  tabTitle?: string;
  tabSlug?: '/logs' | '/env' | '/settings';
};

export const DashboardDetails = (props: DashboardDetailsProps) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const currentProject = useProjectStore((state) => state.currentProject);
  const refreshProject = useProjectStore((state) => state.refreshCurrentProject);

  useQuery('fetch project details', () => {
    if (undefined === projectId) {
      navigate(-1);
      return;
    }
    refreshProject(projectId).catch((e: Error) => {
      toast({ title: e.message, status: 'error', isClosable: true });
      navigate(-1);
    });
  });

  const breadcrumbs = useMemo(() => {
    const b: BreadcrumbType[] = [{ title: currentProject.name, url: `/dashboard/${currentProject.id}` }];

    if (undefined !== props.tabTitle && undefined !== props.tabSlug) {
      b.push({ title: props.tabTitle, url: `/dashboard/${currentProject.id}/${props.tabSlug}` });
    }

    return b;
  }, [currentProject, props.tabTitle, props.tabSlug]);

  const tabTitle = useMemo(() => {
    if (undefined === props.tabTitle) return currentProject.name;

    return (
      <Flex alignItems={'end'} gap={3}>
        <Badge p={2} rounded={'lg'} fontSize={'lg'} textTransform={'uppercase'}>
          {props.tabTitle}
        </Badge>
        {currentProject.name}
      </Flex>
    );
  }, [currentProject, props.tabTitle]);

  const tabContent = useMemo(() => {
    switch (props.tabSlug) {
      case '/logs':
        return <LogsTab project={currentProject} />;
      case '/env':
        return <EnvironmentTab />;
      case '/settings':
        return <SettingsTab project={currentProject} />;
      default:
        return <OverviewTab project={currentProject} />;
    }
  }, [currentProject, props.tabSlug]);

  return (
    <DashboardTemplate
      breadcrumbs={breadcrumbs}
      rightToBreadcrumbs={<StatusCard status={currentProject.status} />}
      pageTitle={tabTitle}
      leftSidebar={<Sidebar currentPath={`/dashboard/${currentProject.id}`} currentTab={props.tabSlug} />}
    >
      {tabContent}
    </DashboardTemplate>
  );
};
