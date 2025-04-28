import classNames from 'classnames';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/addNewComment';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RouteUrls } from 'shared/config/routeConfig/routeConfig';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Button from 'shared/ui/Button/Button';
import Page from 'shared/ui/Page/Page';
import Text from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles-page');

  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const handleBackToList = useCallback(() => {
    navigate(RouteUrls.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    // @ts-ignore
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(fetchCommentByArticleId(id));
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
        <Button theme="outline" onClick={handleBackToList}>
          {t('details-page.back-to-articles')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={styles.commentsTitle} title={t('details-page.comments.title')} />
        <AddNewCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
