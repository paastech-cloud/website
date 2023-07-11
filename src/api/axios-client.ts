import axios, { AxiosRequestConfig } from 'axios';

export const axiosBaseUrl = import.meta.env.VITE_API_BASE ?? 'http://localhost:3000';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: axiosBaseUrl,
  withCredentials: true,
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
