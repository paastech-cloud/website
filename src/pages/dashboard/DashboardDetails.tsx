import { useMemo } from 'react';
import { Text } from '@chakra-ui/react';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';
import { Sidebar } from '@components/sidebar/Sidebar';
import { BreadcrumbType } from '@/typings/link.type';

const appDetail = {
  uuid: 'e94c2fb8-790b-449d-9bc1-f6987130c09f',
  status: 'created',
  name: 'my-fancy-go-app',
  latestDeployment: 'f421210',
  lastUpdate: '6 hours ago',
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
        return (
          <Text as={'p'} fontSize={30} mt={10}>
            Logs...
          </Text>
        );
      case '/env':
        return (
          <Text as={'p'} fontSize={30} mt={10}>
            Env...
          </Text>
        );
      case '/settings':
        return (
          <Text as={'p'} fontSize={30} mt={10}>
            Settings...
          </Text>
        );
      default:
        return (
          <Text as={'p'} fontSize={30} mt={10}>
            Overview...
          </Text>
        );
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
