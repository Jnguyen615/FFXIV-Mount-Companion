describe('Error handling', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
  });

  it('should navigate to the error page when the wrong url is entered', () => {
    cy.visit('http://localhost:3000/chocobo');
    cy.get('.error-page-text')
      .contains('Oops! Something went wrong, please go back.')
      .get('.hydra-logo')
      .should('exist')
      .get('button')
      .should('contain', 'Back to All Mounts');
  });

  it('should be able to navigate back to the main page from the error page', () => {
    cy.visit('http://localhost:3000/mount');
    cy.get('.error-page-text')
      .contains('Oops! Something went wrong, please go back.')
      .get('.hydra-logo')
      .should('exist')
      .get('button')
      .should('contain', 'Back to All Mounts')
      .click()
      .url()
      .should('contain', '/main');
  });
});
