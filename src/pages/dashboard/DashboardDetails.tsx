import { useMemo } from 'react';
import { Badge, Flex } from '@chakra-ui/react';
import { OverviewTab } from '@pages/dashboard/project-details/OverviewTab';
import { LogsTab } from '@pages/dashboard/project-details/LogsTab';
import { EnvironmentTab } from '@pages/dashboard/project-details/EnvironmentTab';
import { SettingsTab } from '@pages/dashboard/project-details/SettingsTab';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';
import { Sidebar } from '@components/sidebar/Sidebar';
import { StatusCard } from '@components/dashboard/StatusCard';
import { BreadcrumbType } from '@/typings/link.type';
import { ProjectStatus, ProjectType } from '@/typings/project.type';

const appDetail: ProjectType = {
  uuid: 'e94c2fb8-790b-449d-9bc1-f6987130c09f',
  status: ProjectStatus.STOPPED,
  name: 'my-fancy-nestjs-app',
  updatedAt: '6 hours ago',
  createdAt: '1 month ago',
};

type DashboardDetailsProps = {
  tabTitle?: string;
  tabSlug?: '/logs' | '/env' | '/settings';
};

export const DashboardDetails = (props: DashboardDetailsProps) => {
  // const { projectId } = useParams();
  // console.log(projectId);

  const breadcrumbs = useMemo(() => {
    const b: BreadcrumbType[] = [{ title: appDetail.name, url: `/dashboard/${appDetail.uuid}` }];

    if (undefined !== props.tabTitle && undefined !== props.tabSlug) {
      b.push({ title: props.tabTitle, url: `/dashboard/${appDetail.uuid}/${props.tabSlug}` });
    }

    return b;
  }, [props.tabTitle, props.tabSlug]);

  const tabTitle = useMemo(() => {
    if (undefined === props.tabTitle) return appDetail.name;

    return (
      <Flex alignItems={'end'} gap={3}>
        <Badge p={2} rounded={'lg'} fontSize={'lg'} textTransform={'uppercase'}>
          {props.tabTitle}
        </Badge>
        {appDetail.name}
      </Flex>
    );
  }, [props.tabTitle]);

  const tabContent = useMemo(() => {
    switch (props.tabSlug) {
      case '/logs':
        return <LogsTab />;
      case '/env':
        return <EnvironmentTab />;
      case '/settings':
        return <SettingsTab project={appDetail} />;
      default:
        return <OverviewTab project={appDetail} />;
    }
  }, [props.tabSlug]);

  return (
    <DashboardTemplate
      breadcrumbs={breadcrumbs}
      rightToBreadcrumbs={<StatusCard status={appDetail.status} />}
      pageTitle={tabTitle}
      leftSidebar={<Sidebar currentPath={`/dashboard/${appDetail.uuid}`} currentTab={props.tabSlug} />}
    >
      {tabContent}
    </DashboardTemplate>
  );
};
