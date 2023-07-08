import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import logSamples from '@assets/txt/log-samples.txt?raw';

export const LogsTab = () => {
  return (
    <Box
      as={'code'}
      p={6}
      overflow={'scroll'}
      w={'full'}
      h={'full'}
      maxH={'500px'}
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
