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
  it("Should be able to click the 'Take Skincare Quiz' button and navigate to quiz page", () => {
    cy.get("div.main-buttons")
      .find("button")
      .contains("See Skin Profile")
      .click()
      .url()
      .should("eq", "http://localhost:3000/profile");
  });
  it("Should be able to click the 'Take Skincare Quiz' button and navigate to quiz page", () => {
    cy.get("div.main-buttons")
      .find("button")
      .last()
      .click()
      .url()
      .should("eq", "http://localhost:3000/shelf");
  });
});
// it("Should render movie images", () => {
//   cy.get('img[alt="Money Plane"]').should("be.visible");
// });
// it("Should render movie ratings", () => {
//   cy.get("div.rating").find("img").should("be.visible");
// });
// it("Should render movie year", () => {
//   cy.get("h2.release-date-value").should("be.visible");
// });
// it("Should go to movie modal view when movie button is clicked", () => {
//   cy.get('img[alt="Money Plane"')
//     .click()
//     .url()
//     .should("eq", "http://localhost:3000/694919");
// });
// it("Should be able to click the back button in the browser to go home", () => {
//   cy.get('img[alt="Money Plane"')
//     .click()
//     .url()
//     .should("eq", "http://localhost:3000/694919")
//     .go("back")
//     .url()
//     .should("eq", "http://localhost:3000/");
// });
// it("Should be able to click the forward button in the browser to go home", () => {
//   cy.get('img[alt="Money Plane"')
//     .click()
//     .url()
//     .should("eq", "http://localhost:3000/694919")
//     .go("back")
//     .url()
//     .should("eq", "http://localhost:3000/")
//     .go("forward")
//     .url()
//     .should("eq", "http://localhost:3000/694919");
// });
// it("Should return movie search results", () => {
//   cy.get('input[type="text-box"]')
//     .type("Mulan")
//     .should("have.value", "Mulan")
//     .get('img[alt="Mulan"]')
//     .should("be.visible")
//     .get('img[alt="Money Plane"]')
//     .should("not.exist");
// });
// it("Should return an error message if searched movie is not found", () => {
//   cy.get('input[type="text-box"]')
//     .type("Mulane")
//     .should("have.value", "Mulane")
//     .get("p")
//     .contains(
//       "No movie found with that title. Please search for another movie."
//     )
//     .should("be.visible");
// });
// it("Should return an error message for a 404 movie not found", () => {
//   cy.visit('http://localhost:3000/6949198')
//   .get("div.modal-failed-to-load-error")
//   .contains(
//     "Movie data failed to load. Please contact Comcast."
//   )
