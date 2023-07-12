import { ProjectStatus } from '@/typings/project.type';
import { Box, Tooltip } from '@chakra-ui/react';
import { getColorFromStatus } from '@helper/getColorFromStatus';

type StatusDotProps = {
  status: ProjectStatus;
};

export const StatusDot = (props: StatusDotProps) => {
  let dot;
  const color = getColorFromStatus(props.status);

  switch (props.status) {
    case ProjectStatus.STATUS_UNKNOWN:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STATUS_STARTING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STATUS_RUNNING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STATUS_STOPPING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STATUS_STOPPED:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    default:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
  }

  return (
    <Tooltip label={props.status} rounded={'md'} bg={color} textTransform={'capitalize'}>
      {dot}
    </Tooltip>
  );
};

const DOT_SIZE = 3;
