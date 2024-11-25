import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ loginData }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (!loginData) {
      alert("승인되지 않은 이하 생약");
      nav("/");
    }
  }, [loginData, nav]);

  return <div>Profile</div>;
};

export default Profile;
