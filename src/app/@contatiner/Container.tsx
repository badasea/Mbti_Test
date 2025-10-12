"use client";

import { useState } from "react";
import { mbtiData } from "../@constant";
import type { Scores } from "../@types";
import MbtiComponent from "../@components/Component";

export default function MbtiContainer() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Scores>({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const [finalMbti, setFinalMbti] = useState("");

  const totalQuestions = mbtiData.questions.length;

  const handleAnswer = (type: keyof Scores) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (step < totalQuestions) {
      setStep(step + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: Scores) => {
    let result = "";
    result += finalScores.E > finalScores.I ? "E" : "I";
    result += finalScores.S > finalScores.N ? "S" : "N";
    result += finalScores.T > finalScores.F ? "T" : "F";
    result += finalScores.J > finalScores.P ? "J" : "P";

    setFinalMbti(result);
    setStep(step + 1);
  };

  // 👇 1. 상태를 모두 초기화하는 함수를 만듭니다.
  const handleRestart = () => {
    setStep(0);
    setScores({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setFinalMbti("");
  };

  return (
    <MbtiComponent
      step={step}
      totalQuestions={totalQuestions}
      questionData={mbtiData.questions[step - 1]}
      resultData={mbtiData.results[finalMbti]}
      mbtiType={finalMbti}
      onStart={() => setStep(1)}
      onAnswer={handleAnswer as (type: string) => void}
      onRestart={handleRestart}
    />
  );
}
