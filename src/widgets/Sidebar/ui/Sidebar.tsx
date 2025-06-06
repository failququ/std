import classNames from 'classnames';

import {
  memo,
  useCallback, useMemo, useState, type FC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserData } from '@/entities/User';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
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

  const userData = useSelector(getUserData);

  const sidebarLinks = useMemo(() => getSidebarLinksConfig(i18n.language, userData!).map((link) => (
    <SidebarLinkItem
      key={link.path}
      to={link.path}
      icon={link.icon}
      text={link.text}
      isCollapsed={collapsed}
      authOnly={link.authOnly}
    />
  )), [collapsed, i18n.language, userData]);

  const handleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <aside
      className={classNames(styles.sidebar, className, {
        [styles.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <VStack gap="8">
        {sidebarLinks}
      </VStack>
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
    </aside>
  );
};

export default memo(Sidebar);
