import { CloudsContainer } from '@/components/CloudsContainer';
import { Box, Image, Text } from '@chakra-ui/react';
import { NavLink } from '@components/NavLink';

export default function ErrorPage() {
  return (
    <Box display="flex" justifyContent="center" minHeight="100vh">
      <Box textAlign="center" py={0} px={6}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image src="https://media.tenor.com/YNB-9ToeuOkAAAAC/anime-watermelon.gif" alt="404" width={600} borderRadius={10} />
        </Box>
        <Text fontSize="2em" mt={3} mb={2} fontWeight="bold">
          404 Page Not Found
        </Text>
        <Text color="white" mb={6} fontSize="1.4em">
          The page you're looking for does not seem to exist
        </Text>

        <NavLink title="Go home" link="/" variant={'solid'} bg={'brand.red'} />
      </Box>
      <CloudsContainer />
    </Box>
  );
}
