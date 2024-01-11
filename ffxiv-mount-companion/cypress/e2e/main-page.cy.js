describe('Should visit the main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
  });

  it('should show mount cards on the main page', () => {
    cy.visit('http://localhost:3000/main');
    cy.get('.header')
      .should('exist')
      .get('h1')
      .should('contain', 'FFXIV Mount Companion')
      .get('.chocobo-icon')
      .should('exist')
      .get('.ffxiv-logo')
      .should('exist')
      .get('button')
      .should('contain', 'My Mounts')
      .get('#search')
      .should('exist')
      .get('.mounts-container')
      .children()
      .first()
      .within(() => {
        cy.contains('h3', 'Quaqua');
        cy.contains(
          'p',
          "Summon forth your quaqua, a familiar hailing from the south sea isles that has either a permanent snarl or grin, depending on one's outlook on life.",
        )
          .get('svg')
          .should('exist');
      });
    cy.get('.mounts-container')
      .children()
      .last()
      .within(() => {
        cy.contains('h3', 'Island Peerifool');
        cy.contains(
          'p',
          'Summon forth your island Peerifool. If anyone asks, it bears no relation whatsoever to a certain malicious rotting vegetable.',
        )
          .get('svg')
          .should('exist');
      });
    cy.get('.mounts-container').children().should('have.length', 5);
  });
  
  it('should click to collect a mount and navigate to the my collected mounts page and be able to remove a collected mount', () => {
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
          .get('img').should('exist')
          .get('svg')
          .should('exist')
          .click();
      });
    cy.get('button').click().url().should('contain', '/collectedmounts');
    cy.get('.collected-mounts-container').children().should('have.length', 1);
    cy.get('.collected-mounts-container')
      .children()
      .first()
      .within(() => {
        cy.contains('h3', 'Quaqua');
        cy.contains(
          'p',
          "Summon forth your quaqua, a familiar hailing from the south sea isles that has either a permanent snarl or grin, depending on one's outlook on life.",
        )
          .get('svg')
          .should('exist')
          .click();
      });
    cy.get('div.firebird')
      .should('exist')
      .get('.no-favorites')
      .should('contain', "You don't have any mounts yet, add some!");
    cy.get('.collected-mounts-container').children().should('have.length', 0);
    cy.get('.back-to-all-btn').click().url().should('contain', '/main');
  });
});
