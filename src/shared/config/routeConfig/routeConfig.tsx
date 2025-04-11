import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',

  // last
  NOT_FOUND = 'not_found',
}

export const RouteUrls: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  // last
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: AppRouteProps[] = [
  {
    path: RouteUrls.home,
    element: <HomePage />,
  },
  {
    path: RouteUrls.about,
    element: <AboutPage />,
  },
  {
    path: RouteUrls.profile,
    element: <ProfilePage />,
    authOnly: true,
  },

  // last
  {
    path: RouteUrls.not_found,
    element: <NotFoundPage />,
  },
];
