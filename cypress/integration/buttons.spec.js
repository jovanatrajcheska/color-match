describe("Buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have YES and NO buttons", () => {
    cy.contains("YES").should("be.visible");
    cy.contains("NO").should("be.visible");
  });

  
  
});
