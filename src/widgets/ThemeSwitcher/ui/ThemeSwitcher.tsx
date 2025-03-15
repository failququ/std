import classNames from "classnames";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import styles from "./ThemeSwitcher.module.scss";

import { useTheme } from "app/providers/ThemeProvider";
import type { FC } from "react";
import Button from "shared/ui/Button/Button";

interface ThemeSwitcher {
  className?: string;
}

  const ThemeSwitcher: FC<ThemeSwitcher> = (props) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();

    return (
      <div className={classNames(styles.switcher, className)}>
        <Button theme="clean" onClick={toggleTheme}>
          {theme === "light" ? <DarkIcon /> : <LightIcon />}
        </Button>
      </div>
    );
  };

export default ThemeSwitcher;