export interface Answer {
  text: string;
  type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Result {
  animal: string;
  description: string;
  match: string;
}

export interface MbtiData {
  questions: Question[];
  results: { [key: string]: Result };
}

export type Scores = {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
};
