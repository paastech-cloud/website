import { ReactElement } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

type BreadcrumbType = {
  title: string;
  url?: string;
  isCurrentPage?: boolean;
  icon?: ReactElement;
};

type BreadcrumbDashboardProps = {
  breads: BreadcrumbType[];
};

export const BreadcrumbDashboard = (props: BreadcrumbDashboardProps) => {
  return (
    <Breadcrumb w={'full'} pl={8} spacing={1} separator={<ChevronRightIcon boxSize={5} color={'gray.500'} />}>
      {props.breads.map((bread, i) => (
        <BreadcrumbItem key={i}>
          <Button leftIcon={bread.icon} _hover={bread.isCurrentPage ? {} : undefined} cursor={bread.isCurrentPage ? 'default' : undefined}>
            {bread.isCurrentPage ? (
              bread.title
            ) : (
              <BreadcrumbLink as={RouterLink} to={bread.url} isCurrentPage={bread.isCurrentPage}>
                {bread.title}
              </BreadcrumbLink>
            )}
          </Button>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
