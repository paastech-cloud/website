import { useEffect, useState } from 'react';
import { Alert, AlertIcon, Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Link, Stack } from '@chakra-ui/react';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LoginFormType } from '@/typings/form.type';
import { accessExpired, setAccessExpiration } from '@/helper/accessHelper';
import { authApi } from '@/api/api';

export const LoginPage = () => {
  const navigate = useNavigate();

  // login page shouldn't be accessible for an authenticated user
  useEffect(() => {
    if (!accessExpired()) {
      navigate('/');
    }
  });

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').max(100, 'Email must be at most 100 characters'),
    password: Yup.string().required('Password is required'),
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: LoginFormType) => {
    setIsLoading(true);
    // Handle form submission here
    authApi
      .authControllerLogin(values)
      .then((response) => {
        if (!response.data.content) return;
        const content = response.data.content as { accessToken: string };
        if (!content || !content.accessToken) return;

        setAccessExpiration();
        navigate('/dashboard');
      })
      .catch(() => {
        setError('Wrong username or password');
      })
      .finally(() => setIsLoading(false));
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
                username: '',
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
                      isLoading={isLoading}
                      loadingText={'Submitting'}
                    >
                      Login
                    </Button>
                  </Stack>
                  {error ? (
                    <Alert status={'error'}>
                      <AlertIcon />
                      {error}
                    </Alert>
                  ) : null}
                </Stack>
              </Form>
            </Formik>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
