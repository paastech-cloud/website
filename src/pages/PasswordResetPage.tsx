import { Alert, AlertIcon, Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { authApi } from '@/api/api';
import { ErrorMessage, Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { PASSWORD_REGEX } from '@/helper/constants';
import { useParams } from 'react-router';

export const PasswordResetPage = () => {
  const { token } = useParams();

  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(255, 'Password must be at most 255 characters')
      .matches(PASSWORD_REGEX, 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
    passwordVerification: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .nullable()
      .required('Confirm Password is required'),
  });

  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = (values: { password: string; passwordVerification: string }) => {
    // Handle form submission here
    authApi
      .authControllerResetPassword(token || '', values)
      .then((response) => {
        const data = response.data as { message: string };
        if (data.message) {
          setStatus({ success: true, message: data.message });
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          setStatus({ success: false, message: err.response.data.message });
        }
      });
  };

  return (
    <>
      <Flex align={'center'} justify={'stretch'} mt={10}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} minW={'md'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Reset password
          </Heading>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} mt={8}>
            <Formik
              initialValues={{
                password: '',
                passwordVerification: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Stack spacing={4} color={'black'}>
                  <FormControl isRequired id={'password'}>
                    <FormLabel>New Password</FormLabel>
                    <Field type={'password'} name={'password'} autoComplete={'new-password'} as={Input} />
                    <ErrorMessage name={'password'} />
                  </FormControl>
                  <FormControl isRequired id={'passwordVerification'}>
                    <FormLabel>Confirm password</FormLabel>
                    <Field type={'password'} name={'passwordVerification'} autoComplete={'confirm-password'} as={Input} />
                    <ErrorMessage name={'passwordVerification'} />
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
                      Reset Password
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
