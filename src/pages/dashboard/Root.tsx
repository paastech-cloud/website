import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import { NavbarLogged } from '@components/NavbarLogged';
import { themeExtensions } from '@/theme';

export const Root = () => {
  return (
    <>
      <header css={headerCss}>
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
  background-color: ${themeExtensions.colors.brand.bg_gray};
`;
