import { createContext, useState } from "react";
interface AppContextInterface {
  totalScore: number;
  setTotalScore: () => void;
  updateScore: (isCorrect: boolean) => void;
  showNotf: boolean;
  resetScores: () => void;
}
const QuizContext = createContext<AppContextInterface | any>(null);
export const QuizProvider = (props: any) => {
  const [totalScore, setTotalScore] = useState(0);

  const updateScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setTotalScore((prv) => prv + 5);
    }
    // else {
    //   setTotalScore((prv) => prv - 5);
    // }
  };

  const resetScores = () => {
    setTotalScore((prev) => 0);
  };

  return (
    <QuizContext.Provider value={{ totalScore, updateScore, resetScores }}>
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
