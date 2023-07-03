import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Tooltip } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { BreadcrumbType } from '@/typings/link.type';

type BreadcrumbDashboardProps = {
  breadcrumbs: BreadcrumbType[];
};

export const BreadcrumbsDashboard = ({ breadcrumbs }: BreadcrumbDashboardProps) => {
  return (
    <Breadcrumb w={'full'} pl={{ base: 4, lg: 0 }} spacing={1} separator={<ChevronRightIcon boxSize={5} color={'gray.500'} />}>
      {breadcrumbs.map((bread, i) => {
        const isLastItem = i === breadcrumbs.length - 1;

        const button = (
          <Button
            leftIcon={bread.icon}
            _hover={isLastItem ? {} : undefined}
            _focus={isLastItem ? {} : undefined}
            _active={isLastItem ? {} : undefined}
            cursor={isLastItem ? 'default' : undefined}
          >
            {bread.title}
          </Button>
        );

        if (isLastItem) {
          return (
            <BreadcrumbItem key={i}>
              <Tooltip label={'You are currently here'} rounded={'md'}>
                {button}
              </Tooltip>
            </BreadcrumbItem>
          );
        }

        return (
          <BreadcrumbItem key={i}>
            <BreadcrumbLink as={RouterLink} to={bread.url} isCurrentPage={isLastItem}>
              {button}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};
