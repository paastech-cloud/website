import {
  Badge,
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { FaKey } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { SshkeyType } from '@/typings/sshkey.type';
import { useCallback } from 'react';

type SshKeyCardProps = {
  sshKey: SshkeyType;
  onDelete?: (id: string) => void;
};

export const SshKeyCard = (props: SshKeyCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteSshKeyHandler = useCallback(() => {
    if (props.onDelete && props.sshKey.id) props.onDelete(props.sshKey.id);
    onClose();
  }, [props.sshKey]);

  return (
    <Flex
      gap={8}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={4}
      rounded={'lg'}
      border={'1px'}
      borderColor={'brand.border_gray'}
      shadow={'sm'}
      width={{ sm: 'full', md: 'min' }}
    >
      <Stack alignItems={'center'} spacing={2}>
        <FaKey size={34} color={'dimgray'} />
        <Badge variant={'outline'} rounded={'md'}>
          SSH
        </Badge>
      </Stack>
      <Tooltip label={'SSH Key name'}>
        <Text fontWeight={'semibold'}>{props.sshKey.name}</Text>
      </Tooltip>
      <Tooltip label={'SSH Key value'}>
        <Text isTruncated maxW={'150px'}>
          {props.sshKey.value}
        </Text>
      </Tooltip>
      <Tooltip label={'Delete this key'} bg={'red'} rounded={'lg'}>
        <IconButton colorScheme={'red'} aria-label={`Delete the ssh key named ${props.sshKey.name}`} icon={<FiTrash2 />} onClick={onOpen} />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} isCentered>
        <ModalOverlay />
        <ModalContent color={'black'}>
          <ModalHeader isTruncated>Delete "{props.sshKey.name}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>
              This action{' '}
              <Text as={'span'} fontWeight={'bold'}>
                CANNOT
              </Text>{' '}
              be undone. This will permanently delete the SSH key and if you’d like to use it in the future, you will need to upload it again.
            </Text>
            <Text fontWeight={'bold'}>Any commits you signed with this key will become unverified after removing it.</Text>
          </ModalBody>

          <ModalFooter justifyContent={'center'}>
            <Button colorScheme={'red'} variant={'outline'} onClick={deleteSshKeyHandler}>
              I understand, please delete this SSH key
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
