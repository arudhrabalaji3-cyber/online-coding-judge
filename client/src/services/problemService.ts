import type { Problem } from "../types/problem";

const API_URL = "http://localhost:5000/api/problems";

export const getProblems = async (): Promise<Problem[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch problems");
  }

  return response.json();
};

export const getProblemById = async (id: string): Promise<Problem> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch problem");
  }

  return response.json();
};