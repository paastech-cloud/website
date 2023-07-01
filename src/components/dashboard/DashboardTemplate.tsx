import { ReactNode, useMemo } from 'react';
import { Card, Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import { MdSpaceDashboard } from 'react-icons/md';
import { css } from '@emotion/react';
import { BreadcrumbsDashboard } from '@components/dashboard/BreadcrumbsDashboard';
import { BreadcrumbType } from '@/typings/link.type';

type DashboardTemplateProps = {
  breadcrumbs?: BreadcrumbType[];
  pageTitle: ReactNode | string;
  children?: ReactNode;
  leftSidebar?: ReactNode;
  rightSidebar?: ReactNode;
};

export const DashboardTemplate = (props: DashboardTemplateProps) => {
  const breadcrumbs = useMemo(() => {
    const b: BreadcrumbType[] = [{ title: 'Dashboard', url: '/dashboard', icon: <MdSpaceDashboard /> }];

    return b.concat(props.breadcrumbs ?? []);
  }, [props.breadcrumbs]);

  return (
    <VStack spacing={8} flex={1} mx={'auto'} pt={8} pb={10} color={'black'} css={maxWidth}>
      <Flex flexWrap={'nowrap'} flex={'1'} css={maxWidth}>
        {/* Left sidebar */}
        <VStack as={'aside'} flexBasis={'20rem'} p={'1.5rem'} pl={'2rem'} display={{ base: 'none', lg: 'flex' }}>
          {props.leftSidebar}
        </VStack>

        {/* Main content */}
        <VStack flex={1} spacing={8}>
          <BreadcrumbsDashboard breadcrumbs={breadcrumbs} />
          <Card rounded={'lg'} flex={1} w={'full'} p={8}>
            <Flex flex={'1'} flexDirection={'column'} bgColor={'white'}>
              <HStack justifyContent={'space-between'} borderBottom={'1px'} borderColor={'brand.border_gray'} pb={6} pl={4}>
                <Heading color={'gray.700'}>{props.pageTitle}</Heading>
              </HStack>
              {props.children}
            </Flex>
          </Card>
        </VStack>

        {/* Right sidebar */}
        <VStack spacing={4} alignItems={'stretch'} flexBasis={'20rem'} mt={'35px'} pt={'2rem'} px={'2rem'} display={{ base: 'none', lg: 'flex' }}>
          {props.rightSidebar}
        </VStack>
      </Flex>
    </VStack>
  );
};

const maxWidth = css`
  width: 100%;
  max-width: 1620px;
`;
