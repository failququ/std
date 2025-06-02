import { setToken } from '../../../src/shared/lib/helpers/localStorage/tokenHelper';

export const loginCommand = (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: 'https://std-backend.vercel.app/auth/login',
    body: {
      email,
      password,
    },
  }).then(({ body }) => {
    setToken(body.access_token);
    cy.visit('/');
  });
};
