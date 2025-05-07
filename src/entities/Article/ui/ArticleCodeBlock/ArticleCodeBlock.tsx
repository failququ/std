import type { FC } from 'react';
import { memo } from 'react';
import Code from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockProps> = (props) => {
  const { className, block } = props;
  return (
    <div className={className}>
      <Code text={block.code} />
    </div>
  );
};

export default memo(ArticleCodeBlockComponent);
