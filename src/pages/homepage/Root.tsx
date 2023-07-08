import { css } from '@emotion/react';
import { accessExpired } from '@/lib/accessHelper';
import { useUser } from '@/lib/customHooks';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';

export const Root = () => {
  const authenticated = useUser() && !accessExpired();
  return (
    <>
      <header css={headerCss}>
        <Navbar
          logoLink={{ title: 'PaaSTech', link: '/' }}
          primaryLink={{
            title: (!authenticated  ? 'Login' : 'Profile'),
            link: (!authenticated ? '/login' : '/dashboard/profile'),
          }}
          secondaryLink={{
            title: (!authenticated  ? 'Register' : 'Dashboard'),
            link: (!authenticated ? '/register' : '/dashboard'),
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

const headerCss = css`
  margin: 40px 45px;
`;
