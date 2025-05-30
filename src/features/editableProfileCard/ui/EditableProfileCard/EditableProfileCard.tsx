import classNames from 'classnames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

import { ProfileCard } from '@/entities/Profile';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ValidateProfileError } from '../../model/const/const';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getValidationErrors } from '../../model/selectors/getValidationErrors/getValidationErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';
import styles from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string;
		id: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const EditableProfileCard: FC<EditableProfileCardProps> = (props) => {
  const { className, id } = props;

  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileReadonly = useSelector(getProfileReadonly);
  const validationErrors = useSelector(getValidationErrors);

  const validateErrorsMap = {
    [ValidateProfileError.INCORRECT_USER_DATA]: t('errors.validationErrors.incorrectUserData'),
    [ValidateProfileError.INCORRECT_AGE]: t('errors.validationErrors.incorrectAge'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('errors.validationErrors.incorrectCountry'),
    [ValidateProfileError.INCORRECT_CURRENCY]: t('errors.validationErrors.incorrectCurrency'),
    [ValidateProfileError.SERVER_ERROR]: t('errors.validationErrors.serverError'),
    [ValidateProfileError.NO_DATA]: t('errors.validationErrors.noData'),
  };

  const handleChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ ...formData, firstName: value || '' }));
  }, [dispatch, formData]);

  const handleChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ ...formData, lastName: value || '' }));
  }, [dispatch, formData]);

  const handleChangeAge = useCallback((value?: string) => {
    if (value && /^\d+$/.test(value)) {
      dispatch(profileActions.updateProfile({ ...formData, age: Number(value) }));
    }
  }, [dispatch, formData]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ ...formData, city: value || '' }));
  }, [dispatch, formData]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ ...formData, username: value || '' }));
  }, [dispatch, formData]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ ...formData, avatar: value || '' }));
  }, [dispatch, formData]);

  const handleChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ ...formData, currency }));
  }, [dispatch, formData]);

  const handleChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ ...formData, country }));
  }, [dispatch, formData]);

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  });
  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(styles.card, className)}>
        {!!validationErrors?.length && validationErrors.map((err) => (
          <Text
            theme="error"
            description={validateErrorsMap[err]}
            key={err}
            data-testid="EditableProfileCard.ValidationError"
          />
        ))}
        <VStack gap="16">
          <EditableProfileCardHeader />
          <ProfileCard
            data={formData}
            isLoading={profileIsLoading}
            error={profileError}
            readonly={profileReadonly}
            onChangeFirstName={handleChangeFirstName}
            onChangeLastName={handleChangeLastName}
            onChangeAge={handleChangeAge}
            onChangeCity={handleChangeCity}
            onChangeUsername={handleChangeUsername}
            onChangeAvatar={handleChangeAvatar}
            onChangeCurrency={handleChangeCurrency}
            onChangeCountry={handleChangeCountry}
          />
        </VStack>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(EditableProfileCard);
