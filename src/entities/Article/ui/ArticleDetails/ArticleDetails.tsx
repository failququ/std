import classNames from 'classnames';

import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { ArticleBlock } from 'entities/Article/model/types/article';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DateIcon from 'shared/assets/icons/calendar-icon.svg';
import ViewsIcon from 'shared/assets/icons/eye-icon.svg';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { transformDate } from 'shared/lib/helpers/dateHelper';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Avatar from 'shared/ui/Avatar/Avatar';
import Icon from 'shared/ui/Icon/Icon';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import Text, { TextSize } from 'shared/ui/Text/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import ArticleCodeBlockComponent from '../ArticleCodeBlock/ArticleCodeBlock';
import ArticleImageBlockComponent from '../ArticleImageBlock/ArticleImageBlock';
import ArticleTextBlockComponent from '../ArticleTextBlock/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const { className, id } = props;

  const { t } = useTranslation('articles-page');

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'IMAGE':
        return <ArticleImageBlockComponent className={styles.block} key={block.id} block={block} />;
      case 'TEXT':
        return <ArticleTextBlockComponent className={styles.block} key={block.id} block={block} />;
      case 'CODE':
        return <ArticleCodeBlockComponent className={styles.block} key={block.id} block={block} />;
      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(fetchArticleById(id));
  });

  let content;
  if (isLoading) {
    content = (
      <div className={styles.skeletonWrapper}>
        <Skeleton width={200} height={200} border="50%" />
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = <Text theme="error" title={t('details-page.error')} align="center" />;
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} alt={article?.title} />
        </div>
        <Text title={article?.title} description={article?.subtitle} size={TextSize.L} />
        <div className={styles.articleInfo}>
          <Icon Svg={ViewsIcon} />
          <Text description={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={DateIcon} />
          <Text description={transformDate(String(article?.createdAt))} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.article, className)}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
