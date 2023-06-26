import { Box, Button, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
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
        <MenuItem>
          <Flex flexDirection={'column'} alignItems={'start'}>
            <Box>Logged in as</Box>
            <Text as={'b'} maxW={'150px'} isTruncated title={'john.doe@example.tld'}>
              john.doe@example.tld
            </Text>
          </Flex>
        </MenuItem>
        <MenuDivider />
        <MenuItem icon={<RiSettings3Fill size={'16px'} />}>Settings</MenuItem>
        <MenuItem icon={<GrPowerShutdown size={'14px'} />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
