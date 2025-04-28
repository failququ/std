import classNames from 'classnames';

import type { FC, RefObject } from 'react';
import { memo, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import Text from '../Text/Text';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: React.ReactNode;
  onIntersection?: () => void;
  error?: string;
}

const Page: FC<PageProps> = (props) => {
  const {
    className, children, onIntersection, error,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useInfiniteScroll({ callback: onIntersection, triggerRef, wrapperRef });

  if (error) {
    return (
      <section className={classNames(styles.page, className, styles.error)}>
        <Text theme="error" title={error} />
      </section>
    );
  }

  return (
    <section ref={wrapperRef} className={classNames(styles.page, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};

export default memo(Page);
