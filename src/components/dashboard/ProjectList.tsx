import { List, ListItem } from '@chakra-ui/react';
import { Project } from '@components/dashboard/Project';
import { ProjectType } from '@/typings/project.type';

type ProjectListProps = {
  projects: ProjectType[];
};

export const ProjectList = (props: ProjectListProps) => {
  return (
    <List color={'gray.800'}>
      <ListItem>
        {props.projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ListItem>
    </List>
  );
};
