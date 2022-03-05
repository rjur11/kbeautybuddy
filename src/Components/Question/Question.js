import "./Question.css";
import PropTypes from "prop-types";

const Question = ({ text, answers, nextQuestionId, onAnswer, blurb }) => {
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
      {!blurb || (
        <div className="blurb" dangerouslySetInnerHTML={{ __html: blurb }} />
      )}
    </>
  );
};

export default Question;

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  nextQuestionId: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
  blurb: PropTypes.string.isRequired,
};
