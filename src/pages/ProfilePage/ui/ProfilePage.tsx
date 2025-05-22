import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import {
  EditableProfileCard,
  profileReducer,
} from '@/features/editableProfileCard';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

export const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page className={classNames(className)}>
        <VStack gap="16" max>
          <EditableProfileCard id={id as string} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
