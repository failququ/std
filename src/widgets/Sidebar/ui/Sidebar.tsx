import classNames from 'classnames';

import {
  memo,
  useCallback, useMemo, useState, type FC,
} from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { getSidebarLinksConfig } from '../config/sidebarLinksConfig';
import styles from './Sidebar.module.scss';
import { SidebarLinkItem } from './SidebarLinkItem';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { i18n } = useTranslation();

  const sidebarLinks = useMemo(() => getSidebarLinksConfig(i18n.language).map((link) => (
    <SidebarLinkItem
      key={link.path}
      to={link.path}
      icon={link.icon}
      text={link.text}
      isCollapsed={collapsed}
      authOnly={link.authOnly}
    />
  )), [collapsed, i18n.language]);

  const handleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <div
      className={classNames(styles.sidebar, className, {
        [styles.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <div className={classNames(styles.links, {
        [styles.collapsed]: collapsed,
      })}
      >
        {sidebarLinks}
      </div>
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

export default memo(Sidebar);
