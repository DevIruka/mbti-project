import { register } from "../api/auth";
import FormWrapper from "../styles/formStyle/FormWrapper";
import StForm from "../styles/formStyle/StForm";
import { StInput } from "../styles/formStyle/StInput";
import { StBlueButton } from "../styles/globalStyle/Stbutton";

const Signupform = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id").trim();
    const password = formData.get("password").trim();
    const nickname = formData.get("nickname").trim();
    const userData = { id, password, nickname };
    await register(userData);
  };
  return (
    <>
      <FormWrapper>
        <StForm onSubmit={onSubmitHandler}>
          <StInput tag={"아이디"} />
          <StInput tag={"비밀번호"} />
          <StInput tag={"닉네임"} />
          <StBlueButton>회원가입 기능</StBlueButton>
        </StForm>
      </FormWrapper>
    </>
  );
};
export default Signupform;
