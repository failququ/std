import classNames from 'classnames';

import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from 'shared/ui/Avatar/Avatar';
import Input from 'shared/ui/Input/Input';
import Spinner from 'shared/ui/Spinner/Spinner';
import Text from 'shared/ui/Text/Text';
import type { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.card, className, styles.loading)}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.card, className, styles.error)}>
        <Text
          theme="error"
          description={t('errors.getProfile.description')}
          title={t('errors.getProfile.title')}
          align="center"
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.card, className)}>
      <div className={styles.data}>
        {data?.avatar && (
        <div className={styles.avatarWrapper}>
          <Avatar src={data.avatar} alt={t('card.data.avatar')} />
        </div>
        )}
        <Input
          className={styles.dataField}
          variant={readonly ? 'clean' : 'default'}
          readonly={readonly}
          value={data?.firstName}
          label={t('card.data.firstName')}
          onChange={onChangeFirstName}
        />
        <Input
          className={styles.dataField}
          variant={readonly ? 'clean' : 'default'}
          readonly={readonly}
          value={data?.lastName}
          label={t('card.data.lastName')}
          onChange={onChangeLastName}
        />
        <Input
          className={styles.dataField}
          variant={readonly ? 'clean' : 'default'}
          readonly={readonly}
          value={data?.age}
          label={t('card.data.age')}
          onChange={onChangeAge}
        />
        <Input
          className={styles.dataField}
          variant={readonly ? 'clean' : 'default'}
          readonly={readonly}
          value={data?.city}
          label={t('card.data.city')}
          onChange={onChangeCity}
        />
        <Input
          className={styles.dataField}
          variant={readonly ? 'clean' : 'default'}
          readonly={readonly}
          value={data?.username}
          label={t('card.data.username')}
          onChange={onChangeUsername}
        />
        <Input
          className={styles.dataField}
          variant={readonly ? 'clean' : 'default'}
          readonly={readonly}
          value={data?.avatar}
          label={t('card.data.avatar')}
          onChange={onChangeAvatar}
        />
        <CurrencySelect
          className={styles.dataField}
          value={data?.currency}
          onChange={onChangeCurrency}
          readonly={readonly}
        />
        <CountrySelect
          className={styles.dataField}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
