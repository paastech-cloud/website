import { ReactNode } from 'react';
import { Card, CardBody, Heading } from '@chakra-ui/react';

type SimpleCardProps = {
  heading: ReactNode | string;
  children?: ReactNode;
};

export const SimpleCard = (props: SimpleCardProps) => {
  return (
    <Card shadow={'base'} bg={'gray.100'}>
      <CardBody>
        <Heading as={'h3'} size={'md'} mb={4}>
          {props.heading}
        </Heading>
        {props.children}
      </CardBody>
    </Card>
  );
};
