import { createContext, useState } from 'react';

interface AppContextInterface {
  totalScore: number;
  updateScore: (isCorrect: boolean) => void;
  resetScore: () => void;
}
const QuizContext = createContext<AppContextInterface>({
   totalScore: 0,
   updateScore: ((isCorrect: boolean)=> {}),
   resetScore: () => {}

});

export const QuizProvider = (props: any) => {
  const [totalScore, setTotalScore] = useState<number>(0);

  const updateScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setTotalScore((total: number) => total + 5);
    }
  }
  const resetScore = () => {
    setTotalScore(0);
  }

  return (
    <QuizContext.Provider value= {{ totalScore, updateScore, resetScore }}>
  { props.children }
  </QuizContext.Provider>
  )
}

export default QuizContext;