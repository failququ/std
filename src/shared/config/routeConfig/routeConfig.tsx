import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RouteUrls: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: RouteUrls.home,
    element: <HomePage />,
  },
  {
    path: RouteUrls.about,
    element: <AboutPage />,
  },
  {
    path: RouteUrls.not_found,
    element: <NotFoundPage />,
  },
];
