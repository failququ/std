import classNames from 'classnames';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';
import { getValidationErrors } from 'entities/Profile/model/selectors/getValidationErrors/getValidationErrors';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Text from 'shared/ui/Text/Text';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const { id } = useParams<{ id: string }>();
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
    // @ts-ignore
    dispatch(fetchProfileData(id));
  });
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(className)}>
        {!profileIsLoading && !profileError && <ProfilePageHeader />}
        {!!validationErrors?.length && validationErrors.map((err) => (
          <Text
            theme="error"
            description={validateErrorsMap[err]}
            key={err}
          />
        ))}
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
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
