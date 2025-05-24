import type { FC } from 'react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '@/entities/Article';
import styles from './ArticleTypesTabs.module.scss';

interface ArticleTypesTabsProps {
  className?: string;
  value: ArticleType;
  onTabChange: (tab: TabItem) => void;
}

const ArticleTypesTabs: FC<ArticleTypesTabsProps> = (props) => {
  const { className, value, onTabChange } = props;

  const { t } = useTranslation('articles-page');

  const tabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('articles-page.filters.tabs.all'),
    },
    {
      value: ArticleType.IT,
      content: t('articles-page.filters.tabs.it'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('articles-page.filters.tabs.economics'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('articles-page.filters.tabs.science'),
    },
  ], [t]);

  return (
    <div className={className}>
      <Tabs
        className={styles.tabs}
        tabs={tabs}
        value={value}
        onTabClick={onTabChange}
      />
    </div>
  );
};

export default memo(ArticleTypesTabs);
