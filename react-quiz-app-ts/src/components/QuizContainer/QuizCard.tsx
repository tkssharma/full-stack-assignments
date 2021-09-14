import { useContext } from "react";
import QuizContext from "../../context/quizscore.context";
import addToArr from "../../utils/addToArr";
interface IProps {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  changeQuiz: () => void;
  currentQuiz: number;
}

export default function QuizCar(quiz: IProps) {
  const { updateScore } = useContext(QuizContext);
  const handleClick = (evt: any) => {
    quiz.changeQuiz();
    updateScore(evt.target.textContent === quiz.correct_answer);
    //remove and proced to next one
  };
  return (
    <div
      className={`card w-full bg-yellow-100  rounded-md  shadow-lg my-16 p-6`}
    >
      <p
        className="md:text-2xl"
        dangerouslySetInnerHTML={{
          __html: `Q.${quiz.currentQuiz + 1} ${quiz.question}`,
        }}
      ></p>
      <div className="options grid grid-cols-2 gap-8 mt-4">
        {addToArr(quiz.incorrect_answers, quiz.correct_answer).map((opt, i) => (
          <button
            key={i}
            className="py-3 px-4 text-sm bg-gray-800 text-gray-100 rounded-lg hover:bg-gray-600 hover:translate-y-24"
            dangerouslySetInnerHTML={{ __html: opt }}
            onClick={handleClick}
          ></button>
        ))}
      </div>
      <div className="flex justify-end my-3">
        <button
          onClick={() => quiz.changeQuiz()}
          className="w-40 py-2 bg-red-400 hover:bg-red-500 text-gray-200 rounded-md"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
