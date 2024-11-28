import { useNavigate } from "react-router-dom";
import FormWrapper from "../styles/formStyle/FormWrapper";
import StForm from "../styles/formStyle/StForm";
import { StInput } from "../styles/formStyle/StInput";
import { StBlueButton } from "../styles/globalStyle/Stbutton";
import useSignupForm from "../hooks/useSignupForm";
import { useRef, useState } from "react";
import validateField from "../utils/validateField";

const Signupform = () => {
  const nav = useNavigate();
  const { onSubmitHandler } = useSignupForm(nav);

  const [formErrors, setFormErrors] = useState({});
  const idRef = useRef();
  const passwordRef = useRef();
  const nicknameRef = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const errors = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, ...errors }));
  };

  return (
    <>
      <FormWrapper>
        <StForm onSubmit={onSubmitHandler}>
          <StInput tag={"아이디"} onChange={onChangeHandler} ref={idRef} />
          {formErrors.id && <p style={{ color: "red" }}>{formErrors.id}</p>}
          <StInput
            tag={"비밀번호"}
            onChange={onChangeHandler}
            ref={passwordRef}
          />
          {formErrors.password && (
            <p style={{ color: "red" }}>{formErrors.password}</p>
          )}
          <StInput
            tag={"닉네임"}
            onChange={onChangeHandler}
            ref={nicknameRef}
          />
          {formErrors.nickname && (
            <p style={{ color: "red" }}>{formErrors.nickname}</p>
          )}
          <StBlueButton>회원가입</StBlueButton>
        </StForm>
      </FormWrapper>
    </>
  );
};
export default Signupform;
