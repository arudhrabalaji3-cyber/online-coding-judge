import type { Problem } from "../types/problem";

interface ProblemCardProps {
  problem: Problem;
  onClick: () => void;
}

function ProblemCard({ problem, onClick }: ProblemCardProps) {
  return (
    <div className="problem-card" onClick={onClick}>
      <div className="problem-card-header">
        <h3>{problem.title}</h3>
        <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
          {problem.difficulty}
        </span>
      </div>

      <p>{problem.description}</p>
    </div>
  );
}

export default ProblemCard;