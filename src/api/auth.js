import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData, nav) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (!response) {
    alert("로그인 중 오류가 생겼습니다.");
  }
  if (response) {
    nav("/");
  }
  return response.data;
};

export const getUserProfile = async (token) => {};

export const updateProfile = async (formData) => {};
