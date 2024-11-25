import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import Test from "../pages/Test";
import Results from "../pages/Results";
import Layout from "../styles/layout/layout";
import { useSelector } from "react-redux";

const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  console.log(isLogin);
  return isLogin ? <Navigate to="/" /> : element;
};

const PrivateRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  return isLogin ? element : <Navigate to="/login" />;
};

const Router = () => {
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout isLogin={isLogin} />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route
            path="/signup"
            element={<PublicRoute element={<Signup />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Profile />} />}
          />
          <Route path="/test" element={<PrivateRoute element={<Test />} />} />
          <Route
            path="/result"
            element={<PrivateRoute element={<Results />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
