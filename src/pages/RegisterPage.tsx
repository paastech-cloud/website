import { RegisterFormType } from '@/typings/form.type';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const RegisterPage = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .nullable()
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values: RegisterFormType) => {
    // Handle form submission here
    console.log(values);
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
                    >
                      Create
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
