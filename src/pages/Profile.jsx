import { useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import StMain from "../styles/globalStyle/StMain";

const Profile = () => {
  const token = localStorage.getItem("accessToken");
  const { data: userProfile, isPending } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = getUserProfile(token);
      return data;
    },
  });

  const [nickname, setNickname] = useState(userProfile?.nickname);
  const [imgFile, setImgFile] = useState("");

  if (isPending) return <h2>로딩중...</h2>;

  console.log(userProfile);

  const textHandler = (e) => {
    setNickname(e.target.value);
  };

  const fileHandler = (e) => {
    setImgFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", imgFile);
    formData.append("nickname", nickname);
    updateProfile(formData, token);
  };

  return (
    <StMain>
      <h1>프로필 수정</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          <span>{userProfile?.nickname}</span>
          {userProfile.avatar ? (
            <img src={userProfile.avatar} alt="유저 프로필 이미지입니다."
            className="h-[150px]" />
          ) : (
            <img
              src="/guest.png"
              alt="유저 프로필 이미지입니다."
              className="h-[100px]"
            />
          )}
          <input
            name="nickname"
            className="border border-gray-300 rounded px-2 py-1 w-[300px] m-2"
            onChange={textHandler}
          />
        </div>
        <div className="flex flex-col">
          <input
            type="file"
            accept="image/*"
            onChange={fileHandler}
            name="imgFile"
          />
          <button type="submit">프로필 업데이트</button>
        </div>
      </form>
    </StMain>
  );
};

export default Profile;
