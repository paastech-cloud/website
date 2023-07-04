import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import logSamples from '@assets/txt/log-samples.txt?raw';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LogsTab = (props: ProjectDetailsTabProps) => {
  return (
    <Box
      as={'code'}
      p={6}
      overflowX={'scroll'}
      w={'full'}
      h={'full'}
      whiteSpace={'pre'}
      color={'white'}
      backgroundColor={'gray.800'}
      rounded={'lg'}
      shadow={'md'}
      css={hideScrollbar}
    >
      {logSamples}
    </Box>
  );
};

const hideScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }
`;
