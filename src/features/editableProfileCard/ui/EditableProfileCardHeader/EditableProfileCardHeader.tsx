import { getUserData } from 'entities/User';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import Text from 'shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
  className?: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = (props) => {
  const { className } = props;
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
      <div className={className}>
        {isEditable && (
        <div>
          {readonly ? (
            <Button
              theme="outline"
              onClick={() => setEditMode(false)}
              data-testid="EditableProfileCardHeader.Edit"
            >
              { t('header.edit.edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                theme="outline"
                onClick={onSave}
                data-testid="EditableProfileCardHeader.Save"
              >
                { t('header.edit.save')}
              </Button>
              <Button
                theme="outline_red"
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.Cancel"
              >
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

export default memo(EditableProfileCardHeader);
