import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const loginData = useSelector((state) => state.isLogin.isLogin);
  if (!loginData) {
    return (
      <>
        <main className="flex flex-col items-center ">
          <h1>무료 성격 테스트</h1>
          <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
          <Link to="/login">로그인하기</Link>
        </main>
      </>
    );
  }
  if (loginData) {
    return (
      <>
        <main className="flex flex-col items-center ">
          <h1>무료 성격 테스트</h1>
          <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
          <Link to="/test">테스트하기</Link>
        </main>
      </>
    );
  }
};
export default Home;
