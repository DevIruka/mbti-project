import { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/json";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const TestPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  const { data: userProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = getUserProfile(token);
      return data;
    },
  });

  const [result, setResult] = useState(null);

  const handleTestSubmit = async (answers) => {
    const { nickname, avatar } = userProfile;
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    const mbtiUserData = { nickname, avatar, mbtiResult };
    const response = await createTestResult(mbtiUserData);
    console.log(response);
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
            <h1 className="text-3xl font-bold text-primary-color mb-6">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {mbtiDescriptions[result] ||
                "해당 성격 유형에 대한 설명이 없습니다."}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
