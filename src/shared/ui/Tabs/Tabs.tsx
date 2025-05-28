import classNames from 'classnames';

import type { FC, ReactNode } from 'react';
import { memo, useCallback } from 'react';
import { Card } from '../Card';
import { CardTheme } from '../Card/Card';
import styles from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick?: (tab: TabItem) => void;
}

const Tabs: FC<TabsProps> = (props) => {
  const {
    className, tabs, value, onTabClick,
  } = props;

  const handleClick = useCallback((tab: TabItem) => () => {
    onTabClick?.(tab);
  }, [onTabClick]);

  return (
    <div className={classNames(styles.tabs, className)}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={classNames(styles.tab)}
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          onClick={handleClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export default memo(Tabs);
