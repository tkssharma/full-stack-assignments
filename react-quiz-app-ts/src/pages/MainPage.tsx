import { useContext, useEffect, useState } from "react";
import QuizContainer from "../components/QuizContainer/index";
import Overlay from "../components/Overlay";
import QuizContext from "../context/quizscore.context";

//Interface for the quiz data
interface Iquiz {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
const ENDPOINT =
  "https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple";
export default function MainPage() {
  const [quizess, setQuizess] = useState<Iquiz[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [currentQuizInd, setCurrentQuizInd] = useState(0);
  const { resetScores } = useContext(QuizContext);
  //Fetching quiz from the api
  const fetchQuizes = async () => {
    setEndQuiz(false);
    resetScores();

    const res = await fetch(ENDPOINT);
    const resData = await res.json();
    setQuizess(resData.results);
    setCurrentQuizInd(0);
    setIsLoaded(true);
  };
  useEffect(() => {
    fetchQuizes();
  }, []);
  return (
    <>
      {endQuiz && <Overlay resartQuiz={fetchQuizes} />}
      <div className="container mx-auto md:px-16 px-4  ">
        {isLoaded ? (
          <QuizContainer
            quizess={quizess}
            setCurrentQuizInd={setCurrentQuizInd}
            currentQuizInd={currentQuizInd}
            setEndQuiz={setEndQuiz}
          />
        ) : (
          <div className="flex items-center justify-center h-screen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200px"
              height="200px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M10 50A40 40 0 0 0 90 50A40 43 0 0 1 10 50"
                fill="#bed3ff"
                stroke="none"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  dur="1s"
                  repeatCount="indefinite"
                  keyTimes="0;1"
                  values="0 50 51;360 50 51"
                ></animateTransform>
              </path>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
