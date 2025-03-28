import { screen } from '@testing-library/dom';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import Input from './Input';

describe('Input', () => {
  it('should render', () => {
    componentRender(<Input />);

    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('should have label', () => {
    const label = 'Input label';
    componentRender(<Input label={label} />);

    expect(screen.getByTestId('input-label')).toHaveTextContent(label);
  });
});
