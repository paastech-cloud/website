import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';

export const RegisterPage = () => {
  return (
    <>
      <Flex align={'center'} justify={'stretch'} mt={10}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'md'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create an account
          </Heading>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
            <Stack spacing={4} color={'black'}>
              <FormControl isRequired id={'email'}>
                <FormLabel>Username</FormLabel>
                <Input type={'text'} autoComplete={'username'} />
              </FormControl>
              <FormControl isRequired id={'email'}>
                <FormLabel>Email address</FormLabel>
                <Input type={'email'} autoComplete={'email'} />
              </FormControl>
              <FormControl isRequired id={'password'}>
                <FormLabel>Password</FormLabel>
                <Input type={'password'} autoComplete={'new-password'} />
              </FormControl>
              <FormControl isRequired id={'password'}>
                <FormLabel>Confirm password</FormLabel>
                <Input type={'password'} autoComplete={'confirm-password'} />
              </FormControl>
              <Stack spacing={10}>
                <Checkbox>I accept the terms and conditions</Checkbox>
                <Button
                  bg={'brand.red'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.red',
                  }}
                >
                  Create
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
