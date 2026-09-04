export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface Problem {
  _id: string;
  title: string;
  difficulty: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  testCases: TestCase[];
}