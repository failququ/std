import classNames from 'classnames';

import { ArticleDetails, ArticlesList, ArticlesView } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/addNewComment';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Text from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slice';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice';
import ArticleDetailsHeader from '../ArticleDetailsHeader/ArticleDetailsHeader';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles-page');

  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback((text: string) => {
    // @ts-ignore
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(fetchCommentByArticleId(id));
    // @ts-ignore
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <div className={classNames(styles.page, className)}>
        {t('details-page.article-not-found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(styles.page, className)}>
        <ArticleDetailsHeader />
        <ArticleDetails id={id} />
        <Text className={styles.commentsTitle} title={t('details-page.recommends.title')} />
        <ArticlesList
          className={styles.recommendations}
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticlesView.SMALL}
          target="_blank"
        />
        <Text className={styles.commentsTitle} title={t('details-page.comments.title')} />
        <AddNewCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
