import {
  deleteTestResult,
  getTestResults,
  updateTestResultVisibility,
} from "../api/json";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import StMain from "../styles/globalStyle/StMain";
import TestResultItem from "./TestResultItem";
import StUl from "../styles/globalStyle/StUl";

const TestResultList = () => {
  const queryClient = useQueryClient();
  const { data: testResults, isPending } = useQuery({
    queryKey: ["testResult"],
    queryFn: async () => {
      const data = await getTestResults();
      return data;
    },
  });

  const { mutate: visibilityMutation } = useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      alert("공개 설정이 변경되었습니다.");
      queryClient.invalidateQueries(["testResult"]);
    },
  });

  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      alert("데이터가 삭제되었습니다.");
      queryClient.invalidateQueries(["testResult"]);
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
        const { id, userId, nickname, avatar, mbtiResult, visibility } = result;
        return (
          <TestResultItem
            key={id}
            jsonId={id}
            cardId={userId}
            nickname={nickname}
            avatar={avatar}
            mbtiResult={mbtiResult}
            visibility={visibility}
            visibilityMutation={visibilityMutation}
            deleteMutation={deleteMutation}
          />
        );
      })}
    </StUl>
  );
};
export default TestResultList;
