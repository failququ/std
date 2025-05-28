import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { AddNewCommentForm } from '@/features/addNewComment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Text } from '@/shared/ui/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleCommentsProps {
  className?: string;
  id: string;
}

const ArticleComments: FC<ArticleCommentsProps> = (props) => {
  const { className, id } = props;
  const { t } = useTranslation('articles-page');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback((text: string) => {
    // @ts-ignore
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(fetchCommentByArticleId(id));
  });

  return (
    <div className={classNames(className)}>
      <Text className="" title={t('details-page.comments.title')} />
      <AddNewCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </div>
  );
};

export default memo(ArticleComments);
