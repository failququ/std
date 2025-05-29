import classNames from 'classnames';

import type { FC, RefObject, UIEvent } from 'react';
import { memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getScrollDataByPath, scrollActions } from '@/features/saveScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { TestProps } from '@/shared/types/tests';
import { Text } from '@/shared/ui/Text';
import styles from './Page.module.scss';

interface PageProps extends TestProps {
  className?: string;
  children?: React.ReactNode;
  onIntersection?: () => void;
  error?: string;
}

const Page: FC<PageProps> = (props) => {
  const {
    className, children, onIntersection, error, 'data-testid': dataTestId,
  } = props;

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const pageScroll = useSelector((state: StateSchema) => getScrollDataByPath(state, pathname));

  const wrapperRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useInfiniteScroll({ callback: onIntersection, triggerRef, wrapperRef });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 700);

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = pageScroll;
  });

  if (error) {
    return (
      <main className={classNames(styles.page, className, styles.error)}>
        <Text theme="error" title={error} />
      </main>
    );
  }

  return (
    <main
      ref={wrapperRef}
      className={classNames(styles.page, className)}
      onScroll={handleScroll}
      data-testid={dataTestId ?? 'Page'}
    >
      {children}
      <div ref={triggerRef} />
    </main>
  );
};

export default memo(Page);
