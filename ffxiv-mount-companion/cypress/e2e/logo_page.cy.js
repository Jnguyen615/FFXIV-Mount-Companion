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
  it('should display the logo page', () => {
    cy.visit("http://localhost:3000/");
    cy.get(".ffxiv-logo").should('exist')
    .get(".black-chocobo").should('exist')
    cy.get('.page-name').should('contain', "Save your collected mounts here!" )
    .get(".click-me").click()
    .url().should('include', '/main')
  })
})