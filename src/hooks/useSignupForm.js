import { register } from "../api/auth";

const useSignupForm = (nav) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id").trim();
    const password = formData.get("password").trim();
    const nickname = formData.get("nickname").trim();
    const userData = { id, password, nickname };
    try {
      const data = await register(userData);
      if (data.success) {
        alert("회원가입에 성공하였습니다. 로그인 화면으로 이동합니다.");
      }
    } catch (error) {
      console.log(error);
    }
    nav("/login");
  };
  return { onSubmitHandler };
};
export default useSignupForm;
