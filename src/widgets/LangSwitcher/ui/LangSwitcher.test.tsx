import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import LangSwitcher from './LangSwitcher';

describe('LangSwitcher', () => {
  it('should render', () => {
    renderWithTranslation(<LangSwitcher />);
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();

    screen.debug();
  });
});
