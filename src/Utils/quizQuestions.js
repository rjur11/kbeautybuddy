const quizQuestions = [
  {
    id: "skinType",
    text: "What Skintype do you have?",
    nextQuestionId: "skinSensitivity",
    answers: [
      {
        text: "Normal",
        value: "normal",
      },
      { text: "Oily", value: "oily" },
      { text: "Dry", value: "dry" },
      { text: "Combo", value: "combo" },
      {
        text: "I don't know.",
        nextQuestionId: "skinTypeUnknown",
        value: "idk",
      },
    ],
    key: "skinType",
  },
  {
    id: "skinTypeUnknown",
    text: "Which of these sounds closest to your skin?",
    nextQuestionId: "skinSensitivity",
    answers: [
      {
        text: "Well-balanced, no particular skin concerns.",
        value: "normal",
      },
      {
        text: "Shiny, or greasy. Blackheads and enlarged pores, breakout-prone.",
        value: "oily",
      },
      {
        text: "Dull or tight feeling, often flakey skin. Skin may peel or crack easily, as well.",
        value: "dry",
      },
      {
        text: "Skin seems like a combo of both- can be oily or greasy in some places, and dry in flakey in others.",
        value: "combo",
      },
    ],
    key: "skinType",
  },
  {
    id: "skinSensitivity",
    text: "Do you have sensitive skin?",
    nextQuestionId: "skinConcerns",
    answers: [
      {
        text: "Yes",
        value: true,
      },
      {
        text: "No",
        value: false,
      },
    ],
    key: "skinSensitivity",
    blurb: `
      <p>*Sensitive skin is more prone to reactions such as redness and itching. 
         Most people who have sensitive skin notice occasional or frequent itching, redness, or burning when testing new products.
      </p>
    `,
  },
  {
    id: "skinConcerns",
    text: "What is your biggest skin concern?",
    nextQuestionId: "steps",
    answers: [
      {
        text: "Pore Care",
        value: "pore care",
      },
      {
        text: "Soothing",
        value: "soothing",
      },
      {
        text: "Skin barrier care",
        value: "skin barrier care",
      },
      {
        text: "Acne Care",
        value: "acne care",
      },
      {
        text: "Brightening",
        value: "brightening",
      },
    ],
    key: "skinConcerns",
  },
  {
    id: "steps",
    text: "How long would you like your routine to be?",
    nextQuestionId: "done",
    answers: [
      {
        text: "2 steps. Cleanser and cream.",
        value: ["cleanser", "cream"],
      },
      {
        text: "3 steps. Cleanser, toner, and cream.",
        value: ["cleanser", "toner", "cream"],
      },
      {
        text: "5 steps. Cleanser, toner, serum, cream, and SPF.",
        value: ["cleanser", "toner", "serum", "cream", "spf"],
        nextQuestionId: "spf",
      },
    ],
    key: "steps",
  },
  {
    id: "spf",
    text: "What type of sunscreen do you prefer?",
    nextQuestionId: "done",
    answers: [
      {
        text: "Physical",
        value: "physical",
      },
      {
        text: "Chemical",
        value: "chemical",
      },
    ],
    key: "spf",
    blurb: `
      <p>Physical sunscreen's active ingredients form a reflective barrier on the skin.</p>
      <p>Chemical sunscreen's active ingredients absorb the sun's rays as releases that energy through heat into the skin.</p>
    `,
  },
];

export default quizQuestions;
