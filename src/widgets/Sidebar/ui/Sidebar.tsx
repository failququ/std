import classNames from 'classnames';

import { useState, type FC } from 'react';
import Button from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(styles.sidebar, className, {
        [styles.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <Button
        className={styles.toggle}
        onClick={handleCollapse}
        theme="clean"
        data-testid="sidebar-toggle"
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={classNames(styles.switchers, {
        [styles.collapsed]: collapsed,
      })}
      >
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
