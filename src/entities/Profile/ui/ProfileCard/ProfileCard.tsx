import classNames from 'classnames';

import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile';
import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Text from 'shared/ui/Text/Text';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const [editMode, setEditMode] = useState(false);
  const profileData = useSelector(getProfileData);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);
  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.header}>
        <Text title={t('card.header.title')} />
        <Button theme="outline" onClick={() => setEditMode(!editMode)}>
          {
          editMode ? t('card.header.edit.editOn') : t('card.header.edit.editOff')
          }
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          className={styles.dataField}
          variant={editMode ? 'default' : 'clean'}
          readOnly={!editMode}
          value={profileData?.firstName}
          label={t('card.data.firstName')}
        />
        <Input
          className={styles.dataField}
          variant={editMode ? 'default' : 'clean'}
          readOnly={!editMode}
          value={profileData?.lastName}
          label={t('card.data.lastName')}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
