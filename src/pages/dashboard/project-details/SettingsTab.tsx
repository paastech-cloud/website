import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SettingsTab = (props: ProjectDetailsTabProps) => {
  return (
    <VStack spacing={4} alignItems={'start'}>
      <Heading as={'h3'} size={'md'}>
        Delete this project
      </Heading>
      <Text as={'p'}>Once you delete a project, there is no going back. Please be certain.</Text>
      <Button colorScheme={'red'} size={'lg'} leftIcon={<FiTrash2 size={20} />} lineHeight={'1px'}>
        DELETE PROJECT
      </Button>
    </VStack>
  );
};
