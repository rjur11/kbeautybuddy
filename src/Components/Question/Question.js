import "./Question.css";

const Question = ({ text, answers, nextQuestionId, onAnswer }) => {
  return (
    <>
      <h3 className="quiz-title">{text}</h3>
      <div className="quiz-container">
        {answers.map((answer) => (
          <button
            className="question-button"
            onClick={() => {
              if (!answer.nextQuestionId) {
                answer = { ...answer, nextQuestionId };
              }
              onAnswer(answer);
            }}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
