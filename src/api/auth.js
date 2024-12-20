import axios from "axios";
import reduxStore from "../redux/store/store";
import { setLogout } from "../redux/slices/authSlice";

const BASE_URL = import.meta.env.VITE_MONEYFUL_URL;

export const authApi = axios.create({
  baseURL: BASE_URL,
});

authApi.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

authApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    alert(err.response.data.message);
    if (
      err.response.data.message ===
      "토큰이 만료되었습니다. 다시 로그인 해주세요."
    ) {
      // 로그아웃처리
      return reduxStore.dispatch(setLogout());
    }
    return Promise.reject(err);
  }
);

export const register = async (userData) => {
  const response = await authApi.post("/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await authApi.post("/login", userData);
  console.log(response);
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await authApi.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateProfile = async (data) => {
  const { formData, token } = data;
  const response = await authApi.patch("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  return response.data;
};
