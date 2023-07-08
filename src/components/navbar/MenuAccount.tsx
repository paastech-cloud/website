import { Box, Button, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { RiSettings3Fill } from 'react-icons/ri';
import { GrPowerShutdown } from 'react-icons/gr';
import { FaUser } from 'react-icons/fa';

export const MenuAccount = () => {
  return (
    <Menu>
      <MenuButton as={Button} rounded={'lg'} minW={0} leftIcon={<FaUser />}>
        Account
      </MenuButton>
      <MenuList color={'black'}>
        <MenuItem as={RouterLink} to={'/dashboard/profile'}>
          <Flex flexDirection={'column'} alignItems={'start'}>
            <Box>Logged in as</Box>
            <Text as={'b'} maxW={'150px'} isTruncated title={'john.doe@example.tld'}>
              john.doe@example.tld
            </Text>
          </Flex>
        </MenuItem>
        <MenuDivider />
        <MenuItem as={RouterLink} to={'/dashboard/profile'} icon={<RiSettings3Fill size={'16px'} />}>
          Settings
        </MenuItem>
        <MenuItem as={RouterLink} to={'/'} icon={<GrPowerShutdown size={'14px'} />}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
