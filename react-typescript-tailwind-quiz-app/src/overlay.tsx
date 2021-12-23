import { useContext } from "react";
import QuizContext from "./context/quiz-score.context";

export default function Overlay({ resartQuiz }: { resartQuiz: () => void }) {
  const { totalScore } = useContext(QuizContext);
  return (
    <div className="fixed  w-screen h-screen z-40 bg-darkOverlay text-gray-100   flex justify-center items-center text-xl px-4 md:text-3xl">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-2 gap-4 md:gap-16">
          <div> Your Score :</div>
          <div>{totalScore}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-16">
          <div> Correct Ans:</div>
          <div> {totalScore / 5} </div>
        </div>

        <button
          onClick={resartQuiz}
          className="w-full bg-green-200 py-4 rounded-xl text-gray-900"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
