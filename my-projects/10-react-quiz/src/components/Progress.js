import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { questionIndex, points, answer, numQuestions, maxPossiblePoints } =
    useQuiz();

  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={questionIndex + Number(answer !== null)}
      />
      <p>
        Question <strong>{questionIndex + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
