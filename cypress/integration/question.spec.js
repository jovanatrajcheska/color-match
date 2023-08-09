describe("Game question", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the game question", () => {
    cy.get(".question").should("be.visible");
  });

  it("should display the correct question content", () => {
    cy.get(".question")
      .should("be.visible")
      .then((questionElement) => {
        const content = questionElement.text();
        const possible = [
          "Does the meaning of the bottom word match the ink color of the top word?",
          "Does the meaning of the top word match the ink color of the bottom word?",
        ];
        expect(possible).to.include(content);
      });
  });
  
});
