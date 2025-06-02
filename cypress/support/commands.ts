import { loginCommand } from './commands/login';
/// <reference types="cypress" />

Cypress.Commands.add('login', loginCommand);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    }
  }
}

export { };
