import { useEffect, useState } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isVisible?: boolean;
  }

export function useModal({ onClose, isVisible }: UseModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true);
    }
  }, [isVisible]);
  const handleClose = () => {
    onClose?.();
    setIsMounted(false);
  };

  return {
    isMounted,
    handleClose,
  };
}
