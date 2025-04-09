import classNames from 'classnames';

import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const setEditMode = useCallback((mode: boolean) => {
    dispatch(profileActions.setReadOnly(mode));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    // @ts-ignore
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.header, className)}>
      <div className={styles.header}>
        <Text title={t('header.title')} />
        <div className={styles.buttonsBlock}>
          {readonly ? (
            <Button theme="outline" onClick={() => setEditMode(false)}>
              { t('header.edit.edit')}
            </Button>
          ) : (
            <div className={styles.buttonsBlock}>
              <Button theme="outline" onClick={onSave}>
                { t('header.edit.save')}
              </Button>
              <Button theme="outline_red" onClick={onCancelEdit}>
                {t('header.edit.cancel')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageHeader;
