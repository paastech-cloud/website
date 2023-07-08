import { usersApi } from '@/api/api';
import { useState, useEffect } from 'react';
import { toUser, User } from './user';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  const getAuthenticatedUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
      usersApi
        .usersControllerGetProfile()
        .then((response) => {
          resolve(toUser(response));
        })
        .catch(() => {
          reject(null);
        });
    });
  };

  useEffect(() => {
    async function getUserDetails() {
      getAuthenticatedUser()
        .then((user) => {
          setUser(user);
        })
        .catch();
    }
    getUserDetails();
  }, []);

  return user;
}
