describe('should open a mount card from the main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
  });
  it('should be on the main page and click a mount card to view more details', () => {
    cy.visit('http://localhost:3000/main')
      .get('.mounts-container')
      .children()
      .first()
      .within(() => {
        cy.contains('h3', 'Quaqua');
        cy.contains(
          'p',
          "Summon forth your quaqua, a familiar hailing from the south sea isles that has either a permanent snarl or grin, depending on one's outlook on life.",
        )
          .get('img')
          .should('exist')
          .click()
          .url()
          .should('contain', '/mount/338');
      });
  });
  
  it('should show the individual mount page for a mount', () => {
    cy.visit('http://localhost:3000/mount/338');
    cy.get('.header')
      .get('h1')
      .should('contain', 'FFXIV Mount Companion')
      .get('.chocobo-icon')
      .should('exist')
      .get('.ffxiv-logo')
      .should('exist')
      .get('button')
      .should('contain', 'My Mounts')
      .get('.wrapper')
      .should('exist')
      .get('svg')
      .should('exist')
      .get('.close-btn')
      .should('exist');
    cy.get('.mount-container').contains('h3', 'Quaqua');
    cy.get('.modal-image')
      .should('exist')
      .get('p')
      .should(
        'contain',
        "Employed by a treasure hunter of Aloalo Island, this familiar was born of an early form of arcanima, an art which emerged in the south sea isles. The being's origin is attested by its predominantly wooden construction, a method which precedes the use of gemstones to create Carbuncles.",
      );
    cy.get('.movement-type')
      .should('contain', 'Movement-Type: Terrestrial')
      .get('.order')
      .should('contain', 'Order: 276')
      .get('.patch')
      .should('contain', 'Patch: 6.51');
  });

  it('should favorite a mount and see it on the favorites page after clicking a button and be able to remove it', () => {
    cy.visit('http://localhost:3000/mount/338')
      .get('.wrapper')
      .should('exist')
      .get('svg')
      .should('exist')
      .click();
    cy.get('.nav-bar > a > button')
      .click()
      .url()
      .should('contain', '/collectedmounts')
      .get('.collected-mounts-container')
      .children()
      .should('have.length', 1)
      .get('.collected-mounts-container')
      .children()
      .first()
      .within(() => {
        cy.contains('h3', 'Quaqua');
        cy.contains(
          'p',
          "Summon forth your quaqua, a familiar hailing from the south sea isles that has either a permanent snarl or grin, depending on one's outlook on life.",
        )
          .get('img')
          .should('exist')
          .get('svg')
          .should('exist')
          .click()
      });
      cy.get('.collected-mounts-container')
      .children()
      .should('have.length', 0)
  });
});
