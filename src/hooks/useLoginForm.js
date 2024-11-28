import { login } from "../api/auth";
import { setLogin } from "../redux/slices/authSlice";

const useLoginForm = (dispatch, nav) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id").trim();
    const password = formData.get("password").trim();
    const userData = { id, password };
    try {
      const data = await login(userData);
      const { accessToken } = data;
      if (data.success) {
        alert("로그인 성공!");
        localStorage.setItem("accessToken", accessToken);
        dispatch(setLogin(id));
      }
    } catch (error) {
      console.log(error);
    }
    nav("/");
  };
  return { onSubmitHandler };
};
export default useLoginForm;
