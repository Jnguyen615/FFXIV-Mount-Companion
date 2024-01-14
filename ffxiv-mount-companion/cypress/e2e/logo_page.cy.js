describe('should visit the logo page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
  });

  it('should display the logo page and navigate to the main page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.logo-page').within(() => {
      cy.get('.ff-logo-container')
        .should('exist')
        .get('.ffxiv-logo')
        .should('exist')
        .get('.black-chocobo')
        .should('exist')
        .get('.page-name')
        .should('contain', 'Save your collected mounts here!')
        .get('.click-me')
        .click()
        .url()
        .should('include', '/main');
    });
  });
});
