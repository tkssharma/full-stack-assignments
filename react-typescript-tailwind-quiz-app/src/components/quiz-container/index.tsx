import ScoreCard from './score-card';
import QuizCard from './quiz-card';
import {useContext} from 'react';
import { Iquiz } from '../../main-page';
import QuizContext from '../../context/quiz-score.context';


interface IProps {
  quizess: Iquiz [],
  setEndQuiz: (isOver: boolean) => void;
  currentQuizInd: number;
  setCurrentQuizInd: (prev: any)=> void;
}

export default function QuizContainer ({
  quizess,
  setEndQuiz,
  currentQuizInd,
  setCurrentQuizInd
}: IProps) {
  const {totalScore} = useContext(QuizContext);
  const changeQuiz = () => {
    if(currentQuizInd < 9) {
      setCurrentQuizInd((n: number) => n + 1)
    } else if(currentQuizInd === 9) {
      setEndQuiz(true)
    } else {
      return ;
    }
  }

  return (
    <>
    <ScoreCard 
      currentQuiz={currentQuizInd}
      totalScore={totalScore}
    />
    <QuizCard 
        key={Math.random()}
        quiz={quizess[currentQuizInd]}
        changeQuiz={changeQuiz}
        currentQuiz={currentQuizInd} />
    </>
  )
}