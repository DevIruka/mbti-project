import { Link } from "react-router-dom";

const Header = ({ isLogin }) => {
  if (!isLogin) {
    return (
      <header className="flex flex-row justify-between">
        <Link to="/">홈화면으로 가기</Link>
        <Link to="/login">로그인</Link>
      </header>
    );
  }

  if (isLogin) {
    return (
      <header className="flex flex-row justify-between">
        <Link to="/">홈화면으로 가기</Link>
        <div className="flex gap-2">
          <Link to="/profile">프로필 보기</Link>
          <Link to="/test">테스트</Link>
          <Link to="/result">결과 보기</Link>
        </div>
      </header>
    );
  }
};
export default Header;
