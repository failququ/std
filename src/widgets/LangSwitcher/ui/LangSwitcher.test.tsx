import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import LangSwitcher from './LangSwitcher';

describe('LangSwitcher', () => {
  it('should render', () => {
    componentRender(<LangSwitcher />);
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});
