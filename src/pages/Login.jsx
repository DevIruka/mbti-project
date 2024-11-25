import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>로그인</h1>
      <LoginForm />
      <div>
        <p>
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </main>
  );
};
export default Login;
