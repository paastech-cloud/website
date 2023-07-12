import { useCallback } from 'react';
import { Badge, Box, Button, Flex, HStack, Link, Text, useToast, VStack } from '@chakra-ui/react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { FiRotateCcw } from 'react-icons/fi';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { SimpleCard } from '@components/dashboard/SimpleCard';
import { useProjectStore } from '@/stores/project.store';
import { ProjectStatus } from '@/typings/project.type';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import moment from 'moment';

export const OverviewTab = (props: ProjectDetailsTabProps) => {
  const refresh = useProjectStore((state) => state.refreshCurrentProject);
  const deploy = useProjectStore((state) => state.deploy);
  const stop = useProjectStore((state) => state.stop);
  const toast = useToast();

  const canStart = props.project.status === ProjectStatus.STATUS_STOPPED;
  const isRunning = props.project.status === ProjectStatus.STATUS_RUNNING;

  const deployHandle = useCallback(() => {
    deploy()
      .then(() => {
        toast({ title: 'Project deployed successfully ✨', status: 'success', isClosable: true });
        refresh(props.project.id);
      })
      .catch(() => toast({ title: "Error couldn't deploy project...", status: 'error', isClosable: true }));
  }, [props.project.id]);

  const stopHandle = useCallback(() => {
    stop()
      .then(() => {
        toast({ title: 'Project stopped successfully 👏', status: 'success', isClosable: true });
        refresh(props.project.id);
      })
      .catch(() => toast({ title: "Error couldn't stop the project...", status: 'error', isClosable: true }));
  }, [props.project.id]);

  return (
    <Flex flexDirection={'column'} alignItems={'start'} gap={6}>
      <SimpleCard heading={'Actions on app'}>
        <HStack w={'full'} spacing={6}>
          <Button colorScheme={'green'} leftIcon={<FaPlay size={17} />} isDisabled={!canStart} onClick={deployHandle}>
            START
          </Button>
          <Button colorScheme={'orange'} leftIcon={<FaStop size={17} />} isDisabled={!isRunning} onClick={stopHandle}>
            STOP
          </Button>
          <Button colorScheme={'teal'} leftIcon={<FiRotateCcw size={17} />} isDisabled={!isRunning} onClick={deployHandle}>
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
            <Badge py={1} px={2} bg={'brand.bg'} color={'white'} rounded={'md'} textTransform={'capitalize'}>
              {moment(props.project.createdAt).fromNow()}
            </Badge>
          </Text>
          <Text as={'p'}>
            Last updated:{' '}
            <Badge py={1} px={2} bg={'brand.bg'} color={'white'} rounded={'md'} textTransform={'capitalize'}>
              {moment(props.project.updatedAt).fromNow()}
            </Badge>
          </Text>
        </VStack>
      </SimpleCard>
    </Flex>
  );
};
