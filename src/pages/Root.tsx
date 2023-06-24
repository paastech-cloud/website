import { Navbar } from '@components/Navbar';
import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <header>
        <Navbar
          primaryLink={{
            title: 'Login',
            link: '/login',
          }}
          secondaryLink={{
            title: 'Register',
            link: '/register',
          }}
          links={[
            {
              title: 'Home',
              link: '/',
            },
            {
              title: 'Docs',
              link: 'https://paastech-cloud.github.io/docs',
            },
            {
              title: 'Status',
              link: '/status',
            },
            {
              title: 'Community',
              link: '/community',
            },
          ]}
        />
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
};
