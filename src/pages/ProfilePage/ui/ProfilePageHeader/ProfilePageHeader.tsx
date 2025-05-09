import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserData } from 'entities/User';
import { useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import Text from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const userData = useSelector(getUserData);
  const profileData = useSelector(getProfileData);

  const isEditable = userData?.id === profileData?._id;

  const readonly = useSelector(getProfileReadonly);

  const setEditMode = useCallback((mode: boolean) => {
    dispatch(profileActions.setReadOnly(mode));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    // @ts-ignore
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" max>
      <Text title={t('header.title')} />
      <div>
        {isEditable && (
        <div>
          {readonly ? (
            <Button theme="outline" onClick={() => setEditMode(false)}>
              { t('header.edit.edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme="outline" onClick={onSave}>
                { t('header.edit.save')}
              </Button>
              <Button theme="outline_red" onClick={onCancelEdit}>
                {t('header.edit.cancel')}
              </Button>
            </HStack>
          )}
        </div>
        )}
      </div>
    </HStack>
  );
};

export default ProfilePageHeader;
