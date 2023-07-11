import { ReactNode, useCallback } from 'react';
import { Badge, Code, Divider, Flex, Heading, Spinner, Stack, Text, useToast } from '@chakra-ui/react';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';
import { ProfileAvatar } from '@components/profile/ProfileAvatar';
import { SshKeysForm } from '@components/profile/SshKeysForm';
import { SshKeyCard } from '@components/profile/SshKeyCard';
import { useUser } from '@/hooks/customHooks';
import { useQuery } from 'react-query';
import { sshKeysApi } from '@/api/api';
import { SshkeyType } from '@/typings/sshkey.type';

export const ProfilePage = () => {
  const userInfo = useUser();
  const toast = useToast();

  const { isLoading, data, refetch } = useQuery('load ssh keys', () => sshKeysApi.sshKeysControllerGetSshKeys());

  const sshKeys = data?.data?.content as SshkeyType[];

  const addSshKeyHandler = useCallback((name: string, value: string) => {
    sshKeysApi
      .sshKeysControllerCreateSshKey({ name, value })
      .then(() => {
        toast({
          title: 'Ssh key added.',
          description: 'A new ssh key was added successfully.',
          status: 'success',
          isClosable: true,
        });
        refetch();
      })
      .catch(() =>
        toast({
          title: 'Error adding ssh key.',
          description: "Couldn't add ssh key. Try again later.",
          status: 'error',
          isClosable: true,
        }),
      );
  }, []);

  const deleteSshKeyHandler = useCallback((sshKeyId: string) => {
    sshKeysApi
      .sshKeysControllerDeleteSshKey(sshKeyId)
      .then(() => {
        toast({
          title: 'Ssh key deleted.',
          description: 'Ssh key was deleted successfully.',
          status: 'success',
          isClosable: true,
        });
        refetch();
      })
      .catch(() =>
        toast({
          title: 'Error deleting ssh key.',
          description: "Couldn't delete ssh key. Try again later.",
          status: 'error',
          isClosable: true,
        }),
      );
  }, []);

  return (
    <DashboardTemplate pageTitle={'Account'} breadcrumbs={[{ title: 'Profile', url: '/dashboard/profile' }]}>
      <Stack spacing={6}>
        <Heading as={'h3'} fontSize={'2xl'}>
          Profile Information
        </Heading>
        <Flex flexWrap={'wrap'} gap={8} alignItems={'end'}>
          <ProfileAvatar id={userInfo?.username} name={userInfo?.username || ''} />
          <Stack spacing={4} fontSize={'lg'}>
            {userInfo?.isAdmin && (
              <Badge alignSelf={'start'} colorScheme={'yellow'} px={2} fontSize={'md'} rounded={'lg'}>
                Admin
              </Badge>
            )}
            <Paragraph title={'Username'} value={userInfo?.username} />
            <Paragraph title={'Email'} value={userInfo?.email} />
          </Stack>
        </Flex>
      </Stack>
      <Divider mt={6} />
      <Stack spacing={6}>
        <Heading as={'h3'} fontSize={'2xl'}>
          SSH Keys
        </Heading>
        <Stack>
          <Heading as={'h4'} fontSize={'lg'}>
            Add a new SSH key
          </Heading>
          <SshKeysForm onSubmit={addSshKeyHandler} />
        </Stack>
        <Stack spacing={6} alignItems={'start'}>
          <Heading as={'h4'} fontSize={'lg'}>
            Your SSH keys
          </Heading>
          {isLoading ? (
            <Spinner />
          ) : sshKeys.length > 0 ? (
            sshKeys.map((sshKey) => <SshKeyCard key={sshKey.id} sshKey={sshKey} onDelete={deleteSshKeyHandler} />)
          ) : (
            <Text>You dont have any ssh keys yet</Text>
          )}
        </Stack>
      </Stack>
    </DashboardTemplate>
  );
};

const Paragraph = (props: { title: ReactNode | string; value: ReactNode | string }) => {
  return (
    <Flex as={'p'} gap={3} alignItems={'end'}>
      <Text as={'span'} fontWeight={'semibold'}>
        {props.title}
      </Text>
      <Code>{props.value}</Code>
    </Flex>
  );
};
