import { useState } from "react";
import Question from "../Question/Question";

const Quiz = ({ questions, onComplete }) => {
  const [currQuestionId, setQuestionId] = useState(questions[0].id);
  const [resultObject, setResultObject] = useState({});

  const currQuestion = questions.find(({ id }) => currQuestionId === id);

  return (
    <Question
      text={currQuestion.text}
      answers={currQuestion.answers}
      nextQuestionId={currQuestion.nextQuestionId}
      onAnswer={({ nextQuestionId, value }) => {
        let newResultObject = resultObject;
        if (currQuestion.key) {
          newResultObject = { ...resultObject };
          newResultObject[currQuestion.key] = value;
          setResultObject(newResultObject);
        }
        if (nextQuestionId === "done") {
          onComplete(newResultObject);
        } else {
          setQuestionId(nextQuestionId);
        }
      }}
      blurb={currQuestion.blurb}
    />
  );
};

export default Quiz;
