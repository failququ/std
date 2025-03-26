import classNames from 'classnames';

import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface Props {
  className?: string;
}

const LoginForm: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = useCallback((value: string) => setEmail(value), []);
  return (
    <div className={classNames(styles.form, className)} data-testid="login-form">
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
        onChange={setPassword}
        data-testid="password-input"
      />
      <Button className={styles.loginBtn}>{t('features.authByEmail.form-button')}</Button>
    </div>
  );
};

export default LoginForm;
