export type ApiConfigType = {
  env?: Record<string, string>;
};

export type ConfigType = {
  env?: EnvVariableType[];
};

export type EnvVariableType = {
  envKey: string;
  value: string;
};
