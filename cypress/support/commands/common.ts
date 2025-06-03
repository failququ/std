import { User } from '../../../src/entities/User/model/types/user';
import { setToken } from '../../../src/shared/lib/helpers/localStorage/tokenHelper';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (email: string, password: string) => cy.request({
  method: 'POST',
  url: 'https://std-backend.vercel.app/auth/login',
  body: {
    email,
    password,
  },
}).then(({ body }) => {
  setToken(body.access_token);
  return body.user;
});

export const getByTestId = (selector: string) => cy.get(selectByTestId(selector));

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<User>;
      getByTestId(selector: string): ReturnType<typeof cy.get>;
    }
  }
}
