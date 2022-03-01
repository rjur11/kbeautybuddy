import { useState } from "react";
import Question from "../Question/Question";

const sampleQuestions = [
  {
    id: "coolQuestion",
    text: "Is this a cool question?",
    answers: [
      {
        text: "Yes",
        nextQuestionId: "uncoolQuestion",
      },
      { text: "No", nextQuestionId: "coolestQuestion" },
    ],
  },
  {
    id: "uncoolQuestion",
    text: "Is this an uncool question?",
    answers: [
      {
        text: "Yes",
        nextQuestionId: "done",
      },
      { text: "No", nextQuestionId: "done" },
    ],
  },
  {
    id: "coolestQuestion",
    text: "Is this the coolest question?",
    answers: [
      {
        text: "Yes",
        nextQuestionId: "done",
      },
      { text: "No", nextQuestionId: "done" },
    ],
  },
];

const Quiz = ({ questions, onComplete }) => {
  const [currQuestionId, setQuestionId] = useState(sampleQuestions[0].id);
  const [quizAnswers, setQuizAnswers] = useState([]);

  const currQuestion = sampleQuestions.find(({ id }) => currQuestionId === id);

  return (
    <Question
      text={currQuestion.text}
      answers={currQuestion.answers}
      onAnswer={(answerText, nextQuestionId) => {
        const newQuizAnswers = [...quizAnswers, answerText];
        setQuizAnswers(newQuizAnswers);
        if (nextQuestionId === "done") {
          onComplete(newQuizAnswers);
        } else {
          setQuestionId(nextQuestionId);
        }
      }}
    />
  );
};

export default Quiz;
