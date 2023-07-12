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
  useToast,
  VStack,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useProjectStore } from '@/stores/project.store';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';

export const SettingsTab = (props: ProjectDetailsTabProps) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const deleteProject = useProjectStore((state) => state.delete);

  const deleteProjectHandler = useCallback(() => {
    deleteProject()
      .then(() => {
        toast({ title: `Project ${props.project.name} deleted successfully 🗑️`, status: 'success', isClosable: true });
        navigate('/dashboard');
      })
      .catch(() => {
        toast({ title: `Error couldn't delete the project ${props.project.name}...`, status: 'error', isClosable: true });
      });
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
