import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about-page');
  return (
    <Page data-testid="AboutPage">
      {t('title')}
    </Page>
  );
};

export default memo(AboutPage);
