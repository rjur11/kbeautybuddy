const Question = ({ text, answers, onAnswer }) => {
  return (
    <>
      <h3>{text}</h3>
      <div>
        {answers.map((answer) => (
          <button onClick={() => onAnswer(answer.text, answer.nextQuestionId)}>
            {answer.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
