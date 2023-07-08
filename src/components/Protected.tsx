import { accessExpired } from '@/lib/accessHelper';
import { Navigate } from 'react-router-dom';
type Props = {
  children: JSX.Element;
};
export const Protected = ({ children }: Props): JSX.Element => {
  if (accessExpired()) {
    return <Navigate to={'/login'} replace />;
  }
  return children;
};
