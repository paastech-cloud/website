import { Badge, Box, Button, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { FiRotateCcw } from 'react-icons/fi';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { SimpleCard } from '@components/dashboard/SimpleCard';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import { ProjectStatus } from '@/typings/project.type';

export const OverviewTab = (props: ProjectDetailsTabProps) => {
  const canStart = props.project.status === ProjectStatus.STATUS_STOPPED;
  const isRunning = props.project.status === ProjectStatus.STATUS_RUNNING;

  return (
    <Flex flexDirection={'column'} alignItems={'start'} gap={6}>
      <SimpleCard heading={'Actions on app'}>
        <HStack w={'full'} spacing={6}>
          <Button colorScheme={'green'} leftIcon={<FaPlay size={17} />} isDisabled={!canStart}>
            START
          </Button>
          <Button colorScheme={'orange'} leftIcon={<FaStop size={17} />} isDisabled={!isRunning}>
            STOP
          </Button>
          <Button colorScheme={'teal'} leftIcon={<FiRotateCcw size={17} />} isDisabled={!isRunning}>
            RESTART
          </Button>
        </HStack>
      </SimpleCard>
      <SimpleCard heading={'Application Information'}>
        <VStack spacing={2} alignItems={'start'}>
          <Box>
            <Text as={'p'}>Hostname:</Text>
            <Link href={`https://${props.project.id}.user-app.paastech.cloud`} isExternal color={'brand.bg'} fontWeight={'bold'}>
              {`${props.project.id}.user-app.paastech.cloud`} <ExternalLinkIcon mx={'2px'} />
            </Link>
          </Box>
          <Text as={'p'}>
            Creation date:{' '}
            <Badge py={1} px={2} bg={'brand.bg'} color={'white'}>
              {props.project.createdAt}
            </Badge>
          </Text>
          <Text as={'p'}>
            Last updated:{' '}
            <Badge py={1} px={2} bg={'brand.bg'} color={'white'}>
              {props.project.updatedAt}
            </Badge>
          </Text>
        </VStack>
      </SimpleCard>
    </Flex>
  );
};
