import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import UILink from './UILink';

describe('UILink', () => {
  it('should render', () => {
    const LinkText = 'Link';
    componentRender(
      <UILink to="/">
        {LinkText}
      </UILink>,
    );

    expect(screen.getByText(LinkText)).toBeInTheDocument();
  });
});
