import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <h1>무료 성격 테스트</h1>
        <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
        <Link to="/test">내 성격 알아보러 가기</Link>
      </main>
    </>
  );
};
export default Home;
