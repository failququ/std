import classNames from 'classnames';

import {
  memo, useCallback,
  type FC,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onLoginSuccess?: () => void
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className, onLoginSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);

  const handleChangeEmail = useCallback(
    (value: string) => dispatch(loginActions.setEmail(value)),
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch],
  );

  const handleLogin = useCallback(async () => {
    const res = await dispatch(loginByEmail({ email, password }));

    if (res.meta.requestStatus === 'fulfilled') {
      onLoginSuccess?.();
    }
  }, [dispatch, email, onLoginSuccess, password]);
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.form, className)} data-testid="login-form">
        {error && <Text theme="error" description={t('features.authByEmail.error')} />}
        <Input
          autoFocus
          type="email"
          className={styles.input}
          label={t('features.authByEmail.email-label')}
          value={email}
          onChange={handleChangeEmail}
          data-testid="email-input"
        />
        <Input
          type="password"
          className={styles.input}
          label={t('features.authByEmail.password-label')}
          value={password}
          onChange={handleChangePassword}
          data-testid="password-input"
        />
        <Button
          className={styles.loginBtn}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {t('features.authByEmail.form-button')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
