import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, questionIndex, numQuestions } = useQuiz();

  if (answer === null) return;

  if (questionIndex < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (questionIndex === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
