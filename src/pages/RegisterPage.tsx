import { authApi } from '@/api/api';
import { PASSWORD_REGEX, USERNAME_REGEX } from '@/helper/constants';
import { accessExpired } from '@/helper/accessHelper';
import { RegisterFormType } from '@/typings/form.type';
import { Alert, AlertIcon, Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

export const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessExpired()) {
      navigate('/');
    }
  });

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username must be at most 30 characters')
      .matches(USERNAME_REGEX, 'Username must start with a letter and can only contain letters, hyphens and underscores'),
    email: Yup.string().email('Invalid email address').max(100, 'Email must be at most 100 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(255, 'Password must be at most 255 characters')
      .matches(PASSWORD_REGEX, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .nullable()
      .required('Confirm Password is required'),
  });

  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: RegisterFormType) => {
    setIsLoading(true);
    // Handle form submission here
    authApi
      .authControllerRegister(values)
      .then((response) => {
        if (response?.data) {
          setStatus({ success: true, message: 'Please verify your email to validate your account' });
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          setStatus({ success: false, message: err?.response?.data?.message });
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Flex align={'center'} justify={'stretch'} mt={10}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'md'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create an account
          </Heading>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                acceptTerms: true,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Stack spacing={4} color={'black'}>
                  <FormControl isRequired id={'username'}>
                    <FormLabel>Username</FormLabel>
                    <Field type={'text'} name={'username'} autoComplete={'username'} as={Input} />
                    <ErrorMessage name={'username'} />
                  </FormControl>
                  <FormControl isRequired id={'email'}>
                    <FormLabel>Email address</FormLabel>
                    <Field type={'email'} name={'email'} autoComplete={'email'} as={Input} />
                    <ErrorMessage name={'email'} />
                  </FormControl>
                  <FormControl isRequired id={'password'}>
                    <FormLabel>Password</FormLabel>
                    <Field type={'password'} name={'password'} autoComplete={'new-password'} as={Input} />
                    <ErrorMessage name={'password'} />
                  </FormControl>
                  <FormControl isRequired id={'confirmPassword'}>
                    <FormLabel>Confirm password</FormLabel>
                    <Field type={'password'} name={'confirmPassword'} autoComplete={'confirm-password'} as={Input} />
                    <ErrorMessage name={'confirmPassword'} />
                  </FormControl>
                  <FormControl isRequired>
                    <Checkbox>I accept the terms and conditions</Checkbox>
                  </FormControl>
                  <Stack spacing={10}>
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
                      Create
                    </Button>
                  </Stack>
                  {status ? (
                    <Alert status={status.success ? 'success' : 'error'}>
                      <AlertIcon />
                      {status.message}
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
