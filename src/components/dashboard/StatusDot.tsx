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
    case ProjectStatus.NO_DEPLOYMENT:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STARTING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.RUNNING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STOPPING:
      dot = <Box w={DOT_SIZE} h={DOT_SIZE} bg={color} rounded={'full'} cursor={'pointer'}></Box>;
      break;
    case ProjectStatus.STOPPED:
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
