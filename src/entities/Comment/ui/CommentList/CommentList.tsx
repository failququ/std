import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '@/shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = (props) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation('articles-page');

  return (
    <div className={classNames(styles.list, className)}>
      {comments?.length
        ? comments?.map((comment) => (
          <CommentCard
            key={comment.id}
            className={styles.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text description={t('details-page.comments.noData')} />}
    </div>
  );
};

export default memo(CommentList);
