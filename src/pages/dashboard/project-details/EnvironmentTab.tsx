import { useCallback, useState } from 'react';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { FaPlus, FaSave } from 'react-icons/fa';
import { EnvVariableInput } from '@components/dashboard/EnvVariableInput';
import { ProjectDetailsTabProps } from '@/typings/project-details-tab.type';
import { ConfigType, EnvVariableType } from '@/typings/config.type';

const appConfig: ConfigType = {
  env: [
    { envKey: 'KEY_A', value: 'VALUE_A' },
    { envKey: 'KEY_B', value: 'VALUE_B' },
  ],
};

type Vars = EnvVariableType & { index: number };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EnvironmentTab = (props: ProjectDetailsTabProps) => {
  const [envVars, setEnvVars] = useState<Vars[]>(appConfig.env.map((envVar, i) => ({ ...envVar, index: i })));

  const saveEnvVars = useCallback(() => {
    const sanitizedVars = envVars.filter((envVar) => envVar.envKey !== '');
    console.log(sanitizedVars);
    setEnvVars(sanitizedVars);
  }, [envVars, setEnvVars]);

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
        <EnvVariableInput key={i} index={i} envKey={envVar.envKey} value={envVar.value} onDelete={deleteEnvVar} onChange={updateEnvVar} />
      ))}
    </Stack>
  );
};
