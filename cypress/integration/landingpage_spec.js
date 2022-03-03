describe("Load homepage and render the expected elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should be able to visit the page and render the expected Navbar elements", () => {
    cy.contains("h1", "KBeautyBuddy");
    cy.contains("p", "Welcome, Rana");
  });
  it("Should be able to visit the page and show the div containing navigation buttons", () => {
    cy.get("div.main-buttons");
  });
  it("Should be able to visit the page and render 3 buttons within the main-buttons div", () => {
    cy.get("div.main-buttons").find("button").should("have.length", 3);
  });
  it("Should be able to visit the page and recognize the first button's text", () => {
    cy.get("div.main-buttons")
      .find("button")
      .first()
      .contains("Take Skincare Quiz");
  });
  it("Should be able to visit the page and recognize the second button's text", () => {
    cy.get("div.main-buttons").find("button").contains("See Skin Profile");
  });
  it("Should be able to visit the page and recognize the third button's text", () => {
    cy.get("div.main-buttons")
      .find("button")
      .last()
      .contains("Check Your Skincare Shelf");
  });
  it("Should be able to click the 'Take Skincare Quiz' button and navigate to quiz page", () => {
    cy.get("div.main-buttons")
      .find("button")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/quiz");
  });
  it("Should be able to click the 'See Skin Profile' button and navigate to quiz page", () => {
    cy.get("div.main-buttons")
      .find("button")
      .contains("See Skin Profile")
      .click()
      .url()
      .should("eq", "http://localhost:3000/profile");
  });
  it("Should be able to click the 'Check Your Skincare Shelf' button and navigate to quiz page", () => {
    cy.get("div.main-buttons")
      .find("button")
      .last()
      .click()
      .url()
      .should("eq", "http://localhost:3000/shelf");
  });
});
