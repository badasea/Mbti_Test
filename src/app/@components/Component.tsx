"use client";

import styled from "@emotion/styled";
import { mbtiData } from "../@constant";
import type { Question, Result } from "../@types";

// --- 스타일 컴포넌트 정의 ---

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f3f4f6;
`;
const Card = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  text-align: center;
`;
const H1 = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const H3 = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;
const P = styled.p`
  margin-bottom: 2rem;
  color: #4b5563;
`;
const StartButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  font-weight: 700;
  border-radius: 0.5rem;
  color: white;
  background-color: #3b82f6;
  &:hover {
    background-color: #2563eb;
  }
`;
const QuestionButton = styled(StartButton)`
  font-size: 1.125rem;
  background-color: #22c55e;
  &:hover {
    background-color: #16a34a;
  }
`;
const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.625rem;
  margin-bottom: 1.5rem;
`;
const ProgressBarFill = styled.div<{ progress: number }>`
  background-color: #3b82f6;
  height: 100%;
  border-radius: 9999px;
  width: ${(props) => props.progress}%;
`;
const QuestionText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
const AnswerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ResultInfo = styled.div`
  margin-bottom: 1rem;
`;
const ResultAnimal = styled.p`
  font-size: 2.25rem;
  font-weight: 800;
  color: #3b82f6;
`;
const ResultType = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6b7280;
  margin-top: 0.25rem;
`;
const ResultDescription = styled.p`
  color: #374151;
  margin-bottom: 1.5rem;
`;
const MatchBox = styled.div`
  padding: 1rem;
  background-color: #eff6ff;
  border-radius: 0.5rem;
`;

// 👇 1. 다시하기 버튼을 위한 스타일을 추가합니다.
const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const RetryButton = styled(StartButton)`
  background-color: #6b7280;
  &:hover {
    background-color: #4b5563;
  }
`;

// --- 세부 화면 컴포넌트 ---

const StartScreen = ({ onStart }: { onStart: () => void }) => (
  <>
    <H1>바다의 MBTI 성격 테스트</H1>
    <H3>나는 어떤 동물일까?</H3>
    <P>간단한 테스트를 통해 당신의 성향과 어울리는 동물을 찾아보세요!</P>
    <StartButton onClick={onStart}>테스트 시작하기</StartButton>
  </>
);

const QuestionScreen = ({
  questionData,
  onAnswer,
  currentStep,
  totalSteps,
}: {
  questionData: Question;
  onAnswer: (type: string) => void;
  currentStep: number;
  totalSteps: number;
}) => (
  <>
    <ProgressBarContainer>
      <ProgressBarFill progress={(currentStep / totalSteps) * 100} />
    </ProgressBarContainer>
    <QuestionText>{questionData.question}</QuestionText>
    <AnswerGroup>
      {questionData.answers.map((answer, index) => (
        <QuestionButton key={index} onClick={() => onAnswer(answer.type)}>
          {answer.text}
        </QuestionButton>
      ))}
    </AnswerGroup>
  </>
);

// 👇 2. ResultScreen이 onRestart 함수를 prop으로 받도록 수정합니다.
const ResultScreen = ({
  result,
  mbtiType,
  onRestart,
}: {
  result: Result;
  mbtiType: string;
  onRestart: () => void;
}) => (
  <>
    <h1
      style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}
    >
      당신의 결과는...
    </h1>
    <ResultInfo>
      <ResultAnimal>{result.animal}</ResultAnimal>
      <ResultType>{mbtiType}</ResultType>
    </ResultInfo>
    <ResultDescription>{result.description}</ResultDescription>
    <MatchBox>
      <h3 style={{ fontWeight: 600, color: "#1d4ed8" }}>찰떡궁합 동물</h3>
      <p style={{ color: "#1e40af" }}>
        {mbtiData.results[result.match]?.animal || "환상의 짝꿍"}
      </p>
    </MatchBox>

    {/* 👇 3. 버튼과 onClick 이벤트를 연결합니다. */}
    <ButtonWrapper>
      <RetryButton onClick={onRestart}>다시 테스트하기</RetryButton>
    </ButtonWrapper>
  </>
);

// --- Props 타입 정의 및 메인 컴포넌트 ---

// 👇 4. MbtiComponentProps에 onRestart를 추가합니다.
interface MbtiComponentProps {
  step: number;
  totalQuestions: number;
  questionData?: Question;
  resultData?: Result;
  mbtiType?: string;
  onStart: () => void;
  onAnswer: (type: string) => void;
  onRestart: () => void;
}

export default function MbtiComponent({
  step,
  totalQuestions,
  questionData,
  resultData,
  mbtiType,
  onStart,
  onAnswer,
  onRestart,
}: MbtiComponentProps) {
  const renderScreen = () => {
    if (step === 0) {
      return <StartScreen onStart={onStart} />;
    }
    if (step > 0 && step <= totalQuestions && questionData) {
      return (
        <QuestionScreen
          questionData={questionData}
          onAnswer={onAnswer}
          currentStep={step}
          totalSteps={totalQuestions}
        />
      );
    }
    if (step > totalQuestions && resultData && mbtiType) {
      // 👇 6. onRestart를 ResultScreen으로 전달합니다.
      return (
        <ResultScreen
          result={resultData}
          mbtiType={mbtiType}
          onRestart={onRestart}
        />
      );
    }
    return null;
  };

  return (
    <MainWrapper>
      <Card>{renderScreen()}</Card>
    </MainWrapper>
  );
}
