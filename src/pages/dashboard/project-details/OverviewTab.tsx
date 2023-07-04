import { Box, Button, Card, CardBody, Heading, HStack } from '@chakra-ui/react';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const OverviewTab = (props: ProjectDetailsTabProps) => {
  return (
    <Box>
      <Card shadow={'base'}>
        <CardBody>
          <Heading as={'h3'} size={'md'} mb={4}>
            Actions on deploy
          </Heading>

          <HStack w={'full'} spacing={6}>
            <Button colorScheme={'green'}>START</Button>
            <Button colorScheme={'orange'}>STOP</Button>
            <Button colorScheme={'teal'}>RESTART</Button>
            <Button colorScheme={'red'}>DELETE</Button>
          </HStack>
        </CardBody>
      </Card>
      <Box></Box>
    </Box>
  );
};
