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
} from 'entities/Profile';
import type { FC } from 'react';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);
  const profileReadonly = useSelector(getProfileReadonly);

  const handleChangeFirstName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstName: value || '' }));
  }, [dispatch]);

  const handleChangeLastName = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastName: value || '' }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value?: string) => {
    if (value && /^\d+$/.test(value)) {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }
  }, [dispatch]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(className)}>
        {!profileIsLoading && !profileError && <ProfilePageHeader />}
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
