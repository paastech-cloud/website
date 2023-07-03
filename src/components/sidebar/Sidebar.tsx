import { ReactElement } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { MdOutlineDocumentScanner, MdRadar } from 'react-icons/md';
import { FaScroll } from 'react-icons/fa';
import { RiSettings3Fill } from 'react-icons/ri';
import { NavItem } from '@components/sidebar/NavItem';

type LinkItemProps = {
  name: string;
  icon: ReactElement;
  tab?: string;
};

const LinkItems: Array<LinkItemProps> = [
  { name: 'Overview', icon: <MdRadar size={18} /> },
  { name: 'Logs', icon: <FaScroll size={18} />, tab: '/logs' },
  { name: 'Environment', icon: <MdOutlineDocumentScanner size={18} />, tab: '/env' },
  { name: 'Settings', icon: <RiSettings3Fill size={18} />, tab: '/settings' },
];

type SidebarProps = {
  currentPath?: string;
  currentTab?: '/logs' | '/env' | '/settings';
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <Box mt={'50px'} pt={4} w={'full'}>
      <Flex flexDirection={'column'} alignItems={'center'} rowGap={10}>
        {LinkItems.map((link, i) => (
          <NavItem
            key={i}
            icon={link.icon}
            slug={props.currentPath ? `${props.currentPath}${link.tab ?? ''}` : ''}
            isCurrent={props.currentTab === link.tab}
          >
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
