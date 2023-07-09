import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { authApi } from '@/api/api';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export const PasswordRecoveryPage = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').max(100, 'Email must be at most 100 characters'),
  });

  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = (values: { email: string }) => {
    // Handle form submission here
    authApi
      .authControllerRequestPassword(values)
      .then(() => {
        setStatus({ success: true, message: 'Please verify your email to reset your password' });
      })
      .catch(() => {
        setStatus({ success: false, message: 'Something went wrong. Try again later.' });
      });
  };

  return (
    <>
      <Flex align={'center'} justify={'stretch'} mt={10}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'md'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Password recovery
          </Heading>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
            <Formik
              initialValues={{
                email: '',
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
                  <Stack spacing={10}>
                    <Button
                      type={'submit'}
                      bg={'brand.red'}
                      color={'white'}
                      _hover={{
                        bg: 'brand.red',
                      }}
                    >
                      Send email to reset password
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
