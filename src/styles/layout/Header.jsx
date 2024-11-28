import StLink from "../globalStyle/StLink";

const Header = ({ isLogin }) => {
  if (!isLogin) {
    return (
      <header className="flex flex-row items-center justify-between fixed bg-white w-[100%] top-0 z-20">
        <StLink to="/">홈</StLink>
        <StLink to="/login">로그인</StLink>
      </header>
    );
  }

  if (isLogin) {
    return (
      <header className="flex flex-row items-center justify-between fixed bg-white w-[100%] top-0 z-20">
        <StLink to="/">홈</StLink>
        <div className="flex gap-2">
          <StLink to="/profile">프로필 보기</StLink>
          <StLink to="/test">테스트</StLink>
          <StLink to="/result">결과 보기</StLink>
        </div>
      </header>
    );
  }
};
export default Header;
