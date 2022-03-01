const Question = ({ text, answers, nextQuestionId, onAnswer }) => {
  return (
    <>
      <h3>{text}</h3>
      <div>
        {answers.map((answer) => (
          <button
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
