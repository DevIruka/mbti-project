import axios from "axios";
import { authApi } from "./auth";

const jsonApi = axios.create({
  baseURL: "http://localhost:5000",
});

jsonApi.interceptors.request.use(
  async (config) => {
    const { data } = await authApi.get("/user");
    if (data?.success) return config;
    return Promise.reject(new Error("사용자 정보 조회에 실패 했습니다."));
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getTestResults = async () => {
  const response = await jsonApi.get("/testResults");
  return response.data;
};

export const createTestResult = async (resultData) => {
  const response = await jsonApi.post("/testResults", resultData);
  return response.data;
};

export const deleteTestResult = async (id) => {};

export const updateTestResultVisibility = async (id, visibility) => {};