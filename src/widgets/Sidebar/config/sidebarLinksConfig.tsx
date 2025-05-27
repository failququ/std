import { User } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article-icon.svg';
import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/constants/router';

export function getSidebarLinksConfig(lang:string, userData: User) {
  return [
    {
      path: getRouteMain(),
      text: lang === 'EN' ? 'Home' : 'Главная',
      icon: <HomeIcon />,
      authOnly: false,
    },
    {
      path: getRouteAbout(),
      text: lang === 'EN' ? 'About' : 'О нас',
      icon: <AboutIcon />,
      authOnly: false,
    },
    {
      path: getRouteProfile(userData?.id),
      text: lang === 'EN' ? 'Profile' : 'Профиль',
      icon: <ProfileIcon />,
      authOnly: true,
    },
    {
      path: getRouteArticles(),
      text: lang === 'EN' ? 'Articles' : 'Статьи',
      icon: <ArticleIcon />,
      authOnly: true,
    },
  ];
}
