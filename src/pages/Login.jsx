import LoginForm from "../components/LoginForm";
import StMain from "../styles/globalStyle/StMain";
import Container from "../styles/globalStyle/Container";
import StLink from "../styles/globalStyle/StLink";

const Login = () => {
  return (
    <StMain>
      <Container>
        <h2 className="text-[30px]">로그인</h2>
        <div className="m-10">
          <LoginForm />
        </div>
        <div>
          <p>
            계정이 없으신가요? <StLink to="/signup">회원가입</StLink>
          </p>
        </div>
      </Container>
    </StMain>
  );
};
export default Login;
