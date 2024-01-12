describe('Should show scrolling button', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
    cy.visit('http://localhost:3000/main');
  });

  it('should scroll to top when clicked', () => {
    cy.get('.scroll-follow-button').should('not.be.visible');
    cy.scrollTo('bottom')
      .get('.scroll-follow-button')
      .should('be.visible')
      .get('.scroll-follow-button')
      .click()
      .get('.scroll-follow-button')
      .should('not.be.visible');
  });
});
