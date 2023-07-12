import { Box, Spinner, useToast } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { projectsApi } from '@/api/api';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import { ProjectStatus } from '@/typings/project.type';

export const LogsTab = (props: ProjectDetailsTabProps) => {
  const [logs, setLogs] = useState<string>('');
  const toast = useToast();

  // Fetch logs
  const { isLoading, refetch } = useQuery('fetch project logs', () => {
    if (props.project.id === '' || props.project.status !== ProjectStatus.STATUS_RUNNING) return;
    projectsApi
      .projectsControllerGetLogs(props.project.id)
      .then((response) => {
        const content = response.data.content as { logs?: string };
        setLogs(content.logs ?? '');
      })
      .catch(() => {
        toast({
          title: "Error fetching project's logs",
          description: "Either the project is not running or it's an internal server error",
          status: 'error',
          isClosable: true,
        });
      });
  });

  useEffect(() => {
    refetch();
  }, [props.project.id]);

  return (
    <Box
      as={'code'}
      p={6}
      overflow={'scroll'}
      w={'full'}
      h={'full'}
      maxH={'500px'}
      lineHeight={'18px'}
      whiteSpace={'pre'}
      color={'white'}
      backgroundColor={'gray.800'}
      rounded={'lg'}
      shadow={'md'}
      css={hideScrollbar}
    >
      {props.project.status !== ProjectStatus.STATUS_RUNNING ? <>The project is not running, you can't see the logs in this state...</> : null}
      {!isLoading && logs === '' ? <>No logs...</> : null}
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        logs
      )}
    </Box>
  );
};

const hideScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;
