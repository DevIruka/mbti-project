import Form from "../components/SignupForm";
import Container from "../styles/globalStyle/Container";
import StMain from "../styles/globalStyle/StMain";

const Signup = () => {
  return (
    <StMain>
      <Container>
        <h2 className="text-[30px]">회원가입</h2>
        <div className="mt-10">
          <Form />
        </div>
      </Container>
    </StMain>
  );
};
export default Signup;
