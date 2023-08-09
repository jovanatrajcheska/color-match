describe("Color display", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display two random words from the colors.json", () => {
    cy.fixture("colors.json").then((fixture) => {
      const { possibleColors } = fixture;
      cy.get(".words-container")
        .should("exist")
        .within(() => {
          cy.get('[data-testid="color-ink"]')
            .invoke("text")
            .then((inkText) => {
              cy.get('[data-testid="color-meaning"]')
                .invoke("text")
                .then((meaningText) => {
                  expect(possibleColors).to.include(inkText.trim());
                  expect(possibleColors).to.include(meaningText.trim());
                });
            });
        });
    });
  });

  it("one word should have inkColor from colors.json", () => {
    cy.fixture("colors.json").then((data) => {
      const possibleColors = data.possibleColors;
      cy.get(".ink")
        .should("be.visible")
        .then((inkElement) => {
          const inkColor = inkElement.css("color");
          const matchingColor = inkColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
          const randomColor = possibleColors.some((color) => {
            const [r, g, b] = matchingColor.slice(1, 4);
            return (
              (color === "black" && r === "0" && g === "0" && b === "0") ||
              (color === "blue" && r === "0" && g === "0" && b === "255") ||
              (color === "red" && r === "255" && g === "0" && b === "0") ||
              (color === "green" && r === "0" && g === "128" && b === "0") ||
              (color === "yellow" && r === "255" && g === "255" && b === "0") ||
              (color === "pink" && r === "255" && g === "192" && b === "203") ||
              (color === "purple" && r === "128" && g === "0" && b === "128") ||
              (color === "cyan" && r === "0" && g === "255" && b === "255")
            );
          });
          expect(randomColor).to.be.true;
        });
    });
  });
});
