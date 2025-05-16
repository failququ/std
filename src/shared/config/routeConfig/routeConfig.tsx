import { UserRole } from 'entities/User';
import { AboutPage } from 'pages/AboutPage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { EditArticlePage } from 'pages/EditArticlePage';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
}

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}

export const RouteUrls: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
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
    path: `${RouteUrls.profile}`,
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: `${RouteUrls.profile}/:id`,
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
  {
    path: `${RouteUrls.article_create}`,
    element: <EditArticlePage />,
    authOnly: true,
  },
  {
    path: `${RouteUrls.article_edit}`,
    element: <EditArticlePage />,
    authOnly: true,
  },
  {
    path: `${RouteUrls.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  {
    path: RouteUrls.forbidden,
    element: <ForbiddenPage />,
  },
  // last
  {
    path: RouteUrls.not_found,
    element: <NotFoundPage />,
  },
];
