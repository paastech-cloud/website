import { List, ListItem } from '@chakra-ui/react';
import { Project } from '@components/dashboard/Project';

export const ProjectList = () => {
  return (
    <List color={'gray.800'}>
      <ListItem>
        <Project
          project={{
            uuid: 'e94c2fb8-790b-449d-9bc1-f6987130c09f',
            status: 'created',
            name: 'my-fancy-go-app',
            latestDeployment: 'f421210',
            lastUpdate: '6 hours ago',
          }}
        />
        <Project
          project={{
            uuid: '05beca09-5002-4888-aa49-738d6bd1f40c',
            status: 'pending',
            name: 'my-fancy-node-app',
            latestDeployment: '0ab9e25',
            lastUpdate: '1 minute ago',
          }}
        />
        <Project
          project={{
            uuid: 'e94c2fb8-790b-449d-9bc1-f6987130c09f',
            status: 'running',
            name: 'my-fancy-rust-app',
            latestDeployment: 'f19a10b',
            lastUpdate: '2 days ago',
          }}
        />
        <Project
          project={{
            uuid: '0810f7c3-090a-4310-8a2e-1b1c038895bc',
            status: 'exited',
            name: 'my-shitty-django-app',
            latestDeployment: '328e5b5',
            lastUpdate: '3 hours ago',
          }}
        />
      </ListItem>
    </List>
  );
};
