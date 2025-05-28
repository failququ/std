import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import {
  getAddNewCommentText,
} from '../../model/selectors/getAddNewCommentData/getAddNewCommentData';
import { addNewCommentActions, addNewCommentReducer } from '../../model/slice/addNewCommentSlice';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text:string) => void;
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('articles-page');
  const dispatch = useAppDispatch();

  const commentText = useSelector(getAddNewCommentText);

  const handleTextChange = useCallback((value: string) => {
    dispatch(addNewCommentActions.setText(value));
  }, [dispatch]);

  const handleSendComment = useCallback(() => {
    onSendComment(commentText || '');
    handleTextChange('');
  }, [onSendComment, commentText, handleTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.form, className)}>
        <Input
          className={styles.input}
          label={t('add-new-comment.input-label')}
          value={commentText}
          onChange={handleTextChange}
        />
        <Button onClick={handleSendComment} theme="outline">{t('add-new-comment.send-btn')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
