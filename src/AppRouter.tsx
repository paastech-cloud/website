import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import { Navbar } from '@components/Navbar';

export const AppRouter = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={'/'} element={<AppLayout/>}></Route>
      </Route>,
    ),
  );
};

const AppLayout = () => {
  return (
    <>
      <Navbar links={[
        {
          title: 'Home',
          link: 'home',
        },
        {
          title: 'Docs',
          link: 'docs',
        },
        {
          title: 'Status',
          link: 'home',
        },
        {
          title: 'Community',
          link: 'community',
        },
      ]}/>

      <Outlet/>
    </>
  );
};
