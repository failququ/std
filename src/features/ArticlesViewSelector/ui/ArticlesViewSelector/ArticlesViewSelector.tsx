import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { ArticlesView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/list-icon.svg';
import TiledIcon from '@/shared/assets/icons/tiled-icon.svg';
import Button from '@/shared/ui/Button/Button';
import Icon from '@/shared/ui/Icon/Icon';
import styles from './ArticlesViewSelector.module.scss';

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticlesView;
  onViewChange: (view: ArticlesView) => void;
}

const viewTypes = [
  {
    view: ArticlesView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticlesView.BIG,
    icon: ListIcon,
  },
];

const ArticlesViewSelector: FC<ArticlesViewSelectorProps> = (props) => {
  const { className, view, onViewChange } = props;

  const onViewClick = (newView: ArticlesView) => () => onViewChange(newView);

  return (
    <div className={classNames(styles.selector, className)}>
      {viewTypes.map((type) => (
        <Button
          theme="clean"
          key={type.view}
          onClick={onViewClick(type.view)}
        >
          <Icon Svg={type.icon} className={classNames(styles.icon, { [styles.active]: view === type.view })} />
        </Button>
      ))}
    </div>
  );
};

export default memo(ArticlesViewSelector);
