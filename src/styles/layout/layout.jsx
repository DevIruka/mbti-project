import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ isLogin }) => {
  return (
    <>
      <Header isLogin={isLogin} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
