import { getRouteArticleCreate } from '@/shared/config/routeConfig/routeConfig';

export function getNavbarLinksConfig(lang: string): { to: string; text: string }[] {
  return [
    {
      to: getRouteArticleCreate(),
      text: lang === 'EN' ? 'Create article' : 'Создать статью',
    },
  ];
}
