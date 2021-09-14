interface IProps {
  totalScore: number;
  currentQuiz: number;
  showNotf: boolean;
}
export default function ScoreCard({
  totalScore,
  currentQuiz,
  showNotf,
}: IProps) {
  return (
    <div className="score-card relative flex flex-col items-end text-2xl">
      <div className="my-2">
        Score: <span className="ml-4">{totalScore}</span>{" "}
      </div>
      <div className="my-2">
        Questions Left: <span className="ml-4"> {10 - (currentQuiz + 1)}</span>
      </div>
      <div className="absolute bottom-0 text-green-500">
        {showNotf && <div> +5 </div>}
      </div>
      <br />
    </div>
  );
}
