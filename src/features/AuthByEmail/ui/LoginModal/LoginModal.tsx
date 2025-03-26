import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
