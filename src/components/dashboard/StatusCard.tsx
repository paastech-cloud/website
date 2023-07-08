import { Flex, Text } from '@chakra-ui/react';
import { StatusDot } from '@components/dashboard/StatusDot';
import { ProjectStatus } from '@/typings/project.type';
import { getColorFromStatus } from '@helper/getColorFromStatus';

type StatusCardProps = {
  status: ProjectStatus;
};

export const StatusCard = ({ status }: StatusCardProps) => {
  return (
    <Flex color={getColorFromStatus(status)} bg={'gray.100'} p={3} rounded={'lg'} alignItems={'center'} gap={2} shadow={'base'} mr={1}>
      <StatusDot status={status} />
      <Text fontWeight={'bold'} textTransform={'capitalize'} whiteSpace={'nowrap'}>
        {status}
      </Text>
    </Flex>
  );
};
