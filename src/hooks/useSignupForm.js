import { useRef, useState } from "react";
import { register } from "../api/auth";
import validateField from "../utils/validateField";

const useSignupForm = (nav) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id").trim();
    const password = formData.get("password").trim();
    const nickname = formData.get("nickname").trim();
    const userData = { id, password, nickname };
    const dataArray = [id, password, nickname];
    let error = false;
    for (let i = 0; i < dataArray.length; i++) {
      let name = "";
      if (i === 0) {
        name = "id";
      }
      if (i === 1) {
        name = "password";
      }
      if (i === 2) {
        name = "nickname";
      }
      error = validateField(name, dataArray[i]);
    }

    if (error.id || error.password || error.nickname !== "") {
      alert("모든 필드가 제대로 작성되지 않았습니다.");
      console.log(error);
      return;
    }

    try {
      const data = await register(userData);
      if (data.success) {
        alert("회원가입에 성공하였습니다. 로그인 화면으로 이동합니다.");
      }
    } catch (error) {
      console.log(error);
      return;
    }
    nav("/login");
  };

  const [formErrors, setFormErrors] = useState({});
  const idRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const errors = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, ...errors }));
  };

  return { onSubmitHandler, onChangeHandler, formErrors, idRef, passwordRef, nicknameRef };
};
export default useSignupForm;
