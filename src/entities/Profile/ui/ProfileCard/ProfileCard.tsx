import classNames from 'classnames';

import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Spinner } from '@/shared/ui/Spinner';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
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
      <HStack max justify="center" className={classNames(styles.card, className)}>
        <Spinner />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack max justify="center" className={classNames(styles.card, className)}>
        <Text
          theme="error"
          description={t('errors.getProfile.description')}
          title={t('errors.getProfile.title')}
          align="center"
        />
      </HStack>
    );
  }

  return (
    <VStack max gap="8" className={classNames(styles.card, className)}>
      {data?.avatar && (
        <HStack max justify="center">
          <Avatar src={data.avatar} alt={t('card.data.avatar')} />
        </HStack>
      )}
      <Input
        className={styles.dataField}
        variant={readonly ? 'clean' : 'default'}
        readonly={readonly}
        value={data?.firstName}
        label={t('card.data.firstName')}
        onChange={onChangeFirstName}
        data-testid="ProfileCard.firstName"
      />
      <Input
        className={styles.dataField}
        variant={readonly ? 'clean' : 'default'}
        readonly={readonly}
        value={data?.lastName}
        label={t('card.data.lastName')}
        onChange={onChangeLastName}
        data-testid="ProfileCard.lastName"
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
    </VStack>
  );
};

export default ProfileCard;
