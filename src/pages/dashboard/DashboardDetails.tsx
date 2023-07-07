import { useMemo } from 'react';
import { OverviewTab } from '@pages/dashboard/project-details/OverviewTab';
import { LogsTab } from '@pages/dashboard/project-details/LogsTab';
import { EnvironmentTab } from '@pages/dashboard/project-details/EnvironmentTab';
import { SettingsTab } from '@pages/dashboard/project-details/SettingsTab';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';
import { Sidebar } from '@components/sidebar/Sidebar';
import { BreadcrumbType } from '@/typings/link.type';
import { ProjectStatus, ProjectType } from '@/typings/project.type';

const appDetail: ProjectType = {
  uuid: 'e94c2fb8-790b-449d-9bc1-f6987130c09f',
  status: ProjectStatus.STOPPED,
  name: 'my-fancy-nestjs-app',
  currentDeployment: '0a3684db-e055-4716-86d7-ae4f1f71abb3',
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

  const tabContent = useMemo(() => {
    switch (props.tabSlug) {
      case '/logs':
        return <LogsTab project={appDetail} />;
      case '/env':
        return <EnvironmentTab project={appDetail} />;
      case '/settings':
        return <SettingsTab project={appDetail} />;
      default:
        return <OverviewTab project={appDetail} />;
    }
  }, [props.tabSlug]);

  return (
    <DashboardTemplate
      breadcrumbs={breadcrumbs}
      pageTitle={props.tabTitle ? `${props.tabTitle}: ${appDetail.name}` : appDetail.name}
      leftSidebar={<Sidebar currentPath={`/dashboard/${appDetail.uuid}`} currentTab={props.tabSlug} />}
    >
      {tabContent}
    </DashboardTemplate>
  );
};
