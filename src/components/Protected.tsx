import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { accessExpired } from '@/lib/accessHelper';

type Props = {
  children: ReactNode;
};

export const Protected = ({ children }: Props) => {
  if (accessExpired()) {
    return <Navigate to={'/login'} replace />;
  }

  return children;
};
