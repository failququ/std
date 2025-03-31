import classNames from 'classnames';

import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import type { FC } from 'react';
import { memo, useEffect } from 'react';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
  className?: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(className)}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
