describe("Load quiz page and answer the questions", () => {
  it("Should be able to visit the quiz page and render the expected Navbar elements", () => {
    cy.visit("https://kbeautybuddy.vercel.app/")
      .get("div.main-buttons")
      .find("button")
      .contains("Take Skincare Quiz")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/quiz");
    cy.contains("h1", "KBeautyBuddy");
  });

  it("Should be able to answer the first question, 'What skintype do you have?' with any option other than 'I don't know' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("What Skintype do you have?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 5)
      .get("button.question-button")
      .contains("Normal")
      .click();
  });
  it("Should be able to answer the second question, 'Do you have sensitive skin?' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("Do you have sensitive skin?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 2)
      .get("button.question-button")
      .contains("No")
      .click();
  });
  it("Should be able to answer the third question, 'What is your biggest skin concern?' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("What is your biggest skin concern?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 5)
      .get("button.question-button")
      .contains("Acne Care")
      .click();
  });
  it("Should be able to answer the fourth question, 'How long would you like your routine to be?' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("How long would you like your routine to be?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 3)
      .get("button.question-button")
      .contains("5 steps. Cleanser, toner, serum, cream, and SPF.")
      .click();
  });
  it("Should be able to answer the last question, 'What type of sunscreen do you prefer?' and go back to the landing page ", () => {
    cy.get("h2.quiz-title")
      .contains("What type of sunscreen do you prefer?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 2)
      .get("button.question-button")
      .contains("Chemical")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/");
  });
  it("Should see the quiz results populated on the profile page and a shelf that contains 5 products ", () => {
    cy.get("div.main-buttons")
      .find("button")
      .contains("See Skin Profile")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/profile")
      .get("div.skin-results")
      .contains("Skin Type: normal")
      .get("div.skin-results")
      .contains("Skin Concern: acne care")
      .get("div.shelf")
      .find("div.single-product-details")
      .should("have.length", 5);
  });
  it("Should be able to visit the quiz page and render the expected Navbar elements", () => {
    cy.visit("https://kbeautybuddy.vercel.app/")
      .get("div.main-buttons")
      .find("button")
      .contains("Take Skincare Quiz")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/quiz");
    cy.contains("h1", "KBeautyBuddy");
  });
  it("Should be able to answer the first question, 'What skintype do you have?' with 'I don't know' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("What Skintype do you have?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 5)
      .get("button.question-button")
      .contains("I don't know.")
      .click();
  });
  it("Should be able to answer the second question 'Which of these sounds closest to your skin?' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("Which of these sounds closest to your skin?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 4)
      .get("button.question-button")
      .contains("Well-balanced, no particular skin concerns.")
      .click();
  });
  it("Should be able to answer the third question, 'Do you have sensitive skin?' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("Do you have sensitive skin?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 2)
      .get("button.question-button")
      .contains("No")
      .click();
  });
  it("Should be able to answer the fourth question, 'What is your biggest skin concern?' and go to the next question ", () => {
    cy.get("h2.quiz-title")
      .contains("What is your biggest skin concern?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 5)
      .get("button.question-button")
      .contains("Brightening")
      .click();
  });
  it("Should be able to answer the fifth question, 'How long would you like your routine to be?' and return to the landing page. ", () => {
    cy.get("h2.quiz-title")
      .contains("How long would you like your routine to be?")
      .get("div.quiz-container")
      .find("button")
      .should("have.length", 3)
      .get("button.question-button")
      .contains("2 steps. Cleanser and cream.")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/");
  });
  it("Should see the quiz results populated on the profile page and a shelf that contains 2 products ", () => {
    cy.get("div.main-buttons")
      .find("button")
      .contains("See Skin Profile")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/profile")
      .get("div.skin-results")
      .contains("Skin Type: normal")
      .get("div.skin-results")
      .contains("Skin Concern: brightening")
      .get("div.shelf")
      .find("div.single-product-details")
      .should("have.length", 2);
  });
  it("Should navigate to the shelf page and update a product in the routine from the catalog ", () => {
    cy.get("h1.logo-title")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/")
      .get("div.main-buttons")
      .find("button")
      .contains("Check Your Skincare Shelf")
      .click()
      .url()
      .should("eq", "https://kbeautybuddy.vercel.app/shelf")
      .get("div.catalog")
      .find("div")
      .first()
      .click()
      .get("button")
      .click()
      .get("div.shelf")
      .contains("Round Lab");
  });
});
