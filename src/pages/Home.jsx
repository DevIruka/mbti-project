import { Link } from "react-router-dom";
import StMain from "../styles/globalStyle/StMain";
import Container from "../styles/globalStyle/Container";

const Home = () => {
  return (
    <>
      <StMain>
        <Container>
          <h1 className="text-[80px]">무료 성격 테스트</h1>
          <div className="flex flex-col items-center pt-[60px]">
            <p className="text-2xl p-3">
              자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
            </p>
            <Link
              to={"/test"}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
            >
              내 성격 알아보러 가기
            </Link>
          </div>
        </Container>
      </StMain>
    </>
  );
};
export default Home;
