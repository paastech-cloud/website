import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { Navbar } from '@components/Navbar';
import { accessExpired } from '@/helper/accessHelper';
import { useUser } from '@/hooks/customHooks';

export const Root = () => {
  const authenticated = useUser() && !accessExpired();
  return (
    <>
      <header css={headerCss}>
        <Navbar
          logoLink={{ title: 'PaaSTech', link: '/' }}
          primaryLink={{
            title: !authenticated ? 'Login' : 'Dashboard',
            link: !authenticated ? '/login' : '/dashboard',
            icon: authenticated ? <MdSpaceDashboard /> : undefined,
          }}
          secondaryLink={!authenticated ? { title: 'Register', link: '/register' } : undefined}
          links={[
            {
              title: 'Home',
              link: '/',
            },
            {
              title: 'Docs',
              link: 'https://github.com/paastech-cloud/docs',
            },
            {
              title: 'GitHub',
              link: 'https://github.com/paastech-cloud',
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
