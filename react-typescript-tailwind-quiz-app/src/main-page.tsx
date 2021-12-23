import { useState, useEffect, useContext } from 'react';
import QuizContainer from './components/quiz-container';
import Overlay from './overlay';
import QuizContext from './context/quiz-score.context';

const apiUrl = 'https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple';
export interface Iquiz {
  category: string;
  correct_answer: string;
  incorrect_answers: string []
  question: string;
  type: string;
}

export default function MainPage() {
  const [quizess, setQuizess] = useState<Iquiz []>([]);
  const [isLoaded, setIsLoaded]= useState<boolean>(false);
  const [endQuiz, setEndQuiz] = useState<boolean>(false);
  const [currentQuizInd, setCurrentQuizInd] = useState<number>(0);
  const { resetScore } = useContext(QuizContext)

   const fetchQuiz = async () => {
    resetScore();
    setIsLoaded(false);
    setEndQuiz(false);
    const response = await fetch(apiUrl);
    const res = await response.json();
    setQuizess(res.results);
    setIsLoaded(true);
    setCurrentQuizInd(0)
  }
  useEffect(() => {
   fetchQuiz()
  },[])
  return (
    <>
       {endQuiz && <Overlay resartQuiz={fetchQuiz} />}
       <div className='container mx-auto md:px-16 px-4'>
        {
          isLoaded ? (
             <div>
               <QuizContainer 
                 quizess={quizess}
                 setCurrentQuizInd={setCurrentQuizInd}
                 currentQuizInd={currentQuizInd}
                 setEndQuiz={setEndQuiz}
               />
             </div>
          ) : (
            <span>Loading ...</span>
          )
        }
       </div>
     
    </>
    
  )
}