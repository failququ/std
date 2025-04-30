import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ViewsIcon from 'shared/assets/icons/eye-icon.svg';
import { RouteUrls } from 'shared/config/routeConfig/routeConfig';
import { transformDate } from 'shared/lib/helpers/dateHelper';
import { useHover } from 'shared/lib/hooks/useHover';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button from 'shared/ui/Button/Button';
import Card from 'shared/ui/Card/Card';
import Icon from 'shared/ui/Icon/Icon';
import Text from 'shared/ui/Text/Text';
import { Article, ArticlesView, ArticleTextBlock } from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlock/ArticleTextBlockComponent';
import styles from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view: ArticlesView;
}

const ArticlesListItem: FC<ArticlesListItemProps> = (props) => {
  const { className, article, view } = props;

  const { t } = useTranslation('articles-page');
  const navigate = useNavigate();

  const [isHovered, hoverBind] = useHover();

  const onOpenArticle = useCallback(() => {
    navigate(`${RouteUrls.article_details}/${article._id}`);
  }, [navigate, article._id]);

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
      <div className={classNames(styles.item, className, styles[view])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <div className={styles.userInfo}>
              <Avatar size={30} src={article.user.avatar} />
              <Text description={article.user.username} className={styles.username} />
            </div>
            <Text description={transformDate(article.createdAt)} className={styles.date} />
          </div>
          <Text className={styles.title} title={article.title} />
          {renderTypes(' ')}
          <img className={styles.image} src={article.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
          )}
          <div className={styles.articleFooter}>
            <Button theme="outline" onClick={onOpenArticle}>
              {t('articles-page.article-item.read-more')}
            </Button>
            {renderViews()}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div {...hoverBind} className={classNames(styles.item, className, styles[view])}>
      <Card className={styles.card} onClick={onOpenArticle}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={article.img} alt={article.title} />
          <Text className={styles.date} description={transformDate(article.createdAt)} />
        </div>
        <div className={styles.infoWrapper}>
          {renderTypes(', ')}
          {renderViews()}
        </div>
        <Text description={article.title} className={styles.title} descriptionCn={styles.titleCn} />
        <Text description={article.subtitle} className={styles.title} descriptionCn={styles.titleCn} />
      </Card>
    </div>
  );
};

export default memo(ArticlesListItem);
