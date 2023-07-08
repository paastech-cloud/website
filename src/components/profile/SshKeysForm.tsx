import { Field, Form, Formik } from 'formik';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react';
import sshTextareaPlaceholder from '@assets/txt/ssh-textarea-placeholder.txt?raw';
import * as Yup from 'yup';

type SshKeysFormProps = {
  onSubmit?: (name: string, value: string) => void;
};

export const SshKeysForm = (props: SshKeysFormProps) => {
  const validationSchema = Yup.object({
    title: Yup.string(),
    publicKey: Yup.string().required('A value for the key is required'),
  });

  return (
    <Formik
      initialValues={{
        title: '',
        publicKey: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        if (undefined === props.onSubmit) return;
        props.onSubmit(values.title, values.publicKey);
        actions.resetForm();
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <Stack spacing={4} fontSize={'lg'} alignItems={'start'}>
            <FormControl id={'title'} isInvalid={!!errors.title && touched.title}>
              <FormLabel>Title</FormLabel>
              <Field as={Input} name={'title'} maxW={'440px'} />
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            </FormControl>
            <FormControl id={'publicKey'} isInvalid={!!errors.publicKey && touched.publicKey} isRequired>
              <FormLabel>Key</FormLabel>
              <Field as={Textarea} name={'publicKey'} placeholder={sshTextareaPlaceholder} maxH={'200px'} />
              <FormErrorMessage>{errors.publicKey}</FormErrorMessage>
            </FormControl>
            <Button colorScheme={'green'} type={'submit'}>
              Add SSH key
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
