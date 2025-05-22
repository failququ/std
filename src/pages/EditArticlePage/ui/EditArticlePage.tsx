import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import styles from './EditArticlePage.module.scss';

interface Props {
  className?: string;
}

const EditArticlePage: FC<Props> = (props) => {
  const { className } = props;

  const { id } = useParams();

  const isEdit = Boolean(id);

  return (
    <Page className={classNames(styles.page, className)}>
      {isEdit ? `Редактирование статьи c id: ${id}` : 'Создание статьи'}
    </Page>
  );
};

export default memo(EditArticlePage);
