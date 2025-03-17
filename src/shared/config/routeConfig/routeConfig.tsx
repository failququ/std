import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
}

export const RouteUrls: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
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
];
