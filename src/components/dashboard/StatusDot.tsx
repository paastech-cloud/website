import { ProjectStatusType } from '@/typings/project.type';
import { Box, Tooltip } from '@chakra-ui/react';

type StatusDotProps = {
  status: ProjectStatusType | string;
};

export const StatusDot = (props: StatusDotProps) => {
  let dot = null;

  switch (props.status) {
    case 'created':
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'gray.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case 'pending':
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'orange.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case 'running':
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'green.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case 'exited':
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'red.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
  }

  return (
    <Tooltip label={props.status} rounded={'md'}>
      {dot}
    </Tooltip>
  );
};

const DOT_SIZE = 3;
