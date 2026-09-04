import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProblemCard from "../components/ProblemCard";
import { getProblems } from "../services/problemService";
import type { Problem } from "../types/problem";
import SearchBar from "../components/SearchBar";

function ProblemsPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await getProblems();
        setProblems(data);
      } catch {
        setError("Unable to load problems.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);
  
  const filteredProblems = problems.filter((problem) =>
    problem.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading problems...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="problems-page">
      <h1>Problems</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
       />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="problems-list">
        {filteredProblems.map((problem) => (
          <ProblemCard
            key={problem._id}
            problem={problem}
            onClick={() => navigate(`/problems/${problem._id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProblemsPage;