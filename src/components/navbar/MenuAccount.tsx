import { Box, Button, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { RiSettings3Fill } from 'react-icons/ri';
import { GrPowerShutdown } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';
import { useUser } from '@/hooks/customHooks';
import { authApi } from '@/api/api';
import { removeAccessExpiration } from '@/helper/accessHelper';

export const MenuAccount = () => {
  const user = useUser();
  const navigate = useNavigate();
  const logOut = () => {
    authApi
      .authControllerLogout()
      .then(() => {
        removeAccessExpiration();
        navigate('/login');
      })
      .catch(() => {
        console.log('Log out error');
      });
  };
  return (
    <Menu>
      <MenuButton as={Button} rounded={'lg'} minW={0} leftIcon={<FaUser />}>
        {user?.username}
      </MenuButton>
      <MenuList color={'black'}>
        <MenuItem as={RouterLink} to={'/dashboard/profile'}>
          <Flex flexDirection={'column'} alignItems={'start'}>
            <Box>Logged in as</Box>
            <Text as={'b'} maxW={'150px'} isTruncated title={user?.email}>
              {user?.email}
            </Text>
          </Flex>
        </MenuItem>
        <MenuDivider />
        <MenuItem as={RouterLink} to={'/dashboard/profile'} icon={<RiSettings3Fill size={'16px'} />}>
          Settings
        </MenuItem>
        <MenuItem icon={<GrPowerShutdown size={'14px'} />} onClick={logOut}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
