export const setAccessExpiration = () => {
  const date = new Date();
  // adding 6 hours minus 10 sec
  date.setTime(date.getTime() + 6 * 60 * 60 * 1000 - 10_000);
  localStorage.setItem('accessExpiration', date.toISOString());
};

const getAccessExpiration = (): Date | null => {
  const expiryTime = localStorage.getItem('accessExpiration');
  return !expiryTime ? null : new Date(expiryTime);
};

export const accessExpired = (): boolean => {
  const expiryTime = getAccessExpiration();
  return !expiryTime || expiryTime <= new Date();
};

export const removeAccessExpiration = () => {
  localStorage.removeItem('accessExpiration');
};
