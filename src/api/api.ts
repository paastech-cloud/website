// import { getAccessToken } from '@/lib/accessHelper';
import axiosBackendClient, { axiosBaseUrl } from './axios-client';
import { AuthApi, Configuration, ProjectsApi, UsersApi } from './generated';

export const getConfig = (): Configuration => {
  const configuration: Configuration = {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  };
  return configuration;
};

// Add any new controller's API here:
export const authApi = new AuthApi(getConfig(), axiosBaseUrl, axiosBackendClient);
export const projectsApi = new ProjectsApi(getConfig(), axiosBaseUrl, axiosBackendClient);
export const usersApi = new UsersApi(getConfig(), axiosBaseUrl, axiosBackendClient);
