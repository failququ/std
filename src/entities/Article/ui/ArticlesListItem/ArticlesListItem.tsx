import classNames from 'classnames';

import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ViewsIcon from '@/shared/assets/icons/eye-icon.svg';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { transformDate } from '@/shared/lib/helpers/dateHelper';
import { useHover } from '@/shared/lib/hooks/useHover';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { UILink } from '@/shared/ui/UILink';
import { ArticlesView } from '../../model/const/const';
import { Article, ArticleTextBlock } from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlock/ArticleTextBlockComponent';
import styles from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view: ArticlesView;
  target?: HTMLAttributeAnchorTarget;
}

const ArticlesListItem: FC<ArticlesListItemProps> = (props) => {
  const {
    className, article, view, target,
  } = props;

  const { t } = useTranslation('articles-page');

  const [isHovered, hoverBind] = useHover();

  const renderTypes = (joinBy: string) => (
    <Text className={styles.types} description={article.type.join(joinBy)} />
  );

  const renderViews = () => (
    <>
      <Text description={String(article.views)} className={styles.views} />
      <Icon Svg={ViewsIcon} className={styles.icon} />
    </>
  );

  if (view === ArticlesView.BIG) {
    const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock;
    return (
      <div
        className={classNames(styles.item, className, styles[view])}
        data-testid="ArticlesListItem"
      >
        <Card className={styles.card}>
          <HStack justify="between" align="center">
            <HStack gap="4">
              <Avatar size={30} src={article.user.avatar} />
              <Text description={article.user.username} className={styles.username} />
            </HStack>
            <Text description={transformDate(article.createdAt)} className={styles.date} />
          </HStack>
          <Text className={styles.title} title={article.title} />
          {renderTypes(' ')}
          <AppImage
            className={styles.image}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width="100%" height={250} />}
          />
          {textBlock && (
            <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
          )}
          <HStack className={styles.articleFooter}>
            <UILink theme="clean" to={getRouteArticleDetails(article._id)} target={target}>
              <Button theme="outline">
                {t('articles-page.article-item.read-more')}
              </Button>
            </UILink>
            {renderViews()}
          </HStack>
        </Card>
      </div>
    );
  }

  return (
    <UILink
      to={getRouteArticleDetails(article._id)}
      className={classNames(styles.item, className, styles[view])}
      theme="clean"
      target={target}
      data-testid="ArticlesListItem"
      {...hoverBind}
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <AppImage
            className={styles.image}
            src={article.img}
            alt={article.title}
            fallback={<Skeleton width={200} height={200} />}
          />
          <Text className={styles.date} description={transformDate(article.createdAt)} />
        </div>
        <HStack className={styles.infoWrapper}>
          {renderTypes(', ')}
          {renderViews()}
        </HStack>
        <Text description={article.title} className={styles.title} descriptionCn={styles.titleCn} />
        <Text description={article.subtitle} className={styles.title} descriptionCn={styles.titleCn} />
      </Card>
    </UILink>
  );
};

export default memo(ArticlesListItem);
