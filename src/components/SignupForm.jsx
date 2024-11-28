import { useNavigate } from "react-router-dom";
import FormWrapper from "../styles/formStyle/FormWrapper";
import StForm from "../styles/formStyle/StForm";
import { StInput } from "../styles/formStyle/StInput";
import { StBlueButton } from "../styles/globalStyle/Stbutton";
import useSignupForm from "../hooks/useSignupForm";

const Signupform = () => {
  const nav = useNavigate();
  const { onSubmitHandler } = useSignupForm(nav);

  return (
    <>
      <FormWrapper>
        <StForm onSubmit={onSubmitHandler}>
          <StInput tag={"아이디"} />
          <StInput tag={"비밀번호"} />
          <StInput tag={"닉네임"} />
          <StBlueButton>회원가입</StBlueButton>
        </StForm>
      </FormWrapper>
    </>
  );
};
export default Signupform;
