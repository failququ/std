import { screen } from '@testing-library/dom';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import LoginForm from './LoginForm';

describe('Login form', () => {
  it('should render', () => {
    componentRender(<LoginForm />);

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('should have email input', () => {
    componentRender(<LoginForm />);

    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });

  it('should have password input', () => {
    componentRender(<LoginForm />);

    expect(screen.getByTestId('password-input')).toBeInTheDocument();
  });
});
