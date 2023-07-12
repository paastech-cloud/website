import { Heading, Link, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Project } from '@components/dashboard/Project';
import { ProjectType } from '@/typings/project.type';

type ProjectListProps = {
  projects: ProjectType[];
};

export const ProjectList = (props: ProjectListProps) => {
  if (props.projects.length === 0) {
    return (
      <Stack alignItems={'center'} justifyContent={'center'} mt={14}>
        <Stack spacing={6}>
          <Heading as={'h3'} fontSize={24} fontWeight={'semibold'}>
            You don't have any projects?
          </Heading>
          <Text>
            Create a project with the{' '}
            <Link href={'https://github.com/paastech-cloud/cli/releases'} isExternal>
              CLI <ExternalLinkIcon />
            </Link>
            :
          </Text>
          <Stack>
            <Text as={'code'} whiteSpace={'pre'} lineHeight={'35px'} rounded={'md'} px={4} py={3} bg={'brand.light_black'} color={'#adbac7'}>
              {'$ paastech init <project name>\n'}
              {'$ paastech push\n'}
              {'$ paastech deploy\n'}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    );
  }

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
