import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-icon.svg';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  text?: string;
}

const Code: FC<CodeProps> = (props) => {
  const { className, text } = props;

  const handleCopy = useCallback(() => {
    if (text) navigator.clipboard.writeText(text);
  }, [text]);

  if (!text) return null;
  return (
    <pre className={classNames(styles.code, className)}>
      <Button onClick={handleCopy} theme="clean" className={styles.copyBtn}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};

export default memo(Code);
