import AboutIcon from 'shared/assets/icons/about-icon.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';

export function getSidebarLinksConfig(lang:string) {
  return [
    {
      path: '/',
      text: lang === 'EN' ? 'Home' : 'Главная',
      icon: <HomeIcon />,
    },
    {
      path: '/about',
      text: lang === 'EN' ? 'About' : 'О нас',
      icon: <AboutIcon />,
    },
  ];
}
