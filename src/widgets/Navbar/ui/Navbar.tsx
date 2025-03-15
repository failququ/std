import { useTheme } from "app/providers/ThemeProvider";
import classNames from "classnames";
import { FC } from "react";
import UILink from "shared/ui/UILink/UILink";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <div className={classNames(styles.navbar, className)}>
      <div>Logo</div>
      <div className={styles.links}>
        <UILink to="/">Home</UILink>
        <UILink theme="secondary" to="/about">About</UILink>
      </div>
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default Navbar;