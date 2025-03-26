import classNames from 'classnames';

import { useAppDispatch } from 'app/providers/StoreProvider';
import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Text from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByEmail } from '../../model/services/loginByEmail/loginByEmail';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface Props {
  className?: string;
}

const LoginForm: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    email, password, isLoading, error,
  } = useSelector(getLoginState);

  const handleChangeEmail = useCallback(
    (value: string) => dispatch(loginActions.setEmail(value)),
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch],
  );

  const handleLogin = useCallback(() => {
    dispatch(loginByEmail({ email, password }));
  }, [dispatch, email, password]);
  return (
    <div className={classNames(styles.form, className)} data-testid="login-form">
      {error && <Text theme="error" description={error} />}
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
  );
};

export default memo(LoginForm);
