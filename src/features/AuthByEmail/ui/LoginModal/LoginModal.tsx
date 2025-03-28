import { Suspense, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import Spinner from 'shared/ui/Spinner/Spinner';
import { LoginFormLazy as LoginForm } from '../LoginForm/LoginForm.lazy';

interface LoginModalProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const LoginModal: FC<LoginModalProps> = (props) => {
  const { isVisible, onClose } = props;
  const { t } = useTranslation();
  return (
    <Modal
      isLazy
      isVisible={isVisible}
      onClose={onClose}
      title={t('features.authByEmail.modal-title')}
    >
      <Suspense fallback={<Spinner />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;
