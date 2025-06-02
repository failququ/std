let currentArticleId: string;

describe('Article details page', () => {
  beforeEach(() => {
    cy.login('admin@mail.ru', 'admin');
    cy.createArticle().then((article) => {
      currentArticleId = article._id;
      cy.visit(`articles/${article._id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('Should load article', () => {
    cy.getByTestId('ArticleDetails').should('exist');
  });

  it('Should load recommendations', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
});
