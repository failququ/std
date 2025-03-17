import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render', () => {
    const buttonText = 'Button';
    render(
      <Button>
        {buttonText}
      </Button>,
    );
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('should have primary theme by default', () => {
    const buttonText = 'Button';
    render(
      <Button>{buttonText}</Button>,
    );

    expect(screen.getByText(buttonText)).toHaveClass('primary');
  });

  it('should have clean theme', () => {
    const buttonText = 'Button';
    render(
      <Button theme="clean">{buttonText}</Button>,
    );

    expect(screen.getByText(buttonText)).toHaveClass('clean');
  });
});
