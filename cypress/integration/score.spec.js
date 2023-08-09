describe("Score", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the initial score as 0", () => {
    cy.get(".score").should("have.text", "Score: 0");
  });

 
  it('should correctly update the score based on the game logic', () => {
    cy.window().then((win) => {
      const isMatch = Math.random() < 0.5;
      win.Math.random = () => (isMatch ? 0.4 : 0.6);
    });
  
  
    cy.window().then((win) => {
      const isMatch = Math.random() < 0.5;
      const buttonToClick = isMatch ? 'YES' : 'NO';
  
      // click on button
      cy.contains(buttonToClick).click();
  
      // update the score
      if (isMatch) {
        cy.get('.score').should('have.text', 'Score: 1');
      } else {
        cy.get('.score').should('have.text', 'Score: -1');
      }
    });
  });
  
  

  
});
