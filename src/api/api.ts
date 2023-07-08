import { getAccessToken } from '@/lib/accessHelper';
import axiosBackendClient, { axiosBaseUrl } from './axios-client';
import { AuthApi, Configuration, ProjectsApi, UsersApi } from './generated';

export const authApi = new AuthApi(
  {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  },
  axiosBaseUrl,
  axiosBackendClient,
);

export const getConfig = (): Configuration => {
  const configuration: Configuration = {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  };
  const token = getAccessToken();
  if (token) {
    configuration.accessToken = token.accessToken;
  }
  return configuration;
};

// Add any new controller's API here:
export let projectsApi = new ProjectsApi(getConfig(), axiosBaseUrl, axiosBackendClient);
export let usersApi = new UsersApi(getConfig(), axiosBaseUrl, axiosBackendClient);

export const initializeApis = () => {
  projectsApi = new ProjectsApi(getConfig(), axiosBaseUrl, axiosBackendClient);
  usersApi = new UsersApi(getConfig(), axiosBaseUrl, axiosBackendClient);
};
