import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProblemById } from "../services/problemService";
import type { Problem } from "../types/problem";

function ProblemDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const [problem, setProblem] = useState<Problem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchProblem = async () => {
      try {
        const data = await getProblemById(id);
        setProblem(data);
      } catch {
        setError("Unable to load problem.");
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  if (!id) {
    return <p>Invalid problem ID.</p>;
  }

  if (loading) {
    return <p>Loading problem...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!problem) {
    return <p>Problem not found.</p>;
  }

  return (
    <div className="problem-details">
      <div className="problem-details-header">
        <h1>{problem.title}</h1>

        <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>
          {problem.difficulty}
        </span>
      </div>

      <section>
        <h2>Description</h2>
        <p>{problem.description}</p>
      </section>

      <section>
        <h2>Input Format</h2>
        <p>{problem.inputFormat}</p>
      </section>

      <section>
        <h2>Output Format</h2>
        <p>{problem.outputFormat}</p>
      </section>

      <section>
        <h2>Constraints</h2>
        <p>{problem.constraints}</p>
      </section>

      <section>
        <h2>Examples</h2>

        {problem.testCases.map((testCase, index) => (
          <div className="example" key={index}>
            <h3>Example {index + 1}</h3>

            <div>
              <strong>Input</strong>
              <pre>{testCase.input}</pre>
            </div>

            <div>
              <strong>Output</strong>
              <pre>{testCase.expectedOutput}</pre>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProblemDetailsPage;