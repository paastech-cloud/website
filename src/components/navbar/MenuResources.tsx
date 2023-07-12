import { Button, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { BiBook, BiHomeAlt2 } from 'react-icons/bi';
import { FaGithubAlt } from 'react-icons/fa';

export const MenuResources = () => {
  return (
    <Menu>
      <MenuButton as={Button} rounded={'lg'} minW={0} leftIcon={<BsFillBookmarksFill />}>
        Resources
      </MenuButton>
      <MenuList color={'black'}>
        <MenuItem as={Link} href={'https://github.com/paastech-cloud/docs'} isExternal icon={<BiBook size={'1rem'} />}>
          Documentation
        </MenuItem>
        <MenuItem as={Link} href={'https://github.com/paastech-cloud'} isExternal icon={<FaGithubAlt size={'1rem'} />}>
          Github
        </MenuItem>
        <MenuItem as={Link} href={'/'} icon={<BiHomeAlt2 size={'1rem'} />}>
          Homepage
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
