import { AccessToken } from '@/api/generated';

export const setAccessToken = (accessToken: AccessToken) => {
  localStorage.setItem('accessToken', accessToken.accessToken);
  const date = new Date();
  // adding 6 hours minus 10 sec
  date.setTime(date.getTime() + 6 * 60 * 60 * 1000 - 10000);
  localStorage.setItem('accessExpiration', date.toISOString());
};

export const getAccessToken = (): AccessToken | null => {
  const token = localStorage.getItem('accessToken');
  return !token ? null : { accessToken: token };
};

const getAccessExpiration = (): Date | null => {
  const expiryTime = localStorage.getItem('accessExpiration');
  return !expiryTime ? null : new Date(expiryTime);
};

export const accessExpired = (): boolean => {
  const expiryTime = getAccessExpiration();
  return !expiryTime || expiryTime <= new Date();
};

export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('accessExpiration');
};
