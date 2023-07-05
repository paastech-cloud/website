import axios, { AxiosRequestConfig } from 'axios';

export const axiosBaseUrl = `${import.meta.env.VITE_API_SCHEMA}://${import.meta.env.VITE_API_HOSTNAME}:${import.meta.env.VITE_API_PORT}`;

export const axiosConfig: AxiosRequestConfig = {
  baseURL: axiosBaseUrl,
};

const axiosBackendClient = axios.create(axiosConfig);

export default axiosBackendClient;
