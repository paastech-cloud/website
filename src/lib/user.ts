import { AxiosResponse } from 'axios';

export interface User {
  username: string;
  email: string;
  isAdmin: boolean;
}

export const toUser = (response: AxiosResponse): User | null => {
  if (response.data && response.data.username) {
    return {
      username: response.data['username'],
      email: response.data['email'],
      isAdmin: response.data['isAdmin'],
    };
  }
  return null;
};
