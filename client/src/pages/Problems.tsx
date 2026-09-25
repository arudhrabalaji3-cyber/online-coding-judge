import { useEffect, useState } from "react";
import api from "../../api";

type Problem = {
    _id: string;
    title: string;
    difficulty: string;
};
function Problems() {
    const [problems, setProblems] = useState<Problem[]>([]);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await api.get("/problems");
                setProblems(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProblems();
    }, []);

    return (
        <div>
            <h1>Problems</h1>

            {problems.map((problem) => (
                <div key={problem._id}>
                    <h2>{problem.title}</h2>
                    <p>{problem.difficulty}</p>
                </div>
            ))}
        </div>
    );
}

export default Problems;