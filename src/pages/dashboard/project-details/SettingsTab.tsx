import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

export const SettingsTab = (props: ProjectDetailsTabProps) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteProjectHandler = useCallback(() => {
    console.log(`deleting project ${props.project.id}...`);
    navigate('/dashboard');
  }, [props.project]);

  return (
    <VStack spacing={4} alignItems={'start'}>
      <Heading as={'h3'} size={'md'}>
        Delete this project
      </Heading>
      <Text as={'p'}>Once you delete a project, there is no going back. Please be certain.</Text>
      <Button colorScheme={'red'} size={'lg'} leftIcon={<FiTrash2 size={20} />} lineHeight={'1px'} onClick={onOpen}>
        DELETE PROJECT
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent color={'black'}>
          <ModalHeader isTruncated>Delete "{props.project.name}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as={'p'} mb={2}>
              Are you really sure you want to delete this project?
            </Text>
            <Text as={'p'}>Once you delete a project, there is no going back.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={'red'} variant={'outline'} onClick={deleteProjectHandler}>
              I want to delete this project
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
