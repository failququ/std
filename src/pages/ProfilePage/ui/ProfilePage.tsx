import classNames from 'classnames';

import { profileReducer } from 'entities/Profile';
import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface ProfilePageProps {
  className?: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('profile-page');
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(className)}>
        {t('title')}
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
