import { useState } from "react";
import Question from "../Question/Question";

const Quiz = ({ questions, onComplete }) => {
  const [currQuestionId, setQuestionId] = useState(questions[0].id);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [resultObject, setResultObject] = useState({});

  const currQuestion = questions.find(({ id }) => currQuestionId === id);

  return (
    <Question
      text={currQuestion.text}
      answers={currQuestion.answers}
      nextQuestionId={currQuestion.nextQuestionId}
      onAnswer={({ text, nextQuestionId, value }) => {
        const newQuizAnswers = [...quizAnswers, text];
        setQuizAnswers(newQuizAnswers);
        let newResultObject = resultObject;
        if (currQuestion.key) {
          newResultObject = { ...resultObject };
          newResultObject[currQuestion.key] = value;
          setResultObject(newResultObject);
        }
        if (nextQuestionId === "done") {
          onComplete(newQuizAnswers, newResultObject);
        } else {
          setQuestionId(nextQuestionId);
        }
      }}
    />
  );
};

export default Quiz;
