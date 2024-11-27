import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/json";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import StMain from "../styles/globalStyle/StMain";
import Container from "../styles/globalStyle/Container";
import { StBlueButton } from "../styles/globalStyle/Stbutton";

const TestPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  const { data: userProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = await getUserProfile(token);
      return data;
    },
  });
  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const { id, nickname, avatar } = userProfile;
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    const mbtiUserData = {
      userId: id,
      nickname,
      avatar,
      mbtiResult,
      visibility: true,
    };
    const response = await createTestResult(mbtiUserData);
  };

  const handleNavigateToResults = () => {
    navigate("/result");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-8 max-w-lg w-full h-full overflow-y-auto">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <StMain>
              <Container>
                <h1 className="text-3xl font-bold text-primary-color mb-6">
                  테스트 결과: {result}
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  {mbtiDescriptions[result] ||
                    "해당 성격 유형에 대한 설명이 없습니다."}
                </p>
                <StBlueButton onClick={handleNavigateToResults}>
                  결과 페이지로 이동하기
                </StBlueButton>
              </Container>
            </StMain>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
