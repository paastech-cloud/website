import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoginFormType } from '@/typings/form.type';

export const LoginPage = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required').max(100, 'Email must be at most 100 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(255, 'Password must be at most 255 characters'),
  });

  const handleSubmit = (values: LoginFormType) => {
    // Handle form submission here
    console.log('Form values:', values);
  };

  return (
    <>
      <Flex align={'center'} justify={'stretch'} mt={10}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'md'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Log in to your account
          </Heading>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                rememberMe: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Stack spacing={4} color={'black'}>
                  <FormControl isRequired id={'email'}>
                    <FormLabel>Email address</FormLabel>
                    <Field type={'email'} name={'email'} autoComplete={'email'} as={Input} />
                    <ErrorMessage name={'email'} />
                  </FormControl>
                  <FormControl isRequired id={'password'}>
                    <FormLabel>Password</FormLabel>
                    <Field type={'password'} name={'password'} autoComplete={'current-password'} as={Input} />
                    <ErrorMessage name={'password'} />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                      <Checkbox name={'rememberMe'}>Remember me</Checkbox>
                      <Link as={LinkRouter} to={'/password-recovery'} color={'brand.red'}>
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      type={'submit'}
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
              </Form>
            </Formik>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
