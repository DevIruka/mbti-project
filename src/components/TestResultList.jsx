import { getTestResults } from "../api/json";
import { useQuery } from "@tanstack/react-query";
import StMain from "../styles/globalStyle/StMain";
import TestResultItem from "./TestResultItem";
import StUl from "../styles/globalStyle/StUl";
import { useSelector } from "react-redux";

const TestResultList = () => {
  const data = useSelector((state) => state.auth.userId);
  console.log(data)
  const { data: testResults, isPending } = useQuery({
    queryKey: ["testResult"],
    queryFn: async () => {
      const data = await getTestResults();
      return data;
    },
  });
  if (isPending) {
    return (
      <StMain>
        <h2>로딩 중입니다.</h2>
      </StMain>
    );
  }
  return (
    <StUl>
      {testResults.map((result) => {
        const { id, nickname, avatar, mbtiResult } = result;
        return (
          <TestResultItem
            key={id}
            nickname={nickname}
            avatar={avatar}
            mbtiResult={mbtiResult}
          />
        );
      })}
    </StUl>
  );
};
export default TestResultList;
