describe("Load shelf page and render the expected elements", () => {
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
  it("Should render the product catalog", () => {
    cy.get("div.catalog-container").contains("h2", "~~~ Product Catalog ~~~");
  });
  it("Should render all available products", () => {
    cy.get("div.catalog").find("div").should("have.length", 50);
  });
  it("Should be able to filter the list by product type", () => {
    cy.get("select.all-product-select")
      .select("Cleanser")
      .get("div.catalog")
      .find("div")
      .should("have.length", 10);
  });
  it("Should be able to filter the list by brand name", () => {
    cy.get("select.all-brand-select")
      .select("Round Lab")
      .get("div.catalog")
      .find("div")
      .should("have.length", 3);
  });
  it("Should be able to filter the list by product type and brand name", () => {
    cy.get("select.all-brand-select")
      .select("Skinfood")
      .get("select.all-product-select")
      .select("SPF")
      .get("div.catalog")
      .find("div")
      .should("have.length", 2);
  });
  it("Should be able to click on a product to get more details", () => {
    cy.get("div.catalog").find("div").first().click();
  });
  it("Should be able to exit a modal by pressing the ESC key", () => {
    cy.get("div.catalog")
      .find("div")
      .first()
      .click()
      .get("div.ReactModal__Content")
      .should("be.visible")
      .type("{esc}");
  });
  it("Should be able to click on the logo in the navbar to head to the landingpage", () => {
    cy.get("h1.logo-title")
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
