import axiosBackendClient, { axiosBaseUrl } from './axios-client';
import { AuthApi, Configuration, ProjectsApi, SshKeysApi, UsersApi } from './generated';

export const getConfig = (): Configuration => {
  return {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  };
};

// Add any new controller's API here:
export const authApi = new AuthApi(getConfig(), axiosBaseUrl, axiosBackendClient);
export const projectsApi = new ProjectsApi(getConfig(), axiosBaseUrl, axiosBackendClient);
export const usersApi = new UsersApi(getConfig(), axiosBaseUrl, axiosBackendClient);
export const sshKeysApi = new SshKeysApi(getConfig(), axiosBaseUrl, axiosBackendClient);
