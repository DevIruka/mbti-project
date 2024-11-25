import { useState } from "react";
import { getUserProfile } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const token = localStorage.getItem("accessToken");
  const { data: userProfile, isPending } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = getUserProfile(token);
      return data;
    },
  });
  const [nickName, setNickname] = useState(userProfile?.nickname);
  if (isPending) return <h2>로딩중...</h2>;
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>{nickName}</label>
            <input onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
