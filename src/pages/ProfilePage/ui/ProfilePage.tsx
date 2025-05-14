import classNames from 'classnames';

import {
  EditableProfileCard,
  EditableProfileCardHeader,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from 'features/editableProfileCard';
import type { FC } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import VStack from 'shared/ui/Stack/VStack/VStack';
import { Page } from 'widgets/Page';

interface ProfilePageProps {
  className?: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  const profileError = useSelector(getProfileError);
  const profileIsLoading = useSelector(getProfileIsLoading);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames(className)}>
        <VStack gap="16" max>
          {!profileIsLoading && !profileError && <EditableProfileCardHeader />}
          <EditableProfileCard id={id as string} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
