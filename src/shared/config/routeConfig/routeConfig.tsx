import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
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
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',

  // last
  NOT_FOUND = 'not_found',
}

export const RouteUrls: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id
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
  {
    path: RouteUrls.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: `${RouteUrls.articles}/:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // last
  {
    path: RouteUrls.not_found,
    element: <NotFoundPage />,
  },
];
