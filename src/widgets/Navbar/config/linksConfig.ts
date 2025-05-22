import { RouteUrls } from '@/shared/config/routeConfig/routeConfig';

export function getNavbarLinksConfig(lang: string): { to: string; text: string }[] {
  return [
    {
      to: RouteUrls.article_create,
      text: lang === 'EN' ? 'Create article' : 'Создать статью',
    },
  ];
}
