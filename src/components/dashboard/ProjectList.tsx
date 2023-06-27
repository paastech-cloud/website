import { List, ListItem } from '@chakra-ui/react';
import { Project } from '@components/dashboard/Project';

export const ProjectList = () => {
  return (
    <List color={'gray.800'}>
      <ListItem>
        <Project project={{ status: 'pending', name: 'my-fancy-node-app', latestDeployment: '0ab9e25', lastUpdate: '1 minute ago' }} />
        <Project project={{ status: 'running', name: 'my-fancy-rust-app', latestDeployment: 'f19a10b', lastUpdate: '2 days ago' }} />
        <Project project={{ status: 'exited', name: 'my-shitty-django-app', latestDeployment: '328e5b5', lastUpdate: '3 hours ago' }} />
      </ListItem>
    </List>
  );
};
