import classNames from 'classnames';

import { memo, type FC } from 'react';
import Text from '@/shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockProps> = (props) => {
  const { className, block } = props;
  return (
    <div className={classNames(styles.block, className)}>
      <img className={styles.image} src={block.src} alt={block.title} />
      {block.title && <Text className={styles.title} description={block.title} />}
    </div>
  );
};

export default memo(ArticleImageBlockComponent);
