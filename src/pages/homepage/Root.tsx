import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';

export const Root = () => {
  return (
    <>
      <header css={headerCss}>
        <Navbar
          logoLink={{ title: 'PaaSTech', link: '/' }}
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

const headerCss = css`
  margin: 40px 45px;
`;
