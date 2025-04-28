import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Page from 'widgets/Page/Page';

const HomePage = () => {
  const { t } = useTranslation('home-page');
  return (
    <Page>
      {t('title')}
    </Page>
  );
};

export default memo(HomePage);
