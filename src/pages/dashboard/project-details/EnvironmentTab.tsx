import { useCallback, useState } from 'react';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { FaPlus, FaSave } from 'react-icons/fa';
import { EnvVariableInput } from '@components/dashboard/EnvVariableInput';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import { ConfigType, EnvVariableType } from '@/typings/config.type';
import { ValidationError } from 'yup';
import * as Yup from 'yup';

const appConfig: ConfigType = {
  env: [
    { envKey: 'KEY_A', value: 'VALUE_A' },
    { envKey: 'KEY_B', value: 'VALUE_B' },
  ],
};

type Vars = EnvVariableType & { index: number; error?: string };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EnvironmentTab = (props: ProjectDetailsTabProps) => {
  const [envVars, setEnvVars] = useState<Vars[]>(appConfig.env.map((envVar, i) => ({ ...envVar, index: i })));
  const validationSchema = Yup.object({
    envKey: Yup.string().required('An environment key is required').max(32, 'An environment key must be at most 32 characters'),
    envValue: Yup.string().max(2048, 'An environment value must be at most 2048 characters'),
  });

  // SAVE / ADD / DELETE / UPDATE callbacks
  const saveEnvVars = useCallback(async () => {
    // check each env variables
    for (const envVar of envVars) {
      try {
        await validationSchema.validate(envVar);
      } catch (e) {
        if (!(e instanceof ValidationError)) return;
        // send error to the corresponding input
        const error = e.errors.at(0);
        setEnvVars((prevEnvVars) => {
          const updatedEnvVars = [...prevEnvVars];
          updatedEnvVars[envVar.index] = { ...envVar, error: error };
          return updatedEnvVars;
        });
        return;
      }
    }
    console.log(envVars);
    setEnvVars(envVars);
  }, [envVars]);

  const addEnvVar = useCallback(() => {
    const lastEnv = envVars.at(-1);
    if (undefined === lastEnv || lastEnv.envKey === '') return;
    setEnvVars([...envVars, { index: envVars.length, envKey: '', value: '' }]);
  }, [envVars, setEnvVars]);

  const deleteEnvVar = useCallback(
    (index: number) => {
      const newEnvVars = envVars.filter((envVar) => envVar.index !== index);
      setEnvVars(newEnvVars);
    },
    [envVars, setEnvVars],
  );

  const updateEnvVar = useCallback(
    (index: number, envVar: EnvVariableType) => {
      setEnvVars((prevEnvVars) => {
        const updatedEnvVars = [...prevEnvVars];
        updatedEnvVars[index] = {
          ...envVar,
          index,
        };
        return updatedEnvVars;
      });
    },
    [setEnvVars],
  );

  return (
    <Stack spacing={6}>
      <Flex gap={4}>
        <Button colorScheme={'green'} leftIcon={<FaSave />} onClick={saveEnvVars}>
          Save
        </Button>
        <Button colorScheme={'blue'} alignSelf={'start'} leftIcon={<FaPlus />} onClick={addEnvVar}>
          Add a variable
        </Button>
      </Flex>
      {envVars.map((envVar, i) => (
        <EnvVariableInput
          key={i}
          index={i}
          envKey={envVar.envKey}
          value={envVar.value}
          error={envVar.error}
          onDelete={deleteEnvVar}
          onChange={updateEnvVar}
        />
      ))}
    </Stack>
  );
};
