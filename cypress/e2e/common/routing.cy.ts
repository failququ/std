/// <reference types="cypress" />

import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('routing', () => {
  describe('With authorized user', () => {
    beforeEach(() => {
      cy.login('admin@mail.ru', 'admin');
    });

    it('Should go to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('HomePage')).should('exist');
    });

    it('Should go to profile page', () => {
      cy.visit('/profile/67e7e6895eb22c402b550c0e');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Should go to articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });

  describe('With unauthorized user', () => {
    it('Not existing page', () => {
      cy.visit('/not-existing-page');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
});
