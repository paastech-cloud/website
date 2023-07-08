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
      width={{ base: 'full', md: 'auto' }}
      _hover={{ bg: 'brand.bg_gray' }}
    >
      <Stack alignItems={'center'} spacing={2}>
        <FaKey size={34} color={'dimgray'} />
        <Badge variant={'outline'} rounded={'md'}>
          SSH
        </Badge>
      </Stack>
      <Tooltip label={props.sshKey.name ? 'SSH key name' : 'SSH key uuid'}>
        {props.sshKey.name ? (
          <Text whiteSpace={'nowrap'} fontWeight={'semibold'} isTruncated>
            {props.sshKey.name}
          </Text>
        ) : (
          <Text whiteSpace={'nowrap'} fontWeight={'light'} fontStyle={'italic'} isTruncated>
            {props.sshKey.id ? props.sshKey.id.split('-').at(0) : 'no name'}
          </Text>
        )}
      </Tooltip>
      <Tooltip label={'SSH Key value'}>
        <Text isTruncated maxW={{ base: '50px', sm: '100px', md: '150px', xl: '300px' }}>
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
              be undone.
            </Text>
            <Text>This will permanently delete the SSH key and if you’d like to use it in the future, you will need to upload it again.</Text>
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
