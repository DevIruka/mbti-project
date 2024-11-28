import { useNavigate } from "react-router-dom";
import FormWrapper from "../styles/formStyle/FormWrapper";
import StForm from "../styles/formStyle/StForm";
import { StInput } from "../styles/formStyle/StInput";
import { useDispatch } from "react-redux";
import { StBlueButton } from "../styles/globalStyle/Stbutton";
import useLoginForm from "../hooks/useLoginForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { onSubmitHandler } = useLoginForm(dispatch, nav);

  return (
    <>
      <FormWrapper>
        <StForm onSubmit={onSubmitHandler}>
          <StInput tag={"아이디"} />
          <StInput tag={"비밀번호"} />
          <StBlueButton>로그인</StBlueButton>
        </StForm>
      </FormWrapper>
    </>
  );
};
export default LoginForm;
