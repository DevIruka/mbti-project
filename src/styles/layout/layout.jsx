import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = ({ isLogin }) => {
  return (
    <>
      <Header isLogin={isLogin} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
