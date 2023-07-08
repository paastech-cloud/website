import { AccessToken } from '@/api/generated';

export const setAccessToken = (accessToken: AccessToken) => {
  sessionStorage.setItem('accessToken', accessToken.accessToken);
  const date = new Date();
  // adding 6 hours minus 10 sec
  date.setTime(date.getTime() + 6 * 60 * 60 * 1000 - 10000);
  sessionStorage.setItem('accessExpiration', date.toISOString());
};

export const getAccessToken = (): AccessToken | null => {
  const token = sessionStorage.getItem('accessToken');
  return !token ? null : { accessToken: token };
};

const getAccessExpiration = (): Date | null => {
  const expiryTime = sessionStorage.getItem('accessExpiration');
  return !expiryTime ? null : new Date(expiryTime);
};

export const accessExpired = (): boolean => {
  const expiryTime = getAccessExpiration();
  return !expiryTime || expiryTime <= new Date();
};

export const removeAccessToken = () => {
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('accessExpiration');
};
