import axiosBackendClient, { axiosBaseUrl } from './axios-client';
import { AuthApi } from './generated';

export const authApi = new AuthApi(
  {
    basePath: axiosBaseUrl,
    isJsonMime: () => false,
  },
  axiosBaseUrl,
  axiosBackendClient,
);
