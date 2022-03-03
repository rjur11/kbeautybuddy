describe("Load homepage and render the expected elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
      .get("div.main-buttons")
      .find("button")
      .contains("Check Your Skincare Shelf")
      .click()
      .url()
      .should("eq", "http://localhost:3000/shelf");
  });

  it("Should be able to visit the page and render the expected Navbar elements", () => {
    cy.contains("h1", "KBeautyBuddy");
    cy.contains("p", "Welcome, Rana");
  });
  it("Should be able to visit the page and render the shelf title", () => {
    cy.contains("Your Shelf");
  });
  it("Should be able to visit the page and render 5 placeholder images before the user completes the skin quiz", () => {
    cy.get("div.shelf").find("img").should("have.length", 5);
  });
  it("Should be able to visit the page and render product types under placeholder images", () => {
    cy.get("div.shelf").contains("Cleanser");
    cy.get("div.shelf").contains("Toner");
    cy.get("div.shelf").contains("Serum");
    cy.get("div.shelf").contains("Cream");
    cy.get("div.shelf").contains("Sunscreen");
  });
  it("Should be able to click on the logo in the navbar to head to the landingpage", () => {
    cy.get("h1.logo-title")
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
