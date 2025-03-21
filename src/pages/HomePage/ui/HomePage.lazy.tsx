import { lazy } from 'react';

export const HomePageLazy = lazy(() => new Promise((res) =>
  // @ts-ignore
  // eslint-disable-next-line no-promise-executor-return, implicit-arrow-linebreak
  setTimeout(() => res(import('./HomePage')), 1500)));
