import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import {
  EditableProfileCard,
} from '@/features/editableProfileCard';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props;

  const { id } = useParams<{ id: string }>();

  return (
    <Page className={classNames(className)}>
      <VStack gap="16" max>
        <EditableProfileCard id={id as string} />
      </VStack>
    </Page>
  );
};

export default memo(ProfilePage);
