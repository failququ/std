import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types/sort';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import { ArticleSortField } from '../../model/types/article';
import styles from './ArticlesSortSelector.module.scss';

interface ArticlesSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticlesSortSelector: FC<ArticlesSortSelectorProps> = (props) => {
  const {
    className, sort, order, onChangeOrder, onChangeSort,
  } = props;

  const { t } = useTranslation('articles-page');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('articles-page.filters.asc'),
    },
    {
      value: 'desc',
      content: t('articles-page.filters.desc'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('articles-page.filters.byCreatedAt'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('articles-page.filters.byTitle'),
    },
    {
      value: ArticleSortField.VIEW,
      content: t('articles-page.filters.byView'),
    },
  ], [t]);

  return (
    <div className={classNames(styles.selector, className)}>
      <Select
        options={sortFieldOptions}
        label={t('articles-page.filters.sort')}
        onChange={onChangeSort}
        value={sort}
      />
      <Select
        options={orderOptions}
        label={t('articles-page.filters.by')}
        onChange={onChangeOrder}
        value={order}
      />
    </div>
  );
};

export default memo(ArticlesSortSelector);
