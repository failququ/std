import classNames from 'classnames';

import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { memo, type FC } from 'react';
import Text from 'shared/ui/Text/Text';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockProps> = (props) => {
  const { className, block } = props;
  return (
    <div className={classNames(styles.block, className)}>
      {block.title && <Text className={styles.title} title={block.title} />}
      {block.paragraphs.map((paragraph) => (
        <Text className={styles.paragraph} key={paragraph} description={paragraph} />
      ))}
    </div>
  );
};

export default memo(ArticleTextBlockComponent);
