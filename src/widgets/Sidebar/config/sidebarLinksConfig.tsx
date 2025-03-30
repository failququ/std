import AboutIcon from 'shared/assets/icons/about-icon.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-icon.svg';
import { RouteUrls } from 'shared/config/routeConfig/routeConfig';

export function getSidebarLinksConfig(lang:string) {
  return [
    {
      path: RouteUrls.home,
      text: lang === 'EN' ? 'Home' : 'Главная',
      icon: <HomeIcon />,
    },
    {
      path: RouteUrls.about,
      text: lang === 'EN' ? 'About' : 'О нас',
      icon: <AboutIcon />,
    },
    {
      path: RouteUrls.profile,
      text: lang === 'EN' ? 'Profile' : 'Профиль',
      icon: <ProfileIcon />,
    },
  ];
}
