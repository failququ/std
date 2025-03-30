import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home-page');
  return (
    <div>
      {t('title')}
    </div>
  );
};

export default memo(HomePage);
