describe("Load profile page and render the expected elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
      .get("div.main-buttons")
      .find("button")
      .contains("See Skin Profile")
      .click()
      .url()
      .should("eq", "http://localhost:3000/profile");
  });

  it("Should be able to visit the page and render the expected Navbar elements", () => {
    cy.contains("h1", "KBeautyBuddy");
  });
  it("Should be able to visit the page and see 'Your Skin Profile'", () => {
    cy.get("h2.profile-title");
  });
  it("Should be able to visit the page and render the 'Take Skin Quiz' button", () => {
    cy.get("button").contains("Take Skin Quiz");
  });
  it("Should be able to click the 'Take Skincare Quiz' button and navigate to quiz page", () => {
    cy.get("button").click().url().should("eq", "http://localhost:3000/quiz");
  });
  it("Should be able to visit the page and render skin type and concern div", () => {
    cy.get("div.skin-results");
  });
  it("Should be able to visit the page and render blank skin results if the quiz has not been completed", () => {
    cy.get("div.skin-results").contains("_____");
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
