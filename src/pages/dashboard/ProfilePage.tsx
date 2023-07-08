import { ReactNode, useCallback } from 'react';
import { Badge, Code, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { DashboardTemplate } from '@components/dashboard/DashboardTemplate';
import { ProfileAvatar } from '@components/profile/ProfileAvatar';
import { SshKeysForm } from '@components/profile/SshKeysForm';
import { SshKeyCard } from '@components/profile/SshKeyCard';
import { SshkeyType } from '@/typings/sshkey.type';
import sshKeysSamples from '@assets/txt/sshkeys-samples.json';

const userInfo = {
  id: 'bf5f847e-7ff1-4ecf-9112-4bdfae6e7f68',
  username: 'john.doe',
  email: 'john.doe@example.tld',
  isAdmin: false,
};

const sshKeys = sshKeysSamples as unknown as SshkeyType[];

export const ProfilePage = () => {
  const addSshKeyHandler = useCallback((name: string, value: string) => {
    console.log('New ssh key', name, value);
  }, []);

  const deleteSshKeyHandler = useCallback((sshKeyId: string) => {
    console.log(`deleting ssh key -> ${sshKeyId}`);
  }, []);

  return (
    <DashboardTemplate pageTitle={'Account'} breadcrumbs={[{ title: 'Profile', url: '/dashboard/profile' }]}>
      <Stack spacing={6}>
        <Heading as={'h3'} fontSize={'2xl'}>
          Profile Information
        </Heading>
        <Flex flexWrap={'wrap'} gap={8} alignItems={'end'}>
          <ProfileAvatar id={userInfo.id} name={userInfo.username} />
          <Stack spacing={4} fontSize={'lg'}>
            {userInfo.isAdmin && (
              <Badge alignSelf={'start'} colorScheme={'yellow'} px={2} fontSize={'md'} rounded={'lg'}>
                Admin
              </Badge>
            )}
            <Paragraph title={'Username'} value={userInfo.username} />
            <Paragraph title={'Email'} value={userInfo.email} />
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
          {sshKeys.map((sshKey) => (
            <SshKeyCard key={sshKey.id} sshKey={sshKey} onDelete={deleteSshKeyHandler} />
          ))}
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
