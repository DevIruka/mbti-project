import { mbtiDescriptions } from "../utils/mbtiCalculator";
import { getUserProfile } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { StBlueButton, StRedButton } from "../styles/globalStyle/Stbutton";
import defaultImg from "/guest.png";
import useTestResultBtn from "../hooks/useTestResultBtn";

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
  const { data: userProfile, isPending } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = await getUserProfile(token);
      return data;
    },
  });

  const description = mbtiDescriptions[mbtiResult];
  const { deleteBtnHandler, visibilityBtnHandler } = useTestResultBtn(
    jsonId,
    visibility,
    deleteMutation,
    visibilityMutation
  );

  if (isPending) {
    <h2>로딩 중입니다. 조금만 기다려주세요.</h2>;
  }

  if (visibility === true || userProfile?.id === cardId) {
    return (
      <li className="flex flex-col items-center shadow-lg m-10 bg-white rounded min-h-[200px] w-[500px]">
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
        <p className="m-5 text-sm">{description}</p>
      </li>
    );
  }
};
export default TestResultItem;
