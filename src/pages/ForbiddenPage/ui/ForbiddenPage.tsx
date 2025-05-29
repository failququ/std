import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden-page');
  return (
    <Page data-testid="ForbiddenPage">
      {t('title')}
    </Page>
  );
};

export default memo(ForbiddenPage);
