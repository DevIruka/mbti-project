import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getUserProfile } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StBlueButton, StRedButton } from "../styles/globalStyle/Stbutton";
import { deleteTestResult, updateTestResultVisibility } from "../api/json";
import defaultImg from "/guest.png";

const TestResultItem = ({
  jsonId,
  cardId,
  nickname,
  avatar,
  mbtiResult,
  visibility,
  deleteMutation,
  visibilityMutation,
}) => {
  const token = localStorage.getItem("accessToken");

  const { data: userProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = await getUserProfile(token);
      return data;
    },
  });

  const description = mbtiDescriptions[mbtiResult];

  const visibilityBtnHandler = async () => {
    const response = await visibilityMutation({ jsonId, visibility });
  };

  const deleteBtnHandler = async () => {
    const response = await deleteMutation(jsonId);
  };

  return (
    <li className="flex flex-col items-center shadow-lg m-10 bg-white rounded min-h-[300px] w-[500px]">
      <span>{nickname}</span>
      <img
        src={avatar || defaultImg}
        className="h-[50px]"
        alt="유저 프로파일 이미지입니다."
      />
      {userProfile?.id === cardId && (
        <div className="flex flex-row gap-5 p-3">
          {visibility ? (
            <StBlueButton onClick={visibilityBtnHandler}>
              비공개로 전환
            </StBlueButton>
          ) : (
            <StBlueButton onClick={visibilityBtnHandler}>
              공개로 전환
            </StBlueButton>
          )}
          <StRedButton onClick={deleteBtnHandler}>Delete</StRedButton>
        </div>
      )}
      <span>{mbtiResult}</span>
      <p className="text-sm">{description}</p>
    </li>
  );
};
export default TestResultItem;
