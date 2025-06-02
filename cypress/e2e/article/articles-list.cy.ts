describe('Articles list', () => {
  beforeEach(() => {
    cy.login('admin@mail.ru', 'admin').then(() => {
      cy.visit('articles');
    });
  });

  it('Should load articles', () => {
    cy.getByTestId('ArticlesList').should('exist');
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
  });

  it('Should find article by title', () => {
    cy.getByTestId('ArticlesPageSearch').type('25');
    cy.getByTestId('ArticlesListItem').should('have.length', 1);
  });
});
