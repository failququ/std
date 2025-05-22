import { screen } from '@testing-library/dom';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import Modal from './Modal';

describe('Modal', () => {
  it('should render and be visible', () => {
    componentRender(<Modal isVisible title="Modal title">MODAL CONTENT</Modal>);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toHaveClass('visible');
  });
});
