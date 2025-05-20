import { DropdownDirection } from '../../types/ui';
import styles from '../styles/popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  bottomLeft: styles.bottomLeft,
  bottomRight: styles.bottomRight,
  topLeft: styles.topLeft,
  topRight: styles.topRight,
};
