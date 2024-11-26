import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = ({ nickname, avatar, mbtiResult }) => {
  const description = mbtiDescriptions[mbtiResult];
  return (
    <li className="flex flex-col items-center shadow-lg p-4 bg-white rounded mh-[250px] w-[500px]">
      <span>{nickname}</span>
      <img
        src={avatar}
        className="h-[50px]"
        alt="유저 프로파일 이미지입니다."
      />
      <span>{mbtiResult}</span>
      <p className="text-sm">{description}</p>
    </li>
  );
};
export default TestResultItem;
