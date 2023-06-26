import { Outlet } from 'react-router-dom';
import { NavbarLogged } from '@components/NavbarLogged';
import { css } from '@emotion/react';
import { themeExtensions } from '@/theme';

export const Root = () => {
  return (
    <>
      <header className={'logged'} css={headerCss}>
        <NavbarLogged logoLink={{ title: 'PaaSTech', link: '/dashboard' }} />
      </header>

      <main css={mainCss}>
        <Outlet />
      </main>
    </>
  );
};

const headerCss = css`
  background-color: ${themeExtensions.colors.brand.light_black};
`;

const mainCss = css`
  background-color: #fff;
`;
