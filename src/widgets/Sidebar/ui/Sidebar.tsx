import classNames from "classnames";

import styles from "./Sidebar.module.scss";

import { useState, type FC } from "react";
import Button from "shared/ui/Button/Button";

interface SidebarProps {
  className?: string;
}

  const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(prev => !prev);
  }
    return (
      <div className={classNames(styles.sidebar, className, {
        [styles.collapsed]: collapsed
      })}>
        sidebar
        <Button className={styles.collapseBtn} onClick={handleCollapse} theme="clean">toggle</Button>
      </div>
    );
  };

export default Sidebar;