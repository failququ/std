import AboutIcon from 'shared/assets/icons/about-icon.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';

export function getSidebarLinksConfig(lang:string) {
  return [
    {
      path: '/',
      text: lang === 'en' ? 'Home' : 'Главная',
      icon: <HomeIcon />,
    },
    {
      path: '/about',
      text: lang === 'en' ? 'About' : 'О нас',
      icon: <AboutIcon />,
    },
  ];
}
