import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, questionIndex } = useQuiz();
  const question = questions[questionIndex];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
