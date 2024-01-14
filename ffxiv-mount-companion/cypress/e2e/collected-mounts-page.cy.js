describe('Should visit the collected mounts page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
    });
  });

  it('should display no collected mounts on the page', () => {
    cy.visit('http://localhost:3000/collectedmounts');

    cy.get('.collected-mounts-page').within(() => {
        cy.get('.header').should('exist').within(() => {
        cy.get('h1').should('contain', 'FFXIV Mount Companion');
      })
      .get('.ffxiv-logo').should('exist')
      .get('h1.collected-mounts-title').should('contain', 'My Mounts')
      .get('.back-to-all-btn').should('exist')
      .get('div.collected-mounts-container').children().should('have.length', 0)
      .get('div.firebird > .firebird').should('exist')
      .get('.no-favorites').should('contain', "You don't have any mounts yet, add some!")
    });
  });

  it('should navigate back to the main page when clicking "Back To All Mounts"', () => {
    cy.visit('http://localhost:3000/collectedmounts');

    cy.get('.collected-mounts-page').within(() => {
      cy.get('.back-to-all-btn').click()
      .url().should('include', '/main');
    });
  });
});
