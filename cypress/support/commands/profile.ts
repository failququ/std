export const updateProfile = () => {
  cy.getByTestId('EditableProfileCardHeader.Edit').click();
  cy.getByTestId('ProfileCard.firstName').clear().type('Alex');
  cy.getByTestId('ProfileCard.lastName').clear().type('Fil');
  cy.getByTestId('EditableProfileCardHeader.Save').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: 'https://std-backend.vercel.app/user/profile',
    headers: {
      authorization: 'Bearer ',
    },
    body: {
      _id: profileId,
      firstName: 'Sasha',
      lastName: 'Filippov',
      age: 30,
      currency: 'RUB',
      country: 'Russia',
      city: 'Vladimir',
      username: 'failququmoarxx',
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
