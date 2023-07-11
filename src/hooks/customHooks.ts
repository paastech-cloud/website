import { usersApi } from '@/api/api';
import { useState, useEffect } from 'react';
import { accessExpired } from '@/helper/accessHelper';
import { UserType } from '@/typings/user.type';

export function useUser() {
  const [user, setUser] = useState<UserType | null>(null);

  const getAuthenticatedUser = (): Promise<UserType | null> => {
    if (accessExpired()) {
      return (async () => null)();
    }

    return usersApi
      .usersControllerGetProfile()
      .then((response) => {
        if (!response.data) return null;

        const user = response.data.content as UserType;
        if (!user || !user.username) return null;

        return {
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
        };
      })
      .catch(() => null);
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
