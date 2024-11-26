import { useState } from "react";
import { getUserProfile, updateProfile } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import StMain from "../styles/globalStyle/StMain";
import Container from "../styles/globalStyle/Container";

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
      <Container>
        <p className="text-2xl">프로필 수정</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center">
            <span>{userProfile?.nickname}님 어서오세요.</span>
            {userProfile.avatar ? (
              <img
                src={userProfile.avatar}
                alt="유저 프로필 이미지입니다."
                className="h-[150px]"
              />
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
              className="p-3"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              프로필 업데이트
            </button>
          </div>
        </form>
      </Container>
    </StMain>
  );
};

export default Profile;
