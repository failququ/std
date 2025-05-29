import { screen } from '@testing-library/dom';
import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';
import AppRouter from './AppRouter';

describe('AppRouter', () => {
  it('Page should render', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    // async await и findByTestId вместо getByTestId потому что страница с lazy loading'ом.
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  it('should render NotFoundPage with wrong url', async () => {
    componentRender(<AppRouter />, {
      route: '/notExistingRoute',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  it('should redirect unauthorized user to home page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('HomePage');
    expect(page).toBeInTheDocument();
  });

  it('should not allow user without admin role to see admin panel', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _isInit: true,
          isAuth: true,
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  it('should allow user with admin role to see admin panel', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _isInit: true,
          isAuth: true,
          userData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
