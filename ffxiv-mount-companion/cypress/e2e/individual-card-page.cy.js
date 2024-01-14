describe('FFXIV Mount Companion App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
  });

  it('should open a mount card from the main page', () => {
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
          .click();
        cy.url().should('include', '/mount/338');
      });
  });

  it('should show the individual mount page for a mount', () => {
    cy.visit('http://localhost:3000/mount/338');
    cy.get('.header')
      .should('exist')
      .within(() => {
        cy.get('h1').should('contain', 'FFXIV Mount Companion');
        cy.get('.chocobo-icon').should('exist');
      });

    cy.get('.ffxiv-logo')
      .should('exist')
      .get('button')
      .should('contain', 'My Mounts')
      .get('.wrapper')
      .should('exist')
      .within(() => {
        cy.get('button').should('contain', 'x');
        cy.get('svg').should('exist');
      });

    cy.get('.mount-container')
      .should('exist')
      .within(() => {
        cy.get('h3')
          .contains('Quaqua')
          .get('.modal-image')
          .should('exist')
          .get('p')
          .contains(
            "Employed by a treasure hunter of Aloalo Island, this familiar was born of an early form of arcanima, an art which emerged in the south sea isles. The being's origin is attested by its predominantly wooden construction, a method which precedes the use of gemstones to create Carbuncles.",
          )
          .get('.movement-type')
          .should('contain', 'Movement-Type: Terrestrial')
          .get('.order')
          .should('contain', 'Order: 276')
          .get('.patch')
          .should('contain', 'Patch: 6.51');
      });
  });

  it('should favorite a mount and see it on the favorites page after clicking a button and be able to remove it', () => {
    cy.visit('http://localhost:3000/mount/338')
      .get('.wrapper')
      .should('exist')
      .get('svg')
      .should('exist')
      .click()
      .get('.nav-bar > a > button')
      .click()
      .url()
      .should('include', '/collectedmounts')
      .get('.collected-mounts-container')
      .children()
      .should('have.length', 1)
      .within(() => {
        cy.contains('h3', 'Quaqua')
          cy.contains(
            'p',
            "Summon forth your quaqua, a familiar hailing from the south sea isles that has either a permanent snarl or grin, depending on one's outlook on life.",
          )
          .get('img')
          .should('exist')
          .get('svg')
          .should('exist')
          .click();
      });

    cy.get('.collected-mounts-container').children().should('have.length', 0);
  });
});
