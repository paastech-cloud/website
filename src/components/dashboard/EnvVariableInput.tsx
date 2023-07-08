import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Box, FormControl, FormErrorMessage, HStack, IconButton, Input, Text, Tooltip } from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { EnvVariableType } from '@/typings/config.type';

type EnvVariableInputProps = EnvVariableType & {
  index: number;
  onDelete?: (index: number) => void;
  onChange?: (index: number, envVar: EnvVariableType) => void;
  error?: string;
};

export const EnvVariableInput = (props: EnvVariableInputProps) => {
  const [envKey, setEnvKey] = useState(props.envKey);
  const [envValue, setEnvValue] = useState(props.value);

  useEffect(() => {
    if (undefined === props.onChange) return;
    props.onChange(props.index, { envKey, value: envValue });
  }, [envKey, envValue, props.index]);

  const onChangeEnvKey = useCallback((e: ChangeEvent<HTMLInputElement>) => setEnvKey(e.target.value), []);
  const onChangeEnvValue = useCallback((e: ChangeEvent<HTMLInputElement>) => setEnvValue(e.target.value), []);

  return (
    <Box>
      <Form>
        <FormControl isInvalid={!!props.error}>
          <HStack spacing={4}>
            <Input autoComplete={'off'} required placeholder={'KEY'} size={'lg'} value={envKey} onChange={onChangeEnvKey} />
            <Text as={'span'}>=</Text>
            <Input autoComplete={'off'} placeholder={'VALUE'} size={'lg'} value={envValue} onChange={onChangeEnvValue} />

            <Tooltip label={'Delete'}>
              <IconButton
                colorScheme={'red'}
                aria-label={'Save'}
                icon={<FiTrash2 />}
                size={'lg'}
                onClick={() => props.onDelete && props.onDelete(props.index)}
              />
            </Tooltip>
          </HStack>
          <FormErrorMessage>{props.error}</FormErrorMessage>
        </FormControl>
      </Form>
    </Box>
  );
};
