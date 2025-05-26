import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { EditArticlePage } from '@/pages/EditArticlePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteProfile,
} from '@/shared/constants/router';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
}

export const routeConfig: AppRouteProps[] = [
  {
    path: getRouteMain(),
    element: <HomePage />,
  },
  {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  {
    path: getRouteArticleCreate(),
    element: <EditArticlePage />,
    authOnly: true,
  },
  {
    path: getRouteArticleEdit(':id'),
    element: <EditArticlePage />,
    authOnly: true,
  },
  {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN],
  },
  {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  // last
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
