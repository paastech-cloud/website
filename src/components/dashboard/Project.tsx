import { Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { StatusDot } from '@components/dashboard/StatusDot';
import { ProjectType } from '@/typings/project.type';
import { RxCounterClockwiseClock } from 'react-icons/rx';

type ProjectProps = {
  project: ProjectType;
};

export const Project = (props: ProjectProps) => {
  return (
    <Flex
      flexFlow={'row nowrap'}
      justifyContent={'space-between'}
      p={'1.5rem'}
      borderBottom={'1px'}
      borderColor={'brand.border_gray'}
      _hover={{ bg: 'brand.bg_gray' }}
      cursor={'pointer'}
    >
      <Flex flexFlow={'row nowrap'} alignItems={'center'} columnGap={4}>
        <StatusDot status={props.project.status} />
        <Text color={'gray.600'} fontWeight={'semibold'} fontSize={'lg'}>
          {props.project.name}
        </Text>
      </Flex>
      <Flex flexDirection={'column'} alignItems={'end'} rowGap={4}>
        <Tooltip label={'Latest deployment'} rounded={'md'}>
          <Text color={'gray.500'}>{props.project.latestDeployment}</Text>
        </Tooltip>
        <Tooltip label={'Last update'} rounded={'md'}>
          <HStack>
            <RxCounterClockwiseClock />
            <Text color={'gray.500'}>{props.project.lastUpdate}</Text>
          </HStack>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
