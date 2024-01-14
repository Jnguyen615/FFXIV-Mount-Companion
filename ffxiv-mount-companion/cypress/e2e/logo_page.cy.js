describe('should visit the logo page', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://ffxivcollect.com/api/mounts/",
      {
        statusCode: 200,
        fixture: 'mountsData',
      }
    )
  })

  it('should display the logo page and navigate to the main page', () => {
    cy.visit("http://localhost:3000/");

    cy.get(".logo-page").within(() => {
      cy.get(".ff-logo-container").should('exist');
      cy.get(".ffxiv-logo").should('exist');
        cy.get(".black-chocobo").should('exist');
        cy.get('.page-name').should('contain', "Save your collected mounts here!");
        cy.get(".click-me").click();
    });
    cy.url().should('include', '/main');
  });
});
      
