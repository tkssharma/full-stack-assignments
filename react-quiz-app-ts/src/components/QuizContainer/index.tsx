import { useContext } from "react";
import QuizContext from "../../context/quizscore.context";
import ScoreCard from "./ScoreCard";
import QuizCard from "./QuizCard";

interface IProps {
  quizess: {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }[];
  setEndQuiz: (isOver: boolean) => void;
  currentQuizInd: number;
  setCurrentQuizInd: (prev: any) => void;
}
export default function QuizContainer({
  currentQuizInd,
  setCurrentQuizInd,
  setEndQuiz,
  quizess,
}: IProps) {
  const { totalScore, showNotf } = useContext(QuizContext);

  const changeQuiz = () => {
    if (currentQuizInd < 9) {
      setCurrentQuizInd((prev: number) => prev + 1);
    } else if (currentQuizInd === 9) {
      // show sccore
      setEndQuiz(true);
    } else {
      return;
    }
  };
  return (
    <div>
      <ScoreCard
        currentQuiz={currentQuizInd}
        totalScore={totalScore}
        showNotf={showNotf}
      />
      <QuizCard
        key={Math.random()}
        {...quizess[currentQuizInd]}
        changeQuiz={changeQuiz}
        currentQuiz={currentQuizInd}
      />
    </div>
  );
}
