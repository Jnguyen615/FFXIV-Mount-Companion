describe('Should search for a mount', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://ffxivcollect.com/api/mounts/', {
      statusCode: 200,
      fixture: 'mountsData',
    });
    cy.intercept('GET', 'https://ffxivcollect.com/api/search?term=fat', {
      statusCode: 200,
      fixture: 'searchData', // Use the new fixture for searchData
    });
  });

  it('should be able to search for a mount', () => {
    cy.visit('http://localhost:3000/main')
      .get('.mounts-container')
      .children()
      .should('have.length', 5);

    // Type 'fat' into the search input
    cy.get('.search').type('island');

    // Wait for the search to complete (adjust the timeout as needed)
    cy.get('.mounts-container')
      .children()
      .should('have.length', 2)
      .get('.mounts-container')
      .children()
      .first()
      .within(() => {
        cy.contains('h3', 'Island Adenium');
        cy.contains(
          'p',
          "Summon forth your island adenium. Literally a desert rose by another name, and doesn't have much of a scent to brag about.",
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
          .should('exist')
          .click();
      });

    it('should favorite a mount and see it on the favorites page after clicking a button and be able to remove it', () => {
      cy.visit('http://localhost:3000/mount/338');
      cy.get('.nav-bar > a > button')
        .click()
        .url()
        .should('contain', '/collectedmounts')
        .get('.collected-mounts-container')
        .children()
        .should('have.length', 2)
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
            .click();
        });
    });
    cy.get('button')
      .click()
      .url()
      .should('contain', '/collectedmounts')
      .get('.collected-mounts-container')
      .children()
      .should('have.length', 1)
      .get('.mount-card')
      .children()
      .first()
      .contains('h3', 'Island Peerifool');
    cy.contains(
      'p',
      'Summon forth your island Peerifool. If anyone asks, it bears no relation whatsoever to a certain malicious rotting vegetable.',
    )
      .get('svg')
      .should('exist')
      .click()
      .get('.collected-mounts-container')
      .children()
      .should('have.length', 0);
      cy.get('img').should('exist')
      .get('p').should('contain', "You don't have any mounts yet, add some!")
  });
});
