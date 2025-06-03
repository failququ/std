import { EditableProfileCard } from '@/features/editableProfileCard';
import { TestProvider } from '@/shared/config/tests/componentRender/componentRender';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider>
        <EditableProfileCard id="67e7e6895eb22c402b550c0e" />
      </TestProvider>,
    );
  });
});
