import { PASSWORD_REGEX, USERNAME_REGEX } from '@/helper/constants';
import { RegisterFormType } from '@/typings/form.type';
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const RegisterPage = () => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username must be at most 30 characters')
      .matches(USERNAME_REGEX, 'Username must start with a letter and can only contain letters, digits and underscores'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address').required('Email is required').max(100, 'Email must be at most 100 characters'),
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
