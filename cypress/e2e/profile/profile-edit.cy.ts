let profileId: string;

describe('profile', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login('admin@mail.ru', 'admin').then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Profile should load', () => {
    cy.getByTestId('ProfileCard.age').should('have.value', 30);
  });

  it('Profile should update', () => {
    cy.updateProfile();
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'Alex');
    cy.getByTestId('ProfileCard.lastName').should('have.value', 'Fil');
  });
});
