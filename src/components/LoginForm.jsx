import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import FormWrapper from "../styles/formStyle/FormWrapper";
import StForm from "../styles/formStyle/StForm";
import { StInput } from "../styles/formStyle/StInput";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../redux/slices/isLoginSlice";

const LoginForm = () => {
  const loginData = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id").trim();
    const password = formData.get("password").trim();
    const userData = { id, password };
    const result = await login(userData, nav);
    dispatch(setLogin());
  };
  return (
    <>
      <FormWrapper>
        <StForm onSubmit={onSubmitHandler}>
          <StInput tag={"아이디"} />
          <StInput tag={"비밀번호"} />
          <button>로그인 기능</button>
        </StForm>
      </FormWrapper>
    </>
  );
};
export default LoginForm;
