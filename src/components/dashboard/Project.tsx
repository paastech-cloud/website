import { Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { StatusDot } from '@components/dashboard/StatusDot';
import { ProjectType } from '@/typings/project.type';

type ProjectProps = {
  project: ProjectType;
};

export const Project = (props: ProjectProps) => {
  return (
    <Flex
      as={RouterLink}
      to={`/dashboard/${props.project.uuid}`}
      flexFlow={'column nowrap'}
      justifyContent={'space-between'}
      p={'1.5rem'}
      borderBottom={'1px'}
      borderColor={'brand.border_gray'}
      _hover={{ bg: 'brand.bg_gray' }}
      cursor={'pointer'}
    >
      <Flex justifyContent={'end'}>
        <Tooltip label={'Current deployment'} rounded={'md'}>
          <Text color={'gray.500'}>{props.project.currentDeployment}</Text>
        </Tooltip>
      </Flex>

      <Flex flexFlow={'row nowrap'} alignItems={'center'} columnGap={4}>
        <StatusDot status={props.project.status} />
        <Text color={'gray.600'} fontWeight={'semibold'} fontSize={'lg'}>
          {props.project.name}
        </Text>
      </Flex>

      <Flex justifyContent={'end'}>
        <Tooltip label={'Last updated'} rounded={'md'}>
          <HStack>
            <RxCounterClockwiseClock />
            <Text color={'gray.500'}>{props.project.updatedAt}</Text>
          </HStack>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
