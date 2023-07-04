import { ProjectStatus } from '@/typings/project.type';
import { Box, Tooltip } from '@chakra-ui/react';

type StatusDotProps = {
  status: ProjectStatus;
};

export const StatusDot = (props: StatusDotProps) => {
  let dot = null;

  switch (props.status) {
    case ProjectStatus.UNKNOWN:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'black'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.NO_DEPLOYMENT:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'gray.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STARTING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'blue.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.RUNNING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'green.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STOPPING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={'orange.500'} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STOPPED:
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
