import classNames from "classnames";

import styles from "./LangSwitcherItem.module.scss";

import type { FC } from "react";
import Button from "shared/ui/Button/Button";

interface LangSwitcherItemProps {
  className?: string;
  language: string
  isActive?: boolean
  onClick?: () => void
}

  const LangSwitcherItem: FC<LangSwitcherItemProps> = (props) => {
  const { className, language, isActive, onClick } = props;
  const handleClick = () => {
    onClick?.()
  }

    return (
      <Button onClick={handleClick} theme="clean" className={classNames(styles.item, className, {
        [styles.active]: isActive
      })}>
        {language}
      </Button>
    );
  };

export default LangSwitcherItem;