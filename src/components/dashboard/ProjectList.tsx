import { List, ListItem } from '@chakra-ui/react';
import { Project } from '@components/dashboard/Project';
import { ProjectStatus } from '@/typings/project.type';

export const ProjectList = () => {
  return (
    <List color={'gray.800'}>
      <ListItem>
        <Project
          project={{
            uuid: 'c7b09dcb-3b61-44e9-849a-980e36c41e2b',
            status: ProjectStatus.UNKNOWN,
            name: 'the-new-twitter',
            currentDeployment: '0ab9e25',
            lastActivity: '30 seconds ago',
          }}
        />
        <Project
          project={{
            uuid: 'e94c2fb8-790b-449d-9bc1-f6987130c09f',
            status: ProjectStatus.STARTING,
            name: 'my-fancy-go-app',
            currentDeployment: 'f421210',
            lastActivity: '6 hours ago',
          }}
        />
        <Project
          project={{
            uuid: '832fa6a8-e4be-4aa9-8026-1787253a5061',
            status: ProjectStatus.RUNNING,
            name: 'my-fancy-rust-app',
            currentDeployment: 'f19a10b',
            lastActivity: '2 days ago',
          }}
        />
        <Project
          project={{
            uuid: '0810f7c3-090a-4310-8a2e-1b1c038895bc',
            status: ProjectStatus.STOPPING,
            name: 'my-shitty-django-app',
            currentDeployment: '328e5b5',
            lastActivity: '3 hours ago',
          }}
        />
        <Project
          project={{
            uuid: '05beca09-5002-4888-aa49-738d6bd1f40c',
            status: ProjectStatus.STOPPED,
            name: 'my-fancy-node-app',
            currentDeployment: '0ab9e25',
            lastActivity: '1 minute ago',
          }}
        />
      </ListItem>
    </List>
  );
};
