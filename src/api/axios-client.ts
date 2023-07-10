import axios, { AxiosRequestConfig } from 'axios';

const port = import.meta.env.VITE_API_PORT ? ':' + import.meta.env.VITE_API_PORT : '';
export const axiosBaseUrl = `${import.meta.env.VITE_API_SCHEMA}://${import.meta.env.VITE_API_HOSTNAME}${port}`;

export const axiosConfig: AxiosRequestConfig = {
  baseURL: axiosBaseUrl,
  withCredentials: true,
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
