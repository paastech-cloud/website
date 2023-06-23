import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack } from '@chakra-ui/react';

export const LoginPage = () => {
  return (
    <>
      <Flex align={'center'} justify={'stretch'} mt={10}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'md'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Log in to your account
          </Heading>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
            <Stack spacing={4} color={'black'}>
              <FormControl isRequired id={'email'}>
                <FormLabel>Email address</FormLabel>
                <Input type={'email'} autoComplete={'email'} />
              </FormControl>
              <FormControl isRequired id={'password'}>
                <FormLabel>Password</FormLabel>
                <Input type={'password'} autoComplete={'current-password'} />
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'brand.red'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'brand.red'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.red',
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
