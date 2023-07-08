import { To } from 'react-router';
import { ReactElement } from 'react';

export type LinkType = {
  title: string;
  link: To;
};

export type BreadcrumbType = {
  title: string;
  url?: string;
  icon?: ReactElement;
};
